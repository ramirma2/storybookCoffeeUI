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
        mobileView: {
      table: { disable: true },
      control: false,
    },
    }

}

export default meta;

export const Default = {}

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