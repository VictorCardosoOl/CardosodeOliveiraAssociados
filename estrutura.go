// 📁 Mapeamento de Estrutura do Projeto
//
// project/
// ├── .env.example                         // Template de variáveis de ambiente
// ├── .gitignore                           // Arquivos ignorados pelo controle de versão Git
// ├── PROJETO.md                           // Documentação específica do projeto
// ├── README.md                            // Arquivo de leia-me principal
// ├── index.html                           // Template HTML principal e ponto de montagem
// ├── metadata.json                        // Metadados e configurações da aplicação
// ├── package-lock.json                    // Trava de versões exatas das dependências
// ├── package.json                         // Dependências e scripts do projeto (NPM)
// ├── server.ts                            // Servidor backend Express (API e integração com Vite)
// ├── tsconfig.json                        // Configuração do compilador TypeScript
// ├── vite.config.ts                       // Configuração do bundler Vite
// └── src/                                 // Código fonte principal do frontend
//     ├── App.tsx                          // Componente raiz da aplicação React
//     ├── env.ts                           // Validação de variáveis de ambiente (Zod)
//     ├── index.css                        // Estilos globais (Tailwind CSS)
//     ├── main.tsx                         // Ponto de entrada do React no DOM
//     ├── types.d.ts                       // Declarações de tipos globais do TypeScript
//     ├── components/                      // Componentes React
//     │   ├── common/                      // Componentes genéricos e transversais
//     │   │   └── ErrorBoundary.tsx        // Captura de erros na árvore de componentes
//     │   ├── layout/                      // Componentes estruturais de layout
//     │   │   ├── Footer.tsx               // Rodapé da página
//     │   │   ├── Navbar.tsx               // Barra de navegação principal
//     │   │   └── SmoothScrollWrapper.tsx  // Wrapper para engine de scroll suave (Lenis)
//     │   ├── sections/                    // Seções principais da landing page
//     │   │   ├── About.tsx                // Seção "Sobre"
//     │   │   ├── AreasDeAtuacao.tsx       // Seção "Áreas de Atuação"
//     │   │   ├── Contact.tsx              // Seção de contato com formulário
//     │   │   ├── Hero.tsx                 // Seção principal (Hero/Destaque)
//     │   │   ├── Insights.tsx             // Seção de artigos e insights
//     │   │   └── Professionals.tsx        // Seção da equipe e profissionais
//     │   └── ui/                          // Componentes de interface menores e modulares
//     │       ├── CardItem.tsx             // Componente de cartão reutilizável
//     │       ├── ContentModal.tsx         // Modal de conteúdo dinâmico
//     │       └── LocationMap.tsx          // Componente de mapa (Leaflet)
//     ├── constants/                       // Valores constantes e estáticos
//     │   └── content.ts                   // Textos e conteúdos estáticos do site
//     ├── context/                         // Contextos globais (React Context API)
//     │   ├── ActiveSectionContext.tsx     // Gerencia a seção visível atualmente (Intersection Observer)
//     │   └── SmoothScrollContext.tsx      // Gerencia a instância global do scroll suave
//     ├── hooks/                           // Hooks customizados do React
//     │   └── useScrollDirection.ts        // Hook para detectar direção do scroll
//     └── lib/                             // Bibliotecas e utilitários
//         └── utils.ts                     // Funções utilitárias (ex: merge de classes do Tailwind)
//
// 🏗️ Arquitetura
// - /src/components: Organizado por responsabilidade (layout, sections, ui, common), garantindo alta coesão.
// - /src/components/sections: Contém os blocos principais da Single Page Application, separando o conteúdo logicamente.
// - /src/components/ui: Componentes visuais isolados, reutilizáveis e com responsabilidade única (DRY).
// - /src/context: Centraliza o gerenciamento de estado global, evitando prop drilling para estados como scroll e navegação.
// - /src/hooks: Encapsula lógicas complexas de ciclo de vida e eventos do DOM em hooks reutilizáveis.
// - /src/lib & /src/constants: Separam a lógica utilitária e os dados estáticos da camada de visualização (UI).
//
// 🚀 Ponto de Entrada
// - server.ts: Ponto de entrada do backend (Express), responsável por servir a API e o frontend (SSR/Static).
// - src/main.tsx: Ponto de entrada do frontend, responsável por inicializar o React e montar o App.tsx no DOM.
//
// ⚙️ Configurações
// - package.json: Gerencia dependências e define os scripts de inicialização (dev, build, start).
// - vite.config.ts: Configura o bundler, otimizações e plugins do frontend.
// - tsconfig.json: Define as regras de compilação e tipagem estática do TypeScript.
// - env.ts: Centraliza e valida as variáveis de ambiente necessárias para a aplicação rodar com segurança.
