import { useMemo } from 'react';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const ParticleField = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        w: (((i * 7 + 13) % 20) / 10) + 1,
        top: ((i * 17 + 3) % 100),
        left: ((i * 31 + 7) % 100),
        color: i % 3 === 0 ? '#1A6FFF' : i % 3 === 1 ? '#7B2FFF' : '#ffffff',
        opacity: ((i * 11 + 5) % 40) / 100 + 0.1,
        dur: ((i * 13 + 2) % 30) / 10 + 2,
        delay: ((i * 19 + 1) % 30) / 10,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w + 'px',
            height: p.w + 'px',
            top: p.top + '%',
            left: p.left + '%',
            background: p.color,
            opacity: p.opacity,
            animation: `twinkle ${p.dur}s ease-in-out infinite`,
            animationDelay: p.delay + 's',
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

const QuoteCard = ({
  name,
  quote,
  subtext,
  gradientFrom,
  gradientTo,
}: {
  name: string;
  quote: string;
  subtext?: string;
  gradientFrom: string;
  gradientTo: string;
}) => (
  <div
    className="flex-1 relative rounded-2xl overflow-hidden"
    style={{
      background: `linear-gradient(145deg, ${gradientFrom}, ${gradientTo})`,
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
    }}
  >
    {/* Glow accent top-left */}
    <div
      className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-30 pointer-events-none"
      style={{ background: `radial-gradient(circle, ${gradientFrom.replace('0.06', '0.3')}, transparent 70%)` }}
    />

    <div className="relative z-10 p-10 flex flex-col h-full">
      {/* Name tag */}
      <p className="gradient-text-muted text-xs font-bold tracking-[0.3em] uppercase mb-6">{name}</p>

      {/* Giant opening quote */}
      <span
        className="gradient-text font-black leading-none select-none block mb-2"
        style={{ fontSize: '64px', lineHeight: '0.6', opacity: 0.25 }}
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p
        className="text-white font-medium leading-relaxed flex-1"
        style={{ fontSize: 'clamp(17px, 1.8vw, 24px)', lineHeight: 1.6 }}
      >
        {quote}
      </p>

      {/* Subtext */}
      {subtext && (
        <p className="text-white/25 text-sm mt-6 italic font-light border-t border-white/5 pt-4">
          {subtext}
        </p>
      )}
    </div>
  </div>
);

export const Slide02 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden p-14">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />
    <ParticleField />

    {/* Large ambient glows */}
    <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(circle, #1A6FFF 0%, transparent 70%)' }} />
    <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
      style={{ background: 'radial-gradient(circle, #C026D3 0%, transparent 70%)' }} />

    {/* TOP: headline */}
    <div className="pt-8 mb-10 z-10">
      <p
        className="gradient-text font-black"
        style={{ fontSize: 'clamp(44px, 6vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
      >
        Hoje estamos aqui.
      </p>
      <div className="glow-line h-px w-24 mt-5" />
    </div>

    {/* CENTER: two quote cards */}
    <div className="flex-1 flex items-center z-10">
      <div className="flex gap-6 w-full">
        <QuoteCard
          name="Diogo"
          quote="Se me dissessem ha um ano que ia estar num palco em Lisboa a falar para 100 pessoas sobre IA, eu dizia que estavam completamente malucos."
          gradientFrom="rgba(26,111,255,0.06)"
          gradientTo="rgba(123,47,255,0.03)"
        />

        <QuoteCard
          name="Marcelo"
          quote="Ha um ano vendia websites a 300&euro;."
          subtext="6 anos. 40+ projetos. Um teto invisivel."
          gradientFrom="rgba(123,47,255,0.03)"
          gradientTo="rgba(192,38,211,0.06)"
        />
      </div>
    </div>
  </div>
);
