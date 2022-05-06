import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {default as Menu} from './menu';
import {default as About} from './about';
import {default as TestComponent} from './TestComponent';


const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<TestComponent/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/test" element={<TestComponent/>}/>
      </Routes>
    </BrowserRouter>
  </>
)
