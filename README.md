# Hugo Amorim — Portfolio

Portfólio de Hugo Amorim, desenvolvedor full-stack. A interface usa a linguagem visual do VS Code (activity bar, abas de editor, gutter, barra de status) como base técnica, com nebulosas em CSS reservadas para as áreas de atmosfera.

## Rodando o projeto

```bash
npm install
npm start
```

Build de produção e deploy para GitHub Pages:

```bash
npm run build
npm run deploy
```

## Estrutura

```
src/
  App.js                 # estado global (idioma), scroll spy e composição das seções
  App.css                # design system e layout de todos os componentes
  index.css              # tokens (cores, tipografia), reset e preferências de movimento
  components/
    Rail.js              # activity bar fixa + seletor de idioma
    LogoIntro.js         # abertura com a animação ASCII original (114 frames)
    Hero.js              # apresentação + editor com o perfil em TypeScript
    Bio.js               # perfil, fatos, princípios e grupos de tecnologias
    Career.js            # histórico por ano, entradas e cartão em formato Markdown
    Portfolio.js         # terminal, contato e rodapé
    SectionHeader.js     # cabeçalho padronizado das seções
    tech.js              # registro único de ícones e nomes de tecnologias
  i18n/translations.js   # textos em inglês e português
  career.json            # trajetória em português
  career-en.json         # trajetória em inglês
```

## Sistema visual

- **Superfícies:** `#080a0e` (fundo), `#0f141b` (painéis), `#1e2732` (linhas).
- **Ação:** teal `#5fd3c4`, usado apenas para estado ativo, foco e CTA.
- **Sintaxe:** paleta Dark+ (`#c586c0`, `#9cdcfe`, `#ce9178`, `#b5cea8`, `#4ec9b0`, `#dcdcaa`), aplicada a código e marcadores de categoria.
- **Nebulosa:** violeta/magenta/azul em gradientes radiais de baixa opacidade, presentes no hero e no portfólio e bem discretas na carreira.
- **Tipografia:** IBM Plex Sans para leitura, IBM Plex Mono para metadados, rótulos e código.
- **Movimento:** abertura com a animação ASCII original, entrada curta no hero, animação ASCII discreta e cursor do terminal; tudo respeita `prefers-reduced-motion`.

## Abertura

A animação ASCII de 114 frames que Hugo criou abre o site na velocidade original (10 ms por frame), uma vez por sessão. Ela pode ser pulada com `Esc`, com o botão na tela ou clicando em qualquer lugar. Para rever durante o desenvolvimento, abra a página com `?intro=1`; visitantes com `prefers-reduced-motion` veem o site direto.

## Conteúdo

Os textos institucionais ficam em `src/i18n/translations.js`. A trajetória profissional fica nos arquivos `career.json` e `career-en.json`; ambos precisam ser atualizados juntos.
