# Positivus — Next.js + CSS Modules

Landing page no estilo do template **Positivus**, construída com:

- ⚡️ **Next.js 14** (App Router) + TypeScript
- 🎨 **CSS Modules** (sem Tailwind)
- 🔠 **Space Grotesk** via `next/font/google`
- 🟢 Paleta: `#B9FF66` · `#191A23` · `#F3F3F3`

## Como rodar

```bash
# 1. Instale as dependências
npm install
# (ou) pnpm install / yarn / bun install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Abra http://localhost:3000
```

Para build de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
.
├── app/
│   ├── layout.tsx        # layout raiz (Header + Footer + fonte global)
│   └── page.tsx          # homepage (Hero, Logos, Services, CTA, CaseStudies)
├── components/
│   ├── Header.tsx + .module.css
│   ├── Footer.tsx + .module.css
│   ├── Hero.tsx + .module.css
│   ├── Logos.tsx + .module.css
│   ├── Services.tsx + .module.css
│   ├── CTA.tsx + .module.css
│   └── CaseStudies.tsx + .module.css
├── styles/
│   └── globals.css       # variáveis CSS (cores, sombra, raio) + reset
└── public/
    ├── hero.png          # ilustração do Hero (adicione)
    ├── cta.png           # ilustração da CTA (adicione)
    ├── logos/            # logos das marcas (adicione)
    └── services/         # ícones de cada serviço (adicione)
```

## Adicionando suas imagens

1. **Hero**: salve em `public/hero.png` (≈ 600×515px).
2. **CTA**: salve em `public/cta.png` (≈ 359×294px).
3. **Logos**: salve em `public/logos/` com os nomes referenciados em `components/Logos.tsx` (`amazon.svg`, `dribbble.svg`, etc.) ou ajuste o array.
4. **Services**: salve em `public/services/` (`seo.png`, `ppc.png`, `social.png`, `email.png`, `content.png`, `analytics.png`).

PNGs com fundo transparente ficam melhores nos cards verde/escuro.

## Customizando o design

Todas as variáveis estão em `styles/globals.css`:

```css
:root {
  --color-green: #B9FF66;
  --color-dark:  #191A23;
  --color-light: #F3F3F3;
}
```

Edite ali e a mudança propaga para todos os componentes.
