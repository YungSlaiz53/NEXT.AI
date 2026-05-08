import { motion } from 'motion/react';
import { CheckCircle2, Twitter, MessageCircle, Youtube, Calendar, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const tasks = [
  { id: '1', title: 'Follow on Twitter', description: 'Follow our official handle for news', reward: 20, type: 'twitter', icon: Twitter, color: 'text-blue-400' },
  { id: '2', title: 'Join Telegram', description: 'Stay updated with the community', reward: 15, type: 'telegram', icon: MessageCircle, color: 'text-sky-500' },
  { id: '3', title: 'Subscribe to YT', description: 'Watch our protocol tutorials', reward: 10, type: 'youtube', icon: Youtube, color: 'text-red-500' },
  { id: '4', title: 'Daily Check-in', description: 'Login consecutive days to earn more', reward: 5, type: 'login', icon: Calendar, color: 'text-brand' },
];

export default function Tasks() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic glow-text">Active Missions</h1>
        <p className="text-white/40 font-medium italic">Execute protocol-critical tasks to secure your reward multiplier.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tasks.map((task) => (
          <motion.div 
            key={task.id}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card p-8 rounded-[40px] relative overflow-hidden group border border-white/10"
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={cn("p-5 rounded-[24px] bg-white/5 border border-white/5 group-hover:border-white/10 transition-all", task.color)}>
                <task.icon size={32} strokeWidth={2.5} />
              </div>
              <div className="bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full shadow-brand">
                <span className="text-brand font-black italic uppercase text-xs tracking-widest">+{task.reward} PTS</span>
              </div>
            </div>

            <div className="space-y-2 mb-10 relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tight italic group-hover:text-brand transition-colors">{task.title}</h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">{task.description}</p>
            </div>

            <button className="w-full bg-white/5 hover:bg-brand text-white group-hover:text-black py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all border border-white/10 group-hover:border-brand shadow-none group-hover:shadow-brand relative z-10 flex items-center justify-center gap-2">
              Execute Task
              <ArrowUpRight size={16} strokeWidth={3} />
            </button>
            
            {/* Decal background */}
            <task.icon className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity rotate-12" size={240} />
            
            {/* Hover glow */}
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
