import React from 'react';
import ReactDOM from 'react-dom/client';
import Initial from './pages/Initial';
import './firebase/config'
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Initial />
  </ThemeProvider>
)