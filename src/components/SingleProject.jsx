import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function SingleProject() {
    const params = useParams();
    console.log(params)
    
    const projectId = params.projectId;
    console.log(projectId)
  return (
    <div>SingleProject</div>
  )
}

export default SingleProject