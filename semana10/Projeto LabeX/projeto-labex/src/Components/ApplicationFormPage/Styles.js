import styled from 'styled-components';
import {Paper} from '@material-ui/core'
import { Button } from 'rsuite'

export const SelectField = styled.select`
    display: block;
    width: 400px;
    margin: 0 auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
    color: grey;
    :hover{
        border: 1px solid black;
    }
`

export const SyledPaper = styled(Paper)`
    width: 60%;
    margin: 40px auto;
    padding: 20px;
`

export const StyledForm = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 550px;
    justify-content: space-evenly;
`

export const StyledButton = styled(Button)`
    width:400px;
    margin: 0 auto;
`