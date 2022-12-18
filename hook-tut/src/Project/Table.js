import React, { useState } from 'react'

const Table = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Anand', roll: 43 },
        { id: 2, name: 'Rajkumar', roll: 44 },
        { id: 3, name: 'Ankush', roll: 45 },
        { id: 3, name: 'Aniket', roll: 46 }
    ])

    const [matualData, setMatualData] = useState([])
    const [isSubmit, setIsSubmit] = useState(false);

    const handlerChange = (da) => {
        setMatualData([...matualData, { id: da.id, name: da.name, roll: da.roll }])
    }


    const handleChange = () => {
        setIsSubmit(!isSubmit)
    }

    return (
        <form action="">
            <table>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Roll</th>
                </tr>

                {data.map((da) => {
                    return (

                        <tr>
                            <td> <input type="checkbox" onClick={(e) => handlerChange(da)} /> </td>
                            <td>{da.name}</td>
                            <td>{da.roll}</td>
                        </tr>


                    )
                })}
            </table>
            <button type="button" onClick={handleChange} >Submit </button>


            {isSubmit && matualData.map((d) => {
                return (
                    <div>
                        {d.name}
                    </div>
                )
            })}
        </form>
    )
}

export default Table