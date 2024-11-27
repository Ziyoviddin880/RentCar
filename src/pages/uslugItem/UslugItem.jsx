import React from 'react'
import { useParams } from 'react-router-dom'
import { useGet } from '../../hooks/useGet/useGet'

const UslugItem = () => {
const {id}=useParams()
console.log(id)

// cosnt {data}= useGet("url/"+id)
  return (
    <div>UslugItem</div>
    
  )
}

export default UslugItem