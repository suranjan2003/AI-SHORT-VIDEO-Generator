"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"

  

const SelectTopic = ({onUserSelect}) => {
    const options = ['Custom Promt','bbb','ccc','ddd','eee']
    const [selectedOption, setSelectedOption] = useState();
    return (
    <div>
        <h2 className='font-bold text-2xl text-primary'>Select Topic</h2>
        <p className='text-gray-500'>What is the topic of your video ?</p>
        <Select onValueChange={(value)=>{
            setSelectedOption(value)
            value != 'Custom Promt'&& onUserSelect('topic', value)
            }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
            <SelectValue placeholder="Content type" />
        </SelectTrigger>
        <SelectContent>
            {options.map((item, index) => (
                <SelectItem key={index} value={item}>{item}</SelectItem>
            ))}
        </SelectContent>
        </Select>

        {selectedOption=='Custom Promt' && 
            <Textarea
            className="mt-3"
            onChange = {(e)=>onUserSelect('topic', e.target.value)}
            placeholder="'Write your promt here'"/>
        }
    </div>
  )
}

export default SelectTopic