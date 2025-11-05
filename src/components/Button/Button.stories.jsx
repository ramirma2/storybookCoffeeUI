import {Button} from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    args:{
        variant: 'primary',
        size: 'medium',
        disabled: false
    },
    argTypes: {
        disabled:{ 
            control: 'boolean' }
        ,
        variant:{
            control: 'select',
            options:['primary','secondary','outline','destructive']
        },
        size: {
            control: 'radio',
            options: ['small','medium','large']
        }
    }
}

export default meta;

export const Primary = {
    args: {
        variant: 'primary',

        children: 'Order Now'
    }
};
export const Secondary = {
        args: {
        variant: 'secondary',
        children: 'See More'
    }
};
export const Outline = {
        args: {
        variant: 'outline',

        children: 'Learn More'
    }
};
export const Destructive = {
        args: {
        variant: 'destructive',

        children: 'Danger Zone'
    }
};