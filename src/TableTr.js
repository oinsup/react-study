import React from 'react';
import TableTd from './TableTd';

const TableTr = (prop) => {
    return(
        <tr>
            <TableTd value={prop.value}/>
        </tr>
    )
};

export default TableTr;