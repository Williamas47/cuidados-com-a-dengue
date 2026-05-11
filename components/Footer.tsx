export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-fredoka)] text-2xl text-[#FF6B35] mb-3">
              🦟 Mosquito Vilão
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uma iniciativa educativa para ensinar crianças e jovens sobre a
              prevenção da dengue de forma divertida e acessível!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-fredoka)] text-lg text-white mb-4">
              Saiba mais
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Ministério da Saúde", href: "https://www.gov.br/saude" },
                { label: "OMS — Organização Mundial da Saúde", href: "https://www.who.int" },
                { label: "Fiocruz", href: "https://www.fiocruz.br" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[#FF6B35] transition-colors"
                  >
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-[family-name:var(--font-fredoka)] text-lg text-white mb-4">
              Em caso de dúvida
            </h4>
            <div className="bg-gray-800 rounded-2xl p-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white">
                <span>📞</span>
                <span>
                  <strong className="text-[#FF6B35]">Disque Saúde: 136</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span>🏥</span>
                <span>Procure a UBS mais próxima</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span>⚠️</span>
                <span>Em caso grave, vá à UPA ou pronto-socorro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          Feito com ❤️ para a saúde das crianças brasileiras — Conteúdo educativo
          baseado em fontes do Ministério da Saúde e da Fiocruz.
        </div>
      </div>
    </footer>
  );
}
