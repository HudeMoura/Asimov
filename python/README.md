# Python — Asimov Academy

---

## Visão geral

Este projeto é a seção **hero** de uma landing page para o curso de Python da Asimov Academy. Construído em **React + CSS Modules**, o componente apresenta a proposta do curso com foco em conversão — headline forte, prova social, widget de código interativo e alternância entre tema claro e escuro.

A direção visual adotada foi **"Caderno Vivo"**: a estética de um caderno de anotações que ganhou vida digital. O conceito une dois mundos que o curso representa — **ensino** (papel, linhas, margem vermelha, tipografia editorial) e **tecnologia** (editor de código, syntax highlighting, cursor piscando, output em tempo real).

---

## Preview

| Tema Claro | Tema Escuro |
|---|---|
| Fundo creme `#F7F4EE` com linhas de caderno | Fundo escuro `#141210` com linhas sutis |
| Acento laranja `#E8500A` | Acento laranja `#FF6B2B` (mais vibrante) |
| Código com cores suaves | Código com cores neon suaves |

---

## Stack

| Tecnologia | Uso |
|---|---|
| **React 18** | Componente e estado do dark mode |
| **CSS Modules** | Escopo de estilos, tokens via CSS custom properties |
| **Vite** | Build e dev server |
| **Google Fonts** | Instrument Serif · DM Sans · JetBrains Mono |

Sem bibliotecas de UI. Sem dependências de estilo externas. Todo o design está em um único arquivo CSS Module.

---

## Estrutura do projeto

```
hero-asimov-react/
├── index.html                        ← entry point Vite + import das fontes
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                      ← monta o React na DOM
    ├── App.jsx                       ← importa e renderiza <Hero />
    ├── index.css                     ← reset global (box-sizing, margin)
    └── components/
        └── Hero/
            ├── Hero.jsx              ← JSX + lógica do componente
            ├── Hero.module.css       ← todos os estilos do hero
            └── index.js              ← barrel export
```

---

## Como rodar

**Pré-requisito:** Node.js 18+

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

```bash
# Gerar build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

## Anatomia do componente

O `<Hero />` é dividido em duas colunas principais:

```
┌─────────────────────────────┬──────────────────────────────┐
│         LEFT COL            │          RIGHT COL           │
│                             │                              │
│  Badge "Nova turma aberta"  │   Widget de editor de código │
│  Headline principal         │   (notebook com Python real) │
│  Subheadline                │                              │
│  4 bullets de benefícios    │   Tags flutuantes animadas   │
│  CTA primário + secundário  │                              │
│  Trust bar (avatares + ★)   │                              │
└─────────────────────────────┴──────────────────────────────┘
```

### Estado

O componente possui um único estado: `dark` (boolean), controlado pelo botão fixo no canto superior direito. Ao alternar, a classe `.dark` é adicionada ao elemento raiz, o que sobrescreve os CSS custom properties — sem JavaScript manipulando cores diretamente.

---

## Sistema de design

Todos os tokens ficam como CSS custom properties na classe `.root` (light) e são sobrescritos em `.dark`. Isso significa que **editar o tema é alterar variáveis**, não caçar valores no CSS.

### Paleta principal

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--cream` | `#F7F4EE` | `#141210` | Background geral |
| `--ink` | `#1C1917` | `#F0EDE8` | Texto principal |
| `--orange` | `#E8500A` | `#FF6B2B` | Acento, CTAs, destaques |
| `--ink-muted` | `#78726A` | `#7A7268` | Texto secundário |
| `--line-color` | `#D8D2C8` | `#2E2A24` | Bordas e divisores |
| `--green-code` | `#1A7A4A` | `#4ADE80` | Output do código |

### Tipografia

| Família | Peso | Uso |
|---|---|---|
| Instrument Serif | Regular, Italic | Headline — tom editorial e quente |
| DM Sans | 300, 400, 500, 600 | Corpo, CTAs, UI |
| JetBrains Mono | 400, 500 | Código, output, nomes de arquivo |

---

## Guia de edições

### Alterar textos

Abra `Hero.jsx`. Os conteúdos editáveis estão no topo do arquivo:

```jsx
// Edite os bullets aqui
const bullets = [
  { strong: '+40 horas', text: 'de conteúdo direto ao ponto' },
  // ...
];

// Edite os avatares aqui
const avatars = [
  { initials: 'AB', bg: '#FFE4CC', color: '#C05010' },
  // ...
];
```

O headline, subheadline e badge estão diretamente no JSX, busque pelas classes `.headline`, `.subheadline` e `.badge`.

### Alterar cores

Edite as CSS custom properties no topo de `Hero.module.css`:

```css
/* Tema claro */
.root {
  --orange: #E8500A;   /* ← troque o acento aqui */
  --cream: #F7F4EE;    /* ← troque o background aqui */
}

/* Tema escuro — sobrescreve apenas o necessário */
.dark {
  --orange: #FF6B2B;
  --cream: #141210;
}
```

### Alterar o código exibido no widget

No `Hero.jsx`, localize o bloco `<div className={styles.nbBody}>` e edite o código diretamente no JSX. As classes de syntax highlighting disponíveis são:

| Classe | Cor | Uso |
|---|---|---|
| `styles.cKw` | Roxo | Palavras-chave (`import`, `from`, `as`) |
| `styles.cFn` | Azul/ciano | Funções e chamadas de método |
| `styles.cStr` | Verde | Strings |
| `styles.cCls` | Azul escuro | Classes e módulos |
| `styles.cComment` | Cinza itálico | Comentários |

### Alterar animações

Todas as `@keyframes` estão no final de cada seção do CSS:

- `fadeSlideUp` — entrada dos elementos da coluna esquerda
- `underlineGrow` — sublinhado animado do headline
- `floatBob` — flutuação das tags no widget
- `pulse` — pulsação do dot no badge
- `blink` — cursor do editor

---

## Responsivo

O layout colapsa para coluna única em telas abaixo de `768px`. Ajustes no breakpoint:

```css
@media (max-width: 768px) {
  .hero { grid-template-columns: 1fr; }
  .leftCol { padding: 80px 24px 32px 48px; }
  .rightCol { padding: 0 24px 48px; }
  .marginLine { left: 32px; }
}
```

---

## Decisões de design

**Por que "Caderno Vivo" e não dark técnico?**
O dark técnico (fundo preto, gradientes neon, partículas) já é o padrão em cursos de programação. A Asimov tem identidade própria — laranja, direta, sem enrolação. O caderno remete ao aprendizado de verdade, não a uma ficção científica.

**Por que Instrument Serif no headline?**
Serifas em headlines de tech criam contraste e memorabilidade. Associam o produto a algo editorial e confiável, fugindo do `sans-serif` genérico que todo curso usa.

**Por que o widget de código é funcional?**
O código exibido não é decorativo — é Python real que qualquer aluno poderia rodar. Isso reforça a promessa de praticidade e mostra o que o aluno vai construir antes mesmo de se matricular.

**Por que dark mode via CSS custom properties?**
Trocar uma classe no elemento raiz que sobrescreve variáveis é a abordagem mais performática e fácil de manter. Sem `localStorage`, sem contexto global, sem re-renders desnecessários — só CSS.

---

## Próximos passos sugeridos

- Extrair os tokens de cor para um arquivo `tokens.css` compartilhado quando o projeto crescer
- Adicionar `prefers-color-scheme` para respeitar a preferência do sistema operacional do usuário
- Implementar persistência do tema no `localStorage` se o hero for parte de um site completo
- Criar variantes do widget de código por módulo do curso (um snippet diferente por aula)

---

*Projeto desenvolvido com assistência de IA — Claude (Anthropic)*