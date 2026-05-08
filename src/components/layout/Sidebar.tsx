import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  CheckCircle, 
  Users, 
  Trophy, 
  User, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Surveys', path: '/surveys', icon: ClipboardList },
  { name: 'Social Tasks', path: '/tasks', icon: Zap },
  { name: 'Referrals', path: '/referrals', icon: Users },
  { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
  { name: 'Profile', path: '/profile', icon: User },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-white/10 flex flex-col z-20 bg-black/40 backdrop-blur-md h-screen sticky top-0">
      <div className="p-8">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-transform group-hover:rotate-6">
            <LayoutDashboard size={24} className="text-black" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter uppercase">NEXT.<span className="text-brand">AI</span></h1>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "p-4 rounded-xl transition-all flex items-center space-x-3 group",
                isActive 
                  ? "bg-white/5 border border-white/10 text-brand" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={18} className={cn(isActive ? "text-brand" : "text-white/40 group-hover:text-white")} />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="bg-brand/10 border border-brand/30 rounded-2xl p-4">
          <p className="text-[10px] uppercase tracking-widest text-brand font-black mb-1">Verification Status</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Verified Account</span>
            <div className="w-5 h-5 bg-brand rounded-full flex items-center justify-center text-black text-[10px] font-bold">✓</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
