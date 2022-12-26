import React from 'react'

const PilotTableHead = () => {
  return (
    <>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
     <tr>
       <th scope="col" className="py-3 px-6">Pilot phone </th>
       <th scope="col" className="py-3 px-6">First name</th>
       <th scope="col" className="py-3 px-6">Last name</th>
       <th scope="col" className="py-3 px-6">Email</th>
     </tr>
   </thead>
  </>
  )
}

export default PilotTableHead