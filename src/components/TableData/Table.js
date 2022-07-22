import React from 'react';

const Table = ({ result, index }) => {
    console.log(result);
    const { name, height, hair_color, skin_color } = result
    return (

        <tr>
            <th class="hover">{index + 1}</th>
            <td>{name}</td>
            <td>{height}</td>
            <td>{hair_color}</td>
            <td>{skin_color}</td>
            <button class="btn btn-xs">Tiny</button>
        </tr>

    );
};

export default Table;