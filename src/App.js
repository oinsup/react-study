import React, {useEffect, useRef} from 'react';
import './common.scss';
import Table from './Table';
import Btn from "./Btn";

const App = () => {
    const btnRef = useRef();
    useEffect(() => {
        console.log(btnRef.current);

    },[])
    return (
        <div>
            <Table tName="테이블제목"/>
            <Btn classname="blue" name="버튼" _ref={btnRef}/>
        </div>
    );
};

export default App;