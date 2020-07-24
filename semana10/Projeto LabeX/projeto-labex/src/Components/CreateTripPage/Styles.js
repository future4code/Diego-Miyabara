import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const StyledPaper = styled(Paper)`
    width: 60%;
    margin: 20px auto;
    padding: 20px 100px;
`

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

export const StyledForm = styled.form`
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`