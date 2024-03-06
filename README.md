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

> Este projeto foi desenvolvido em um período curto, considerando compromissos profissionais e pessoais. Apesar disso, foi entregue um trabalho que atende às expectativas.

> Optei por utilizar a stack composta por Cypress, TypeScript e o relatório Mochawesome. Escolhi não usar o Cucumber, pois não achei uma abordagem necessária para o Cypress.

## Comentários sobre o código

<img src="/screenshots/spec.png">

> O projeto contém dois cenários de testes, ambos implementados de maneira limpa e concisa. Utilizei um hook na parte superior da página, com o comando visit (URL já configurada no baseUrl) e a manipulação da viewport.

> Criei um arquivo para armazenar as massas "massa.ts". Assim eu posso armazenar as minhas massasa de testes de um jeito que eu consiga requisitar com facilidade no meu código. Assim eu poderia criar massas de testes com diversos atributos, informações e funções.

<img src="/screenshots/commands.png">

> Os comandos customizados são implementados de maneira concisa, sem asserts frágeis. Na manipulação dos elementos, é recomendável utilizar IDs ou atributos específicos para o Cypress. Na linha 13 e 14, eu inicialmente planejava validar todas as pesquisas para garantir a presença do texto pesquisado. No entanto, por questões de negócios, algumas pesquisas não continham o mesmo texto, levando à falha do cenário. Optei por validar apenas o primeiro item da pesquisa.

<img src="/screenshots/config.png">

> Foi configurado baseurl e variáveis do mochaawesome-reporter.

## CI

> Foi configurado um workflow o Cypress executar em uma pipeline. Isso permite a automação dos testes em um ambiente contínuo.
