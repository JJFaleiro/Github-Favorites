//API (Pense em uma caso e na sua campainha(interface) - ao você apertar na interface - alguém irá levantar na casa para te atender) - Algum local que você irá acessar que irá te retornar dados
//https://api.github.com/users/diego3g (Isto retorna um valor JSON - teste para ver como funciona) - neste caso é uma API endpoint (ponto final)
//Aqui iremos capturar os dados da API do GitHub
//Aqui estamos utilizando a palavra reservada export pórem não necessariamente iremos utilizar em um import - e só para caso for necessário fica mais fácil de utilizala fora deste arquivo
export class GithubUser {
  //static - ideia do JS para + nome da função (recebendo como argumento - username)
  //Ao colocar o método estático eu não preciso utilizar o new para acessar classe e assim acessar a função - eu posso simplesmente utilizar desta forma GithubUser.search('maykbrito').then(user => console.log(user)) em outra classe pelo nome da classe.função
  static search(username) {
    //Ou seja estou criando uma variável chamada endpoint (que significa o local onde irei chegar com a aplicação) e estou interpolando com o argumento que irá ser recebido ao chamar esta função
    const endpoint = `https://api.github.com/users/${username}`

    //Aqui estou retornando o valor que será buscado pelo fetch que tem como funcionalidade como vimos antes de capturar em qualquer local interno ou externo(internet) e capturar o valor - e então (then) - eu pego este dado e transformo este dado em .json (que será a forma como iremos trabalhar este dado na aplicação) - e então novamente - pegue este dado e o retorne em formato de objeto com os seguintes atributo e valores
    return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))

    //Da forma acima está desestruturado - ou seja ao inves de utilizar o data que já está em json eu só pego os dados que eu quero de dentro dele e transformo em valores para sereme utilizados em propriedades dentro de um objeto( que estão em short-and ou seja não precisamos colocar os valores pois eles já estão na ordem) - ficar atento apenas a ordem
    /* data => (
      {
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers

      }
    )*/
    //Acima está sendo utilizado um group operator ((que são os parenteses))
    //Acima está sendo utilizado um group operator ((que são os parenteses))
    //Pode ser escrito assim também: data => { return {} }
  }
}
