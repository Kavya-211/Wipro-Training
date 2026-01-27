import React from 'react'
import withAuth from '../hoc/withAuth';

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
    </div>
  )
}

export default withAuth(Courses);
