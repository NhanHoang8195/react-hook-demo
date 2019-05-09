import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const layout = {
    center: 'layout-app',
};
export const LayoutContext = React.createContext(layout.center);
export const ThemeContext = React.createContext(themes.dark);