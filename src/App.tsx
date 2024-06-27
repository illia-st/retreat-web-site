import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import NotFound from './NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
