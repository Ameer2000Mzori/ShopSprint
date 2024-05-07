import styled from 'styled-components'

export const StyledInputWrap = styled.div`
  color: black;
  background-color: #1115;
  color: #fff;
  border-radius: 10px;
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const StyledSelectWrap = styled(StyledInputWrap)`
  flex-direction: row;
  width: 200px;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: black;
`

export const StyledShippingWrap = styled(StyledSelectWrap)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
`
