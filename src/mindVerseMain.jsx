import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MindVerse from '@/pages/MindVerse';
import '@/styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MindVerse />
  </StrictMode>,
);
