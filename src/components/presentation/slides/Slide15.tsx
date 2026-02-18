import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';

export const Slide15 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />

    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)' }} />
    </div>

    {/* TOP: massive statement */}
    <div className="px-16 pt-20 z-10">
      <p className="gradient-text font-black" style={{ fontSize: 'clamp(32px, 5vw, 68px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
        Mantem-te no jogo tempo suficiente.
      </p>
      <p className="text-white/50 mt-4 font-light" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>
        So perdes quando desistes.
      </p>
      <div className="glow-line h-px w-32 mt-6 opacity-50" />
    </div>

    {/* CENTER: Diogo & Marcelo quotes */}
    <div className="flex flex-1 relative px-16 z-10">
      {/* DIOGO side */}
      <div className="flex-1 flex items-center justify-center pr-12">
        <div className="max-w-xs">
          <p className="text-white/30 text-xs font-bold tracking-[0.25em] mb-4 uppercase">Diogo</p>
          <p className="text-white/80 font-semibold leading-relaxed" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>
            "10 meses de zero. Dois falhancos. Nunca parei."
          </p>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-px glow-line-vertical" style={{ opacity: 0.4 }} />

      {/* MARCELO side */}
      <div className="flex-1 flex items-center justify-center pl-12">
        <div className="max-w-xs">
          <p className="text-white/30 text-xs font-bold tracking-[0.25em] mb-4 uppercase">Marcelo</p>
          <p className="text-white/80 font-semibold leading-relaxed" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>
            "6 anos a 300&euro;. Uma transicao. Um socio. Um novo nivel."
          </p>
        </div>
      </div>
    </div>

    {/* BOTTOM: logo + social handles */}
    <div className="flex flex-col items-center gap-3 py-8 z-10">
      <div className="relative">
        <div className="absolute inset-0 blur-xl opacity-40"
          style={{ background: 'radial-gradient(circle, #1A6FFF 0%, transparent 70%)', transform: 'scale(2)' }} />
        <img
          src={flowziLogo}
          alt="Flowzi"
          className="relative h-8 object-contain"
          style={{ filter: 'invert(1)' }}
        />
      </div>

      <div className="flex items-center gap-6">
        {['@flowzi.pt', '@marcelosantos', '@diogocoutinho.ai'].map((handle) => (
          <span key={handle} className="gradient-text-muted font-medium" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
            {handle}
          </span>
        ))}
      </div>

      <p className="text-white/30 text-center" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
        Se querias uma razao para comecar — acabaste de ter duas.
      </p>
    </div>
  </div>
);
