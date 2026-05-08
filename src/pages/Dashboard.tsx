import { motion } from 'motion/react';
import { ClipboardList, CheckCircle2, Users, ArrowUpRight, Award, Zap, ShieldCheck, Twitter, MessageCircle, Youtube } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Points', value: '12,450', unit: 'NXTP', color: 'text-brand' },
          { label: 'Rank', value: '#142', unit: '+12 ↑', color: 'text-white' },
          { label: 'Daily Streak', value: '8 Days', unit: '🔥', color: 'text-white' },
          { label: 'Referrals', value: '24', unit: '+480 Pts', color: 'text-white' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-[32px] border border-white/10"
          >
            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-baseline space-x-2">
              <span className={cn("text-3xl font-black tracking-tighter", stat.color)}>{stat.value}</span>
              <span className="text-[10px] text-white/20 font-bold uppercase">{stat.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Action Area */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* Featured Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-8 relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#111] to-[#000] border border-white/10 p-10 flex flex-col justify-between min-h-[400px] group"
        >
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-brand text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.5)]">Featured</div>
          </div>
          
          <div className="max-w-md">
            <h3 className="text-4xl sm:text-5xl font-black leading-none mb-6 tracking-tighter uppercase italic">
              Future of <span className="text-brand">Cross-Chain</span> Governance
            </h3>
            <p className="text-white/40 leading-relaxed mb-8 text-sm font-medium">
              Provide your insights on Layer 2 governance models and earn rewards. Your data is encrypted and verified on-chain.
            </p>
            
            <div className="flex items-center space-x-12 mb-10">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-white/30 tracking-[0.2em] font-bold mb-1">Reward</span>
                <span className="text-xl font-black text-brand">+50 PTS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-white/30 tracking-[0.2em] font-bold mb-1">Questions</span>
                <span className="text-xl font-black">12 UNITS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-white/30 tracking-[0.2em] font-bold mb-1">Estimate</span>
                <span className="text-xl font-black">4 MIN</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-brand text-black font-black h-16 rounded-2xl flex items-center justify-center space-x-3 hover:scale-[0.99] transition-all shadow-[0_10px_40px_rgba(204,255,0,0.2)] hover:shadow-brand">
            <span>START RESEARCH</span>
            <ArrowUpRight size={20} strokeWidth={3} />
          </button>
          
          {/* Decorative background element */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-colors" />
        </motion.div>

        {/* Side Tasks */}
        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
          <div className="glass-card rounded-[32px] p-6 flex flex-col flex-1 border border-white/10">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
              <Zap size={14} className="text-brand" />
              Social Missions
            </h4>
            <div className="space-y-4">
              {[
                { title: 'Follow NEXT.AI', reward: 10, icon: Twitter, bColor: 'bg-blue-500/10', iColor: 'text-blue-400' },
                { title: 'Join Telegram', reward: 15, icon: MessageCircle, bColor: 'bg-emerald-500/10', iColor: 'text-emerald-400' },
                { title: 'Watch AMA Video', reward: 0, icon: Youtube, bColor: 'bg-red-500/10', iColor: 'text-red-400', locked: true },
              ].map((task, i) => (
                <div key={i} className={cn(
                  "group flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 transition-all cursor-pointer",
                  task.locked ? "opacity-40 grayscale" : "hover:border-brand/40"
                )}>
                  <div className="flex items-center space-x-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", task.bColor, task.iColor)}>
                      <task.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{task.title}</p>
                      <p className={cn("text-[10px] font-black uppercase", task.locked ? "text-white/20" : "text-brand")}>
                        {task.locked ? "LOCKED" : `+${task.reward} PTS`}
                      </p>
                    </div>
                  </div>
                  {!task.locked && <ArrowUpRight className="text-white/20 group-hover:text-brand transition-colors" size={16} />}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
              <div className="bg-brand/5 border border-dashed border-brand/20 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Multiplier</span>
                <span className="text-xs font-black text-brand">1.2X ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
