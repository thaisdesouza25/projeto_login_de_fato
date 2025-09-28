🔒 Tela de Login e Cadastro Interativa

Este projeto consiste na criação de uma Tela de Login e Cadastro completa, estilizada e com uma transição suave entre os dois formulários. Desenvolvida com HTML, CSS e JavaScript, utiliza o conceito de painéis deslizantes (toggle panels) para oferecer uma experiência de usuário moderna e elegante.

📄 Descrição

O sistema de autenticação é apresentado em um único contêiner com duas vistas principais: Login e Cadastro.

O projeto inclui:

Formulários de Login e Cadastro com campos de entrada estilizados.

Transição Interativa por meio de um painel deslizante (toggle panel) ativado por JavaScript, criando um efeito de movimento e modernidade.

Ícones de Redes Sociais para opções de login/cadastro alternativos (Google, Facebook, GitHub, LinkedIn).

Responsividade (a ser completada com media queries) para adaptar o layout a diferentes tamanhos de tela.

Utilização da biblioteca Font Awesome para os ícones.

🎨 Estilos e Estrutura

O design é centralizado e minimalista, utilizando uma paleta de cores sóbrias (branco, cinzas e azul escuro) para transmitir profissionalismo e foco.

Estrutura HTML (index.html)

O arquivo é dividido em três seções principais dentro do .container:

Formulário de Login (.form-box.login): Contém campos de usuário, senha, botão de login, link para "Esqueceu a senha?" e ícones sociais.

Formulário de Cadastro (.form-box.register): Contém campos de usuário, e-mail, senha, botão de cadastro e ícones sociais.

Painel de Transição (.toggle-box): Contém os painéis esquerdo e direito (.toggle-left e .toggle-right) que exibem mensagens de boas-vindas e os botões para alternar entre as visualizações.

Estilos CSS (css/style.css)

Reset Básico: Remoção de margens e preenchimentos padrão, e definição da fonte Poppins.

Estilo do Body: Fundo com gradient sutil e centralização total do conteúdo via Flexbox.

Container Principal: Largura fixa (850px), cantos arredondados, fundo branco e sombra suave. O overflow: hidden é crucial para o efeito de transição.

Formulários (.form-box): Posicionados de forma absoluta e ocupando 50% da largura. Sua posição é alterada quando a classe .active é adicionada ao .container.

Painel de Transição (.toggle-box):

O pseudo-elemento ::before cria o fundo azul que desliza, com uma grande largura (300%) e border-radius para o efeito arredondado.
  
As propriedades transition são aplicadas em várias partes para controlar a animação e o tempo de atraso (transition-delay), garantindo um movimento suave e coordenado dos painéis.

Funcionalidade JavaScript (js/script.js)

O script lida com a interatividade de transição:

Seleciona os elementos-chave: o .container e os botões de login/cadastro nos painéis.

Ao clicar no botão "Cadastre-se", a classe active é adicionada ao .container.

Ao clicar no botão "Login", a classe active é removida do .container.

O CSS utiliza a presença ou ausência da classe .active para determinar a posição e visibilidade dos painéis e formulários, acionando a animação.

👩‍💻 Autoria

Projeto desenvolvido por Thaís de Souza.
