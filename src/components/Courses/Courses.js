import React from 'react';
import Course from '../Course/Course';
import  './Courses.css';

  const Courses = (props) => {
    return (
        <div className="container my-5  ">

            <h1 className=" custom-title pt-5 text-center fw-bold "> {props.title}</h1>
            <div className="custom-title-separator "></div>
            <Course />
            
        </div>

    );
    
};

export default Courses;