import React from 'react'
import withAuth from '../hoc/withAuth';
function Employee() {
  return (
    <div>
      <h1>Employee</h1>
    </div>
  )
}

export default withAuth(Employee);
