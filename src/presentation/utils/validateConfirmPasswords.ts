import { RefObject } from 'react';

export interface ExempleInputParams {
  value: string;
  setError: (value: boolean) => void;
  setMessageError: (value: string) => void;
}

export type params = {
  passwordInputRef: RefObject<ExempleInputParams>;
  confirmPasswordInputRef: RefObject<ExempleInputParams>;
};

export function validateConfirmPasswords({
  confirmPasswordInputRef,
  passwordInputRef,
}: params) {
  const password = passwordInputRef.current?.value;
  const confirmPassword = confirmPasswordInputRef.current?.value;

  if (String(password) === String(confirmPassword)) {
    confirmPasswordInputRef.current?.setError(false);
    confirmPasswordInputRef.current?.setMessageError('');
    return;
  }

  confirmPasswordInputRef.current?.setError(true);
  confirmPasswordInputRef.current?.setMessageError(
    'As senhas estão diferentes'
  );
}
