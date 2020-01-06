# Protractor Tests - Ticto

Primeiramente, execute o arquivo `package.json` para que seja possível instalar o [Protractor](https://www.protractortest.org/) e todas as suas dependências:

`npm install`

O comando acima irá instalar duas ferramentas de linha de comando: `protractor` e `webdriver-manager`.

O `webdriver-manager` é uma ferramenta para obter facilmente uma instância de um Selenium Server em execução. Use-o para baixar os binários necessários com:

`webdriver-manager update`

Para iniciar o servidor, execute:

`webdriver-manager start`

Para rodar os testes, execute o comando:

`protractor conf.js`

Para mais informações sobre a criação e execução dos testes, acesse a página de [Tutorial](https://www.protractortest.org/#/tutorial) do Protractor.
