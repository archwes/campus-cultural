## 📱 Aplicativo Mobile - CampusCultural 🎉

Este projeto, resultado da disciplina **Oficina de Integração 2** do curso de Engenharia de Software da **UTFPR - Câmpus Dois Vizinhos**, visa facilitar a comunicação e interação dentro da comunidade acadêmica através da divulgação de notícias e eventos relevantes.

## 🚀 Tecnologias

O aplicativo foi desenvolvido com as seguintes tecnologias:

*   **⚛️ React Native**: Permite a criação de interfaces nativas para Android e iOS, garantindo alta performance e uma experiência de usuário fluida em ambas as plataformas.
*   **🏃 Expo Go**: Agiliza o processo de desenvolvimento, possibilitando testes em tempo real e iterações rápidas.
*   **🔥 Firebase**: Simplifica a integração com serviços de backend, como autenticação de usuários e gerenciamento de dados, otimizando o desenvolvimento e a escalabilidade do aplicativo.

## 🛠️ Funcionalidades

O CampusCultural oferece uma variedade de funcionalidades para atender às necessidades da comunidade acadêmica:

*   **🔑 Autenticação de usuários via Firebase:** Garante a segurança do acesso ao aplicativo e permite a personalização da experiência do usuário.
*   **🔗 Integração com APIs externas:** Possibilita a conexão com outras fontes de dados e serviços, expandindo as funcionalidades do aplicativo e oferecendo informações relevantes de diversas fontes.
*   **📰 Notícias:**
    *   Exibe as últimas notícias e acontecimentos relevantes para a comunidade acadêmica.
    *   Permite a visualização detalhada de cada notícia, com informações sobre data, autor e conteúdo completo.
    *   Oferece a opção de compartilhar notícias em redes sociais, incentivando o engajamento e a disseminação de informações.
*   **📅 Eventos:**
    *   Apresenta uma lista de eventos futuros, como palestras, workshops, seminários e atividades culturais.
    *   Permite a visualização de detalhes de cada evento, incluindo data, hora, local, descrição e palestrantes.
    *   Possibilita o cadastro em eventos, facilitando a participação da comunidade acadêmica.
*   **👤 Perfil:**
    *   Permite que os usuários criem e personalizem seus perfis, adicionando informações como nome, foto, curso e interesses.
    *   Facilita a interação entre os membros da comunidade acadêmica, promovendo a troca de conhecimentos e experiências.
*   **🔔 Notificações:**
    *   Envia notificações aos usuários sobre novas notícias, eventos e outras informações relevantes.
    *   Garante que a comunidade acadêmica se mantenha informada sobre os acontecimentos mais importantes.

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto foi organizada de forma clara e modular, facilitando a manutenção e o desenvolvimento futuro do aplicativo:

```bash
├── assets              # Contém imagens, ícones e outros arquivos estáticos 🖼️
├── components          # Componentes reutilizáveis da interface do usuário 🧩
├── config              # Arquivos de configuração do aplicativo ⚙️
├── hooks               # Hooks personalizados para lógica de negócios 🪝
├── navigation          # Configuração da navegação entre as telas 🧭
├── node_modules        # Dependências do projeto 📦
├── providers           # Provedores de contexto para gerenciamento de estados ♻️
├── screens             # Telas individuais do aplicativo 📱
├── utils               # Funções utilitárias e helpers 🛠️
├── .env                # Arquivo de variáveis de ambiente 🤫
├── .gitignore          # Arquivo com padrões para ignorar arquivos no Git 🙈
├── App.js              # Ponto de entrada do aplicativo 🚀
├── app.json            # Arquivo de configuração do Expo 📝
├── LICENSE             # Arquivo de licença do projeto 📜
├── README.md           # Arquivo com informações sobre o projeto 📖
├── app.config.js       # Arquivo de configuração do Expo 🛠️
├── babel.config.js     # Arquivo de configuração do Babel ⚙️
├── metro.config.js     # Arquivo de configuração do Metro ⚙️
├── package-lock.json   # Arquivo com informações sobre as versões das dependências 📌
├── package.json        # Arquivo com informações sobre o projeto e suas dependências 📦
└── yarn.lock           # Arquivo com informações sobre as versões das dependências (Yarn) 📌

```

## 📋 Pré-requisitos

Para executar o aplicativo localmente, você precisará ter as seguintes ferramentas instaladas:

*   **Node.js** e **npm** (ou **Yarn**) ⚙️
*   **Expo CLI:** `npm install -g expo-cli` ou `yarn global add expo-cli` 🛠️

### Passos para rodar o projeto

1.  Clone o repositório ⬇️:

    ```bash
    git clone [https://github.com/archwes/campus-cultural.git](https://github.com/archwes/campus-cultural.git)
    ```

2.  Instale as dependências 📦:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

3.  Inicie o aplicativo com o Expo ▶️:

    ```bash
    npx expo start
    ```

    ou

    ```bash
    yarn expo start
    ```

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE.md](LICENSE.md). 📜

-----

Desenvolvido com ❤️ durante a disciplina de Oficina de Integração 2 // UTFPR - Câmpus Dois Vizinhos 🎓
