

export const colors = {
  // primary:{ 
  //     '50': '#f5f8f8',
  //     '100': '#ddeae8',
  //     '200': '#bad5d0',
  //     '300': '#8fb9b3',
  //     '400': '#5e8c87',
  //     '500': '#4e7e7a',
  //     '600': '#3c6562',
  //     '700': '#335250',
  //     '800': '#2c4341',
  //     '900': '#283938',
  //     '950': '#132020',
  // },
  // secondary:{
  //   '50': '#f9f6f1',
  //   '100': '#efe3d6',
  //   '200': '#ddc6aa',
  //   '300': '#cca47d',
  //   '400': '#c08b5f',
  //   '500': '#b97a56',
  //   '600': '#9f5a40',
  //   '700': '#854538',
  //   '800': '#6e3932',
  //   '900': '#5b312c',
  //   '950': '#331815',
  // },
  // success:{
  //   '50': '#f6f8f5',
  //   '100': '#ebefe9',
  //   '200': '#d7ded4',
  //   '300': '#a6b7a1',
  //   '400': '#8ca187',
  //   '500': '#6b8265',
  //   '600': '#566950'
  // },
  // light:{
  //   '50': '#faf6f2',
  //   '100': '#f5efe6',
  // },
  // dark:{
  //     'lightestdark': '#B2A792',
  //     'lightdark':'#7D6A58',
  //     'dark': '#4b3b2a',
  //     'darkest': '#302318'
  // },
  // danger:{
  //   '800': '#be0000',
  //   '900': '#8b0000',
  //   '950': '#560000',
  // }
  primary:{ 
    'juniper': { '50': '#f5f8f8', '100': '#ddeae8', '200': '#bad5d0', '300': '#8fb9b3', '400':'#4e7e7a', '500': '#3d6662' , '600': '#3c6562', '700': '#335250', '800': '#2c4341', '900': '#283938', '950': '#132020', } }, 
    secondary:{ 'antique_brass': { '50': '#f9f6f1', '100': '#efe3d6', '200': '#ddc6aa', '300': '#cca47d', '400': '#c08b5f', '500': '#b97a56', '600': '#9f5a40', '700': '#854538', '800': '#6e3932', '900': '#5b312c', '950': '#331815', }, }, 
    success:{ 'norway': { '50': '#f6f8f5', '100': '#ebefe9', '200': '#d7ded4', '300': '#a6b7a1', '400': '#8ca187', '500': '#6b8265', '600': '#566950' } }, 
    light:{ 'merino': { '50': '#faf6f2', '100': '#f5efe6', } }, 
    dark:{ 'mondo': { 'lightestdark': '#B2A792', 'lightdark':'#7D6A58', 'dark': '#4b3b2a', 'darkest': '#302318' }, }, 
    danger:{ 'red_berry': { '800': '#be0000', '900': '#8b0000', '950': '#560000', }, }

};

export const typography = {
  fontFamily: "'Playfair Display SC', serif",
  bodyFont: "'Inter', sans-serif",
  fontSizes: {
    small: "0.875rem",
    base: "1rem",
    large: "1.25rem",
    heading: "2rem",
  },
  fontColors:{
    primary: colors.dark.mondo.dark,
    secondary: colors.dark.mondo.lightdark,
    link:colors.primary.juniper['400']
  },
  weights:{
    light:200,
    normal: 400,
    bold: 700
  }
};

export const spacing = {
  xs: "0.25rem",  // 4px
  sm: "0.5rem",   // 8px
  md: "1rem",     // 16px
  lg: "1.5rem",   // 24px
  xl: "3rem",     // 48px
};

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
};