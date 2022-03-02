/* eslint-disable react/function-component-definition */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from 'react';
import InputWithIcon, {
  InputWithIconParams,
  InputWithIconForwardRefOutput,
} from '../InputWithIcon';

const InputPasswordWithIcon: ForwardRefRenderFunction<
  InputWithIconForwardRefOutput,
  InputWithIconParams
> = (props, ref) => {
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
      ref={ref}
      secureTextEntry={secureTextEntry}
      onPressIcon={changeSecureTextEntry}
      nameIcon={nameIconPasswordInput}
    />
  );
};

export default forwardRef(InputPasswordWithIcon);
