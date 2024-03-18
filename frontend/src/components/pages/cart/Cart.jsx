import { StyledPageWrapper } from '../../shared/StyledComponents.jsx'
import { useSelector } from 'react-redux'
const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  return (
    <StyledPageWrapper>
      <div>
        <h1>products in cart</h1>
        <div>
          {items.map((item) => {
            return (
              <div>
                <h1>{item.title}</h1>
                <h1>${item.price}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </StyledPageWrapper>
  )
}

export default Cart
