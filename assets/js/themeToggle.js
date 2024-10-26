class ThemeToggle {
    constructor() {
        // Seleciona partes da página (elementos do DOM)
        this.body = document.body; // O corpo da página
        this.navbar = document.querySelector('nav'); // A barra de navegação
        this.modeIcon = document.querySelector('#modeIcon'); // Ícone de modo
        this.lightDark = document.querySelector('#lightDark'); // Botão para mudar o modo
        this.accordion = document.querySelector("#accordionCards"); // Acordeão de cartões
        this.btnLightDark = document.querySelector('#btnLightDark'); // Botão de modo claro/escuro
        this.offcanvasBody = document.querySelector(".offcanvas-body"); // Corpo do menu offcanvas
        this.dropdownItems = document.querySelectorAll('.dropdown-item'); // Itens do menu dropdown
        this.carouselItems = document.querySelectorAll('.carousel-item'); // Itens do carrossel

        // Aplica o modo automático quando a página carrega
        this.applyAutoMode();

        // Adiciona eventos de clique aos itens do menu dropdown
        this.dropdownItems.forEach(item => {
            item.addEventListener('click', (event) => this.handleDropdownClick(event));
        });

        // Escuta mudanças nas preferências de cor do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => this.applyAutoMode());
    }

    applyLightMode() {
        // Aplica o modo claro
        this.body.classList.add('bg-light'); // Adiciona fundo claro ao corpo
        this.navbar.classList.add('bg-light'); // Adiciona fundo claro à navbar
        this.lightDark.classList.add('bg-light'); // Adiciona fundo claro ao botão
        this.btnLightDark.classList.add('btn-light'); // Botão claro
        this.offcanvasBody.classList.add('bg-light'); // Adiciona fundo claro ao offcanvas
        this.modeIcon.classList.add('bi-brightness-high-fill'); // Ícone do modo claro

        // Atualiza o carrossel e o acordeão para o tema claro
        this.updateCarouselItems('light');
        this.accordion.setAttribute('data-bs-theme', 'light');

        // Remove classes de modo escuro
        this.body.classList.remove('bg-dark');
        this.navbar.classList.remove('bg-dark');
        this.lightDark.classList.remove('bg-dark');
        this.btnLightDark.classList.remove('btn-dark');
        this.offcanvasBody.classList.remove('bg-dark');
        this.modeIcon.classList.remove('bi-moon-stars-fill');
    }

    applyDarkMode() {
        // Aplica o modo escuro
        this.body.classList.add('bg-dark'); // Adiciona fundo escuro ao corpo
        this.navbar.classList.add('bg-dark'); // Adiciona fundo escuro à navbar
        this.lightDark.classList.add('bg-dark'); // Adiciona fundo escuro ao botão
        this.btnLightDark.classList.add('btn-dark'); // Botão escuro
        this.offcanvasBody.classList.add('bg-dark'); // Adiciona fundo escuro ao offcanvas
        this.modeIcon.classList.add('bi-moon-stars-fill'); // Ícone do modo escuro

        // Atualiza o carrossel e o acordeão para o tema escuro
        this.updateCarouselItems('dark');
        this.accordion.setAttribute('data-bs-theme', 'dark');

        // Remove classes de modo claro
        this.body.classList.remove('bg-light');
        this.navbar.classList.remove('bg-light');
        this.lightDark.classList.remove('bg-light');
        this.btnLightDark.classList.remove('btn-light');
        this.offcanvasBody.classList.remove('bg-light');
        this.modeIcon.classList.remove('bi-brightness-high-fill');
    }

    updateCarouselItems(theme) {
        // Atualiza itens do carrossel com o tema escolhido
        this.carouselItems.forEach(item => {
            item.setAttribute('data-bs-theme', theme); // Define o tema do item
            this.updateFooterButtonStyles(item, theme); // Atualiza botões no rodapé
        });
    }

    updateFooterButtonStyles(item, theme) {
        // Atualiza os estilos dos botões no rodapé
        const footer = item.querySelector('.card-footer'); // Seleciona o rodapé
        const buttons = footer ? footer.querySelectorAll('.testeB') : []; // Seleciona botões, se existirem

        buttons.forEach(button => {
            // Adiciona ou remove classes conforme o tema
            button.classList.toggle('btn-outline-secondary', theme === 'dark');
            button.classList.toggle('btn-outline-dark', theme === 'light');
        });
    }

    applyAutoMode() {
        // Aplica modo automático conforme as preferências do sistema
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (isDarkMode) {
            this.applyDarkMode(); // Se for modo escuro, aplica o modo escuro
        } else {
            this.applyLightMode(); // Caso contrário, aplica o modo claro
        }
    }

    updateDropdownActive(selectedMode) {
        // Atualiza a aparência do menu dropdown conforme o modo selecionado
        this.dropdownItems.forEach(item => {
            const mode = item.getAttribute('data-mode'); // Pega o modo do item
            item.classList.toggle('active', mode === selectedMode); // Marca como ativo se o modo corresponder
        });
    }

    handleDropdownClick(event) {
        // Lida com cliques nos itens do dropdown
        const mode = event.target.getAttribute('data-mode'); // Obtém o modo do item clicado

        // Aplica o modo correspondente
        if (mode === 'dark') {
            this.applyDarkMode();
        } else if (mode === 'light') {
            this.applyLightMode();
        } else {
            this.applyAutoMode();
        }
        this.updateDropdownActive(mode); // Atualiza o menu dropdown
    }
}

// Exporta a classe ThemeToggle para uso em outros arquivos
export default ThemeToggle;
