const ActiveNav = (newNavData, setNewNavData) => {
  const newsetnavObj = newNavData.map((item) => {
    console.log('item : ', item.path)
    console.log('path : ', window.location.pathname)
    if (item.path === window.location.pathname) {
      item.active = true
    } else {
      item.active = false
    }
    return item
  })
  setNewNavData(newsetnavObj)
}

export default ActiveNav
