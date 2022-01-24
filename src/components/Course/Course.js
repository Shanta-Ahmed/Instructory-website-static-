import React from 'react';
import './Course.css';
import courseDeta from '../../Deta/courseDeta';

const Course = () => {
    return (
        <div className="container">
            <div className="d-flex flex-wrap">
                {
                    courseDeta.map(data=>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  p-3 my-5">
                        <img style={{cursor: 'pointer'}} src={data.image} className="img-fluid" alt="" />
                            <div className="card py-3 ps-3">
                                <div className="d-flex">
                                <div className ="col-6">
                                <small className="text-muted">{data.instructor}</small>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-4 d-flex ">
                                <i  style={{color:'#8dc63f'}} class="fas fa-shopping-cart  pe-2"></i>
                                <i  style={{color:'#ff4669'}}class="fas fa-heart pe-2"></i>
                                <i  style={{color:'#63d7fb'}}class="fas fa-share-alt"></i>
                                </div>
                                </div>
                                <h6 className="fw-bold mt-2" title={data.title}>{data.title}</h6>
                                <div className ="d-flex">
                                <i style={{color:'goldenrod'}} class="far fa-star mt-2"></i>
                                <i style={{color:'goldenrod'}} class="far fa-star mt-2"></i>
                                <i style={{color:'goldenrod'}} class="far fa-star mt-2"></i>
                                <i style={{color:'goldenrod'}} class="far fa-star mt-2"></i>
                                <i style={{color:'goldenrod'}} class="far fa-star mt-2"></i>
                                </div>

                                <div className="d-flex py-2">
                                    <div className="col-5">
                                    <h5 style={{color:'#00a99d',fontsize:'26px'}} className="fw-bold mt-3">৳{data.price}</h5>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-6 ps-2">
                                        <button  className=" btn-bn mt-3">Buy Now</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        )
                }
            </div>
            
        </div>
    );
};

export default Course;