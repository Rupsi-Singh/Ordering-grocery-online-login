import React from 'react';
import HomePic from "./HomePic.jpeg";

class Dashboard extends React.Component{
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${HomePic})`, backgrondRepeat: `no-repeat`,width: "1500px",height: "1000px", backgroundPosition: "center",
          backgroundSize: "cover",
          position: "fixed",
        }}
      ></div>
    );
  }
}
export default Dashboard;
