import React, {useState} from "react";

const Toc = () => {
    const [state, setState] = useState('');
    const [arr,setArr] = useState([]);
    const onchange = (e) => {
        setState(e.target.value)
    }
    const onclick = () => {
        setArr(arr.concat(state))
    }
    return (
        <>
            <div id="toc">
                <input type="text" onChange={onchange} value={state}/>
                <button onClick={onclick}>버튼</button>
            </div>
            <ul className="list">
                {arr.map((i,index) => {
                    return(
                        <li key={index}>{i}</li>
                    )
                })}
            </ul>
        </>
    );
};

export default Toc;
