import {
  StyledPageWrapper,
  StyledHeaderTitle,
  // StyledListsStyle,
} from '../../shared/StyledComponents.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../features/cart/cartSlice.js'
const Cart = () => {
  const dispatch = useDispatch()

  const removeProduct = (item) => {
    console.log(item.id)
    dispatch(removeFromCart(item.id))
  }
  const items = useSelector((state) => state.cart.items)
  return (
    <div className="flex flex-col h-[80vh] text-center items-center justify-center">
      <StyledHeaderTitle>products in cart</StyledHeaderTitle>

      <div className="h-[90%] w-[90%] flex flex-row items-center justify-center">
        <div className=" h-[80%] w-[45%] flex flex-col text-center items-center justify-start">
          <ul className="w-[100%]  flex flex-col text-center items-center justify-start">
            {items.map((item) => {
              return (
                <div className="w-[100%] flex flex-row text-start items-center justify-start pl-2 gap-4 h-[50px] bg-zinc-400 m-1 relative">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>quantity: {item.amount}</p>
                  <p>color:</p>
                  <p
                    className="h-[15px] w-[15px] rounded-[50%]"
                    style={{ backgroundColor: item.color }}
                  ></p>
                  <button
                    onClick={() => {
                      removeProduct(item)
                    }}
                    className="w-[100px] h-[40px] bg-red-400 text-white rounded-lg absolute right-[5px]"
                  >
                    remove
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="w-[25%] "></div>
      </div>
    </div>
  )
}

export default Cart
