/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Web3Provider } from './lib/web3';
import { Layout } from './components/layout/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import Dashboard from './pages/Dashboard';
import Surveys from './pages/Surveys';
import Tasks from './pages/Tasks';
import Referrals from './pages/Referrals';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

function AuthenticatedApp() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand/20 border-t-brand rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Web3Provider>
      <AuthProvider>
        <Router>
          <AuthenticatedApp />
        </Router>
      </AuthProvider>
    </Web3Provider>
  );
}

