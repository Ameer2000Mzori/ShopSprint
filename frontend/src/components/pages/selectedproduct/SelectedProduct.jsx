import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { StyledPageWrapper } from '../../shared/StyledComponents.jsx'
import ProductNav from './component/ProductNav.jsx'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice.js'
import uniqid from 'uniqid'
import LoadingPage from '../../shared/LoadingPage.jsx'

const SelectedProduct = () => {
  const [newColor, setNewColor] = useState('')
  const [amountItems, setAmountItems] = useState(1)
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  useEffect(() => {
    console.log('our items', items)
  }, [items])

  const showItems = (item, amount, color) => {
    if (amount && color) {
      const newOrder = {
        name: item.title,
        price: item.price,
        amount: Number(amount),
        category: item.category,
        company: item.company,
        freeShipping: item.freeShipping,
        color: color,
        id: uniqid(),
        total: item.price * Number(amount),
      }
      console.log('order got :', newOrder)
      dispatch(addToCart(newOrder))
    }
  }

  // this function is called when an product is selected
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => axios.get(`/${id}`).then((res) => res.data),
  })

  if (isLoading) return <LoadingPage />

  if (isError) return <div> there is an error....</div>

  console.log('data ', data)
  return (
    <>
      <ProductNav data={data} />
      <StyledPageWrapper className="gap-4">
        <div className="h-[80%] w-[25%] flex flex-col text-center items-center justify-center">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="https://via.placeholder.com/500x500"
            alt=""
          />
        </div>
        <div className="h-[80%] w-[35%] flex flex-col text-start items-start justify-center ga-4 relative">
          <h1 className="text-[30px] font-bold text-gray-400">
            {data.item.title}
          </h1>
          <div className="w-[100%] h-[500px] flex flex-col items-center justify-center">
            <div className="flex flex-col text-start items-start justify-start gap-6 w-[100%] h-[100%]">
              <div className="font-bold text-gray-400 text-[20px] flex flex-row text-start items-start justify-start  gap-4 w-[100%]">
                <h1>{data.item.category}</h1>|<h1>from {data.item.company}</h1>|
                <h1>category : {data.item.category}</h1>
              </div>

              <div className="font-bold text-gray-400  flex flex-row text-start items-start justify-start  gap-4 w-[100%]">
                <h1 className="text-[15px]"> ${data.item.price}</h1>|
                <h1 className="text-[15px]">
                  freeShipping {data.item.freeShipping ? 'yes' : 'no'}
                </h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                placeat pariatur voluptas, mollitia accusantium unde quasi quos
                ipsam ullam ratione delectus! Tenetur rem magnam nulla,
                voluptates animi a dolore molestiae?
              </p>

              <div className=" bg-zinc-300  rounded-md flex flex-row text-center items-center justify-between p-2 w-[100%] h-[50px] absolute bottom-0 ">
                <div className="flex flex-raw gap-1 w-[25%]">
                  <p>color : </p>
                  {data.item.colors.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      className="rounded-[15%]"
                    >
                      <input
                        id={color}
                        type="radio"
                        name="nameOption"
                        value={color}
                        style={{
                          backgroundColor: 'transparent',
                          border: `1px solid ${color}`,
                        }}
                        className={`w-[25px] h-[25px] rounded-[100%] flex flex-col items-center justify-center bg-${color}`}
                        onClick={() => {
                          setNewColor(color)
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-row text-center items-center justify-center gap-3 w-[250px] ">
                  <select
                    value={amountItems}
                    onChange={(e) => {
                      setAmountItems(e.target.value)
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                  <div>
                    <button
                      onClick={() => {
                        showItems(data.item, amountItems, newColor)
                      }}
                      className="w-[150px] h-[40px] bg-slate-500 rounded-lg"
                    >
                      order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledPageWrapper>
    </>
  )
}

export default SelectedProduct
