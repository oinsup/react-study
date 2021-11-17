import React from "react";
import Data from "./data.json";
for (var key in Data) {
  console.log(Data[key]);
}
const Table = (prop) => {
  return (
    <>
      <div className="table">
        <table>
          <caption>{prop.tName}</caption>
          <colgroup></colgroup>
          <thead>
            <tr>
              {Data.map((i,index) => {
                return <th scope="col" key={index}>{i.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Data.map((i,index) => {
                return <td key={index}>{i.age}</td>;
              })}
            </tr>
            <tr>
              {Data.map((i,index) => {
                return <td key={index}>{i.gender}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table">
        <table>
          <caption>{prop.tName}</caption>
          <colgroup></colgroup>
          <thead>
            <tr>
              <th>이름</th>
              <th>나이</th>
              <th>성별</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((i,index) => {
              return (
                <tr key={index}>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
