import React from "react";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="bg-img">
      <section className="section" id="testmonial">
        <div className="container text-center">
          <p className="section-subtitle text-light">
            What Clients think About Me ?
          </p>
          <h6 className="section-title mb-6 text-info">Testmonial</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  {/* <img
                    src="assets/imgs/avatar2.jpg"
                    className="testimonial-card-img"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  /> */}
                </div>
                <div className="testimonial-card-body bg-secondary shadow-1">
                  <blockquote className="testimonial-card-subtitle text-primary">
                    "Michael is a well-trained developer, and I had the honor of
                    meeting him. <br /> He has created a handful of web
                    applications for me and he never disappoints."
                  </blockquote>
                  <h6 className="testimonial-card-title">Dr. Joseph Budu</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder"></div>
                <div className="testimonial-card-body bg-secondary">
                  <p className="testimonial-card-subtitle ">
                    "I wanted a basic online application for my pre-school
                    pupils, so Michael created one for me that simplified my
                    work and that I still use now."
                  </p>
                  <h6 className="testimonial-card-title">Emily Reb</h6>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end of container */}
      </section>{" "}
    </div>
  );
};

export default Testimonial;
