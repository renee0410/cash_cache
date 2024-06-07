import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from './Input';
import { Button } from '@/app/@atoms/index';

const meta = {
  title: '@Atom/Input',
  component: Input,
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Input',
    name: 'name',
    type: 'text',
    placeholder: 'Placeholder',
  },

  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export const Error: Story = {
  args: {
    label: 'Input',
    name: 'name',
    type: 'email',
    required: true,
    pattern: /^\S+@\S+$/i,
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      const onSubmit = () => {
        console.log('submit');
      };
      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Story />
            <div className='mt-4'>
              <Button text='Submit' type='submit' size='sm' />
            </div>
          </form>
        </FormProvider>
      );
    },
  ],
};
