## Alguns comandos em *JavaScript*

### Separação de comandos e comentários

|   Os comandos em *JS* são separados por *ponto e vírgula, ";"*, e comentários não interpretados são inseridos por *" // "* antes de cada comando, ou por *" /*....*/ "*, para comentários mais extensos.

### Estrutura



### Saída de dados

|   Pode parecer meio estranho a *saída* de dados como um primeiro elemento a se avaliar. Contudo, é necessário sua explicação prévia, já que a saída refletirá a resposta do interpretador no *Editor JS*. Os dados são exibidos no *Console* ou diretamente na tela. O *Editor JS* foi concebido para a exibição em *Console*. Para isso, utiliza-se o comando:

```{js}
console.log("...exemplo: saída no console");
```


|   Uma alternativa é a exibição na tela. Experimente o código abaixo no *Editor JS*.

```{js}
document.body.appendChild(document.createTextNode("...resultado na tela !"));
```

|   Apesar de não ocorrer em erro, o *Editor JS* foi concebido apenas para a saída por *Console*, não possibilitando a saída direta na tela.

### Declaração de variáveis

|   Uma vez definida a saída com o comando *console.log()*, cabe agora definir as formas de entrada de variáveis. Nominalmente, há 3 modos principais: *const, var, e let*, exemplificados abaixo:


```{js}
const a = 5; // variável constante (não se altera ao longo do código)
let valor = 10; // variável que pode alterar seu valor no código
var b = 7; // forma de inserção de variável em versões menos recentes,
           // sendo recomendada para browsers mais antigos (2015).

console.log(a*b/valor)
```


|   Outro exemplo, com inserção de texto antes do resultado:


```{js}
let a = 5;
const b = 10;

let resultado = a + b;
console.log("Soma de a + b:", resultado);

```


|   E mais um, combinando resultado e texto, e com sintaxe ligeiramente diferente.

```{js}
var a = 5;
var b = 7;

console.log("Produto a*b = " + a * b);
```


### Tipos de dados

|   Como é comum para outras linguagens, *JavaScript* possui alguns tipos comuns para definição de dados. Para uso de `Plotly.js`, são bem significativos:

```{r, eval=FALSE}
Number # número
String # texto: representado entre aspas ( " " )
Boolean # true/false ("branching")
Object  # internos (built-in) ou externos (user-defined)
  Built-in # objects, arrays, dates, maps, etc
  ...

```

|   Seguem alguns exemplos práticos:

```{js}
// Numbers:
let comprimento = 116;
let peso = 75;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const membro = {firstName:"John", lastName:"Doe"};

    // Array object:
    const carros = ["Saab", "Volvo", "BMW"];

    // Date object:
    const datas = new Date("2022-03-25");

// Resultados:
// Numbers:
let comprimento = 116;
let peso = 75;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const membro = {firstName:"John", lastName:"Doe"};

    // Array object:
    const carros = ["Saab", "Volvo", "BMW"];

    // Date object:
    const datas = new Date("2022-03-25");

// Saídas:
console.log(comprimento, peso, color, lastName, x, y, membro, carros, datas)
```


### Constantes


|   Por vezes é necessária a inserção de constantes matemáticas em equações para plotagem. Seguem alguns exemplos. Para a saída no *Editor JS* é necessária a linha *console.log(constante)*:

```{js}
Math.PI - valor de (pi), aproximadamente 3.14159
Math.E - valor da constante de Euler, aproximadamente 2.71828
Math.LN2 - logaritmo natural de 2, aproximadamente 0.693
Math.LN10 - logaritmo natural de 10, aproximadamente 2.302
Math.LOG2E - logaritmo de e na base 2, aproximadamente 1.442
Math.LOG10E - logaritmo de e na base 10, aproximadamente 0.434
Number.MAX_VALUE - maior número positivo
Number.MIN_VALUE - menor número positivo...
```

|   Para constantes naturais, contudo, é necessário defini-las antecipadamente, como em:

```{js}
// Definindo constantes físico-químicas comuns
const Avogadro = 6.02214076e23;  // Número de Avogadro (mol⁻¹)
const Boltzmann = 1.380649e-23;  // Constante de Boltzmann (J/K)
const Planck = 6.62607015e-34;   // Constante de Planck (J·s)
const gas = 8.31446;    // Constante dos gases (J/(mol·K))
const luz = 299792458; // Velocidade da luz no vácuo (m/s)
```



### Aritmética

|   Diversas operações matemáticas são possíveis, quer pelo *JavaScript* puro, quer pela instalação de bibliotecas específicas, tais como *mathjs* ou *numjs*. Seguem algumas operações básicas:


```{js}
let resultado = 0;

// Adição básica
resultado = 5 + 3;  // 8

// Subtração
resultado = 10 - 4;  // 6

// Multiplicação
resultado = 6 * 7;  // 42

// Divisão
resultado = 20 / 5;  // 4

// Módulo (resto da divisão)
resultado = 17 % 3;  // 2

// Exponenciação
resultado = 2 ** 3;  // 8 (2³)

// Incremento
let contador = 5;
contador++;  // contador = 6

// Decremento
let decrementar = 8;
decrementar--;  // decrementar = 7

// Operador de atribuição com adição
let soma = 10;
soma += 5;  // soma = 15

// Operador de atribuição com subtração
let diferenca = 20;
diferenca -= 7;  // diferenca = 13

// Operador de atribuição com multiplicação
let produto = 3;
produto *= 4;  // produto = 12

// Operador de atribuição com divisão
let quociente = 24;
quociente /= 3;  // quociente = 8

// Raiz quadrada
resultado = Math.sqrt(25);  // 5

// Valor absoluto
resultado = Math.abs(-15);  // 15

// Arredondamento para baixo
resultado = Math.floor(7.8);  // 7

// Arredondamento para cima
resultado = Math.ceil(7.2);  // 8

// Arredondamento para o inteiro mais próximo
resultado = Math.round(9.4);  // 9

// Máximo entre dois números
resultado = Math.max(42, 27);  // 42

// Mínimo entre dois números
resultado = Math.min(42, 27);  // 27

// Cálculo de seno (em radianos)
resultado = Math.sin(Math.PI / 2);  // 1 (seno de 90°)
```


### Arrays

|   Um *array* em *JavaScript* representa uma estrutura de dados para armazenamento de elementos ordenados. Esses elementos podem envolver qualquer tipo de dado, como números, strings, objetos, etc. Na prática, um *array* pode ser criado, acessado, ou filtrado, ou mapeado. Seguem exemplos:


#### Criação

```{js}
const numeros = [1, 2, 3, 4, 5];
const cores = ['vermelho', 'verde', 'azul'];
```

#### Acesso

```{js}
console.log(numeros[0]);
console.log(cores[2]);
```


#### Mapeamento (`map`)

```{js}
const quadrados = numeros.map(numero => numero * numero);
console.log(quadrados);
```

```{js}
 const x = [0, 1, 2, 3, 4];
 const y = x.map(valor => Math.pow(2, valor))
 console.log(y);
```


```{js}
const Vmax = 100;
const Km = 10;
const S_values = Array.from({length: 10}, (_, i) => i * 5);

const V_values = S_values.map(S => (Vmax * S) / (Km + S));

console.log("Valores de S:", S_values);
console.log("Valores de V:", V_values);
```

#### Filtragem

```{js}
const pares = numeros.filter(numero => numero % 2 === 0);  // (`filter`)
console.log(pares);

numeros.forEach(numero => console.log(numero * 2));  // `forEach()`
```


### Funções

|   Funções constituem um bloco de códigos para efetuar alguma ação. Em *JavaScript* uma função possui a seguinte sintaxe:

```{js}
function nome(parâmetro1, parâmetro2, parâmetro3) {
  // código parar execução
}
```


|   Seguem alguns exemplos de funções.


```{js}
function soma(a) { // define o nome e os "parâmetros" da função
 return a + a // define os argumentos da função (no caso, a*a),
            // pra retorna dos valores
}

// Teste
let x = soma(7); // aplica parâmetros
console.log(x) // saída da função
```


```{js}

function expoente(a, b) { // define o nome e os "parâmetros" da função
  return a ** b;  // define os argumentos da função (no caso, a^b),
                  // pra retorna dos valores
}

// Teste da função
let x = expoente(4, 3); // aplica parâmetros
console.log(x);         // saída da função

```



```{js}
function indexa(vetor){
 return vetor + 1
}

var vetor = [1, 2, 3, 4, 5];
console.log(indexa(vetor))
```


```{js}
function Celsius(Fahrenheit) {
  return (5/9) * (Fahrenheit-32);
}

let conversao = Celsius(115);
console.log(conversao)
```


#### Funções de seta (arrow functions)

|   Uma notação alternativa é a função *arrow*, que abrevia a sintaxe correlata. Segue exemplo:


```{r, eval=FALSE}
const multiplica = (a, b) => a * b;
console.log(multiplica(4, 6));
```



### Geração de números aleatórios

|   Pode-se gerar números aleatórios a partir de zero, a um máximo, ou entre limites. Na verdade, a função *Math.random* da linguagem gera números pseudoaleatórios por um algoritmo determinístico. Seguem exemplos.


```{js}
// Número entre 0 e 1

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
```


```{js}
// Número entre 0 e um valor máximo:

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(10)); // Gera um número entre 0 e 9
```

```{js}
// Entre um valor mínimo e um máximo

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(1, 10)); // Gera um número entre 1 e 10
```


### Objetos

|   Em princípio, um objeto *JavaScript* envolve uma coleção de propriedades, onde cada propriedade é definida por um par chave-valor, permitindo uma representação ordenada de elementos. Objetos podem conter diferentes tipos de dados como valores, como números, strings, booleanos, arrays, outras funções e até mesmo outros objetos. Objetos criados são facilmente acessados por seus atributos. Seguem exemplos.

#### Criação

```{r, eval=FALSE}
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};
```

#### Acesso

```{r, eval=FALSE}
console.log(pessoa.nome);
console.log(pessoa['idade']);
```

#### Atributos

```{r, eval=FALSE}
pessoa.profissao = 'Engenheiro';
console.log(pessoa);
```

|   Para um exemplo fechado de objetos:

```{js}
let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  hobbies: ["leitura", "música", "jogos"],
  endereco: {
    rua: "Rua Principal, 123",
    cidade: "São Paulo",
  },
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

console.log(pessoa.nome); // Saída: "João"
console.log(pessoa.hobbies[0]); // Saída: "leitura"
pessoa.saudacao(); // Saída: "Olá, meu nome é João"
```


### Operadores de atribuição

|   Bastante comuns em linguagens de programação, um operador de atribuição (*assignment operator*) permite a execução do fluxo do algoritmo por atribuição de valores, ou por premissa satisfeita à comparações. São frequentemente utilizados junto a *estruturas de controle*, discutidas a seguir. Em *JavaScript* os operadores mais comuns são dados abaixo, com exemplos:

```{r, eval=FALSE}
## Objetos
=  # ex: x = y
+= # ex: x += y; x = x +y - outros operadores (-, /, *, **, %)

## Bitwise (bit a bit)

&= # ex: x &= ; x = x & y
&= # ex: x &= y 	x = x & y
^= # ex: x ^= y 	x = x ^ y

## Lógicos

&&=  # ex:	x &&= y 	x = x && (x = y) - AND
||=  # ex: x ||= y 	x = x || (x = y) - OR



```


### Estruturas de controle


|    Assim como para linguagens diversas, estruturas de controle em *JavaScript* direcionam o fluxo de execução do código (ordem, condições). Os fluxos de controle mais comuns são os *condicionais* e de *repetição* :

```{js}
// Condicionais

if  // executa um bloco de código se uma condição for verdadeira
else  // executa um bloco de código se a condição do if for falsa
else if   // verifica múltiplas condições em sequência
switch // executa diferentes blocos de código com base no valor de uma expressão

// Repetição ("looping")

for   // repete um bloco de código um número específico de vezes
while  // repete um bloco de código enquanto uma condição for verdadeira
do...while  // Repete um bloco de código pelo menos uma vez, e continua repetindo enquanto uma condição for verdadeira
for...in  // realiza uma iteração sobre as propriedades do objeto
for...of  // realiza uma iteração sobre os valores de um objeto iterável (como arrays)
```

|   Seguem exemplos:

```{js}

// if

let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

```{js}
// else

let idade = 15;
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

```{js}

// else if
let nota = 75;
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}
```

```{js}

// switch

let dia = "segunda";
switch (dia) {
  case "segunda":
    console.log("Dia de trabalho.");
    break;
  case "sábado":
    console.log("Dia de descanso.");
    break;
  default:
    console.log("Dia comum.");
}
```

```{js}
// for

for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

```{js}
// while

let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
```

```{js}
// do...while

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

```{js}
// for...in

let pessoa = { nome: "João", idade: 30 };
for (let propriedade in pessoa) {
  console.log(propriedade + ": " + pessoa[propriedade]);
}
```

```{js}
// for...of

let numeros = [1, 2, 3];
for (let numero of numeros) {
  console.log(numero);
}
```
