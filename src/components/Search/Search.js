import './Search.css'
import React from 'react';

const Search = () =>{
    return(
        <div className="container d-flex justify-content-center mt-5">
       <input type="text" className ="course-search" placeholder= "Start learning ex:Fiver ,freelancing crash course"/>
        <button className=" btn-sr">Search Anything</button>
        </div>
    )
};

export default Search;