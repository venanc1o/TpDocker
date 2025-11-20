# 🐳 Projeto Docker: Node.js + NGINX com Compose

## 🚀 Visão Geral

Este repositório é um ambiente de **estudo e experimentação** focado na orquestração de múltiplos serviços usando **Docker Compose**. O objetivo é demonstrar conceitos fundamentais do Docker, como a criação de **imagens customizadas** e a comunicação entre containers isolados.

O ambiente final é composto por dois serviços principais:

1.  **Servidor Web Estático (NGINX):** Para servir conteúdo HTML/CSS.
2.  **API Backend (Node.js/Express):** Para rodar uma aplicação simples de API.

---

## 🗂 Estrutura do Repositório

O projeto segue a seguinte organização, com o `docker-compose.yml` na raiz:

📁 docker-testandoFuncionalidades/ ├─ docker-compose.yml ├─ 📁 nginx-site/ # Construção da imagem customizada do NGINX │ ├─ Dockerfile │ └─ index.html └─ 📁 node-app/ # Construção da imagem customizada do Node.js ├─ Dockerfile ├─ package.json └─ app.js


---

## 🌐 Serviços e Acessos

| Serviço | Tecnologia | Porta Interna | Acesso Local (Host) | Função |
| :--- | :--- | :--- | :--- | :--- |
| **Site Estático** | NGINX (Custom Image) | 80 | 👉 **http://localhost:8080** | Serve o `index.html`. |
| **Backend API** | Node.js (Express) | 3000 | 👉 **http://localhost:8081** | Roda uma API que exibe dados e o Hostname do container. |

---

## 🧪 Conceitos Chave Explorados

Este projeto permite experimentar:

* **Builds Customizados:** Criação de imagens Docker a partir de `Dockerfile`s específicos para NGINX e Node.js.
* **Orquestração com Compose:** Gerenciamento de múltiplos serviços interconectados.
* **Mapeamento de Portas:** Exposição de portas de containers (`80`/`3000`) para o host (`8080`/`8081`).
* **Inspeção:** Uso de comandos para logs, status e acesso ao terminal dos containers.

---

## 🐳 Guia Rápido de Execução

Certifique-se de estar no diretório raiz do projeto (onde está o `docker-compose.yml`).

### 1. Iniciar o Ambiente (Build e Run)

Constrói as imagens customizadas e inicia os dois containers em modo *detached* (segundo plano).

Com certeza! Posso reescrever o seu arquivo README.md mantendo toda a informação essencial e os comandos, mas com uma abordagem e formatação ligeiramente diferente, focando em clareza e impacto visual.Aqui está uma sugestão de README.md revisado:Markdown# 🐳 Projeto Docker: Node.js + NGINX com Compose

## 🚀 Visão Geral

Este repositório é um ambiente de **estudo e experimentação** focado na orquestração de múltiplos serviços usando **Docker Compose**. O objetivo é demonstrar conceitos fundamentais do Docker, como a criação de **imagens customizadas** e a comunicação entre containers isolados.

O ambiente final é composto por dois serviços principais:

1.  **Servidor Web Estático (NGINX):** Para servir conteúdo HTML/CSS.
2.  **API Backend (Node.js/Express):** Para rodar uma aplicação simples de API.

---

## 🗂 Estrutura do Repositório

O projeto segue a seguinte organização, com o `docker-compose.yml` na raiz:

📁 docker-testandoFuncionalidades/├─ docker-compose.yml├─ 📁 nginx-site/  # Construção da imagem customizada do NGINX│ ├─ Dockerfile│ └─ index.html└─ 📁 node-app/    # Construção da imagem customizada do Node.js├─ Dockerfile├─ package.json└─ app.js
---

## 🌐 Serviços e Acessos

| Serviço | Tecnologia | Porta Interna | Acesso Local (Host) | Função |
| :--- | :--- | :--- | :--- | :--- |
| **Site Estático** | NGINX (Custom Image) | 80 | 👉 **http://localhost:8080** | Serve o `index.html`. |
| **Backend API** | Node.js (Express) | 3000 | 👉 **http://localhost:8081** | Roda uma API que exibe dados e o Hostname do container. |

---

## 🧪 Conceitos Chave Explorados

Este projeto permite experimentar:

* **Builds Customizados:** Criação de imagens Docker a partir de `Dockerfile`s específicos para NGINX e Node.js.
* **Orquestração com Compose:** Gerenciamento de múltiplos serviços interconectados.
* **Mapeamento de Portas:** Exposição de portas de containers (`80`/`3000`) para o host (`8080`/`8081`).
* **Inspeção:** Uso de comandos para logs, status e acesso ao terminal dos containers.

---

## 🐳 Guia Rápido de Execução

Certifique-se de estar no diretório raiz do projeto (onde está o `docker-compose.yml`).

### 1. Iniciar o Ambiente (Build e Run)

Constrói as imagens customizadas e inicia os dois containers em modo *detached* (segundo plano).

```bash
docker compose up --build -d
2. Verificar o StatusConfirma se os serviços estão ativos (Up).Bashdocker compose ps
3. Visualizar os LogsÚtil para debugar ou ver a saída do servidor Node.js (substitua [ID DO CONTAINER] pelo nome do serviço, ex: node-app).Bashdocker compose logs -f [NOME DO SERVIÇO]
4. Parar e LimparDerruba os containers e remove a rede criada pelo Compose.Bashdocker compose down
💡 Comandos Docker AdicionaisComandoDescriçãodocker psLista apenas containers ativos.docker ps -aLista todos os containers (ativos e parados).docker imagesLista as imagens Docker armazenadas localmente.docker exec -it <nome> shAbre um terminal de shell dentro de um container em execução.

```bash
docker compose up --build -d
