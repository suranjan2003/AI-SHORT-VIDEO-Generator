"use client"

import { db } from '@/configs/db';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import { Users } from '@/configs/schema';
import React, { useEffect } from 'react'

const Provider = ({children}) => {



  // ====== adding user to database code ======

  const {user}=useUser();

  useEffect(()=>{
    user&&isNewUser();
  },[user])

  const isNewUser = async()=>{
    const result = await db.select().from(Users)
    .where(eq(Users.email,user?.primaryEmailAddress?.emailAddress));

    if(!result[0]){
      await db.insert(Users).values({
        name:user.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl:user?.imageUrl
      })
    }
  }

  // ^^^^^^ till this (to add the user to data base)



  return (
    <div>
        {children}
    </div>
  )
}

export default Provider