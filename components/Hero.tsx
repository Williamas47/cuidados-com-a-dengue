import MosquitoSVG from "./MosquitoSVG";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FF6B35] via-[#ff8c5a] to-[#FFB347] flex items-center overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-10 w-64 h-64 bg-[#FF4500]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-white animate-fade-up">
          <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur">
            🎓 Saúde de um jeito divertido!
          </span>

          <h1 className="font-[family-name:var(--font-fredoka)] text-5xl md:text-6xl leading-tight mb-6">
            Quem é o{" "}
            <span className="text-[#FFD700] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Mosquito Vilão?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
            Descubra tudo sobre o <em className="font-bold">Aedes aegypti</em>, o
            mosquitinho que transmite a dengue — e aprenda como você pode ajudar
            a derrotá-lo!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#historia"
              className="bg-white text-[#FF6B35] font-bold px-8 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Começar a aventura! 🚀
            </a>
            <a
              href="#quiz"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-base hover:bg-white/10 transition-all"
            >
              Fazer o Quiz 🧠
            </a>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { icon: "🌍", label: "100+ países afetados" },
              { icon: "🦟", label: "Só a fêmea pica" },
              { icon: "💧", label: "1 colher de água já basta" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm font-semibold"
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center items-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-white/10 rounded-full" />
          </div>
          <MosquitoSVG size={340} />

          {/* Floating badges */}
          <div className="absolute top-4 right-4 md:right-0 bg-red-500 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg animate-bounce">
            ⚠️ Cuidado!
          </div>
          <div className="absolute bottom-10 left-0 md:-left-4 bg-[#2ECC71] text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            💡 Aprenda!
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0f4ff" />
        </svg>
      </div>
    </section>
  );
}
