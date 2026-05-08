import { motion } from 'motion/react';
import { Users, Copy, Share2, Award } from 'lucide-react';

export default function Referrals() {
  const referralCode = "NEXT-XT42"; // Mocked for now

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic glow-text">Referral Protocol</h1>
        <p className="text-white/40 font-medium italic">Expand the ecosystem and secure perpetual yield bonuses.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-10 rounded-[40px] space-y-8 border border-white/10 relative overflow-hidden group">
            <div className="space-y-3 relative z-10">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">Your Protocol ID</p>
              <div className="flex items-center gap-4 p-4 bg-brand/5 border border-brand/20 rounded-2xl group-hover:border-brand/40 transition-colors shadow-brand/10">
                <span className="text-2xl font-black italic tracking-tighter text-brand uppercase">{referralCode}</span>
                <button className="ml-auto p-2 hover:bg-brand/10 rounded-lg transition-colors text-brand">
                  <Copy size={20} />
                </button>
              </div>
            </div>
            
            <button className="w-full bg-brand text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-brand transition-all active:scale-95 relative z-10">
              <Share2 size={20} strokeWidth={3} />
              Transmit Link
            </button>

            {/* Background pattern */}
            <Users className="absolute -bottom-10 -left-10 opacity-[0.03] rotate-12" size={200} />
          </div>

          <div className="glass-card p-8 rounded-[32px] space-y-6 border border-white/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Award size={14} className="text-brand" />
              Yield Distribution
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <span className="font-black italic text-sm">20</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tighter italic">Referrer Reward</p>
                  <p className="text-brand font-black text-xs tracking-widest">PER REGISTRATION</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <span className="font-black italic text-sm">10</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tighter italic">Invitee Bonus</p>
                  <p className="text-brand font-black text-xs tracking-widest">ON SIGNUP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 glass-card p-10 rounded-[40px] space-y-10 border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight italic flex items-center gap-3">
              <Users className="text-brand" size={28} />
              Recent Interceptions
            </h2>
            <div className="bg-white/5 border border-white/10 px-4 py-1 rounded-full">
              <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Total: 08 Users</span>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-[24px] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">
                    <span className="text-brand group-hover:text-black text-sm font-black italic uppercase">U{i}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-brand transition-colors italic uppercase tracking-tight">unit_0x429{i}</h4>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Verified • Joined 48h ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black italic tracking-tighter text-brand">+20 NXTP</p>
                  <p className="text-[10px] text-brand/40 uppercase font-black tracking-widest">Distributed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
