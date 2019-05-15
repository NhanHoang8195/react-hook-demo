import React from 'react';
import { HookComponent, ClassComponent } from '../demo';
import { LayoutContext, LanguageContext, layout, language } from '../../context';

export default function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
          <LayoutContext.Provider value={layout.centerClass}>
              <LanguageContext.Provider value={language.us}>
                  <div className='col-sm-6'>
                      <ClassComponent />
                  </div>
              </LanguageContext.Provider>
          </LayoutContext.Provider>
          <LayoutContext.Provider value={layout.centerHook}>
              <LanguageContext.Provider value={language.vn}>
                  <div className='col-sm-6'>
                    <HookComponent />
                  </div>
              </LanguageContext.Provider>
          </LayoutContext.Provider>
      </div>
    </div>
  );
};