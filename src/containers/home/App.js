import React from 'react';
import { HookComponent, ClassComponent } from '../demo';
import { LayoutContext, layout } from '../../context';

export default function App() {
  return (
      <LayoutContext.Provider value={layout.center}>
          <div>
              <HookComponent />
              <ClassComponent />
          </div>
      </LayoutContext.Provider>
  );
};