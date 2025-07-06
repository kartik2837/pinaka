import React from 'react'

const Navbar = () => {
  return (
    <header className="ml-64 w-[calc(100%-16rem)] fixed top-0 right-0 h-16 bg-white shadow-md z-40 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Example avatar or user dropdown */}
        <div className="w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </header>
  )
}

export default Navbar