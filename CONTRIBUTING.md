# Como contribuir com o projeto

Segue abaixo um pequeno texto para lhe ajudar a entender como pode ajudar este projeto.

- [Instalando o projeto](#instalando-o-projeto)
- [Reportando Issues](#reportando-issues)
- [Submetendo Pull Requests](#submetendo-pull-requests)

## Instalando o projeto

Para abrir um pull-request, primeiramente crie um fork do projeto para a sua conta, então clone o projeto em sua maquina:

`git clone git@github.com:seu-usuario/partidos-promise.git`

Em seguida baixe os modulos necessários com:

`npm install`

Agora pronto, você já pode começar a contribuir com o projeto!

Se não tiver ideia de começo começar a participar, de uma olhada em nossos [projetos](https://github.com/Otoru/partidos-promise/projects/) e busque onde você pode ajudar.

## Reportando Issues

Você pode criar uma issue [aqui](https://github.com/otoru/partidos-promise/issues), mas, lembre-se de ser claro e informar o máximo de detalhes possíveis.

## Submetendo Pull Requests

- Crie pull requests pequenos, para que a revisão seja feita mais facilmente.
- Inclua detalhes do que está sendo feito na descrição.
- Altera a documentação se for necessário.
- Verifique se todos os testes estão passando localmente.
- Adicione suas informações como contribuidor do projeto.
- Utilizamos [commitizen](https://github.com/commitizen/cz-cli) para padronização dos commits.

### Modificando as versões do projeto

Uma alteração no master irá realizar o deploy de uma nova versão da aplicação no NPM, por isso, cada alteração deve ser seguida de uma alteração de versão. Para fazer a mesma, use os comandos abaixo:

- `npm version patch` para uma correção realizada no projeto. Ou seja, não tivemos qualquer alteração no comportamento da biblioteca.
- `npm version minor` entrega de uma nova funcionalidade, sem modificar funcionamento de outras.
- `npm version major` quando alteramos o comportamento de funcionalidades já existentes.
