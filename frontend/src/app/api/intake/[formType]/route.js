import { NextResponse } from 'next/server';
import { processIntakeSubmission, validateFormType, validatePayload } from '@/lib/intake';

export async function POST(request, context) {
  const { formType } = await context.params;

  if (!validateFormType(formType)) {
    return NextResponse.json({ error: 'Unknown form type.' }, { status: 404 });
  }

  try {
    const payload = await request.json();
    const validationError = validatePayload(formType, payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const result = await processIntakeSubmission(formType, payload);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unable to process the submission.',
      },
      { status: 500 },
    );
  }
}
