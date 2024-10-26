# README - Agenda 12

## Descrição do Projeto
**Agenda 12** é uma aplicação web projetada para servir como um site de favoritos, permitindo que os usuários acessem rapidamente **cinco sites** que utilizam com frequência. A interface é moderna e interativa, facilitando a navegação e melhorando a experiência do usuário.

## Funcionalidades
- **Carousel de Cards**: Os cinco sites favoritos são exibidos em um carousel, permitindo que o usuário visualize um site por vez. Essa abordagem melhora a organização e a apresentação dos links.
  
- **Troca de Tema**: A aplicação inclui uma funcionalidade para alternar entre modos de tema, proporcionando uma experiência personalizada para o usuário.

## Tecnologias Utilizadas
- **Bootstrap**: Utilizado para facilitar a criação de um layout responsivo e interativo. O Bootstrap oferece uma variedade de componentes e classes que ajudam na implementação de animações e na organização do layout.

- **SASS**: Um pré-processador CSS que permite a criação de estilos de forma modular. Com SASS, integramos estilos personalizados ao Bootstrap, mantendo o HTML limpo e organizado.

- **JavaScript**: Implementado para criar uma classe e métodos que gerenciam a funcionalidade de troca de tema, permitindo que os usuários alterem a aparência do site de forma dinâmica.

## Estrutura do Código
1. **ThemeToggle (JavaScript)**
   ```javascript
   // Importa a classe ThemeToggle do arquivo themeToggle.js
   // Cria uma nova instância da classe ThemeToggle
   // Isso ativa a funcionalidade de troca de tema na página
   const themeToggle = new ThemeToggle();
   ```
   Esse código gerencia a troca de temas na aplicação, permitindo que os usuários personalizem a interface.

2. **Estilos (SASS)**
   Os estilos são organizados em arquivos separados para ícones, fontes, cartões, cores e muito mais, garantindo que o CSS seja modular e fácil de manter.

3. **Carousel de Cards**
   Os sites favoritos são apresentados em um carousel, com cada card mostrando informações e links relevantes, organizados para uma melhor visualização.

4. **Transições e Estilização**
   Utilizamos transições suaves para melhorar a interação do usuário, criando uma experiência mais agradável ao navegar pelo site.

## Como Usar
Clone o repositório:
```bash
git clone https://github.com/SamuelOliveiraMatias/Ag-12.git
```

Navegue até o diretório do projeto:
```bash
cd agenda12
```

# ATENÇÃO!

Para que o site funcione corretamente, é necessário instalar as dependências do projeto. Para isso, execute o seguinte comando:

```bash
npm install
```

Abra o arquivo `index.html` em um navegador para visualizar a aplicação.

## Conclusão
**Agenda 12** é uma ferramenta útil para gerenciar e acessar rapidamente os sites favoritos dos usuários, combinando funcionalidades modernas com um design responsivo e interativo. A aplicação é fácil de usar e personalizável, proporcionando uma experiência única para cada usuário.
