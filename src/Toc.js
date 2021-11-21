import React,{useState} from "react";

const Toc = () => {
  const useState[state,setState] = []
  const onchange = () =>{
    setState(["1"])
    console.log(state)
  }
  return (
    <div id="toc">
      <input type="text" onChange={onchange} />
      <button>버튼</button>
    </div>
  );
};

export default Toc;
