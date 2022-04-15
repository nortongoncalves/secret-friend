import { RefObject } from 'react';

export interface ExempleInputParams {
  value: string;
}

export type params = {
  inputsRefs: RefObject<ExempleInputParams>[];
};

export function validateSomeEmptyInputs({ inputsRefs }: params): boolean {
  const auxObject = inputsRefs.map((inputRef) => inputRef.current?.value);
  return auxObject.some((value) => value === '' || value === undefined);
}
