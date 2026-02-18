import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const FailBadge = () => (
  <span
    className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase"
    style={{
      background: 'rgba(239,68,68,0.15)',
      color: 'rgba(239,68,68,0.8)',
      border: '1px solid rgba(239,68,68,0.2)',
    }}
  >
    Falhado
  </span>
);

const PhotoFrame = ({ src, className = '' }: { src: string; className?: string }) => (
  <div
    className={`rounded-lg overflow-hidden ${className}`}
    style={{
      border: '1px solid rgba(26,111,255,0.2)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    }}
  >
    <img src={src} alt="" className="w-full h-full object-cover" />
  </div>
);

export const Slide03 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden p-14">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* TOP: Title */}
    <div className="pt-6 mb-6 z-10">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">A Jornada — Parte 1</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.03em' }}>
        Os <span className="gradient-text">10 Meses</span> de Zero
      </h1>
    </div>

    {/* Story blocks row */}
    <div className="flex gap-4 mb-6 z-10">
      <div className="glow-border-left pl-5 py-3 flex-1">
        <p className="text-white font-bold mb-1" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>
          Erasmus — A Semente
        </p>
        <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
          Barcelona. Professor obcecado com IA:{' '}
          <span className="text-white/80 italic">"Aproveitem esta revolucao."</span>
        </p>
      </div>
      <div className="glow-border-left pl-5 py-3 flex-1">
        <p className="text-white font-bold mb-1" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>
          Janeiro — All-In
        </p>
        <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
          +8h/dia. Zero euros. Sem garantias. Uma decisao deliberada.
        </p>
      </div>
    </div>

    {/* Two failed projects side by side with photos */}
    <div className="flex-1 flex gap-6 z-10 min-h-0">
      {/* Project 1: Agente IA */}
      <div className="flex-1 flex flex-col gap-3 min-h-0">
        <div className="flex items-center gap-3">
          <p className="text-white font-bold" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            1a Tentativa — Agente IA
          </p>
          <FailBadge />
        </div>
        <p className="text-white/40 font-light" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
          2-3 meses. Ambicioso demais para executar sozinho.
        </p>
        <div className="flex gap-2 flex-1 min-h-0">
          <PhotoFrame src="/fotohistoria/1project.png" className="flex-1" />
          <PhotoFrame src="/fotohistoria/1project2.png" className="flex-1" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch glow-line-vertical" style={{ opacity: 0.3 }} />

      {/* Project 2: PicTuz */}
      <div className="flex-1 flex flex-col gap-3 min-h-0">
        <div className="flex items-center gap-3">
          <p className="text-white font-bold" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            2a Tentativa — PicTuz
          </p>
          <FailBadge />
        </div>
        <p className="text-white/40 font-light" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
          Verao inteiro. Site, loja, operacao. Nao resultou.
        </p>
        <div className="flex gap-2 flex-1 min-h-0">
          <PhotoFrame src="/fotohistoria/2project.png" className="flex-1" />
          <PhotoFrame src="/fotohistoria/2project2.png" className="flex-1" />
        </div>
      </div>
    </div>

    {/* Bottom quote */}
    <div className="pt-5 z-10 border-t border-white/10 mt-4">
      <p className="text-white/80 font-bold italic" style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}>
        "So perdes quando desistes."
      </p>
      <p className="text-white/30 text-xs mt-1">Cada projeto que falhou ensinou coisas que iam ser precisas mais a frente.</p>
    </div>
  </div>
);
