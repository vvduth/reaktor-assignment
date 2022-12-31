import React from 'react'

const PilotTableHead = () => {
  return (
    <>
    <thead className="bg-black flex text-white w-full">
     <tr className="flex w-full mb-4">
       <th className="p-4 w-1/4">Pilot phone </th>
       <th className="p-4 w-1/4">Full name</th>
       <th className="p-4 w-1/4">Email</th>
       <th className="p-4 w-1/4">Valid until</th>
       <th className="p-4 w-1/4">View location</th>
     </tr>
   </thead>
  </>
  )
}

export default PilotTableHead