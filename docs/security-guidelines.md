# Diretrizes de Segurança Cibernética (Cybersecurity Guidelines)

Este documento define as diretrizes de segurança, proteção de credenciais e boas práticas de desenvolvimento para evitar vazamento de dados confidenciais e proteger o ecossistema da **JR Hortifruti Delivery**.

---

## 1. Princípios Básicos de Segurança em Aplicações Estáticas (Frontend)

O site da JR Hortifruti Delivery é uma aplicação client-side (SPA). Em aplicações executadas diretamente no navegador do cliente, **nenhuma chave de API ou segredo embutido no código JavaScript é 100% privado**. Qualquer usuário pode inspecionar o código-fonte e extrair as chaves.

### Regra de Ouro:
> [!WARNING]
> **Nunca armazene chaves privadas ou tokens com privilégios de escrita diretamente no código JavaScript frontal.**
> Chaves com privilégios administrativos (como a "service_role" do Supabase, chaves privadas do Firebase, ou chaves de APIs de pagamento privado) devem residir apenas em ambientes de servidor seguro (Backend/Serverless) e nunca trafegar para o navegador.

---

## 2. Gestão Segura de Variáveis de Ambiente (.env)

O arquivo `.gitignore` foi blindado para bloquear todos os arquivos `.env` e `.env.local`. Para configurar variáveis locais sem riscos:

1. **Uso de Templates**: O arquivo `.env.example` na raiz do projeto lista todas as variáveis necessárias (ex: `WHATSAPP_PEDIDOS`, `GOOGLE_ANALYTICS_ID`). Ele **não** contém valores reais de produção.
2. **Criação do Arquivo Local**: Crie um arquivo local chamado `.env` no seu computador e adicione as credenciais de desenvolvimento.
3. **Bloqueio de Commits**: O Git ignorará automaticamente este arquivo, impedindo que credenciais confidenciais sejam acidentalmente publicadas no GitHub.

---

## 3. Segurança em Integrações de API Client-Side

Se o projeto evoluir para integrar bancos de dados no cliente (ex: Supabase, Firebase) ou APIs públicas (Google Maps):

### A. Supabase / Firebase (Bancos de Dados)
* **Chave Pública**: Use apenas a chave pública anônima (`anon_key`).
* **RLS (Row Level Security)**: Habilite **RLS** em todas as tabelas do banco de dados no Supabase. Isso impede que usuários alterem registros de outros clientes através do console do navegador.
* **Políticas Restritivas**: Crie políticas que permitam aos clientes apenas ler produtos e inserir novos pedidos (sem permissão de leitura global de pedidos de outros clientes ou deleção).

### B. APIs de Terceiros (ex: Google Maps)
* **Restrição de Referenciador (HTTP Referrer)**: Configure o painel do provedor da API (ex: Google Cloud Console) para permitir requisições apenas vindas dos domínios oficiais (ex: `jr-hortifruti-site.vercel.app`).
* **Restrições de API**: Restrinja a chave para que ela funcione apenas para o serviço específico (ex: Maps JavaScript API), bloqueando seu uso para tradução, geocodificação ou outros recursos pagos.

---

## 4. Proteção do Canal de Vendas (WhatsApp Integration)

O checkout da aplicação utiliza deep links do WhatsApp.
* **Número Oficial**: O número de destino (`5521969035431`) está definido em [app.js](file:///c:/Users/alexya/Documents/J.R%20HORTIFRUITI%20DELIVERY/src/app.js) e documentado em `.env.example`.
* **Validação de Entrada**: Toda mensagem enviada ao WhatsApp passa por `encodeURIComponent` para evitar injeções ou quebras de link HTTP no redirecionamento.

---

## 5. Auditorias e Prevenção contra Vazamentos (Data Leak Prevention)

* **Detecção Automática (Gitguardian/GitHub Secret Scanning)**: Se o repositório for integrado ao GitHub, o serviço de escaneamento de segredos está ativo por padrão. Se você commitar uma chave de API válida por engano, ela será revogada automaticamente pelo provedor.
* **Comando de Emergência**: Se dados confidenciais forem commitados acidentalmente, utilize ferramentas como `git-filter-repo` ou `BFG Repo-Cleaner` para purgar o arquivo do histórico completo do Git antes de alterar as senhas/chaves vazadas.
