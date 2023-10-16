
// ----------------------------Arrays-----------------------------

// Função para somar os elementos de um array
function somaArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
  
  // Função para encontrar o maior número em um array
  function maiorNumero(arr) {
    return Math.max(...arr);
  }
  
  // Função para calcular a média dos valores em um array
  function mediaArray(arr) {
    if (arr.length === 0) return 0;
    const soma = somaArray(arr);
    return soma / arr.length;
  }
  
  // ---------------------Objetos-------------------------
  
  // Função para contar as propriedades de um objeto
  function contarPropriedades(obj) {
    return Object.keys(obj).length;
  }
  
  // Função para juntar dois objetos
  function juntarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  // Função para encontrar uma propriedade em um objeto
  function encontrarPropriedade(obj, chave) {
    return obj[chave];
  }
  
  // ----------------------Promises----------------------
  
  // Função para criar uma Promise com atraso de 1 segundo
  function delayedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promessa resolvida após 1 segundo');
      }, 1000);
    });
  }
  
  // Função para fazer uma solicitação HTTP e retornar uma Promise
  function fetchData(url) {
    return fetch(url).then((response) => response.json());
  }
  
  // Função para gerar um número aleatório após um atraso de 2 segundos
  function gerarNumeroAleatorio() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const numeroAleatorio = Math.random();
        resolve(numeroAleatorio);
      }, 2000);
    });
  }
  
  // --------------------------Timeout-------------------------------
  
  // Função para executar uma função após um atraso
  function executarAposTempo(funcao, tempo) {
    return setTimeout(funcao, tempo);
  }
  
  // Função para cancelar a execução de um timeout
  function cancelarExecucao(timeoutId) {
    clearTimeout(timeoutId);
  }
  
  // Função para executar uma função em intervalos de tempo
  function intervaloPersonalizado(funcao, intervalo) {
    return setInterval(funcao, intervalo);
  }
  
  // -------------------Interval--------------------------
  
  // Função para iniciar um contador a cada segundo
  function contadorInterval() {
    let contador = 1;
    const intervalId = setInterval(() => {
      console.log(contador);
      contador++;
      if (contador > 10) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  // Função para parar o contador
  function pararContador(intervalId) {
    clearInterval(intervalId);
  }
  
  // Função para gerar números aleatórios a cada 500 milissegundos
  function gerarNumerosAleatorios() {
    const intervalId = setInterval(() => {
      const numeroAleatorio = Math.random();
      console.log(numeroAleatorio);
    }, 500);
    return intervalId;
  }
  
  //------------------- Desestruturação e Arrays-----------------------
  
  // Função para retornar o primeiro e o último elemento de um array
  function primeiroEUltimo(arr) {
    const [primeiro, ...resto] = arr;
    const ultimo = resto.pop();
    return [primeiro, ultimo];
  }
  
  // Função para extrair idades de um array de objetos
  function extrairInfo(arr) {
    return arr.map((obj) => obj.idade);
  }
  
  // Função para separar números pares e ímpares de um array
  function separarArrays(arr) {
    const pares = arr.filter((num) => num % 2 === 0);
    const impares = arr.filter((num) => num % 2 !== 0);
    return { pares, impares };
  }
  
  // ---------------Desestruturação e Objetos------------------
  
  // Função para formatar informações de uma pessoa
  function infoPessoa(pessoa) {
    const { nome, idade, cidade } = pessoa;
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
  }
  
  // Função para extrair id e email de um objeto de usuário
  function desestruturarUsuario(usuario) {
    const { id, email } = usuario;
    return { id, email };
  }
  
  // Função para formatar informações de um livro
  function informacoesLivro(livro) {
    const { titulo, autor, ano } = livro;
    return `O livro ${titulo} foi escrito por ${autor} em ${ano}`;
  }
  
  // --------------------Rest e Spread-------------------------
  
  // Função para concatenar arrays usando spread
  function concatenarArrays(...arrays) {
    return [].concat(...arrays);
  }
  
  // Função para somar números usando argumentos variáveis
  function somaNumeros(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
  }
  
  // Função para mesclar objetos usando spread
  function mesclarObjetos(...objetos) {
    return objetos.reduce((resultado, objeto) => ({ ...resultado, ...objeto }), {});
  }
  