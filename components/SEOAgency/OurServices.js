import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/img/services/service-icon7.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Target Analysis</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link href="/service-details">
                                <a className="learn-more-btn">
                                    <i className="flaticon-right"></i> 
                                    Learn More
                                </a>
                            </Link>
                            <div className="shape">
                                <img src="/img/services/service-shape4.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/img/services/service-icon8.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Keyword Research</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link href="/service-details">
                                <a className="learn-more-btn">
                                    <i className="flaticon-right"></i> 
                                    Learn More
                                </a>
                            </Link>
                            <div className="shape">
                                <img src="/img/services/service-shape4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item ">
                            <div className="icon">
                                <img src="/img/services/service-icon9.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Continuous Testing</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link href="/service-details">
                                <a className="learn-more-btn">
                                    <i className="flaticon-right"></i> 
                                    Learn More
                                </a>
                            </Link>
                            <div className="shape">
                                <img src="/img/services/service-shape4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/img/services/service-icon10.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Marketing Analysis</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link href="/service-details">
                                <a className="learn-more-btn">
                                    <i className="flaticon-right"></i> 
                                    Learn More
                                </a>
                            </Link>
                            <div className="shape">
                                <img src="/img/services/service-shape4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/img/services/service-icon11.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Content Optimization</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link href="/service-details">
                                <a className="learn-more-btn">
                                    <i className="flaticon-right"></i> 
                                    Learn More
                                </a>
                            </Link>
                            <div className="shape">
                                <img src="/img/services/service-shape4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/img/services/service-icon12.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Email Marketing</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link href="/service-details">
                                <a className="learn-more-btn">
                                    <i className="flaticon-right"></i> 
                                    Learn More
                                </a>
                            </Link>
                            <div className="shape">
                                <img src="/img/services/service-shape4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;