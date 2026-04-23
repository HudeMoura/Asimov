# Positivus — Next.js + CSS Modules

---

## Visão Geral

Reimplementação fiel do design **Positivus** — uma landing page para agências de marketing digital — utilizando tecnologias modernas do ecossistema React/Next.js, sem dependências de frameworks CSS como Tailwind.

**Stack:**
- ⚡️ **Next.js 14** com App Router e TypeScript
- 🎨 **CSS Modules** para estilos encapsulados por componente
- 🔠 **Space Grotesk** carregada via `next/font/google`
- 🟢 **Paleta de cores:** `#B9FF66` · `#191A23` · `#F3F3F3`

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm, yarn ou pnpm

---

## Instalação e uso

### Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/positivus-nextjs.git
cd positivus-nextjs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Produção

```bash
npm run build
npm run start
```

---

## Estrutura do projeto

```
.
├── app/
│   ├── layout.tsx        # Layout raiz (Header + Footer + fonte global)
│   └── page.tsx          # Homepage (Hero, Logos, Services, CTA, CaseStudies)
├── components/
│   ├── Header.tsx + .module.css
│   ├── Footer.tsx + .module.css
│   ├── Hero.tsx + .module.css
│   ├── Logos.tsx + .module.css
│   ├── Services.tsx + .module.css
│   ├── CTA.tsx + .module.css
│   └── CaseStudies.tsx + .module.css
├── styles/
│   └── globals.css       # Variáveis CSS (cores, sombra, raio) + reset
└── public/
    ├── hero.png          # Ilustração do Hero (adicione)
    ├── cta.png           # Ilustração da CTA (adicione)
    ├── logos/            # Logos das marcas (adicione)
    └── services/         # Ícones de cada serviço (adicione)
```

---

## Adicionando imagens

As imagens não estão inclusas no repositório. Adicione-as manualmente nos caminhos abaixo:

| Imagem | Caminho | Dimensão sugerida |
|--------|---------|-------------------|
| Ilustração Hero | `public/hero.png` | ~600 × 515 px |
| Ilustração CTA | `public/cta.png` | ~359 × 294 px |
| Logos de marcas | `public/logos/*.svg` | — |
| Ícones de serviços | `public/services/*.png` | — |

**Logos esperados** (ajuste o array em `components/Logos.tsx` se necessário):
`amazon.svg`, `dribbble.svg`, e demais marcas referenciadas no componente.

**Ícones de serviços esperados:**
`seo.png`, `ppc.png`, `social.png`, `email.png`, `content.png`, `analytics.png`

> 💡 PNGs com fundo transparente ficam melhores nos cards de fundo verde e escuro.

---

## Customização

Todas as variáveis de design estão centralizadas em `styles/globals.css`:

```css
:root {
  --color-green: #B9FF66;
  --color-dark:  #191A23;
  --color-light: #F3F3F3;
}
```

Para ajustar cores, sombras ou raios de borda globalmente, edite apenas esse arquivo.

---

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | Executa o ESLint |

---

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
