import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { Button } from 'rsuite'

export const ContainerViagens = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px;
    gap: 20px;
`

export const CardViagem = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #696969;
    border-radius: 20px;
`

export const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    height: 350px;
    justify-content: space-between;
    padding: 10px;
`

export const ListTitle = styled.h1`
    color: #FFF;
`

export const StyledButton = styled(Button)`
    margin: 20px;
`