export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-secondary pt-24 pb-12 border-t border-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Cardoso de Oliveira</h2>
            <p className="text-secondary/60 max-w-sm mb-8">
              Advocacia estratégica, feminina e focada em resultados justos para causas cíveis e fiduciárias.
            </p>
            <a href="mailto:contato@cardosodeoliveira.com.br" className="text-xl hover:text-accent transition-colors">
              contato@cardosodeoliveira.com.br
            </a>
          </div>

          <div>
            <h3 className="uppercase tracking-wider text-sm font-semibold text-accent mb-6">Endereço</h3>
            <p className="text-secondary/70 leading-relaxed">
              Av. Paulista, 1000<br />
              Conjunto 152 - Bela Vista<br />
              São Paulo - SP, 01310-100
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-wider text-sm font-semibold text-accent mb-6">Redes Sociais</h3>
            <ul className="space-y-4">
              {["LinkedIn", "Instagram", "Jusbrasil"].map((social) => (
                <li key={social}>
                  <a href="#" className="text-secondary/70 hover:text-accent transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-secondary/20 text-sm text-secondary/50">
          <p>© {new Date().getFullYear()} Cardoso de Oliveira Associados. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
