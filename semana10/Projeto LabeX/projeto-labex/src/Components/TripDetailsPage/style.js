import styled from 'styled-components'
import { Paper } from '@material-ui/core'


export const ContainerCandidates = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 15px;
    gap: 10px;
`

export const DetailsPaper = styled(Paper)`
    width: 55%;
    margin: 10px auto;
    padding: 15px 30px;
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
`

export const DetailsTitle = styled.h1`
    color: #FFF;
`

export const TripTitle = styled.h2`
    margin: 0;
    padding: 0;
`

export const ContainerApproved = styled.div`
    width: 50vw;
    border: 1px solid white;
    padding: 15px 0;
    margin: 15px;
    border-radius: 10px;
`

export const MainContainer = styled.div`
    display: flex;
`

export const TitleAppr = styled.h3`
    margin: 15px;
    color:#FFF;
`

export const CandidatePaper = styled(Paper)`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 15px;
`
export const CandidateTitle = styled.h2`
    color: #FFF;
`