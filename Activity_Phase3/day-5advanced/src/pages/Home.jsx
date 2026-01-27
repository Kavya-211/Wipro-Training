import React from 'react'
import withAuth from '../hoc/withAuth';

function Home() {
  return (
    <div>
      <h1>you are in home page</h1>
    </div>
  )
}

export default withAuth(Home);
