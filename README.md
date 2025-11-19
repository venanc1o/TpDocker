# 📦 Docker Testando Funcionalidades
### Node.js + NGINX (Custom Images) usando Docker Compose

Este repositório foi criado para **testes, estudos e experimentação** com Docker, Docker Desktop e Docker Compose.  
Aqui são demonstrados conceitos essenciais como:

- Criação de **imagens customizadas** (Node e NGINX)  
- Build e execução com **docker compose**  
- Comunicação entre múltiplos containers  
- Estruturação de ambiente isolado  
- Inspeção de logs, exec, ps, volumes, networks etc.  

O objetivo principal é mostrar como subir um ambiente completo usando dois containers:

- **NGINX** servindo um site estático  
- **Node.js (Express)** rodando uma API simples

---

## 🗂 Estrutura do Projeto

```
📁 docker-tp/
├─ docker-compose.yml
├─ 📁 nginx-site/
│ ├─ Dockerfile
│ └─ index.html
└─ 📁 node-app/
├─ Dockerfile
├─ package.json
└─ app.js
```

---

## 🌐 Serviços do Projeto

### **1️⃣ Site Estático — NGINX**
Servido através de uma imagem customizada baseada em `nginx:alpine`.

Acessível em:

👉 **http://localhost:8080**

---

### **2️⃣ Backend Simples — Node.js (Express)**
Roda uma API simples mostrando JSON com:

- Mensagem
- Hostname do container
- Data/hora

Acessível em:

👉 **http://localhost:8081**

---

## 🐳 Como Rodar o Projeto

### **1. Construir e subir os containers**
```
docker compose up --build -d
```

### **2. Ver Status**
```
docker compose ps
````

### **3. Ver logs**
```
docker compose logs -f [ID DO CONTAINER]
````

### **4. Parar os containers**
```
docker compose down
````

---

## 🧪 Objetivo do Projeto

Este repositório foi criado com o propósito de:

- ✔ Experimentar builds customizados com Dockerfile
- ✔ Treinar docker compose com múltiplos serviços
- ✔ Aprender a inspecionar containers (logs, exec, ps, stats)
- ✔ Testar isolamento entre containers
- ✔ Criar um ambiente simples NGINX + Node
- ✔ Entender portas, mapeamentos e networks

---

## 📚 Comandos Úteis no Docker
- docker ps                # listar containers ativos
- docker ps -a             # listar todos containers
- docker logs <container>  # ver logs
- docker exec -it <name> sh  # entrar no container
- docker images            # listar imagens locais
- docker compose up -d     # subir containers
- docker compose down      # derrubar containers
---
