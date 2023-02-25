import React from "react";

const Portfolio = () => {
  return (
    <div>
      {" "}
      <section className="section" id="portfolio">
        <div className="container text-center">
          <h6 className="section-title mb-6">Portfolio</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-4">
              <a
                rel="noreferrer"
                href="https://resthut.netlify.app/"
                target={"_blank"}
                className="portfolio-card"
              >
                <img
                  src="assets/imgs/resthut.PNG"
                  className="portfolio-card-img"
                  alt="resthut.netlify.app"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Restaurant Reservation </h4>
                    <p className="font-weight-normal">Tools: REACT | EXPRESS</p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://zongodrive.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
                className="portfolio-card"
              >
                <img
                  className="portfolio-card-img"
                  src="assets/imgs/shot-zongo.PNG"
                  alt="zongoimage"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>ZONGO DRIVE ORGANIZTION</h4>
                    <p className="font-weight-normal">
                      tools: REACT | CONTEXT API
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://symphonious-sable-b8a6d0.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
                className="portfolio-card"
              >
                <img
                  alt="research consult"
                  className="portfolio-card-img"
                  src="assets/imgs/shot research.PNG"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Research Consult</h4>
                    {/* <p className="font-weight-normal">
                      Category: Web Templates
                    </p> */}
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4 mt-4">
              <a
                href="https://tlrb.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
                className="portfolio-card"
              >
                <img
                  alt="the lord's revelation"
                  className="portfolio-card-img "
                  src="assets/imgs/shot-tlr.PNG"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Book Publishing</h4>
                    <p className="font-weight-normal">
                      Tools: REACT | BOOTSTRAP
                    </p>
                  </span>
                </span>
              </a>
            </div>
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </section>
    </div>
  );
};

export default Portfolio;
