import React from 'react';
import { render, wait, findByTestId, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect"
import App from './App';
import axios from 'axios';


describe("Renderização inicial", () => {
  test("Renderização do Título", () => {
    const {getByText} = render(<App />)
    expect(getByText(/Weekly Planner/)).toBeInTheDocument()
  })
  test("Renderização input", () => {
    const {getByPlaceholderText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/)
    expect(input).toBeInTheDocument()
  })
  test("Renderização select", () => {
    const {getByTestId} = render(<App />)
    const select = getByTestId(/select/i)
    expect(select).toBeInTheDocument()
  })
  test("Renderização Botão Enviar Tarefa", () => {
    const {getByText} = render(<App />)
    const button = getByText(/Enviar tarefa/i)
    expect(button).toBeInTheDocument()
  })
  test("Renderização dias da semana", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle(/weektasks/i)).toBeInTheDocument()
  })
  test("Renderização div segunda-feira", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("segunda")).toBeInTheDocument()
  })
  test("Renderização div terca-feira", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("terca")).toBeInTheDocument()
  })
  test("Renderização div quarta-feira", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("quarta")).toBeInTheDocument()
  })
  test("Renderização div quinta-feira", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("quinta")).toBeInTheDocument()
  })
  test("Renderização div sexta-feira", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("sexta")).toBeInTheDocument()
  })
  test("Renderização div sabado", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("sabado")).toBeInTheDocument()
  })
  test("Renderização div domingo", () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle("domingo")).toBeInTheDocument()
  })
  test("Renderização tarefas", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    const {} = render(<App />)
    await wait(() => {expect(axios.get).toHaveBeenCalled()})
  })

  test("Renderização tarefas segunda", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Segunda",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })

  test("Renderização tarefas terca", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Terca",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })

  test("Renderização tarefas quarta", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Quarta",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })

  test("Renderização tarefas quinta", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Quinta",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })

  test("Renderização tarefas sexta", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Sexta",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })

  test("Renderização tarefas sabado", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Sabado",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })

  test("Renderização tarefas domingo", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      day: "Domingo",
      text: "InTech",
      id: "aymbiMnhalsc3iXObTM9"
    }]})
    const {findByText} = render(<App />)
    const task = await findByText("InTech")
    expect(task).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara")
  })
})

describe("Teste de funcionalidades", () => {
  test("Criar tarefa segunda", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste segunda")})
    userEvent.selectOptions(select, "Segunda")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Segunda",
      text: "Tarefa teste segunda"
    })

    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Criar tarefa terca", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste terca")})
    userEvent.selectOptions(select, "Terca")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Terca",
      text: "Tarefa teste terca"
    })
    
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Criar tarefa quarta", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste quarta")})
    userEvent.selectOptions(select, "Quarta")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Quarta",
      text: "Tarefa teste quarta"
    })
    
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Criar tarefa quinta", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste quinta")})
    userEvent.selectOptions(select, "Quinta")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Quinta",
      text: "Tarefa teste quinta"
    })
    
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Criar tarefa sexta", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste sexta")})
    userEvent.selectOptions(select, "Sexta")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Sexta",
      text: "Tarefa teste sexta"
    })
    
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Criar tarefa sabado", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste sabado")})
    userEvent.selectOptions(select, "Sabado")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Sabado",
      text: "Tarefa teste sabado"
    })
    
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Criar tarefa domingo", async () => {
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
    const input = getByPlaceholderText(/Nome da tarefa/i)
    const select = getByTestId("select")
    const button = getByText(/Enviar tarefa/i)

    await wait(() => {userEvent.type(input, "Tarefa teste domingo")})
    userEvent.selectOptions(select, "Domingo")
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
      day: "Domingo",
      text: "Tarefa teste domingo"
    })
    
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Deletar tarefa segunda", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Segunda",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
    // await wait (() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("Deletar tarefa terca", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Terca",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
  })

  test("Deletar tarefa quarta", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Quarta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
  })

  test("Deletar tarefa quinta", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Quinta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
  })

  test("Deletar tarefa sexta", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sexta",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
  })

  test("Deletar tarefa sabado", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Sabado",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
  })

  test("Deletar tarefa domingo", async () => {
    window.confirm = jest.fn(() => true)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Domingo",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(1)
  })

  test("Recusar o window.confirm", async () => {
    window.confirm = jest.fn(() => false)
    axios.get = jest.fn().mockResolvedValue({data: [{
      "day": "Domingo",
      "text": "InTech",
      "id": "aymbiMnhalsc3iXObTM9"
    }]})
    axios.delete = jest.fn().mockResolvedValue()
    const {findByText} = render(<App />)
    const buttonDelete = await findByText("X")
    userEvent.click(buttonDelete)

    expect(axios.delete).toHaveBeenCalledTimes(0)
  })
})