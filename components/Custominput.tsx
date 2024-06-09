import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authformSchema } from '@/lib/utils';

interface CustomInputProps {
  control: Control<z.infer<typeof authformSchema>>;
  name: FieldPath<z.infer<typeof authformSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ control, name, label, placeholder }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              placeholder={placeholder}
              {...field}
              type={name === 'password' ? 'password' : 'text'}
            />
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
