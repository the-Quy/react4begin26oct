import React from "react";

function Hello() {
  const sayHello = () => {
    console.log("Hello Man");
  };

  return (
    <div className="App">
     
      <button onClick={sayHello}>Hello</button>
    </div>
  );
}

export default Hello;
