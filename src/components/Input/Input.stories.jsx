import {Input} from "./Input";

const meta = {
    title : 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered', 
    },
    args:{
        label: 'Input Label',
        type: 'text',
        placeholder: 'Enter text here',
        required: false,
        disabled: false,
        error:false
    },
    argTypes:{
        type:{
            control:'select',
            options: ['text', 'email', 'password', 'number'],
        },
    },
}

export default meta;

export const Default = {
    args:{
        type: 'text',
        placeholder: 'Sign up for rewards',
        label: 'Email',
    }
}

export const ErrorState = {
    args:{
        type: 'text',
        placeholder: 'Sign up for rewards',
        label: 'Email',
        required: true,
        error: true,
    }
}