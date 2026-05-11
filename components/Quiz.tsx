"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "Qual é o nome científico do mosquito que transmite a dengue?",
    options: ["Anopheles gambiae", "Aedes aegypti", "Culex pipiens", "Mansonia uniformis"],
    correct: 1,
    explanation: "O Aedes aegypti é o mosquito responsável pela transmissão da dengue, Zika e Chikungunya. Ele é identificado pelas listras brancas no corpo!",
  },
  {
    question: "Como a dengue é transmitida de uma pessoa para outra?",
    options: [
      "Pelo ar, quando a pessoa tosse ou espirra",
      "Por aperto de mão ou abraço",
      "Pela picada do mosquito Aedes aegypti",
      "Pelo contato com a urina do mosquito",
    ],
    correct: 2,
    explanation: "A dengue só se transmite pela picada da fêmea do Aedes aegypti. Não dá pegar dengue de outras pessoas diretamente!",
  },
  {
    question: "Qual parte do mosquito Aedes aegypti pica os humanos?",
    options: [
      "Só os machos",
      "Machos e fêmeas igualmente",
      "Só as fêmeas",
      "Nenhum deles pica humanos",
    ],
    correct: 2,
    explanation: "Só a fêmea do mosquito pica! Ela precisa de sangue para produzir seus ovos. O macho se alimenta apenas de néctar de flores.",
  },
  {
    question: "Quanto de água parada já é suficiente para o mosquito criar seus ovos?",
    options: [
      "Um balde cheio",
      "Uma piscina pequena",
      "Um copo d'água",
      "Uma colher de sopa",
    ],
    correct: 3,
    explanation: "Uma simples colher de sopa de água parada já é suficiente para a fêmea botar seus ovos. Por isso é tão importante eliminar qualquer acúmulo de água!",
  },
  {
    question: "Qual é o apelido popular da dengue por causa das fortes dores que causa?",
    options: [
      "Febre do camarão",
      "Febre quebra-osso",
      "Febre do sapo",
      "Febre da selva",
    ],
    correct: 1,
    explanation: "A dengue é conhecida como 'febre quebra-osso' porque as dores musculares e articulares são tão intensas que parece que os ossos vão quebrar!",
  },
  {
    question: "De onde veio o mosquito Aedes aegypti originalmente?",
    options: ["América do Sul", "Ásia", "África", "Europa"],
    correct: 2,
    explanation: "O Aedes aegypti tem origem nas florestas da África. Ele chegou às Américas pelos navios dos colonizadores e do tráfico negreiro.",
  },
  {
    question: "O que você deve fazer com os pratinhos de vasos de plantas para evitar a dengue?",
    options: [
      "Deixar sempre cheios de água",
      "Colocar areia ou pedras no lugar da água",
      "Jogar fora os pratinhos",
      "Pintar os pratinhos de amarelo",
    ],
    correct: 1,
    explanation: "Colocar areia ou pedras nos pratinhos impede que a água fique acumulada. Isso elimina um dos principais criadouros do mosquito em casa!",
  },
  {
    question: "Qual destes é um sinal de alerta que indica dengue grave?",
    options: [
      "Coriza e tosse",
      "Manchas roxas na pele e dor intensa na barriga",
      "Dor de garganta leve",
      "Cansaço após fazer exercício",
    ],
    correct: 1,
    explanation: "Manchas roxas na pele e dor intensa na barriga são sinais de alerta de dengue grave. Nesses casos, procure um médico ou hospital imediatamente!",
  },
];

type Phase = "playing" | "answered" | "finished";

const medals = [
  { min: 8, emoji: "🏆", title: "Especialista em Dengue!", msg: "Incrível! Você acertou tudo e é um verdadeiro expert no combate ao mosquito!" },
  { min: 6, emoji: "🥇", title: "Super-Herói da Saúde!", msg: "Muito bem! Você está preparado para combater o Aedes aegypti!" },
  { min: 4, emoji: "🥈", title: "Aprendiz Corajoso!", msg: "Bom trabalho! Você sabe bastante sobre dengue. Continue aprendendo!" },
  { min: 0, emoji: "🎓", title: "Continue Estudando!", msg: "Não desanime! Leia mais sobre dengue e tente de novo. Você consegue!" },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("playing");

  const q = questions[current];
  const medal = medals.find((m) => score >= m.min)!;

  const handleSelect = (i: number) => {
    if (phase !== "playing") return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
    setPhase("answered");
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setPhase("finished");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setPhase("playing");
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setPhase("playing");
  };

  const progressPct = Math.round(((current + (phase === "finished" ? 1 : 0)) / questions.length) * 100);

  return (
    <section
      id="quiz"
      className="relative bg-gradient-to-br from-[#6C3483] to-[#1a1a6e] py-20 md:py-28 overflow-hidden"
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#f9fafb" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />

      <div className="max-w-3xl mx-auto px-4 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🧠</div>
          <h2 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl text-white mb-4">
            Teste seus{" "}
            <span className="text-[#FFD700]">Conhecimentos!</span>
          </h2>
          <p className="text-white/75 text-lg">
            Responda as perguntas e descubra se você é um verdadeiro especialista!
          </p>
        </div>

        {phase !== "finished" ? (
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold text-gray-400 mb-1.5">
                <span>Pergunta {current + 1} de {questions.length}</span>
                <span>{score} acerto{score !== 1 ? "s" : ""}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="font-[family-name:var(--font-fredoka)] text-xl md:text-2xl text-gray-800 mb-6 leading-snug">
              {q.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                let style =
                  "border-2 border-gray-200 hover:border-[#FF6B35] hover:bg-orange-50 cursor-pointer";
                if (phase === "answered") {
                  if (i === q.correct)
                    style = "border-2 border-green-500 bg-green-50 cursor-default";
                  else if (i === selected)
                    style = "border-2 border-red-400 bg-red-50 cursor-default";
                  else
                    style = "border-2 border-gray-100 opacity-50 cursor-default";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={phase === "answered"}
                    className={`w-full text-left p-4 rounded-2xl text-sm font-semibold text-gray-700 transition-all ${style}`}
                  >
                    <span className="mr-2 font-bold text-gray-400">
                      {["A", "B", "C", "D"][i]})
                    </span>
                    {opt}
                    {phase === "answered" && i === q.correct && (
                      <span className="ml-2 text-green-600">✅</span>
                    )}
                    {phase === "answered" && i === selected && i !== q.correct && (
                      <span className="ml-2 text-red-500">❌</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {phase === "answered" && (
              <div
                className={`rounded-2xl p-4 mb-5 text-sm leading-relaxed ${
                  selected === q.correct
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-orange-50 border border-orange-200 text-orange-800"
                }`}
              >
                <span className="text-base mr-2">
                  {selected === q.correct ? "🎉" : "💡"}
                </span>
                <strong>{selected === q.correct ? "Correto! " : "Quase lá! "}</strong>
                {q.explanation}
              </div>
            )}

            {phase === "answered" && (
              <button
                onClick={handleNext}
                className="w-full bg-[#FF6B35] text-white font-bold py-3.5 rounded-2xl hover:bg-[#e55a25] transition-colors"
              >
                {current + 1 >= questions.length ? "Ver resultado! 🏆" : "Próxima pergunta →"}
              </button>
            )}
          </div>
        ) : (
          /* Result screen */
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce-in">
            <div className="text-7xl mb-4">{medal.emoji}</div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-3xl text-gray-800 mb-2">
              {medal.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{medal.msg}</p>

            <div className="bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-2xl p-6 text-white mb-6 inline-block w-full">
              <div className="font-[family-name:var(--font-fredoka)] text-5xl">
                {score}/{questions.length}
              </div>
              <div className="text-white/80 text-sm mt-1">pontos</div>
            </div>

            {/* Score breakdown */}
            <div className="flex justify-center gap-2 flex-wrap mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    i < score ? "bg-green-100 text-green-700" : "bg-red-100 text-red-500"
                  }`}
                >
                  {i < score ? "✓" : "✗"}
                </div>
              ))}
            </div>

            <button
              onClick={restart}
              className="bg-[#FF6B35] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#e55a25] transition-colors shadow-lg"
            >
              Jogar de novo! 🔄
            </button>
          </div>
        )}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
