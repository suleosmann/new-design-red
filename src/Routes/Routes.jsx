// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ChooseCausePage from '../pages/ChooseCausePage';
import DonationAmountPage from '../pages/DonationAmountPage';
import PaymentMethodPage from '../pages/PaymentMethodPage';
import DetailsPage from '../pages/DetailsPage';
import ConfirmationPage from '../pages/ConfirmationPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ChooseCausePage />} />
        <Route path="donate" element={<DonationAmountPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="confirm" element={<ConfirmationPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
