import { RefObject } from 'react';

export interface ExempleInputParams {
  value: string;
  blur: () => void;
  onError: boolean;
}

export type params = {
  inputsRefs: RefObject<ExempleInputParams>[];
};

export function validateInvalidForm({ inputsRefs }: params): boolean {
  inputsRefs.forEach((inputRef) => {
    inputRef.current?.blur();
  });
  return inputsRefs.some((inputRef) => inputRef.current?.onError);
}
