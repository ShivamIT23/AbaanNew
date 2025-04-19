import React from 'react'

export default function NavigationIcon({navigation}) {
  return (
    <div className='bg-white text-[#0F0200] font-archivo font-medium flex gap-4 px-2 min-w-[200px] w-fit min-h-[52px] text-lg h-fit rounded-full justify-center items-center'>
        <h3 className='text-[#F83D8E]'>Home</h3>
        <p className=''>/</p>
        {navigation}
    </div>
  )
}
