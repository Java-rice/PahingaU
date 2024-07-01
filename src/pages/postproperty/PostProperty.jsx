import React from 'react'
import { Button } from '../../components/buttons/Button'

const PostProperty = () => {
  return (
    <div className="w-full px-4 sm:px-[10%] font-poppins">
        <div className="flex pt-10 sm:pt-[30%] pb-20 sm:pb-[20%] flex-col justify-center  gap-5 text-center">
          <Button variant="black">HOW IT WORKS</Button>
          <h1 className="w-full sm:w-3/4 font-poppins m-auto text-4xl sm:text-6xl font-regular leading-tight sm:leading-[78px] text-center">
            Knock on the Right Door in 3 Easy Steps!</h1>
        </div>        
    </div>
  )
}

export default PostProperty
