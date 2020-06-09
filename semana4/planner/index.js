const valorInput = document.getElementById("input-tarefa")
const diaSemana = document.getElementById("select")
const tarefaSegunda = document.getElementById("tarefa-segunda")
const tarefaTerca = document.getElementById("tarefa-terca")
const tarefaQuarta = document.getElementById("tarefa-quarta")
const tarefaQuinta = document.getElementById("tarefa-quinta")
const tarefaSexta = document.getElementById("tarefa-sexta")
const tarefaSabado = document.getElementById("tarefa-sabado")
const tarefaDomingo = document.getElementById("tarefa-domingo")


function enviarTarefa (){
    if (valorInput.value === "") {
        alert("O campo não pode estar em branco!")
    }
    else if (diaSemana.value === "segunda-feira"){
        tarefaSegunda.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    } else if (diaSemana.value === "terca-feira"){
        tarefaTerca.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    } else if (diaSemana.value === "quarta-feira"){
        tarefaQuarta.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    } else if (diaSemana.value === "quinta-feira"){
        tarefaQuinta.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    } else if (diaSemana.value === "sexta-feira"){
        tarefaSexta.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    } else if (diaSemana.value === "sabado"){
        tarefaSabado.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    } else if (diaSemana.value === "domingo"){
        tarefaDomingo.innerHTML += `<li id="tarefa-adicionada">${valorInput.value}</li>`
        valorInput.value = ""
    }  
}

function riscar () {
    tarefaSegunda.innerHTML = `<u> ${valorInput.value} </u>`
}

