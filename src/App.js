import React from "react";

function App(){
return (
    <div>
      <div>
        <div className="header">
          <h1>"YourName"</h1>
          <h2>Engineering undergrad</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Introduction:</u></h3>
            <p>Hey I am "YourName" currently pursuing B.Tech from "College details".Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            <br/>
            <u><strong>P.S : </strong> This is an assignment</u></p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java Script</li>
              <li>C++</li>
              <li>JAVA</li>
            </ul>
          </div>
          <div className="projects">
            <h3><u>Projects: </u></h3>
            <ul>
              <li><h1>Project1</h1><hr/>
                <h4>Description:</h4>
                <ul>
                  <li><p>What is this project about</p></li>
                  <li><p>Which teck stack is used</p></li>
                  <li><p>How it used and how it is useful</p></li>
                </ul>
              </li>
              <li><h1>Project2</h1><hr/>
                <h4>Description:</h4>
                <ul>
                  <li><p>What is this project about</p></li>
                  <li><p>Which teck stack is used</p></li>
                  <li><p>How it used and how it is useful</p></li>
                </ul>
              </li>
              <li><h1>Project3</h1><hr/>
                <h4>Description:</h4>
                <ul>
                  <li><p>What is this project about</p></li>
                  <li><p>Which teck stack is used</p></li>
                  <li><p>How it used and how it is useful</p></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;