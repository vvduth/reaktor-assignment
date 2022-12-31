import React from 'react'

const PilotTableHead = () => {
  return (
    <>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
     <tr>
       <th scope="col" className="py-3 px-6">Pilot phone </th>
       <th scope="col" className="py-3 px-6">Full name</th>
       <th scope="col" className="py-3 px-6">Email</th>
       <th scope="col" className="py-3 px-6">Valid until</th>
       <th scope="col" className="py-3 px-6">View location</th>
     </tr>
   </thead>
  </>
  )
}

export default PilotTableHead