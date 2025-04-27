import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Devices from './pages/Devices';
import Subscriptions from './pages/Subscriptions';
import Extras from './pages/Extras';
import Faq from './pages/Faq';
import DeviceDetail from './pages/DeviceDetail';
import SubscriptionDetail from './pages/SubscriptionDetail';
import MainLayout from './layout/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/devices/:deviceId" element={<DeviceDetail />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/subscriptions/:planId" element={<SubscriptionDetail />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </MainLayout>
      </ScrollToTop>
    </Router>
  );
}

export default App;