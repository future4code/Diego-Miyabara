import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const guardaTarefa = {
      tarefas: this.state.tarefas,
    }
    localStorage.setItem("tarefa", JSON.stringify(guardaTarefa))
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("tarefa")
    const tarefaObjeto = JSON.parse(tarefaString)
    console.log(tarefaObjeto.tarefas)
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaListaTarefas})
    this.setState({inputValue: ""})
  }

  removeTarefa = (id) => {
      if (window.confirm('Tem certeza que deseja deletar essa mensagem?')){
        this.setState({tarefas: this.state.tarefas.filter((tarefa) => {
          if(tarefa.id !== id){
            return true
          } else{
            return false
          }
        })}) 
      }     
  }
    
  selectTarefa = (id) => {
    const clickTarefa = this.state.tarefas.map((tarefa) => {
      if(tarefa.id === id){
        return {...tarefa, completa:!tarefa.completa}
      }
      return tarefa
    })
    this.setState({tarefas: clickTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick= {() => this.removeTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
