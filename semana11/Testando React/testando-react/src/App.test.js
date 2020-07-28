import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import App from './App';

describe('Renderizacao inicial', () => {
  test('Input existe na tela', () => {
    const {getByPlaceholderText} = render(<App />)

    const input = getByPlaceholderText('Novo post')

    expect(input).toBeInTheDocument()
  })

  test('botão existe na tela', () => {
    const {getByText} = render(<App />)

    expect(getByText(/Adicionar/)).toBeInTheDocument()
  })
  
  test('Mensagem de inexistencia de posts', () => {
    const {getByText} = render(<App />)
    expect(getByText("Não existem posts!"))
  })
})

describe('Criar um novo post', () => {
  test('O novo post deve aparecer abaixo, com a informação inserida no input', () => {
    const {getByPlaceholderText, getByText} = render(<App />)
    const button = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {target: {value:'Teste novo post'}})
    fireEvent.click(button)

    expect(getByText(/teste novo post/i)).toBeInTheDocument()
    expect(input).toHaveValue("")
  })

  test("Deve aparecer a quantidade de posts", () => {
    const {getByPlaceholderText, getByText} = render(<App />)
    const button = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {target: {value:'Teste novo post'}})
    fireEvent.click(button)

    expect(getByText(/Quantidade de Posts/i)).toBeInTheDocument()
  })

  test("Input em branco deve aparecer uma mensagem de erro", () => {
    const {getByPlaceholderText, getByText} = render(<App />)
    const button = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {target: {value:''}})
    fireEvent.click(button)

    expect(getByText(/branco/)).toBeInTheDocument()
  })
})

describe('Curtir post', () => {
  test('Clicar no botão curtir, o botão deve alterar para Descurtir', () => {
    const {getByText, getByPlaceholderText} = render(<App />)
    const buttonAdd = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')
    
    fireEvent.change(input, {target: {value:'Teste novo post'}})
    fireEvent.click(buttonAdd)
    const buttonLike = getByText(/Curtir/)
    fireEvent.click(buttonLike)

    expect(getByText(/descurtir/i)).toBeInTheDocument()
  })

  test('Clicar no botão curtir depois descurtir, o botão deve alterar para Curtir novamente', () => {
    const {getByText, getByPlaceholderText} = render(<App />)
    const buttonAdd = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')
    
    fireEvent.change(input, {target: {value:'Teste novo post'}})
    fireEvent.click(buttonAdd)
    fireEvent.click(getByText('Curtir'))
    fireEvent.click(getByText('Descurtir'))

    expect(getByText('Curtir')).toBeInTheDocument()
  })
})

describe('Apagar Post', () => {
  test('Adicionar post após apertar botão de apagar, deve remover o post adicionado', () => {
    const {getByText, getByPlaceholderText} = render(<App />)
    const buttonAdd = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {target: {value:'Teste novo post'}})
    fireEvent.click(buttonAdd)
    fireEvent.click(getByText('Apagar'))

    expect(getByText('Não existem posts!')).toBeInTheDocument()
  })
})