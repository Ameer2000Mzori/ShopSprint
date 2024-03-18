import {
  StyledPageWrapper,
  StyledHeaderTitle,
  StyledListsStyle,
} from '../../shared/StyledComponents.jsx'
import { useSelector } from 'react-redux'
const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  return (
    <StyledPageWrapper>
      <div>
        <StyledHeaderTitle>products in cart</StyledHeaderTitle>
        <div className="w-[50%] flex flex-col text-center items-center justify-start">
          <ul className="w-[100%] overflow-auto flex flex-col text-center items-center justify-start">
            {items.map((item) => {
              return (
                <div className="w-[100%]">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>quantity: {item.amount}</p>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </StyledPageWrapper>
  )
}

export default Cart
