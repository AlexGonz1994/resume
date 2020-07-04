import React from "react";
import { Card } from "reactstrap";

const Contact = () => {
  return (
    <Card className="contactPage">
      <div style={{ marginLeft: "25%", marginTop: "5px" }}>
        You can find me at any of the following:
        <p style={{ marginTop: "5px" }}>
          <img
            style={{
              width: "5%",
            }}
            alt=""
            src={require("../img/Twitter-logo-1.jpg")}
          />
          Twitter: @Rinzaru1994
        </p>
        <p style={{ marginRight: "50px" }}>
          <img
            style={{
              width: "8%",
            }}
            alt=""
            src={require("../img/github.png")}
          />
          Github: <a href="https://github.com/Rinzaru">Github</a>
        </p>
        <p>Email: Alexander-gonzalez@lambdastudents.com</p>
      </div>
    </Card>
  );
};

export default Contact;
