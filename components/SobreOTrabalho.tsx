const alunos = [
  'Eduarda Rezende de Camargo Krzyzanowski',
  'Fernanda Bonadio Galvani',
  'Giovana Iacovone Gobbi',
  'Amanda Lima Rodrigues',
  'Manuela Barreto do Amaral',
  'Nauale Grigolatto Olenscki',
  'Francisco Larri de Carvalho',
  'Maria Eduarda Rissardi Bertolucci',
  'Mariana Mantoan Barbosa',
  'Maria Eduarda',
];

export default function SobreOTrabalho() {
  return (
    <section id='sobre' className='bg-white py-20 md:py-28'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-14'>
          <div className='text-5xl mb-4'>🎓</div>
          <h2 className='font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl text-gray-800 mb-4'>
            Sobre o <span className='text-[#FF6B35]'>Trabalho</span>
          </h2>
        </div>

        {/* Description card */}
        <div className='bg-[#f0f4ff] rounded-3xl p-8 mb-12 border-l-4 border-[#4ECDC4] shadow-sm'>
          <p className='text-gray-700 text-lg leading-relaxed'>
            Este trabalho foi desenvolvido pelos alunos da{' '}
            <strong className='text-[#FF6B35]'>T11A</strong> do curso de{' '}
            <strong>Medicina da Universidade Nove de Julho</strong> com o
            objetivo de investigar as causas da proliferação do mosquito{' '}
            <em>Aedes aegypti</em> na região, avaliar o impacto das políticas
            públicas locais e propor soluções fundamentadas para o controle de
            focos e conscientização da comunidade, buscando transmitir
            informações de forma dinâmica e acessível ao público infantojuvenil,
            tornando o aprendizado sobre prevenção mais educativo, interativo e
            de fácil compreensão.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Alunos */}
          <div>
            <h3 className='font-[family-name:var(--font-fredoka)] text-2xl text-gray-800 mb-6 flex items-center gap-2'>
              <span>👩‍⚕️</span> Alunos
            </h3>
            <ul className='space-y-3'>
              {alunos.map((nome, i) => (
                <li
                  key={i}
                  className='bg-[#f0f4ff] rounded-xl px-4 py-3 text-gray-700 text-sm font-medium hover:-translate-y-0.5 transition-transform shadow-sm'
                >
                  {nome}
                </li>
              ))}
            </ul>
          </div>

          {/* Professor + Turma */}
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='font-[family-name:var(--font-fredoka)] text-2xl text-gray-800 mb-6 flex items-center gap-2'>
                <span>📚</span> Professor
              </h3>
              <div className='flex items-center gap-4 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-2xl px-6 py-5 text-white shadow-md'>
                <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl shrink-0'>
                  👨‍🏫
                </div>
                <div>
                  <div className='font-[family-name:var(--font-fredoka)] text-xl'>
                    Dr. Kaique Cesar de Paula Silva
                  </div>
                  <div className='text-white/80 text-sm'>Orientador</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='font-[family-name:var(--font-fredoka)] text-2xl text-gray-800 mb-6 flex items-center gap-2'>
                <span>🏫</span> Instituição
              </h3>
              <div className='bg-[#f0f4ff] rounded-2xl px-6 py-5 space-y-2 text-gray-700 text-sm shadow-sm'>
                <div className='flex items-center gap-2'>
                  <span>🎓</span>
                  <span>
                    <strong>Uninove</strong> — Universidade Nove de Julho
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <span>📍</span>
                  <span>Campus Bauru</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span>🩺</span>
                  <span>Curso de Medicina — Turma T11A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
