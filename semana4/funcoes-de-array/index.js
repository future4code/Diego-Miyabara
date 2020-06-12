const campoValor = document.getElementById("campo-valor")
const campoTipo = document.getElementById("campo-tipo")
const campoDescricao = document.getElementById("campo-descricao")
const resultadoCadastro = document.getElementById("resultado-cadastro")
const resultadoFiltro = document.getElementById("resultado-filtro")
const resultadoExtrato = document.getElementById("recebe-extrato")

const arrayCadastro = []

function cadastrarDespesa() {
    const cadastro = {
    valor: parseInt(campoValor.value),
    tipo: campoTipo.value,
    descrição: campoDescricao.value
    }
    
    if ((campoValor.value !== "") && (campoTipo.value !=="") && (campoDescricao.value !== "")){
        arrayCadastro.push(cadastro)
        resultadoCadastro.innerHTML += `<h3>Despesa:</h3><div>Valor: R$${cadastro.valor}</div> <div>Tipo: ${cadastro.tipo}</div> <div>Descrição: ${cadastro.descrição}</div>`
    }else {
        alert ("Os campos não podem estar vazios")
    }

    campoValor.value = "" 
    campoTipo.value = ""
    campoDescricao.value = ""
}

function fitrarDespesa() {
    const tipoCasa = arrayCadastro.filter((cadastro, index, array) => {
        return cadastro.tipo === "casa"   
    })
 
    tipoCasa.forEach ((cadastro, index, array) => {
        cadastro.valor = arrayCadastro.valor
    })
    console.log(tipoCasa)
       
}

function limparFitro() {
    resultadoFiltro.innerHTML = ""
}

function gerarExtrato() {
   
}

