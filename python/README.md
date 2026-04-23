# Hero — Asimov Academy

Seção hero da landing page, construída em **React + CSS Modules** com tema claro/escuro.

## Estrutura

```
src/
├── components/
│   └── Hero/
│       ├── Hero.jsx          ← componente principal
│       ├── Hero.module.css   ← todos os estilos (tokens + dark mode)
│       └── index.js          ← barrel export
├── App.jsx
├── main.jsx
└── index.css                 ← reset global
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Como editar

| O que mudar | Onde mexer |
|---|---|
| Cores e tokens de design | Variáveis CSS no topo de `Hero.module.css` (`.root` e `.dark`) |
| Textos (headline, bullets, badge) | Constantes `bullets`, `avatars` e JSX em `Hero.jsx` |
| Dark mode | Classe `.dark` em `Hero.module.css` — sobrescreve os tokens |
| Sintaxe do código no widget | Bloco `nbBody` em `Hero.jsx` |
| Animações | `@keyframes` em `Hero.module.css` |
| Responsivo | Media query `@media (max-width: 768px)` no final do CSS |
