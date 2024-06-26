import { FormControl, Input } from '@chakra-ui/react';
import React from 'react';
import type { Control, ControllerRenderProps, FormState } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { AddressVerificationFormFirstStepFields, RootFields } from '../types';

import { ADDRESS_REGEXP, ADDRESS_LENGTH } from 'lib/validations/address';
import InputPlaceholder from 'ui/shared/InputPlaceholder';
type Fields = RootFields & AddressVerificationFormFirstStepFields;

interface Props {
  formState: FormState<Fields>;
  control: Control<Fields>;
}

const AddressVerificationFieldAddress = ({ formState, control }: Props) => {
  const renderControl = React.useCallback(({ field }: {field: ControllerRenderProps<Fields, 'address'>}) => {
    const error = 'address' in formState.errors ? formState.errors.address : undefined;

    return (
      <FormControl variant="floating" id={ field.name } isRequired size="md" bgColor="dialog_bg" mt={ 8 }>
        <Input
          { ...field }
          required
          isInvalid={ Boolean(error) }
          maxLength={ ADDRESS_LENGTH }
          isDisabled={ formState.isSubmitting }
          autoComplete="off"
          bgColor="dialog_bg"
        />
        <InputPlaceholder text="Smart contract address (0x...)" error={ error }/>
      </FormControl>
    );
  }, [ formState.errors, formState.isSubmitting ]);

  return (
    <Controller
      name="address"
      control={ control }
      render={ renderControl }
      rules={{ required: true, pattern: ADDRESS_REGEXP }}
    />
  );
};

export default React.memo(AddressVerificationFieldAddress);
