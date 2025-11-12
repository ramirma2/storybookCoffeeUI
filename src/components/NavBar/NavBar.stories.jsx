import { expect } from 'storybook/test';
import {NavBar} from "./NavBar";


const meta = {
    title: 'Components/NavBar',
    component: NavBar,
    parameters: {
    layout: 'fullscreen', 
    },
    args:{
        brandName : 'Kafe',
        mobileView: { isMobile: false, menuOpen: false },
    },
    argTypes:{
        brandName:{
            control: 'text',
            description: 'The coffee shop brand name displayed in the navbar'
        },
        mobileView: {
        table: { disable: true },
        control: false,
    },
    }

}

export default meta;

export const Default = {
    play: async( {canvas, userEvent}) => {
        await userEvent.hover(canvas.getByTestId('dropdown'));

        await expect(canvas.getByRole('list',{name:"Coffee menu options"})).toBeVisible()
    }
};

export const DesktopLongBrand = {
    args:{
        brandName: "Kafe and Cake",
    }
};



export const MobileView = {
    args:{
        mobileView:{ 
            isMobile: true,
            menuOpen:false
        }
    },
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  
    
}

export const MobileViewMenuOpen = {
  args: {
    mobileView: { 
      isMobile: true,
      menuOpen: true,
    },
  },

  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  }
  
}