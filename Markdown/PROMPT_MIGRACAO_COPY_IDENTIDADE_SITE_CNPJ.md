# PROMPT OPERACIONAL — SUBSTITUIÇÃO DE COPY E IDENTIDADE SEM QUEBRAR DESIGN EXISTENTE

## 1. Papel do agente

Você é o **orquestrador técnico e estratégico** responsável por adaptar um site existente para um novo cliente.

Atue como uma equipe coordenada de especialistas:

- project-planner;
- frontend-specialist;
- ux-ui-designer;
- content-strategist;
- copywriter;
- seo-specialist;
- asset-manager;
- accessibility-specialist;
- performance-specialist;
- qa-debugger;
- documentation-specialist.

A missão principal **não é refazer o site do zero**.  
A missão é **preservar a estrutura visual, o layout, as seções e o comportamento geral do site atual**, fazendo uma substituição criteriosa de copy, identidade, imagens, metadados e informações comerciais para o novo cliente.

Trabalhe **ponto por ponto, camada por camada**, sem atropelar etapas, sem refatorações amplas desnecessárias e sem alterar a arquitetura visual mais do que o necessário.

---

## 2. Objetivo da tarefa

Existe um site já implementado para um cliente anterior.  
Agora ele será reaproveitado como base visual e estrutural para um novo cliente.

Você deve:

1. Ler todos os arquivos, pastas e subpastas do projeto.
2. Identificar todas as informações do cliente antigo.
3. Remover ou substituir qualquer referência ao cliente antigo.
4. Preservar, sempre que possível, o design, as seções, a hierarquia visual e o layout existente.
5. Substituir a copy antiga por uma copy nova, fiel ao novo briefing.
6. Usar os arquivos Markdown do novo cliente como fonte principal de verdade.
7. Usar as imagens disponíveis em `public`, `src/assets` ou pastas equivalentes quando elas pertencerem ao novo cliente.
8. Atualizar SEO, metadados, links, WhatsApp, endereço, textos alternativos e dados estruturais.
9. Garantir que não fique nenhum dado antigo dentro do projeto.
10. Documentar tudo o que foi alterado.

---

## 3. Regra crítica: não atropelar seções

Execute a tarefa em camadas.

Não altere várias seções ao mesmo tempo sem antes entender a composição atual.

Para cada seção:

1. Leia o componente.
2. Entenda o propósito da seção.
3. Identifique quais textos pertencem ao cliente antigo.
4. Localize dados importados de arquivos centrais, se houver.
5. Substitua apenas o conteúdo necessário.
6. Preserve classes, estrutura, grids, animações e espaçamentos, salvo quando houver conflito com a nova identidade.
7. Valide se a seção continua funcional.
8. Só então avance para a próxima seção.

Ordem recomendada:

1. Configurações e metadados.
2. Dados globais do cliente.
3. Header.
4. Hero.
5. Sobre.
6. Produtos ou serviços.
7. Diferenciais.
8. Como funciona / processo.
9. Galeria / portfólio.
10. Proprietário / equipe.
11. Entrega / localização / atendimento.
12. FAQ.
13. Contato.
14. Footer.
15. SEO final.
16. Revisão de resíduos antigos.

---

## 4. Novo cliente

Use como novo cliente:

```txt
[NOME_DO_NOVO_CLIENTE]
```

Para este ciclo específico, considerar:

```txt
JR Hortifruti Delivery
```

Dados principais conhecidos:

```txt
Nome: JR Hortifruti Delivery
CNPJ: 56.017.298/0001-05
Segmento: hortifruti, distribuidora, varejo e delivery
Instagram: @j.r_distribuidora_delivery_
WhatsApp: (21) 95689-3764
WhatsApp internacional: 5521956893764
Endereço: Rua Tocantins, 44 — Sarapuí, RJ
Canal principal de conversão: WhatsApp
Conceito visual: Colheita Urbana
Tom de voz: fresco, próximo, confiável, direto e comercial
Produtos: frutas, legumes, verduras, raízes e itens frescos conforme disponibilidade
```

Mensagem padrão de WhatsApp:

```txt
Olá, vim pelo site da JR Hortifruti Delivery e gostaria de fazer um pedido.
```

Link base:

```txt
https://wa.me/5521956893764
```

Link com mensagem:

```txt
https://wa.me/5521956893764?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20JR%20Hortifruti%20Delivery%20e%20gostaria%20de%20fazer%20um%20pedido.
```

---

## 5. Fontes de verdade obrigatórias

Antes de editar, procure e leia todos os arquivos Markdown do projeto.

Priorize pastas como:

```txt
/docs
/doc
/markdown
/md
/content
/public
/src
/src/data
/src/assets
```

Leia especialmente arquivos com nomes contendo:

```txt
escopo
scope
briefing
brand
marca
identidade
identity
copy
conteudo
content
cliente
client
site
seo
assets
produtos
servicos
serviços
contato
hortifruti
delivery
```

Extraia dos arquivos Markdown:

- nome do cliente;
- segmento;
- posicionamento;
- tom de voz;
- promessa principal;
- endereço;
- telefone;
- WhatsApp;
- Instagram;
- e-mail, se houver;
- redes sociais;
- produtos ou serviços;
- diferenciais;
- história;
- dados do proprietário;
- paleta de cores;
- tipografia;
- logos;
- imagens recomendadas;
- seções desejadas;
- CTAs;
- FAQ;
- SEO;
- pendências.

Se houver conflito entre arquivos, registre o conflito em documentação e utilize a informação mais recente, completa e coerente com o briefing principal.

---

## 6. Auditoria inicial obrigatória

Antes de qualquer alteração, execute uma leitura completa da estrutura.

Use comandos equivalentes a:

```bash
find . -maxdepth 6 -type f
```

Depois analise, quando existirem:

```txt
package.json
README.md
index.html
vite.config.*
tailwind.config.*
postcss.config.*
tsconfig.json
src/main.*
src/App.*
src/pages/**
src/components/**
src/sections/**
src/layout/**
src/ui/**
src/data/**
src/content/**
src/assets/**
public/**
docs/**
markdown/**
md/**
```

Também procure:

```txt
*.md
*.txt
*.json
*.ts
*.tsx
*.js
*.jsx
*.html
*.css
*.scss
*.svg
*.png
*.jpg
*.jpeg
*.webp
*.avif
```

---

## 7. Diagnóstico do cliente antigo

Faça uma varredura rigorosa para detectar informações do cliente antigo.

Procure por:

```txt
nomes de empresas antigas
nomes de pessoas antigas
telefones antigos
WhatsApps antigos
e-mails antigos
endereços antigos
domínios antigos
links antigos
Instagram antigo
Facebook antigo
LinkedIn antigo
YouTube antigo
Google Maps antigo
nomes de produtos antigos
nomes de serviços antigos
depoimentos antigos
cases antigos
alt texts antigos
titles antigos
meta descriptions antigas
open graph antigo
twitter cards antigos
favicon antigo
logos antigos
arquivos com nomes antigos
classes ou ids com nomes do cliente antigo
comentários com nome antigo
variáveis com nome antigo
dados mockados antigos
```

Use buscas equivalentes a:

```bash
grep -Rni "whatsapp" .
grep -Rni "telefone" .
grep -Rni "email" .
grep -Rni "endereço" .
grep -Rni "instagram" .
grep -Rni "http" .
grep -Rni "logo" .
grep -Rni "alt=" .
grep -Rni "og:" .
grep -Rni "twitter:" .
grep -Rni "canonical" .
grep -Rni "sitemap" .
```

Se identificar nomes antigos, rode buscas específicas com esses nomes.

Nenhuma informação antiga pode permanecer em uso.

---

## 8. Regras de preservação do design

Preserve:

- layout geral;
- grid;
- espaçamentos;
- responsividade;
- animações existentes;
- componentes reutilizáveis;
- comportamento de menu;
- seções já existentes;
- hierarquia visual;
- interações já funcionais;
- estrutura de cards;
- estrutura de botões;
- padrões de classe e estilização;
- performance atual.

Não faça:

- redesign total sem autorização;
- troca completa de arquitetura visual;
- alteração massiva de componentes sem necessidade;
- remoção de seções funcionais sem justificativa;
- instalação de dependências sem autorização;
- reestruturação radical do projeto;
- alteração de lógica sensível sem necessidade;
- substituição de design por template genérico.

O foco é **copywriting, identidade e conteúdo**, mantendo o site visualmente consistente.

---

## 9. Regras de substituição de conteúdo

Substitua todos os dados antigos por dados do novo cliente.

Atualizar obrigatoriamente:

```txt
nome da empresa
slogan
headline
subheadline
descrições
cards
CTAs
FAQ
textos de botão
links de WhatsApp
mensagens de WhatsApp
endereço
mapa
telefone
Instagram
e-mail, se houver
footer
SEO
Open Graph
Twitter cards
alt texts
nomes de arquivos exibidos
depoimentos
serviços/produtos
metadados
manifest, se existir
robots.txt
sitemap.xml
favicon, se necessário
```

A copy nova deve parecer original e específica para o novo cliente.

Pode preservar:

- lógica de conversão;
- estrutura da seção;
- posição dos CTAs;
- padrão de blocos;
- ritmo de leitura.

Não pode preservar:

- frases específicas do cliente antigo;
- nomes antigos;
- benefícios que não se aplicam;
- promessas não confirmadas;
- serviços/produtos de outro segmento;
- depoimentos falsos;
- cases de outro cliente.

---

## 10. Copy específica para JR Hortifruti Delivery

Use como base de conteúdo:

### Headline principal

```txt
Hortifruti fresquinho entregue na sua casa.
```

### Subheadline

```txt
Frutas, legumes, verduras e produtos selecionados todos os dias, com atendimento rápido pelo WhatsApp e entrega local.
```

### Promessa

```txt
Selecionamos produtos frescos com cuidado para levar mais praticidade, qualidade e sabor até a sua mesa.
```

### CTAs principais

```txt
Fazer pedido no WhatsApp
Ver produtos disponíveis
Consultar lista de hoje
Falar com atendimento
Consultar entrega
```

### Sobre

```txt
A JR Hortifruti Delivery facilita o dia a dia de quem busca frutas, legumes, verduras e produtos frescos sem precisar sair de casa. O atendimento é direto pelo WhatsApp, com seleção cuidadosa e entrega combinada conforme disponibilidade.
```

### Diferenciais

```txt
Produtos selecionados
Atendimento direto
Entrega local
Frescor no dia a dia
Compra simples pelo WhatsApp
```

### Como funciona

```txt
1. Chame no WhatsApp.
2. Envie sua lista ou escolha os produtos disponíveis.
3. Confirme valores, disponibilidade e entrega.
4. Receba seu pedido com praticidade.
```

### Contato

```txt
JR Hortifruti Delivery
CNPJ: 56.017.298/0001-05
Rua Tocantins, 44 — Sarapuí, RJ
WhatsApp: (21) 95689-3764
Instagram: @j.r_distribuidora_delivery_
```

---

## 11. Produtos base do novo cliente

Se houver seção de produtos, utilizar os produtos documentados ou imagens disponíveis.

Produtos já identificados:

```txt
Abacaxi
Abobrinha
Aipim manteiga
Ameixa
Banana
Caqui doce
Goiaba
Maçã
Macaxeira / aipim
Morangos
Quiabo
Quiabo luxo
Uvas
```

Categorias sugeridas:

```txt
Frutas
Legumes
Verduras
Raízes
Selecionados da semana
```

Evite preços fixos, salvo se houver arquivo oficial informando valores.

Texto seguro:

```txt
Disponibilidade sujeita ao dia, safra e estoque. Consulte pelo WhatsApp.
```

---

## 12. Assets e imagens

Procure imagens em:

```txt
/public
/public/assets
/public/images
/public/brand
/public/products
/src/assets
/src/assets/images
/src/assets/brand
/src/assets/products
```

Classifique os assets encontrados em:

```txt
brand/
products/
gallery/
team/
backgrounds/
icons/
legacy/
unused/
```

Para cada imagem usada, garantir:

- `alt` descritivo;
- `loading="lazy"` em imagens abaixo da primeira dobra;
- `decoding="async"` quando aplicável;
- não usar imagem antiga de outro cliente;
- não usar logo antigo;
- não manter imagem antiga como placeholder.

Para JR Hortifruti Delivery, priorizar:

- logo principal;
- logo circular;
- foto do proprietário, se autorizada;
- imagens reais dos produtos;
- brand guide, se útil como referência visual.

Atenção: se houver dúvida sobre o uso da foto do proprietário, registrar como pendência de autorização de imagem.

---

## 13. Identidade visual do novo cliente

Para JR Hortifruti Delivery, aplicar a identidade visual já documentada.

Paleta base:

```txt
Verde profundo: #124A26
Verde médio: #227A3A
Verde lima: #52A84C
Ouro: #BA942A
Laranja: #ED6E1E
Creme: #FAF1EA
```

Direção estética:

```txt
natural
fresco
urbano
organizado
confiável
premium acessível
delivery local
hortifruti real
```

Conceito:

```txt
Colheita Urbana
```

Não misturar com cores, logo ou linguagem do cliente antigo.

---

## 14. SEO

Atualize completamente:

```txt
title
description
canonical
og:title
og:description
og:image
og:url
twitter:title
twitter:description
twitter:image
favicon
robots.txt
sitemap.xml
manifest, se existir
```

SEO sugerido para JR Hortifruti Delivery:

### Title

```txt
JR Hortifruti Delivery — Frutas, legumes e verduras em Sarapuí
```

### Description

```txt
Peça frutas, legumes, verduras e produtos frescos pelo WhatsApp com a JR Hortifruti Delivery. Atendimento direto e entrega local em Sarapuí, RJ.
```

### Keywords

```txt
hortifruti Sarapuí
hortifruti delivery Sarapuí
frutas em Sarapuí
legumes em Sarapuí
verduras em Sarapuí
JR Hortifruti Delivery
delivery de frutas RJ
hortifruti Rua Tocantins Sarapuí
```

Se o domínio final não estiver confirmado, registre como pendência. Não invente domínio.

---

## 15. Arquitetura de dados recomendada

Sempre que possível, centralize conteúdo em arquivos de dados, sem alterar o design de forma agressiva.

Criar ou atualizar:

```txt
src/data/company.ts
src/data/navigation.ts
src/data/products.ts
src/data/faq.ts
src/data/seo.ts
src/data/whatsapp.ts
src/data/assets.ts
```

Exemplo de `company.ts`:

```ts
export const company = {
  name: 'JR Hortifruti Delivery',
  legalDocument: '56.017.298/0001-05',
  shortName: 'JR Hortifruti',
  tagline: 'Hortifruti fresquinho entregue na sua casa.',
  description:
    'Frutas, legumes, verduras e produtos selecionados todos os dias, com atendimento rápido pelo WhatsApp e entrega local.',
  address: 'Rua Tocantins, 44 — Sarapuí, RJ',
  phone: '(21) 95689-3764',
  whatsappNumber: '5521956893764',
  instagram: '@j.r_distribuidora_delivery_',
  city: 'Sarapuí',
  state: 'RJ',
};
```

Exemplo de função de WhatsApp:

```ts
export function buildWhatsappUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

---

## 16. FAQ sugerido

Utilizar se houver seção FAQ no site atual.

```txt
Como faço um pedido?
Você pode clicar no botão de WhatsApp do site e enviar sua lista de produtos.

Os produtos estão sempre disponíveis?
A disponibilidade pode variar conforme o dia, safra e estoque. Por isso, a confirmação é feita pelo WhatsApp.

Vocês fazem entrega?
Sim. A entrega é combinada diretamente pelo WhatsApp, conforme localização e disponibilidade.

Qual é o endereço?
Rua Tocantins, 44 — Sarapuí, RJ.

Posso pedir frutas, legumes e verduras juntos?
Sim. Você pode montar seu pedido com os produtos disponíveis no dia.

O atendimento é pelo WhatsApp?
Sim. O WhatsApp é o principal canal para pedidos, dúvidas e combinações de entrega.
```

---

## 17. Cuidados comerciais

Não afirmar:

```txt
entrega grátis
entrega para todas as regiões
menor preço
melhor hortifruti da região
produtos sempre disponíveis
preços fixos
atendimento 24h
```

A menos que exista confirmação oficial nos arquivos do cliente.

Usar frases seguras:

```txt
entrega combinada pelo WhatsApp
disponibilidade sujeita ao dia e estoque
produtos selecionados
atendimento direto
consulte a lista de hoje
```

---

## 18. Documentação obrigatória

Ao final, criar ou atualizar:

```txt
docs/project-scope.md
docs/content-map.md
docs/asset-map.md
docs/cleanup-report.md
docs/change-log.md
```

### `docs/project-scope.md`

Deve conter:

```txt
1. Cliente
2. Objetivo do site
3. Segmento
4. Tom de voz
5. Identidade visual
6. Informações comerciais
7. Estrutura de seções
8. Copy aplicada
9. CTAs
10. Produtos ou serviços
11. SEO
12. Pendências
13. Próximos passos
```

### `docs/cleanup-report.md`

Deve conter:

```txt
1. Informações antigas encontradas
2. Arquivos onde estavam
3. Ação executada
4. Dados novos aplicados
5. Assets antigos removidos, substituídos ou arquivados
6. Confirmação de buscas finais
7. Pendências
```

### `docs/asset-map.md`

Deve conter:

```txt
1. Nome do asset
2. Caminho
3. Tipo
4. Uso no site
5. Alt text
6. Status: usado / não usado / legado / pendente
```

---

## 19. Validação obrigatória

Depois das alterações, executar:

```bash
npm run lint
npm run build
git status --short
```

Se algum comando não existir:

```txt
NÃO EXECUTADO — script ausente no package.json.
```

Não inventar validação.

Também executar buscas finais por resíduos antigos:

```bash
grep -Rni "nome antigo detectado" .
grep -Rni "telefone antigo detectado" .
grep -Rni "email antigo detectado" .
grep -Rni "domínio antigo detectado" .
grep -Rni "instagram antigo detectado" .
```

Além disso, revisar:

```txt
index.html
public/
src/data/
src/components/
src/pages/
src/assets/
docs/
README.md
```

---

## 20. Critérios de aceite

A tarefa só estará concluída quando:

- o design geral existente estiver preservado;
- as seções não tiverem sido atropeladas;
- a copy antiga tiver sido substituída;
- nenhuma informação do cliente anterior estiver em uso;
- o novo cliente estiver aplicado em textos, CTAs, SEO e contato;
- os links de WhatsApp estiverem corretos;
- os assets antigos não estiverem sendo exibidos;
- os assets do novo cliente estiverem mapeados;
- os arquivos Markdown de documentação estiverem atualizados;
- lint e build tiverem sido executados ou justificados;
- `git status --short` tiver sido reportado;
- pendências estiverem documentadas.

---

## 21. Entrega final esperada

Ao finalizar, responder com:

```txt
1. Arquivos alterados
2. Arquivos criados
3. Seções atualizadas
4. Dados antigos removidos
5. Dados novos implementados
6. Assets usados
7. Assets arquivados/removidos
8. Validação lint/build
9. Resultado da busca por resíduos antigos
10. Git status
11. Pendências
12. Próximo passo recomendado
```

Não fazer commit, push ou deploy sem autorização explícita.

---

## 22. Instrução final ao agente

Trabalhe com precisão cirúrgica.

O objetivo é fazer um serviço de **copywriter técnico e migração de identidade**, não reconstruir o site inteiro.

Preserve o que já funciona.  
Substitua o que pertence ao cliente antigo.  
Use os arquivos Markdown como fonte principal.  
Use as imagens do novo cliente quando fizer sentido.  
Avance camada por camada.  
Documente tudo.  
Valide antes de concluir.
