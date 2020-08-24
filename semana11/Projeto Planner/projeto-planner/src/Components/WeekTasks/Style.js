import styled from 'styled-components'

export const WeekContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #C9C9C9;
  height: 75vh;
  width: 90%;
  margin: 0 auto;
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
`

export const DayContainer = styled.div`
  border: 1px solid white;
  flex: 1;
  border-radius: 10px;
  margin: 0 5px;
  background-color: #696969;
  color: #FFF;
  width: 100%;
`

export const DayTitle = styled.h3`
    border-bottom: 1px solid white;
    margin: 0 10px;
    padding: 5px;
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`