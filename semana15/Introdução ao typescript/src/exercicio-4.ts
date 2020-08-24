type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//Exercício 4
//a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?
// Com o comando tsc exercicio-4.ts.

//b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
// Utilizando o comando tsc ./src/exercicio-4.ts

//c)Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// Utilizando o comando tsc --init, configurar o tsconfig.json e depois utilizar somente o comando tsc no terminal.

//d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). 
//Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?

// O target passa de es5 para es6, o module, sourceMap, outDir, rootDir, removeComments e noImpicitAny, inicialmente estão comentados, tivemos que descomentar para utilizar configurações
// específicas.