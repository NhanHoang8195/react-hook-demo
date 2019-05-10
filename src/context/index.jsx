import React from 'react';

export const language = {
    vn: 'Vietnam',
    us: 'United States'
};

export const layout = {
    centerHook: 'layout-app hook-component',
    centerClass: 'layout-app class-component',
};
export const LayoutContext = React.createContext(layout.centerHook);
export const LanguageContext = React.createContext(language.vn);