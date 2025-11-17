import {Input} from "./Input";

const meta = {
    title : 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered', 
    },
    args:{
        label: 'Input Label',
        type: 'email',
        placeholder: 'Enter text here',
        required: false,
        disabled: false,
        error:''
    },
    argTypes:{
        type:{
            control:'select',
            options: ['text', 'email', 'password', 'number'],
        },
        error: {
        control: 'text',
        description: 'Error message to display'
    }
    },
}

export default meta;

export const Default = {
    args:{
        type: 'email',
        placeholder: 'Sign up for rewards',
        label: 'Email',
    }
}

export const ErrorRequired = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
    error: 'This field is required.'
  }
};

export const ErrorInvalidEmail = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address.'
  }
};
