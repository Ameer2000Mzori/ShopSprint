import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const useStoreToken = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const saveData = (data) => {
    console.log('data in token file: ', data)
    dispatch(updateUser(data))

    if (data) navigate('/home')
  }
  console.log('data saved')
  const userData = useSelector((state) => state.user)

  console.log('user data is ', userData)

  return saveData
}

export default useStoreToken
