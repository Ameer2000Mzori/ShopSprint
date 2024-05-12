import { toast } from 'react-toastify'
const NotificationCard = ({ option, message }) => {
  switch (option) {
    case 'success':
      toast.success(message)
      break
    case 'error':
      toast.error(message)
      break
    case 'info':
      toast.info(message)
      break
    case 'warning':
      toast.warning(message)
      break
    default:
      toast.info(message)
      break
  }
}

export default NotificationCard
