import React from 'react'
import withAuth from '../hoc/withAuth';

function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  )
}

export default withAuth(Admin);