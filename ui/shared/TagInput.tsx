import {
  Input,
  FormControl,
} from '@chakra-ui/react';
import React from 'react';
import type { ControllerRenderProps, FieldError, FieldValues, Path } from 'react-hook-form';

import InputPlaceholder from 'ui/shared/InputPlaceholder';

const TAG_MAX_LENGTH = 35;

type Props<TInputs extends FieldValues, TInputName extends Path<TInputs>> = {
  field: ControllerRenderProps<TInputs, TInputName>;
  error?: FieldError;
  bgColor?: string;
}

function TagInput<Inputs extends FieldValues, Name extends Path<Inputs>>({ field, error, bgColor }: Props<Inputs, Name>) {
  return (
    <FormControl variant="floating" id="tag" isRequired bgColor={ bgColor }>
      <Input
        { ...field }
        isInvalid={ Boolean(error) }
        maxLength={ TAG_MAX_LENGTH }
        bgColor={ bgColor }
      />
      <InputPlaceholder text="Private tag (max 35 characters)" error={ error }/>
    </FormControl>
  );
}

export default TagInput;
