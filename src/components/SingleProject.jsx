import React from 'react'
import { useParams } from 'react-router-dom';

function SingleProject() {
    const params = useParams();
    const projectId = params.projectId;
    console.log(projectId)
  return (
    <div>SingleProject</div>
  )
}

export default SingleProject