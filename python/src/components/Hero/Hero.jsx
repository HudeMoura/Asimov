import { useState } from 'react';
import styles from './Hero.module.css';

const bullets = [
  { strong: '+40 horas', text: 'de conteúdo direto ao ponto' },
  { strong: 'Python + IA', text: 'desde o módulo 1', prefix: 'Projetos com ' },
  { strong: '+20.000 alunos', text: 'Suporte da comunidade com', isPrefix: true },
  { strong: 'Certificado', text: 'reconhecido pelo mercado' },
];

const avatars = [
  { initials: 'AB', bg: '#FFE4CC', color: '#C05010' },
  { initials: 'CF', bg: '#E0F0FF', color: '#1060A0' },
  { initials: 'DM', bg: '#E8FFE8', color: '#206020' },
  { initials: 'RL', bg: '#F0E8FF', color: '#6020B0' },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className={styles.checkSvg}>
      <polyline points="2,6 5,9 10,3" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className={styles.toggleIcon} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3" />
      <line x1="8" y1="1" x2="8" y2="2.5" />
      <line x1="8" y1="13.5" x2="8" y2="15" />
      <line x1="1" y1="8" x2="2.5" y2="8" />
      <line x1="13.5" y1="8" x2="15" y2="8" />
      <line x1="3" y1="3" x2="4.1" y2="4.1" />
      <line x1="11.9" y1="11.9" x2="13" y2="13" />
      <line x1="13" y1="3" x2="11.9" y2="4.1" />
      <line x1="4.1" y1="11.9" x2="3" y2="13" />
    </svg>
  );
}

export function Hero() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${styles.root} ${dark ? styles.dark : ''}`}>
      {/* Theme toggle */}
      <button
        className={styles.themeToggle}
        onClick={() => setDark((d) => !d)}
        title="Alternar tema"
      >
        <SunIcon />
        <div className={styles.toggleTrack}>
          <div className={styles.toggleThumb} />
        </div>
        <span>{dark ? 'Tema claro' : 'Tema escuro'}</span>
      </button>

      <section className={styles.hero}>
        <div className={styles.notebookLines} />
        <div className={styles.marginLine} />

        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Nova turma aberta
          </div>

          <h1 className={styles.headline}>
            Aprenda <em>Python</em> do zero e construa{' '}
            <span className={styles.highlight}>projetos reais</span> com IA
          </h1>

          <p className={styles.subheadline}>
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação.
          </p>

          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i} className={styles.bullet}>
                <span className={styles.bulletIcon}>
                  <CheckIcon />
                </span>
                <span>
                  {b.isPrefix ? (
                    <>{b.text} <strong>{b.strong}</strong></>
                  ) : b.prefix ? (
                    <>{b.prefix}<strong>{b.strong}</strong> {b.text}</>
                  ) : (
                    <><strong>{b.strong}</strong> {b.text}</>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.ctas}>
            <a href="#" className={styles.btnPrimary}>
              Quero começar agora
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9,4 13,8 9,12" />
              </svg>
            </a>
            <a href="#" className={styles.btnSecondary}>
              Ver o que vou aprender
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                <circle cx="8" cy="8" r="6" />
                <polyline points="6,8 8,10 10,6" />
              </svg>
            </a>
          </div>

          <div className={styles.trustBar}>
            <div className={styles.avatars}>
              {avatars.map((a) => (
                <div
                  key={a.initials}
                  className={styles.avatar}
                  style={{ background: a.bg, color: a.color }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div className={styles.trustText}>
              <span className={styles.stars}>★★★★★</span>
              <strong>+20.000 alunos</strong> já transformaram suas carreiras
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          <div className={styles.notebookWidget}>
            <div className={styles.lineNums}>
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>

            <div className={styles.nbHeader}>
              <div className={styles.nbDots}>
                <div className={`${styles.nbDot} ${styles.dotR}`} />
                <div className={`${styles.nbDot} ${styles.dotY}`} />
                <div className={`${styles.nbDot} ${styles.dotG}`} />
              </div>
              <span className={styles.nbTitle}>projeto_01_analise_dados.py</span>
              <span />
            </div>

            <div className={styles.nbBody}>
              <span className={styles.cComment}># Módulo 1 — Análise com IA</span>{'\n'}
              <span className={styles.cKw}>import</span>{' '}pandas{' '}
              <span className={styles.cKw}>as</span>{' '}pd{'\n'}
              <span className={styles.cKw}>from</span>{' '}
              <span className={styles.cCls}>anthropic</span>{' '}
              <span className={styles.cKw}>import</span>{' '}
              <span className={styles.cFn}>Anthropic</span>{'\n'}
              {'\n'}
              client = <span className={styles.cFn}>Anthropic</span>(){'\n'}
              df = pd.<span className={styles.cFn}>read_csv</span>(
              <span className={styles.cStr}>"vendas.csv"</span>){'\n'}
              {'\n'}
              resposta = client.messages.<span className={styles.cFn}>create</span>({'\n'}
              {'  '}model=<span className={styles.cStr}>"claude-3-5-sonnet"</span>,{'\n'}
              {'  '}messages=[&#123;<span className={styles.cStr}>"role"</span>:{' '}
              <span className={styles.cStr}>"user"</span>,{'\n'}
              {'    '}<span className={styles.cStr}>"content"</span>: f
              <span className={styles.cStr}>"Analise: &#123;df&#125;"</span>&#125;]{'\n'}
              )<span className={styles.cursor} />
            </div>

            <div className={styles.nbOutput}>
              <span className={styles.outputLabel}>Out</span>
              <span className={styles.outputText}>
                ✓ Pico de vendas em março (+34%){'\n'}
                ✓ Produto B lidera; recomendar estoque
              </span>
            </div>

            <div className={styles.pageCurl} />
          </div>

          <div className={`${styles.floatTag} ${styles.float1}`}>
            <span className={styles.floatDot} style={{ background: '#22C55E' }} />
            IA como copiloto
          </div>
          <div className={`${styles.floatTag} ${styles.float2}`}>
            <span className={styles.floatDot} style={{ background: 'var(--orange)' }} />
            Projeto real no módulo 1
          </div>
        </div>
      </section>
    </div>
  );
}
