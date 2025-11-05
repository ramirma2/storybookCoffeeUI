import { colors, typography, spacing, radius } from './tokens.js';

export const applyTokensToCSS = () => {
    const root = document.documentElement;
    
    const setVars = (obj, prefix) => {
        Object.entries(obj).forEach(([key, val]) => {
            if (typeof val === 'object' && val !== null) {
                // Recursively handle nested objects
                setVars(val, `${prefix}-${key}`);
            } else {
                root.style.setProperty(`--${prefix}-${key}`, val);
            }
        });
    };

    setVars(colors, 'colors');
    setVars(typography, 'font');
    setVars(spacing, 'spacing');
    setVars(radius, 'radius');
};