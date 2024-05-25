import React from 'react'

function Page({ params }: { params: { id: string } }) {

  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
    </div>
  )
}

export default Page