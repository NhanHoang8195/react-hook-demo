import React from 'react';
import { HookComponent, ClassComponent } from '../demo';
import { LayoutContext, LanguageContext, layout, language } from '../../context';

export default function App() {
  return (
      <div>
          <LayoutContext.Provider value={layout.centerHook}>
              <LanguageContext.Provider value={language.vn}>
                  <HookComponent />
              </LanguageContext.Provider>
          </LayoutContext.Provider>
          <LayoutContext.Provider value={layout.centerClass}>
              <LanguageContext.Provider value={language.us}>
                  <ClassComponent />
              </LanguageContext.Provider>
          </LayoutContext.Provider>
      </div>
  );
};