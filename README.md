# 💰 Cash Register Closing — Fechamento de Caixa

Sistema web/mobile para auxiliar no fechamento de caixa diário, calculando automaticamente o total a partir da quantidade de notas e moedas informadas.

---

## 🎯 Motivação

A ideia surgiu da necessidade de agilizar o fechamento de caixa no final do expediente. Em vez de contar as cédulas e moedas e fazer os cálculos manualmente, basta informar a quantidade de cada denominação e o sistema calcula o total automaticamente.

---

## ✨ Funcionalidades

- Listagem de todas as denominações (R$ 200,00 até R$ 0,05)
- Entrada de quantidade por denominação
- Cálculo automático do total
- Botão para limpar e refazer o fechamento
- Exportação da tela como imagem PNG com a data do fechamento
- Layout responsivo para uso no celular e desktop

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [html2canvas](https://html2canvas.hertzen.com/)

---

## 📁 Estrutura do projeto

```
src/
├── data/
│   └── consumo.ts        # Array com as denominações e quantidades
├── services/
│   └── calculator.ts     # Funções de cálculo e manipulação dos inputs
└── components/
    └── Main/
        ├── Main.tsx      # Componente principal
        └── styles.css    # Estilos
```

---

## 🚀 Como rodar o projeto

**Pré-requisitos:** Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/leandrobss1/Cash-Register-Closing.git

# Entre na pasta
cd Cash-Register-Closing

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

## 📖 Como usar

1. Informe a **quantidade** de cada cédula/moeda que está no caixa
2. Clique em **CALCULAR** para ver o total
3. Clique em **REFAZER** para limpar e começar novamente
4. Clique em **SALVAR** para baixar um print da tela com o fechamento do dia

---

## 👤 Autor

**Leandro Borges**
