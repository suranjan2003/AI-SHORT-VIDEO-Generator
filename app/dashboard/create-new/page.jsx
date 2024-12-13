"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'

const CreateNew = () => {
    const [formData, setFormData]=useState([])
    const onHandleInputChange=(fieldName, fieldValue)=>{
        console.log(fieldName,fieldValue)
    }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

        <div className='mt-10 shadow-md p-10'>
            <SelectTopic onUserSelect={onHandleInputChange}/>
            {/* selct style */}
            {/* duration */}
            {/* create button */}
        </div>
    </div>
  )
}

export default CreateNew