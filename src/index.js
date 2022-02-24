import React from "react";
import ReactDOM from "react-dom";

//method-1
// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// };

// customStyle.color = "blue";

// ReactDOM.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
// );

// var currentDate = new Date(2021,1,1,16);
// console.log(currentDate.getHours());

// function find() {
//   if (currentDate.getHours() > 12 && currentDate.getHours() < 19) {
//     ReactDOM.render(
//       <h1 className="heading1">Good Afternoon</h1>,
//       document.getElementById("root")
//     );
//   } else if (currentDate.getHours() >= 19 && currentDate.getHours() < 24) {
//     ReactDOM.render(
//       <h1 className="heading2">Good Night</h1>,
//       document.getElementById("root")
//     );
//   } else {
//     ReactDOM.render(
//       <h1 className="heading3">Good Morning</h1>,
//       document.getElementById("root")
//     );
//   }
// }
// find();

//method-2 recommended and explained in the vid
var heading;
var customStyle = {
  color: ""
};

var currentDate = new Date(2021, 1, 1, 16);
var curtime = currentDate.getHours();
if (curtime < 12) {
  heading = "Good morning";
  customStyle.color = "red";
} else if (curtime < 18) {
  heading = "Good Afternoon";
  customStyle.color = "green";
} else {
  heading = "Good night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>{heading}</h1>,
  document.getElementById("root")
);
