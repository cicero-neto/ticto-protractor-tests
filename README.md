# Protractor Tests - Ticto

### **Instalação**

Primeiramente, execute o arquivo `package.json` para que seja possível instalar o [Protractor](https://www.protractortest.org/) e todas as suas dependências:

`npm install`

O comando acima irá instalar duas ferramentas de linha de comando: `protractor` e `webdriver-manager`.

O `webdriver-manager` é uma ferramenta para obter facilmente uma instância de um Selenium Server em execução. Use-o para baixar os binários necessários com:

`webdriver-manager update`

### **Execução**
Para iniciar o servidor, execute:

`webdriver-manager start`

Para rodar todos os testes, execute o comando:

`protractor conf.js`

Para rodar uma suíte de teste, execute o comando:

`protractor conf.js --suite nomeDaSuite`

É possível passar os parâmetros de usuário e senha através do comando:

`protractor conf.js --params.login.user=example@gmail.com --params.login.password=foobar`

Para mais informações sobre a criação e execução dos testes, acesse a página de [Tutorial](https://www.protractortest.org/#/tutorial) do Protractor.

### **Teste na nuvem com Browserstack**
É necessário criar uma conta no [Browserstack](https://www.browserstack.com/) para executar os testes

Dentro da pasta `/conf` existem 4 arquivos: `local.conf.js` (para testes locais), `single.conf.js` (para testes simples), `parallel_local.conf.js` (para testes paralelos locais), `parallel.conf.js` (para testes paralelos).

### **Execução do teste na nuvem**

Para rodar os testes na nuvem, execute o comando:

`protractor conf/[nome do arquivo].conf.js`

Os arquivos são baseados nos [arquivos](https://github.com/browserstack/protractor-browserstack) do GitHub da Browserstack.
