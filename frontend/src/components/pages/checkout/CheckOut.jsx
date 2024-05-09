import React from 'react'
import CheckOutStepper from './components/CheckoutStepper'
import { useSelector } from 'react-redux'
import AuthOperations from '../../shared/AuthOperations'
import { useNavigate } from 'react-router-dom'
import NotificationCard from '../../shared/NotificationCard'

const CheckOut = () => {
  const navigate = useNavigate()

  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: () => {
      setTimeout(() => {
        navigate('/profile')
        NotificationCard({
          option: 'success',
          message: `${'items purchased successfully!'}`,
        })
      }, 3000)
    },
  })
  const items = useSelector((state) => state.cart.items)
  const user = useSelector((state) => state.user)

  const addItems = () => {
    console.log(items)
    for (let item of items) {
      console.log('item', item)
      mutate([
        {
          method: 'POST',
          url: '/addorder',
          token: user.token,
        },

        item,
      ])
    }
  }

  return (
    <div className="h-[auto] w-[100%] flex flex-col text-center items-center justify-center">
      <CheckOutStepper />
      <div className="flex flex-col text-center items-center justify-center">
        <p>do you confirm ordering the items ? {items.length}</p>
        {isPending && <div>loading...</div>}
        {isError && <div>There is an error...</div>}

        <button onClick={addItems}>confirm</button>
      </div>
    </div>
  )
}

export default CheckOut
