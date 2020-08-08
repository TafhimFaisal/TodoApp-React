import React from 'react'
import ChangeColor from '../hoc/ChangeColor';

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
  )
}

export default ChangeColor(AboutUs)