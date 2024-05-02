import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './Routes/Routes';
import ProviderComposer from "./contexts/ProviderComposer";
import { DonationProvider } from "./contexts/DonationContext"; // Ensure you export a DonationProvider

function App() {
  const providers = [
    <DonationProvider /> 
  ];

  return (
    <Router>
      <ProviderComposer  contexts={providers}>
        <AppRoutes />
      </ProviderComposer>
    </Router>
  );
}

export default App;
