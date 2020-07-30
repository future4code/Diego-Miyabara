import React from 'react';
import { render, getByPlaceholderText, getByTitle, getByText } from '@testing-library/react';
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
    const {getByTitle} = render(<App />)
    const select = getByTitle(/select/i)
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
    const {getByText} = render(<App />)
    await expect(axios.get).toHaveBeenCalled()
  })
})

// describe("Teste de funcionalidades", () => {
//   test("Teste de criar nova tarefa", async () => {
//     axios.post = jest.fn().mockResolvedValue()
//     const {getByText, getByPlaceholderText} = render(<App />)
//     const input = getByPlaceholderText(/Nome da tarefa/)
//     const select = getByTitle("Select")
//     const button = getByText(/Enviar tarefa/i)
//     await userEvent.type(input, 'Tarefa teste')
//     userEvent.selectOptions(select, getByText(/Sabado/))
//     userEvent.click(button)

//     expect(axios.post).tohaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara", {
//       text: "Tarefa teste",
//       day: "Sabado"
//     })
//   })
// })