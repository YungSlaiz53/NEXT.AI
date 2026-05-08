import { motion } from 'motion/react';
import { Trophy, Star, TrendingUp, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['Points', 'Referrals', 'Weekly'];

const players = [
  { rank: 1, name: 'OxCryptoGod', points: 15420, referrals: 154, avatar: 'GOD' },
  { rank: 2, name: 'NexGen_User', points: 12100, referrals: 98, avatar: 'NG' },
  { rank: 3, name: 'Satoshi_Fan', points: 9800, referrals: 72, avatar: 'SF' },
  { rank: 4, name: 'Web3Warrior', points: 8500, referrals: 45, avatar: 'WW' },
  { rank: 5, name: 'AlphaBuilder', points: 7200, referrals: 38, avatar: 'AB' },
];

export default function Leaderboard() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic glow-text">Rank Dominance</h1>
        <p className="text-white/40 font-medium italic">The elite performing nodes within the NEXT.AI ecosystem.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat, i) => (
          <button 
            key={cat} 
            className={cn(
              "px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
              i === 0 ? "bg-brand text-black border-brand shadow-brand" : "bg-white/5 text-white/40 border-white/10 hover:border-brand/40 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="glass-card rounded-[40px] overflow-hidden border border-white/10">
        <div className="p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="p-2.5 bg-yellow-400/10 rounded-lg">
                <Trophy className="text-yellow-400" size={20} />
             </div>
            <span className="font-black uppercase tracking-widest text-sm">Protocol Elite</span>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH NODE..." 
              className="bg-black/40 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand/40 w-64 transition-all"
            />
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {players.map((player) => (
            <motion.div 
              key={player.rank}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: player.rank * 0.05 }}
              className="p-8 flex items-center gap-8 hover:bg-white/5 transition-all group cursor-default"
            >
              <div className="w-10 font-mono font-black italic text-xl text-center">
                {player.rank === 1 ? <Trophy size={24} className="text-yellow-400 mx-auto drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" /> : 
                 player.rank === 2 ? <Trophy size={24} className="text-slate-400 mx-auto" /> :
                 player.rank === 3 ? <Trophy size={24} className="text-amber-600 mx-auto" /> :
                 <span className="text-white/10">#{player.rank}</span>}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center font-black italic text-white/40 group-hover:bg-brand group-hover:text-black group-hover:border-brand transition-all text-lg shadow-none group-hover:shadow-brand">
                {player.avatar}
              </div>

              <div className="flex-1">
                <h3 className="font-black uppercase tracking-tight italic text-xl flex items-center gap-2 group-hover:text-brand transition-colors">
                  {player.name}
                  {player.rank < 4 && <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />}
                </h3>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">{player.referrals} CONNECTIONS • VERIFIED NODE</p>
              </div>

              <div className="text-right space-y-1">
                <p className="font-black italic text-2xl tracking-tighter text-brand">{player.points.toLocaleString()} NXTP</p>
                <div className="flex items-center gap-1 justify-end text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                  <TrendingUp size={10} />
                  <span>+24.1% GAIN</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
