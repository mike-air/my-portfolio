import axios from "axios";
import fileDownload from "js-file-download";

const About = () => {
  // const downloadCV = async () => {
  //   axios({
  //     url: "http://localhost:5000/downloadPDF",
  //     method: "GET",
  //     responseType: "blob", // Important
  //   }).then((response) => {
  //     fileDownload(response.data, "resume.pdf");
  //   });
  // };
  return (
    <div>
      {" "}
      <section className="section pt-0" id="about">
        {/* container */}
        <div className="container text-center">
          {/* about wrapper */}
          <div className="about">
            <div className="about-img-holder">
              <img
                src="assets/imgs/DP-final.png"
                className="about-img"
                alt=""
              />
            </div>
            <div className="about-caption">
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                A highly motivated Full Stack developer with a proven track
                record of developing and deploying Web Applications. Skilled in
                a range of Programming languages and popular libraries such as
                <strong>
                  <em> React JS</em>
                </strong>{" "}
                and{" "}
                <em>
                  <strong>Redux</strong>
                </em>
                . Comfortable working in a fast-paced environment and able to
                adapt to new technologies quickly <br />
              </p>
              <a href="./../../portofolio.pdf" target="_blank" download>
                <button
                  // onClick={() => downloadCV()}
                  className="btn-rounded btn btn-outline-primary mt-4"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
          {/* end of about wrapper */}
        </div>
        {/* end of container */}
      </section>
    </div>
  );
};

export default About;
