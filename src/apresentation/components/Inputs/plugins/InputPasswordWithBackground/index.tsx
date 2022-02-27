import React, { useEffect, useState } from 'react';
import { InputWithIcon, InputWithIconParams } from '../InputWithIcon';

export function InputPasswordWithBackground(props: InputWithIconParams) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [nameIconPasswordInput, setNameIconPasswordInput] =
    useState('eye-off-outline');

  const changeSecureTextEntry = () => {
    setSecureTextEntry((oldValue) => !oldValue);
  };

  useEffect(() => {
    const nameIcon = secureTextEntry ? 'eye-off-outline' : 'eye';
    setNameIconPasswordInput(nameIcon);
  }, [secureTextEntry]);

  return (
    <InputWithIcon
      {...props}
      secureTextEntry={secureTextEntry}
      onPressIcon={changeSecureTextEntry}
      nameIcon={nameIconPasswordInput}
      useIcon
    />
  );
}
