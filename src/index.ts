const prompt = require("prompt-sync")();

interface Pessoa {
  nome: string;
  email: string;
  idade: number;
  sexo: string;
}

function cadastrarPessoa(): Pessoa {
  const nome = prompt("Digite o nome: ") || "";
  const email = prompt("Digite o email: ") || "";
  const idade = Number(prompt("Digite a idade: ")) || 0;
  const sexo = prompt("Digite o sexo: ") || "";

  const pessoa: Pessoa = {
    nome: nome,
    email: email,
    idade: idade,
    sexo: sexo,
  };
  return pessoa;
}

function exibirLista(lista: Pessoa[]): void {
  console.log("Lista de pessoas cadastradas:");
  lista.forEach((pessoa, index) => {
    console.log(`${index + 1}. ${pessoa.nome}`);
  });
}

function main(): void {
  const pessoas: Pessoa[] = [];
  const quantidadePessoas = 3; // Defina aqui a quantidade de pessoas a serem cadastradas

  console.log("=== Cadastro de Pessoas ===");
  for (let i = 0; i < quantidadePessoas; i++) {
    console.log(`\nCadastro ${i + 1}:`);
    const pessoa = cadastrarPessoa();
    pessoas.push(pessoa);
  }

  exibirLista(pessoas);
}

main();
