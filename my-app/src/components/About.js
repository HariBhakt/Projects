import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  }
 
  return (
    <>
      <div className="container">
        <h1 className="my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}> About Me</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Education
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Graduation: </strong> BIT MESRA PATNA
                <br />
                <strong>Secondary School: </strong> DAV PUBLIC SCHOOL <br />
                <strong>High School: </strong> St Karens High School
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Work Experience
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>FrontEnd Developer Intern: </strong> Captiosus Software
                Solutions Pvt Ltd.
                <br />
                <strong>Data Science Intern </strong> SmartKnower Pvt Ltd.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Projects
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Fitness Tracker </strong> &nbsp; Angular, Material UI,
                NgRx, Firebase
                <strong>Tasco </strong> &nbsp; Angular, Bootstrap, Material{" "}
                <br />
                <strong>Gender Classification using Voice Dataset </strong>{" "}
                &nbsp; XGBoost, Ensemble Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
