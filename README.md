# Tarefas do Dia 📝

Uma aplicação moderna e funcional de lista de tarefas desenvolvida com React e TypeScript. Este projeto foi iniciado como uma avaliação acadêmica e aprimorado com funcionalidades avançadas para melhorar a experiência do usuário.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

**Status do Projeto:** ✅ Concluído e Funcional

---

### 📖 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🚀 Rodando o Projeto Localmente](#-rodando-o-projeto-localmente)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [👨‍💻 Autor](#-autor)

---

### 📄 Descrição do Projeto

O "Tarefas do Dia" é uma aplicação de lista de tarefas (To-Do List) que permite ao usuário gerenciar suas atividades diárias de forma eficiente. O estado da aplicação é gerenciado globalmente pela Context API, e os dados são salvos no navegador usando `localStorage`, garantindo que as tarefas não sejam perdidas ao recarregar a página.

### ✨ Funcionalidades

- **Adicionar e Remover Tarefas:** Criação e exclusão de tarefas individuais.
- **Marcar como Concluída:** Alterne o status de uma tarefa entre pendente e concluída.
- **Listas Separadas:** A interface exibe as tarefas pendentes e as concluídas em seções distintas para melhor organização.
- **Persistência de Dados:** As tarefas são salvas no `localStorage` do navegador, mantendo os dados entre as sessões.
- **Sistema de Prioridade:**
    - Defina prioridades (alta, média, baixa) para cada tarefa.
    - **Ordenação Automática:** As tarefas são exibidas em ordem de prioridade.
    - **Identificação por Cor:** Cada nível de prioridade tem uma cor de fundo sutil para fácil identificação visual.
- **Ações em Massa:**
    - Seleção de múltiplas tarefas.
    - Botão para "Selecionar Todas" as tarefas pendentes.
    - Botões para "Concluir Selecionadas" e "Remover Selecionadas", agilizando o gerenciamento.

### 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/)**: Biblioteca para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Styled Components](https://styled-components.com/)**: Para estilização dos componentes de forma isolada e dinâmica.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build para um desenvolvimento front-end moderno e rápido.

### 🚀 Rodando o Projeto Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

**Pré-requisitos:**
- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [Yarn](https://classic.yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

```bash
# 1. Clone o repositório (substitua pelo link do seu repositório)
git clone https://github.com/alissongritti/ListaDeTarefas.git

# 2. Navegue até a pasta do projeto
cd seu-repositorio

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Execute o projeto em modo de desenvolvimento
npm run dev
# ou
yarn dev

# 5. Abra seu navegador e acesse http://localhost:5173 (ou a porta indicada no terminal)

📂 Estrutura de Pastas
O projeto está organizado da seguinte forma para manter a separação de responsabilidades:

/src
|-- /components     # Componentes React reutilizáveis (Form, List)
|-- /contexts       # Context API para gerenciamento de estado global
|-- /styles         # Estilos globais
|-- /types          # Definições de tipos e interfaces do TypeScript
|-- App.tsx         # Componente principal da aplicação
|-- main.tsx        # Ponto de entrada da aplicação

