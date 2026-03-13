'use client';

import { useState, useTransition } from 'react';
import { ArrowRight } from 'lucide-react';

function Field({ field, value, onChange }) {
  const commonProps = {
    id: field.name,
    name: field.name,
    required: field.required,
    placeholder: field.placeholder,
    value,
    onChange: (event) => onChange(field.name, event.target.value),
  };

  return (
    <label className={`studio-field${field.span === 2 ? ' is-wide' : ''}`} htmlFor={field.name}>
      <span>{field.label}</span>
      {field.type === 'textarea' ? (
        <textarea {...commonProps} rows={field.rows ?? 6} />
      ) : field.type === 'select' ? (
        <select {...commonProps}>
          <option value="">{field.placeholder ?? 'Select an option'}</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input {...commonProps} type={field.type ?? 'text'} />
      )}
      {field.hint ? <small>{field.hint}</small> : null}
    </label>
  );
}

export default function StudioForm({
  endpoint,
  submitLabel,
  fields,
  successTitle,
  successMessage,
  defaultValues = {},
}) {
  const [values, setValues] = useState(defaultValues);
  const [feedback, setFeedback] = useState(null);
  const [isPending, startTransition] = useTransition();

  function setFieldValue(name, nextValue) {
    setValues((current) => ({
      ...current,
      [name]: nextValue,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback(null);

    startTransition(async () => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error ?? 'Unable to submit the form right now.');
        }

        setFeedback({
          type: 'success',
          title: successTitle,
          message: result.message ?? successMessage,
        });

        setValues(defaultValues);
      } catch (error) {
        setFeedback({
          type: 'error',
          title: 'Submission failed',
          message: error instanceof Error ? error.message : 'Please try again in a moment.',
        });
      }
    });
  }

  return (
    <form className="studio-form" onSubmit={handleSubmit}>
      <div className="studio-form-grid">
        {fields.map((field) => (
          <Field key={field.name} field={field} value={values[field.name] ?? ''} onChange={setFieldValue} />
        ))}
      </div>

      <div className="studio-form-actions">
        <button type="submit" className="studio-submit" disabled={isPending}>
          <span>{isPending ? 'Submitting...' : submitLabel}</span>
          <ArrowRight size={14} strokeWidth={1.8} />
        </button>
        <p className="studio-form-note">
          We store every submission locally and can forward it into n8n automatically once webhook URLs are configured.
        </p>
      </div>

      {feedback ? (
        <div className={`studio-feedback is-${feedback.type}`}>
          <strong>{feedback.title}</strong>
          <p>{feedback.message}</p>
        </div>
      ) : null}
    </form>
  );
}
