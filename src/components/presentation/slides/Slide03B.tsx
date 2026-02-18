import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="gradient-text font-black" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
      {value}
    </p>
    <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase mt-1">{label}</p>
  </div>
);

export const Slide03B = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden p-14">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* TOP: Title */}
    <div className="pt-6 mb-6 z-10">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">A Jornada — Parte 2</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.03em' }}>
        A <span className="gradient-text">Viragem</span>
      </h1>
    </div>

    {/* CONTENT: Two columns */}
    <div className="flex-1 flex gap-10 z-10 min-h-0">

      {/* LEFT: Story progression */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
        {/* N8N */}
        <div className="glow-border-left pl-5 py-3">
          <p className="text-white font-bold mb-1" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
            N8N — Tudo Clicou
          </p>
          <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
            Os meses de "falhancos" encaixaram. Tinha a base tecnica, a capacidade de resolver problemas, a mentalidade. So faltava o veiculo certo.
          </p>
        </div>

        {/* Circle change */}
        <div className="glow-border-left pl-5 py-3">
          <p className="text-white font-bold mb-1" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
            Mudanca de Circulo
          </p>
          <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
            Encontrou o Andre. Foi a um evento. Fechou o primeiro cliente nesse evento. As oportunidades dependem das pessoas que te rodeiam.
          </p>
        </div>

        {/* Personal brand */}
        <div className="glow-border-left pl-5 py-3">
          <p className="text-white font-bold mb-1" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
            Marca Pessoal — O Multiplicador
          </p>
          <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
            Comecou a fazer videos. O primeiro foi horrivel. Mas ninguem gozou. E ficou viciado. Conheceu o Marcelo, abriu portas, atraiu leads qualificados.
          </p>
        </div>

        {/* Viral */}
        <div
          className="pl-5 py-4 rounded-lg"
          style={{
            borderLeft: '2px solid #C026D3',
            boxShadow: '-4px 0 20px rgba(192,38,211,0.4)',
            background: 'linear-gradient(90deg, rgba(192,38,211,0.06), transparent)',
          }}
        >
          <p className="text-white font-bold mb-1" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
            15 de Dezembro — Video Viral
          </p>
          <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
            O video das faturas explodiu. Centenas de leads. Mas nao conseguiu fechar nenhum sozinho.
          </p>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-between mt-2 px-6 py-4 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <StatBadge value="148K" label="Views" />
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <StatBadge value="117K" label="Alcance" />
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <StatBadge value="7.1K" label="Interacoes" />
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <StatBadge value="3K+" label="Seguidores" />
        </div>
      </div>

      {/* RIGHT: Photos stacked */}
      <div className="w-[38%] flex flex-col gap-3 justify-center">
        {/* First video / LinkedIn */}
        <div
          className="relative rounded-lg overflow-hidden flex-1"
          style={{
            border: '1px solid rgba(26,111,255,0.25)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
          }}
        >
          <img
            src="/fotohistoria/1video.png"
            alt="Primeiro video LinkedIn"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 px-3 py-2"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
            <p className="text-white/70 font-medium" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>
              Primeiro video — LinkedIn
            </p>
          </div>
        </div>

        {/* Viral video stats */}
        <div
          className="relative rounded-lg overflow-hidden flex-1"
          style={{
            border: '1px solid rgba(192,38,211,0.3)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.4), 0 0 20px rgba(192,38,211,0.08)',
          }}
        >
          <img
            src="/fotohistoria/videoviral.png"
            alt="Video viral — 148K views"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 px-3 py-2"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
            <p className="text-white/70 font-medium" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>
              Video viral — 148K views, DMs e leads
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom statement */}
    <div className="pt-4 z-10">
      <p className="text-white/80 font-bold italic" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
        "Sabia construir. Nao sabia vender."
      </p>
    </div>
  </div>
);
