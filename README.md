# Advocacia Tayna Oliveira - Premium Web Experience

Este projeto é uma demonstração de uma interface de alto padrão para advocacia, focada em performance, animações fluidas e design minimalista.

## 🚀 Tecnologias

- **React 18** + **Vite**
- **TypeScript** para segurança de tipos
- **Tailwind CSS v4** para estilização utilitária
- **GSAP** + **@gsap/react** para animações complexas de scroll
- **Framer Motion** para interações de UI e parallax
- **Lenis** para smooth scrolling
- **Lucide React** para iconografia

## 🏗️ Arquitetura

O projeto segue uma estrutura modular focada em escalabilidade:

- `src/components/layout`: Componentes estruturais (Navbar, Footer, SideNav).
- `src/components/sections`: Seções da página principal, isoladas por contexto.
- `src/hooks`: Hooks customizados para abstração de lógica (Animações, Scroll).
- `src/constants`: Centralização de conteúdo e tokens para facilitar manutenção.
- `src/lib`: Configurações de bibliotecas externas.

## 🛠️ Melhores Práticas Implementadas

- **Clean Code**: Funções pequenas, nomes descritivos e separação de preocupações.
- **SOLID**: Hooks especializados (Single Responsibility) e componentes desacoplados.
- **Performance**: 
  - Uso de `will-change` em elementos animados.
  - Cleanup automático de instâncias GSAP com `@gsap/react`.
  - Lazy loading de imagens e componentes pesados.
- **Acessibilidade**: Uso de semântica HTML5 e suporte a `prefers-reduced-motion`.
- **Resiliência**: Implementação de `ErrorBoundary` para falhas críticas.

## 📖 Como Rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para build de produção:
   ```bash
   npm run build
   ```

---

Desenvolvido com foco em excelência técnica e impacto visual.
