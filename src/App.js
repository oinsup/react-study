import React, {useEffect, useRef} from 'react';
import './common.scss';
import Header from './Header';
import Toc from './Toc';
import Map from './Map';
import Table from './Table';
import Btn from "./Btn";

const App = () => {
    /*
<<<<<<< HEAD
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
=======

     */
  return (
    <>
      <Header/>
      <div id="container">
        <Toc/>
        <Map/>
      </div>
    </>
  );
};

export default App;