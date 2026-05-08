import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardList, Clock, Star, ArrowRight, CheckCircle2, Image as ImageIcon, Mic } from 'lucide-react';
import { cn } from '../lib/utils';

const mockSurveys = [
  { id: '1', title: 'Protocol Security Review', description: 'Help us improve our smart contract safety standards.', reward: 10, type: 'text', questions: 10 },
  { id: '2', title: 'UI/UX Visual Testing', description: 'Review our latest dashboard designs and image assets.', reward: 12, type: 'image', questions: 8 },
  { id: '3', title: 'Community Voice Survey', description: 'Provide voice feedback on our latest features.', reward: 15, type: 'voice', questions: 5 },
];

export default function Surveys() {
  const [activeSurvey, setActiveSurvey] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (activeSurvey) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setActiveSurvey(null)}
              className="text-white/40 hover:text-white flex items-center gap-2"
            >
              Cancel
            </button>
            <div className="flex gap-1">
              {[...Array(activeSurvey.questions)].map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1.5 w-6 rounded-full transition-colors",
                    i <= currentQuestion ? "bg-brand" : "bg-white/10"
                  )} 
                />
              ))}
            </div>
            <span className="text-sm font-mono text-brand">{currentQuestion + 1} / {activeSurvey.questions}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-card p-10 rounded-3xl space-y-8"
            >
              <h2 className="text-2xl font-bold">How often do you interact with Web3 protocols weekly?</h2>
              
              <div className="space-y-3">
                {['Daily', '2-3 times a week', 'Rarely', 'Never'].map((option, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      if (currentQuestion < activeSurvey.questions - 1) {
                        setCurrentQuestion(prev => prev + 1);
                      } else {
                        // Complete
                        setActiveSurvey(null);
                        setCurrentQuestion(0);
                        alert("Congratulations! You earned " + activeSurvey.reward + " points.");
                      }
                    }}
                    className="w-full p-5 bg-white/5 hover:bg-brand/10 border border-white/5 hover:border-brand/40 transition-all rounded-2xl text-left font-medium group flex justify-between items-center"
                  >
                    {option}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic glow-text">Active Research</h1>
        <p className="text-white/40 font-medium italic">Contribute your insights and accumulate protocol points.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSurveys.map((survey) => (
          <motion.div 
            key={survey.id}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-10 rounded-[32px] flex flex-col h-full border border-white/10 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-brand/10 text-brand rounded-2xl group-hover:bg-brand group-hover:text-black transition-all">
                {survey.type === 'text' && <ClipboardList size={24} />}
                {survey.type === 'image' && <ImageIcon size={24} />}
                {survey.type === 'voice' && <Mic size={24} />}
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-brand bg-brand/10 px-3 py-1 rounded-full uppercase tracking-widest border border-brand/20 shadow-brand">
                Featured
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tight italic group-hover:text-brand transition-colors">{survey.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium">{survey.description}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">Yield</p>
                <p className="font-black text-xl text-brand">+{survey.reward} PTS</p>
              </div>
              <button 
                onClick={() => setActiveSurvey(survey)}
                className="bg-brand text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-brand transition-all active:scale-95"
              >
                Launch
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
