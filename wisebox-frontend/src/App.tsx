import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { wiseboxTheme } from './theme/theme';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Public/Home';
import { Szolgaltatasok } from './pages/Public/Szolgaltatasok';
import { Partnerek } from './pages/Public/Partnerek';
import { Referenciak } from './pages/Public/Referenciak';
import { Uzletfejlesztok } from './pages/Public/Uzletfejlesztok';
import { AjanloiProgram } from './pages/Public/AjanloiProgram';

function App() {
  return (
    <ThemeProvider theme={wiseboxTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
          <Route path="/partnerek" element={<Partnerek />} />
          <Route path="/referenciak" element={<Referenciak />} />
          <Route path="/uzletfejlesztok" element={<Uzletfejlesztok />} />
          <Route path="/ajanloi-program" element={<AjanloiProgram />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
