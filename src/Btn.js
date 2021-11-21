import React,{useState,useRef} from 'react';
import * as FuncList from "./FuncList";

const Btn = ({classname,name, _ref}) => {
    return (
        <button className={`btn ${classname}`} ref={_ref}>
            {name}
        </button>
    );
};

export default Btn;