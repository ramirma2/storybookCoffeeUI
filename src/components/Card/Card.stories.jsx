import { Card } from "./Card";

const meta =  {
    title: 'Components/Card',
    component: Card,
    args:{
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
        title: 'Espresso',
        description: 'Medium Roast.',
        price: '20.99'
    }
}

export default meta;

export const Default = {
};

export const LongDescription = {
    args:{
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
        title: 'Espresso',
        description: 'Ethiopian medium roast with notes of chocolate and blueberry.'
    }
};
export const NoImage = {
    args:{
        image: '',
        title: 'Espresso',
        description: 'Medium Roast.'
    }
};