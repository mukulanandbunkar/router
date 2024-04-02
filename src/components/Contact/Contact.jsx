import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
 

function Contact() {
    const params = useParams()
    const apiData = useLoaderData();
    console.log(params, apiData);
  return (
    <div>Contact-{params[`user-name`]}</div>
  )
}

export default Contact