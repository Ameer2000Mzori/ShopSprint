import { useState, useEffect } from 'react'
import { StyledHeaderTitle } from '../../shared/StyledComponents.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../features/cart/cartSlice.js'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const [shippingAmount, setShippingAmount] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)
  const items = useSelector((state) => state.cart.items)
  const price = useSelector((state) => state.cart.price)

  useEffect(() => {
    let totalShippingAmount = 0
    items.forEach((item) => {
      if (!item.freeShipping) {
        totalShippingAmount += item.amount * 0.15
      }
    })
    setShippingAmount(totalShippingAmount)
  }, [items])

  const removeProduct = (item) => {
    console.log(item.id)
    dispatch(removeFromCart(item.id))
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="flex flex-col h-[80vh] text-center items-center justify-center">
      <StyledHeaderTitle>products in cart</StyledHeaderTitle>

      <div className="h-[90%] w-[90%] flex flex-row items-center justify-center gap-4">
        <div className="h-[80%] w-[45%] flex flex-col text-center items-center justify-start">
          <ul className="w-[100%] flex flex-col text-center items-center justify-start">
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[100%] flex flex-row text-start items-center justify-start pl-2 gap-4 h-[50px] bg-zinc-300 m-1 relative text-black rounded-lg"
                >
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>free ship..? {item.freeShipping ? 'yes' : 'no'}</p>
                  <p>quantity: {item.amount}</p>
                  <p>color:</p>
                  <p
                    className="h-[15px] w-[15px] rounded-[50%]"
                    style={{ backgroundColor: item.color }}
                  ></p>
                  <button
                    onClick={() => removeProduct(item)}
                    className="w-[100px] h-[40px] bg-red-400 text-white rounded-lg absolute right-[5px]"
                  >
                    remove
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="w-[25%] h-[80%] flex flex-col text-center items-center justify-start gap-4">
          <div className="h-[200px] w-[100%] rounded-lg bg-zinc-200">
            <div>
              <ul>
                <li className="h-[40px] w-[100%] flex flex-row text-center items-center justify-between pr-2 pl-2  border-b-2 border-gray-300">
                  <p>subtotal </p>
                  <p>${price}</p>
                </li>
                <li className="h-[40px] w-[100%] flex flex-row text-center items-center justify-between pr-2 pl-2  border-b-2 border-gray-300">
                  <p>tax 15%</p>
                  <p>${price ? `${price * 0.15}` : 0}</p>
                </li>
                <li className="h-[40px] w-[100%] flex flex-row text-center items-center justify-between pr-2 pl-2  border-b-2 border-gray-300">
                  <p>shipping fee</p>
                  <p>${shippingAmount}</p>
                </li>
                <li className="text-[20px] font-bold h-[40px] w-[100%] flex flex-row text-center items-center justify-between pr-2 pl-2  border-b-4 border-gray-300">
                  <p>total</p>
                  <p>${(price ? price + price * 0.15 : 0) + shippingAmount}</p>
                </li>
              </ul>
            </div>
          </div>
          {token ? (
            <Link
              to="/addorder"
              className="flex flex-col text-center items-center justify-center w-[150px] h-[40px] rounded-lg bg-blue-600 text-white font-bold"
            >
              ADD ORDER
            </Link>
          ) : (
            <Link
              onClick={handleLogin}
              to="/login"
              className="flex flex-col text-center items-center justify-center w-[150px] h-[40px] rounded-lg bg-blue-600 text-white font-bold"
            >
              PLEASE LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
