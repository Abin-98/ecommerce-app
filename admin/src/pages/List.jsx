import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useState } from 'react'

const List = () => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  }, [])

  return (
    <>
        <p className=''>All Products List</p>
    </>
  )
}

export default List