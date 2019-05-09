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
    center: {
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
};
export const LayoutContext = React.createContext(layout.center);
export const ThemeContext = React.createContext(themes.dark);