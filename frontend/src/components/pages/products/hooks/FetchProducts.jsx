import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchProducts = ({ value }) => {
  const [timestamp, setTimestamp] = useState(Date.now()) // Initialize timestamp state

  // Use useEffect to fetch data when value changes
  useEffect(() => {
    // Update timestamp when value changes
    setTimestamp(Date.now())
  }, [value])

  // Fetch data using useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', timestamp],
    queryFn: () =>
      axios
        .get(`/products/filter/items?_=${timestamp}`, {
          params: value,
        })
        .then((res) => res.data),
  })

  return { data, isLoading, isError }
}

export default FetchProducts
