import React from 'react'
import styled from 'styled-components'
import imagem404 from '../../Images/imagem-404.jpg'

const ContainerPageNotFound = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
    font-size: 2em;
`

const ImageError = styled.img`
    border-radius: 20px;
    opacity: 80%;
`

function Page404 () {
    return(
        <ContainerPageNotFound><ImageError src= {imagem404}/></ContainerPageNotFound>
    )
}

export default Page404