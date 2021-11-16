import React from "react";
import TableCol from "./TableCol";
import TableTd from "./TableTd";
import TableTh from "./TableTh";
import TableTr from "./TableTr";

const Table = (prop) => {
  let tableCont = [
    ["120px","이름", "나이", "성별"],
    ["140px","오인섭", "32", "남"],
    ["110px","sam", "33", "여"],
  ];
  return (
    <div className="table">
      <table>
        <caption>{prop.tName}</caption>
        <colgroup>
          {tableCont.map((i, index) => {
            return <TableCol key={index} width={i[0]} />;
          })}
        </colgroup>
        <thead>
          <tr>
            {tableCont[0].map((i, index) => {
                const res = tableCont[0][0]
                return <TableTh key={index} value={i} />;
            })}
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
