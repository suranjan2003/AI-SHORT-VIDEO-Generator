"use client"
import { CircleUser, FileVideo, PanelsTopLeftIcon, ShieldPlusIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {

    const MenuOption=[
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon: PanelsTopLeftIcon
        },
        {
            id:2,
            name:'Create new',
            path:'/dashboard/create-new',
            icon: FileVideo
        },
        {
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon: ShieldPlusIcon
        },
        {
            id:4,
            name:'Account',
            path:'/account',
            icon: CircleUser
        }
    ]

    const path = usePathname();

  return (
    <div className='w-64 h-screen shadow-md p-5'>
        <div className='grid gap-2'>
            {MenuOption.map((item,index)=>(
                <Link href={item.path} key={index}>
                    <div 
                    className={`flex items-center gap-3 p-3 hover:bg-secondary hover:text-black rounded-md cursor-pointer ${path==item.path&&'bg-primary text-white'}`}
                    >
                        <item.icon/>
                        <h2>{item.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav