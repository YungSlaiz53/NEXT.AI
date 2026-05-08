import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="h-20 border-b border-white/10 px-10 flex items-center justify-between bg-black/20 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center space-x-8">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Current Network</h2>
          <p className="text-sm font-medium flex items-center mt-0.5">
            <span className="w-2 h-2 rounded-full bg-brand mr-2 shadow-[0_0_8px_rgba(204,255,0,0.6)]"></span>
            Polygon Mainnet
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <ConnectButton 
          accountStatus="address" 
          chainStatus="icon" 
          showBalance={false}
        />
        
        <button className="p-2 text-white/40 relative hover:text-brand transition-colors group">
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full border-2 border-black shadow-[0_0_8px_rgba(204,255,0,0.4)]"></span>
          <Bell size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </header>
  );
}
