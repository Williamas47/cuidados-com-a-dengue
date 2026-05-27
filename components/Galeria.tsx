'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Foto = { src: string; legenda?: string };

const fotos: Foto[] = [
  // Adicione suas fotos na pasta public/galeria/ e liste aqui:
  { src: '/galeria/foto1.jpg', legenda: 'Reunião Uni9 Foto 1' },
  { src: '/galeria/foto2.jpg', legenda: 'Reunião Uni9 Foto 2' },
  { src: '/galeria/foto3.jpg', legenda: 'Reunião Uni9 Foto 3' },
];

export default function Galeria() {
  const [atual, setAtual] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);

  const anterior = useCallback(() => {
    setAtual((i) => (i === 0 ? fotos.length - 1 : i - 1));
  }, []);

  const proximo = useCallback(() => {
    setAtual((i) => (i === fotos.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (!lightboxAberto || fotos.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') proximo();
      if (e.key === 'Escape') setLightboxAberto(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxAberto, anterior, proximo]);

  return (
    <section id='galeria' className='bg-[#f0f4ff] py-20 md:py-28'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-14'>
          <div className='text-5xl mb-4'>📸</div>
          <h2 className='font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl text-gray-800 mb-4'>
            Galeria de <span className='text-[#FF6B35]'>Fotos</span>
          </h2>
          <p className='text-gray-600 text-lg'>
            Registros do nosso trabalho ao longo do semestre
          </p>
        </div>

        {fotos.length === 0 ? (
          <div className='flex flex-col items-center justify-center bg-white rounded-3xl py-20 px-8 text-center shadow-sm border-2 border-dashed border-gray-200'>
            <div className='text-6xl mb-4'>🖼️</div>
            <p className='text-gray-500 text-lg'>
              Nenhuma foto adicionada ainda.
            </p>
            <p className='text-gray-400 text-sm mt-2'>
              Coloque as fotos na pasta{' '}
              <code className='bg-gray-100 px-2 py-0.5 rounded text-xs'>
                public/galeria/
              </code>{' '}
              e liste-as no arquivo{' '}
              <code className='bg-gray-100 px-2 py-0.5 rounded text-xs'>
                components/Galeria.tsx
              </code>
              .
            </p>
          </div>
        ) : (
          <>
            {/* Carrossel */}
            <div className='relative bg-white rounded-3xl overflow-hidden shadow-lg'>
              {/* Imagem principal — altura fixa, object-contain acomoda 1:1 e 16:9 sem cortar */}
              <div
                className='relative w-full h-[260px] sm:h-[380px] md:h-[500px] bg-gray-100 cursor-pointer'
                onClick={() => setLightboxAberto(true)}
              >
                <Image
                  src={fotos[atual].src}
                  alt={fotos[atual].legenda ?? `Foto ${atual + 1}`}
                  fill
                  className='object-contain'
                  sizes='(max-width: 768px) 100vw, 900px'
                />
                <div className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center'>
                  <span className='opacity-0 hover:opacity-100 transition-opacity text-white text-4xl'>
                    🔍
                  </span>
                </div>
              </div>

              {/* Legenda */}
              {fotos[atual].legenda && (
                <div className='px-6 py-4 text-center text-gray-700 font-medium'>
                  {fotos[atual].legenda}
                </div>
              )}

              {/* Botões prev/next */}
              <button
                onClick={anterior}
                className='absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:text-[#FF6B35] transition-colors'
                aria-label='Foto anterior'
              >
                ‹
              </button>
              <button
                onClick={proximo}
                className='absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:text-[#FF6B35] transition-colors'
                aria-label='Próxima foto'
              >
                ›
              </button>
            </div>

            {/* Miniaturas */}
            <div className='flex gap-3 mt-6 overflow-x-auto pb-2 justify-center flex-wrap'>
              {fotos.map((foto, i) => (
                <button
                  key={i}
                  onClick={() => setAtual(i)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 transition-all ${
                    i === atual
                      ? 'ring-2 ring-[#FF6B35] ring-offset-2 scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={foto.src}
                    alt={foto.legenda ?? `Miniatura ${i + 1}`}
                    fill
                    className='object-cover'
                    sizes='64px'
                  />
                </button>
              ))}
            </div>

            {/* Contador */}
            <p className='text-center text-gray-500 text-sm mt-4'>
              {atual + 1} / {fotos.length}
            </p>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxAberto && fotos.length > 0 && (
        <div
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
          onClick={() => setLightboxAberto(false)}
        >
          <button
            className='absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors'
            onClick={() => setLightboxAberto(false)}
            aria-label='Fechar'
          >
            ✕
          </button>
          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[#FF6B35] transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label='Anterior'
          >
            ‹
          </button>
          <div
            className='relative w-full max-w-4xl h-[70vh]'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotos[atual].src}
              alt={fotos[atual].legenda ?? `Foto ${atual + 1}`}
              fill
              className='object-contain'
              sizes='(max-width: 1024px) 100vw, 1024px'
            />
          </div>
          <button
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[#FF6B35] transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              proximo();
            }}
            aria-label='Próxima'
          >
            ›
          </button>
          {fotos[atual].legenda && (
            <p className='absolute bottom-6 left-0 right-0 text-center text-white text-sm'>
              {fotos[atual].legenda}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
