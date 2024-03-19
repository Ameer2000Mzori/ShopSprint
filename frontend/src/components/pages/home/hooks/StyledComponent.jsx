import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  text-align: center;
  align-items: center;
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
