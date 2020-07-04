import React from "react";
import { Card } from "reactstrap";
const About = () => {
  return (
    <Card className="mainpage">
      <h1>Skills/History</h1>
      <ul>
        <li>
          <p>Studies: Currently a Lambda School student since March 2020.</p>
        </li>
        <li>
          <p>Computer Languages: HTML, CSS, LESS, Vanillia Javascript, React</p>
        </li>
        <li>
          <p>
            Spoken Langauges: English (native language), Spanish (Secondary)
          </p>
        </li>
      </ul>
      Bio:
      <p style={{ marginLeft: "15%" }}>
        Hello and thank you for taking the time to read my portfolio/resume.
        <br /> My name is Alexander Gonzalez and have been studying web
        development at <br /> lambda school since March 2020 and have learned
        html, css, Javascript and am <br />
        currently learning React. I still have a long way to go in my web
        development career <br />
        and I'm very excited to delve deep other Languages after I've learned
        more in React.
      </p>
    </Card>
  );
};

export default About;
