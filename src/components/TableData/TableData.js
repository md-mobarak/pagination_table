import React, { useEffect, useState } from 'react';
import Table from './Table';

const TableData = () => {

    const [tableData, setTableData] = useState({})
    // console.log(tableData.results);
    const results = tableData.results
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setTableData(data)
            })
    }, [])
    if (!results) {
        return <h1 className='text-4xl flex items-center justify-center'>Loading...</h1>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Hair_Color</th>
                            <th>Skin_Color</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map((result, index) => <Table
                                // key={ }
                                index={index}
                                result={result}
                            ></Table>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableData;