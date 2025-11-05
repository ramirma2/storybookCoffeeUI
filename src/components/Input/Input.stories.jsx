import {Input} from "./Input";

const meta = {
    title : 'Input',
    component: Input,
    args:{
        label: 'Input Label',
        type: 'text',
        placeholder: 'Enter text here',
        required: false,
        disabled: false,
    },
    argTypes:{
        type:{
            control:'select',
            options: ['text', 'email', 'password', 'number'],
        },
    },
}

export default meta;

export const TextInput = {
    args:{
        type: 'text',
        placeholder: 'Sign up for rewards',
        label: 'Email',
    }
}