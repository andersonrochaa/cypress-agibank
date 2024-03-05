```bash
git clone https://github.com/andersonrochaa/cypress-agibank.git
```

## Pré-requisitos

É necessário usar o node e o npm para rodar essa aplicação.

> Foi usado a versão `v20.11.1` para o node e  `10.2.4` para o npm.

## Como rodar o projeto

> Baixar as dependências do projeto:
```bash
npm install
```
> Abrir cypress:
```bash
npx cypress open
```

## Considerações sobre o projeto

> Tentei realizar o projeto em um tempo hábil curto por conta de obrigações profissionais e pessoais, mas tenho certeza que conclui um ótimo trabalho.
> Escolhi o uso de uma stack interessante: cypress, typescript, mochaawesome reporter. Optei por não usar o cucumber, não acho uma abordagem interessante com o cypress.

## Comentários sobre o código

<img src="/screenshots/spec.png">
> Criei 2 cenários de testes, os 2 figaram com uma implementação muito clean e curta. Usei um hook no top da página, com o visit (url já configurado no baseUrl) e a manipulação da viewport.
> Não usaria strings marretadas para serem os parâmetros das funções, criaria um objeto ou um json para fazer armazenamento dessas informações. Mas como eram apenas 2 informações achei que não era preciso
> criar um outro arquivo para manipular as massas de teste.

<img src="/screenshots/commands.png">
> Aqui está os comandos customizáveis: todos eles com uma implementação curta e simples, onde não possuem asserts frágeis. Sobre o mapeamento dos elementos é preferível termos ID's ou atributos específicos para o cypress, oque não ocorreu. Na linha 13 e 14 seria uma validação onde ele percorreria a listagem de todas as pesquisas e validaria se ele continha o texto pesquisado, mas por motivos de negocio vinham pesquisas que não continham o mesmo texto. Fazendo com que ocenário falhasse. Optei por validar o primeiro item da pesquisa.

<img src="/screenshots/config.png">
> Foi configurado baseurl e variáveis do mochaawesome-reporter.

> Foi-se configurado um workflow para o cypress rodar em uma pipeline.
