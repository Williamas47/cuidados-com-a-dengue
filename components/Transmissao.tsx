const flowSteps = [
  {
    bg: "#FF6B35",
    icon: "🧑",
    title: "Pessoa Doente",
    desc: "Alguém com dengue carrega o vírus no sangue",
  },
  {
    bg: "#4A3728",
    icon: "🦟",
    title: "Mosquito Pica",
    desc: "O Aedes aegypti pica e suga o sangue com vírus",
  },
  {
    bg: "#E74C3C",
    icon: "🦠",
    title: "Vírus no Mosquito",
    desc: "O vírus se multiplica dentro do mosquito (~10 dias)",
  },
  {
    bg: "#9B59B6",
    icon: "😰",
    title: "Pessoa Saudável",
    desc: "O mosquito pica outra pessoa e transmite o vírus",
  },
];

const symptoms = [
  { icon: "🌡️", label: "Febre Alta", desc: "Acima de 38°C, começa de repente" },
  { icon: "😖", label: "Dor de Cabeça", desc: "Forte, especialmente atrás dos olhos" },
  { icon: "🦴", label: "Dor no Corpo", desc: 'Chamada de "febre quebra-osso"' },
  { icon: "😴", label: "Cansaço", desc: "Fraqueza e moleza por vários dias" },
  { icon: "🤢", label: "Enjoo", desc: "Náuseas e falta de apetite" },
  { icon: "🔴", label: "Manchas na Pele", desc: "Vermelhidão aparece em alguns casos" },
];

const facts = [
  { number: "7mm", desc: "Tamanho do mosquito adulto — menor que um grão de feijão!" },
  { number: "400", desc: "Ovos que a fêmea pode colocar de uma vez só" },
  { number: "30 dias", desc: "Tempo de vida médio do mosquito adulto" },
  { number: "1 colher", desc: "De água parada já é suficiente para criar dezenas de larvas" },
];

export default function Transmissao() {
  return (
    <section
      id="transmissao"
      className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-20 md:py-28 text-white overflow-hidden"
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#f0f4ff" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">⚡</div>
          <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl mb-4">
            Como a{" "}
            <span className="text-[#FF6B35]">Dengue se Espalha?</span>
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Entenda o caminho da doença — é mais simples do que você imagina!
          </p>
        </div>

        {/* Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-12">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
              <div className="flex flex-col items-center text-center w-40">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg mb-3"
                  style={{ background: step.bg }}
                >
                  {step.icon}
                </div>
                <h4 className="font-[family-name:var(--font-fredoka)] text-lg leading-tight mb-1">
                  {step.title}
                </h4>
                <p className="text-white/65 text-xs leading-snug">{step.desc}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="text-3xl text-[#FF6B35] font-bold md:mb-6 rotate-90 md:rotate-0">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Not contagious note */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-5 flex items-start gap-4 mb-16 max-w-3xl mx-auto">
          <span className="text-3xl shrink-0">🚫</span>
          <div>
            <strong className="text-[#4ECDC4] font-[family-name:var(--font-fredoka)] text-lg">
              ATENÇÃO:
            </strong>{" "}
            <span className="text-white/90">
              A dengue <strong>NÃO se passa</strong> de pessoa para pessoa! Não
              dá para pegar dengue de um abraço, aperto de mão ou beijo. Só o
              mosquito é o culpado!
            </span>
          </div>
        </div>

        {/* Symptoms */}
        <div className="mb-16">
          <h3 className="font-[family-name:var(--font-fredoka)] text-3xl text-center mb-8">
            Sintomas da Dengue
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {symptoms.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/15 transition-colors"
              >
                <span className="text-4xl mb-3">{s.icon}</span>
                <h4 className="font-[family-name:var(--font-fredoka)] text-lg mb-1">{s.label}</h4>
                <p className="text-white/65 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Alert */}
          <div className="mt-6 bg-red-500/20 border border-red-400/30 rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto">
            <span className="text-2xl shrink-0">⚠️</span>
            <p className="text-white/90 text-sm leading-relaxed">
              <strong>Sinais de Alerta:</strong> Se você sentir dor forte na
              barriga, vomitar muito, tiver tontura ou manchas roxas na pele —{" "}
              <strong>vá ao médico imediatamente!</strong> Pode ser dengue grave.
            </p>
          </div>
        </div>

        {/* Fun facts */}
        <div>
          <h3 className="font-[family-name:var(--font-fredoka)] text-3xl text-center mb-8">
            Curiosidades do Mosquito
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facts.map((f) => (
              <div
                key={f.number}
                className="bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl p-5 text-center shadow-lg"
              >
                <div className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl text-white mb-2">
                  {f.number}
                </div>
                <p className="text-white/90 text-xs leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}
