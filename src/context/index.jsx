import React from 'react';

export const language = {
    vn: 'Vietnam',
    us: 'United States'
};

export const layout = {
    center: 'layout-app',
};
export const LayoutContext = React.createContext(layout.center);
export const LanguageContext = React.createContext(language.vn);