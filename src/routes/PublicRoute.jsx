import React from 'react'

const PublicRoute = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default PublicRoute