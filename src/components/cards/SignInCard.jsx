import React from 'react'

const SignInCard = () => {
  return (
    <div className="bg-[#0077B5] py-28 px-10 rounded-xl m-auto w-3/4 flex items-center justify-between">
      <div>
        <h1 className="font-montserrat text-left text-3xl font-medium text-white mb-4">Sign in to streamline your search</h1>
        <p className="font-montserrat text-left text-white">Save properties, create alerts and keep track of the enquiries you send to agents.</p>
      </div>
      <button className="bg-white text-[#0077B5] font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">
        Login or register an account
      </button>
    </div>
  )
}

export default SignInCard