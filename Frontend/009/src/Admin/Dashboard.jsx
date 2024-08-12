import React from 'react'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
    <div className="col-span-1 bg-blue-500">Column 1 (wider)</div>
    <div className="bg-red-500">Column 2 (narrower)</div>
    <div className="col-span-1 bg-green-500">Column 3 (narrow)</div>
  </div>
  
  )
}
