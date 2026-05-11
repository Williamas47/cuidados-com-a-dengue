"use client";

import { useState } from "react";

const cards = [
  {
    icon: "🪣",
    title: "Caixas d'água e Barris",
    color: "from-blue-400 to-blue-600",
    dos: ["Tampe sempre a caixa d'água", "Use telas nos barris abertos"],
    donts: ["Nunca deixe destampado"],
  },
  {
    icon: "🌱",
    title: "Vasos e Plantas",
    color: "from-green-400 to-green-600",
    dos: ["Coloque areia nos pratinhos", "Troque a água dos vasos"],
    donts: ["Não deixe água acumulada"],
  },
  {
    icon: "🚗",
    title: "Pneus e Sucatas",
    color: "from-orange-400 to-orange-600",
    dos: ["Guarde pneus em local coberto", "Fure o fundo para escoar"],
    donts: ["Não deixe ao ar livre"],
  },
  {
    icon: "🗑️",
    title: "Lixo e Descartáveis",
    color: "from-purple-400 to-purple-600",
    dos: ["Jogue lixo nas lixeiras", "Recolha garrafas do quintal"],
    donts: ["Não acumule entulho"],
  },
  {
    icon: "🏊",
    title: "Piscinas e Fontes",
    color: "from-teal-400 to-teal-600",
    dos: ["Mantenha o cloro correto", "Tampe quando não usar"],
    donts: ["Não deixe sem tratamento"],
  },
  {
    icon: "👕",
    title: "Se Proteja Também!",
    color: "from-yellow-400 to-yellow-600",
    dos: ["Use repelente", "Vista roupas de manga longa", "Durma com mosquiteiro"],
    donts: [],
  },
];

const checklist = [
  "Verificar calhas e ralos",
  "Inspecionar vasos de plantas",
  "Verificar piscinas e fontes",
  "Recolher lixo do quintal",
  "Checar garrafas e baldes",
  "Checar pneus velhos",
];

export default function Prevencao() {
  const [checked, setChecked] = useState<boolean[]>(Array(checklist.length).fill(false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const done = checked.filter(Boolean).length;
  const pct = Math.round((done / checklist.length) * 100);

  return (
    <section id="prevencao" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl text-gray-800 mb-4">
            Como{" "}
            <span className="text-[#FF6B35]">Ser um Herói</span>{" "}
            Contra a Dengue!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Você pode ajudar a combater o mosquito! Veja o que fazer em casa e
            na escola.
          </p>
        </div>

        {/* Hero call banner */}
        <div className="bg-gradient-to-r from-[#4ECDC4] to-[#2ECC71] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 mb-14 shadow-xl text-white">
          <div className="text-7xl shrink-0">🦸</div>
          <div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-2xl md:text-3xl mb-2">
              Você pode ser um{" "}
              <span className="text-yellow-300">Super-Herói da Saúde!</span>
            </h3>
            <p className="text-white/90 leading-relaxed">
              A principal arma contra a dengue é eliminar os criadouros do
              mosquito. E isso todo mundo pode fazer — inclusive <strong>você</strong>!
            </p>
          </div>
        </div>

        {/* Prevention cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className={`bg-gradient-to-br ${c.color} p-5 flex items-center gap-3`}>
                <span className="text-4xl">{c.icon}</span>
                <h3 className="font-[family-name:var(--font-fredoka)] text-xl text-white">
                  {c.title}
                </h3>
              </div>
              <div className="p-5 space-y-2">
                {c.dos.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold shrink-0">✅</span>
                    {d}
                  </div>
                ))}
                {c.donts.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-500 font-bold shrink-0">❌</span>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Agente de saúde */}
        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 flex items-start gap-5 mb-16">
          <span className="text-5xl shrink-0">🏠</span>
          <div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-2xl text-blue-800 mb-2">
              Agente de Saúde: o Aliado!
            </h3>
            <p className="text-blue-700 leading-relaxed">
              O Agente de Saúde visita as casas para verificar criadouros e
              aplicar larvicida (um produto que mata as larvas do mosquito).
              Quando ele bater na sua porta, deixe-o entrar — ele é um{" "}
              <strong>herói disfarçado!</strong>
            </p>
          </div>
        </div>

        {/* Challenge checklist */}
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="font-[family-name:var(--font-fredoka)] text-2xl text-gray-800 mb-2 text-center">
            🎯 O Desafio do Super-Herói
          </h3>
          <p className="text-gray-600 text-sm text-center mb-6">
            Percorra cada cômodo e quintal com um adulto e marque o que você
            verificou!
          </p>

          <div className="space-y-3 mb-6">
            {checklist.map((item, i) => (
              <label
                key={item}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                  checked[i]
                    ? "bg-green-50 border border-green-200"
                    : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="w-5 h-5 accent-green-500 cursor-pointer"
                />
                <span
                  className={`text-sm font-semibold ${
                    checked[i] ? "text-green-700 line-through" : "text-gray-700"
                  }`}
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1 text-gray-500">
              <span>{done} de {checklist.length} tarefas</span>
              <span>{pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-[#4ECDC4] to-[#2ECC71] transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            {done === checklist.length && (
              <div className="mt-4 text-center text-green-600 font-bold text-lg animate-bounce-in">
                🏆 Parabéns, Super-Herói! Missão cumprida!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
