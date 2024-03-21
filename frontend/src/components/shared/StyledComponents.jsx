import styled from 'styled-components'

export const StyledPageWrapper = styled.div`
height: 80vh;
display: flex;
flex-direction: row;
text-align: center;
item-align: center;
gap-4;
justify-content: center;
`

export const StyledHeaderTitle = styled.h1`
  font-size: 40px;
  font-style: bold;
  color: #9ca3af;
`

export const StyledListsStyle = styled.li`
  font-size: 20px;
  font-style: bold;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 1rem;
  padding-right: 1rem;
`

export const StyledCard = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  align-items: center;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px 0px rgba(15 2, 1, 303);
  }
`
