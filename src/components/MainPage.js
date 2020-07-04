import React from "react";
import { Card } from "reactstrap";
const MainPage = () => {
  return (
    <div style={{ backgroundImage: "url(../img/lighthouse-1532771.jpg)" }}>
      <Card className="mainpage">
        <div>
          <h1 className="myname">Alexander Gonzalez</h1>
          <p>Currently a Lambda School Student learning React</p>
        </div>
        <Card
          style={{
            margin: "30px auto",
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
          }}
        >
          <img
            className="image"
            style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
            src={require("../img/me-and-sayu.jpg")}
            alt=""
          />
        </Card>
      </Card>
    </div>
  );
};

export default MainPage;
