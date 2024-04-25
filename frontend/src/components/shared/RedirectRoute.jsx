import { useEffect, useState } from 'react'

export const RedirectRoute = () => {
  const [oldRoute, setOldRoute] = useState()

  const addNewRoute = (arg) => {
    console.log('this is arg', arg)
    setOldRoute((prevRoute) => {
      console.log('previous route:', prevRoute)
      return arg
    })
  }

  const returnRoute = () => {
    console.log('this is old route', oldRoute)
    return oldRoute
  }

  useEffect(() => {
    console.log('this is old route update', oldRoute)
  }, [oldRoute])

  return { addNewRoute, returnRoute }
}
