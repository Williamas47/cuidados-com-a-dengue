const events = [
  {
    year: "Séculos atrás",
    icon: "🌿",
    title: "Origem na África",
    desc: "O Aedes aegypti nasceu nas florestas africanas, onde vivia em buracos de árvores e se alimentava de animais silvestres. Era apenas um mosquito comum da floresta!",
    side: "left",
  },
  {
    year: "Séc. XVI – XVIII",
    icon: "⛵",
    title: "Viagem nos Navios",
    desc: "Com o tráfico negreiro e as grandes navegações, o mosquito viajou escondido dentro de barris d'água nos navios até as Américas e outros continentes. Que passageiro clandestino!",
    side: "right",
  },
  {
    year: "Século XX",
    icon: "🏙️",
    title: "Adaptação às Cidades",
    desc: "O mosquito descobriu que as cidades eram um paraíso! Garrafas, pneus, vasos — todo cantinho com água parada virou seu lar perfeito.",
    side: "left",
  },
  {
    year: "Década de 1950",
    icon: "🔬",
    title: "Quase Eliminado!",
    desc: "O Brasil quase venceu o duelo! Uma grande campanha com inseticida DDT erradicou o mosquito do país. Mas nas décadas seguintes ele voltou com força.",
    side: "right",
  },
  {
    year: "Hoje",
    icon: "📈",
    title: "Um Vilão Resistente",
    desc: "O Aedes aegypti está presente em mais de 100 países e transmite não só a dengue, mas também Zika e Chikungunya. Por isso precisamos combatê-lo juntos!",
    side: "left",
  },
];

export default function Historia() {
  return (
    <section id="historia" className="bg-[#f0f4ff] py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">🌍</div>
          <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl text-gray-800 mb-4">
            A História do{" "}
            <span className="text-[#FF6B35]">Mosquito Vilão</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            De onde veio esse mosquitinho chato? Veja a jornada do{" "}
            <em className="font-semibold">Aedes aegypti</em> pelo mundo!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B35] to-[#4ECDC4] hidden md:block" />

          <div className="flex flex-col gap-10">
            {events.map((ev, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  ev.side === "right" ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Card */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-6 w-full md:w-[44%] border-l-4 ${
                    i % 2 === 0 ? "border-[#FF6B35]" : "border-[#4ECDC4]"
                  } hover:-translate-y-1 transition-transform`}
                >
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                    {ev.year}
                  </div>
                  <h3 className="font-[family-name:var(--font-fredoka)] text-xl text-gray-800 mb-2">
                    {ev.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ev.desc}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#FF6B35] shadow-md items-center justify-center text-2xl z-10">
                  {ev.icon}
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[44%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-16 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-3xl p-6 flex items-start gap-4 text-white shadow-xl">
          <div className="text-4xl shrink-0">🤔</div>
          <div>
            <strong className="text-lg font-[family-name:var(--font-fredoka)]">
              Você sabia?
            </strong>
            <p className="mt-1 text-white/90">
              Só a <strong>fêmea</strong> do mosquito pica! O macho se alimenta
              apenas de néctar de flores. Ela precisa de sangue para produzir seus
              ovos. Que vilã mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
