import path from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

const formConfig = {
  enquiry: {
    envKey: 'N8N_ENQUIRY_WEBHOOK_URL',
    required: ['name', 'email', 'company'],
  },
  onboarding: {
    envKey: 'N8N_ONBOARDING_WEBHOOK_URL',
    required: ['name', 'email', 'company'],
  },
  support: {
    envKey: 'N8N_SUPPORT_WEBHOOK_URL',
    required: ['name', 'email', 'company'],
  },
};

function getStorageRoot() {
  return path.join(process.cwd(), '..', 'db', 'intake-submissions');
}

function cleanPayload(payload) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
  );
}

export function validateFormType(formType) {
  return formConfig[formType];
}

export function validatePayload(formType, payload) {
  const config = validateFormType(formType);
  if (!config) {
    return 'Unknown form type.';
  }

  for (const key of config.required) {
    if (!payload[key]) {
      return `Missing required field: ${key}.`;
    }
  }

  return null;
}

async function writeLocalCopy(formType, record) {
  const storageDir = path.join(getStorageRoot(), formType);
  await mkdir(storageDir, { recursive: true });

  const id = `${Date.now()}-${crypto.randomUUID()}.json`;
  const filepath = path.join(storageDir, id);
  await writeFile(filepath, JSON.stringify(record, null, 2), 'utf8');

  return { id, filepath };
}

async function forwardToWebhook(url, record) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded with ${response.status}`);
  }
}

export async function processIntakeSubmission(formType, payload) {
  const normalized = cleanPayload(payload);
  const record = {
    formType,
    receivedAt: new Date().toISOString(),
    source: 'website',
    payload: normalized,
  };

  const localCopy = await writeLocalCopy(formType, record);
  const webhookUrl = process.env[formConfig[formType].envKey]?.trim();

  if (!webhookUrl) {
    return {
      ok: true,
      destination: 'local',
      id: localCopy.id,
      message: 'Saved locally. Add your n8n webhook URL to forward submissions automatically.',
    };
  }

  try {
    await forwardToWebhook(webhookUrl, record);

    return {
      ok: true,
      destination: 'n8n+local',
      id: localCopy.id,
      message: 'Saved locally and forwarded to n8n.',
    };
  } catch (error) {
    return {
      ok: true,
      destination: 'local',
      id: localCopy.id,
      message: 'Saved locally, but n8n forwarding failed. Check your webhook URL and n8n status.',
      warning: error instanceof Error ? error.message : 'Unknown webhook error',
    };
  }
}
