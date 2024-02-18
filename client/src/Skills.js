import React from 'react'
import { useState, useEffect } from 'react'

export default function Skills({ fetchData }) {

    const [data, setData] = useState()

    useEffect(()=>{
        fetchData('/getSkills', setData)
    })

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            <div style={{fontSize: 24, color: '#4A556D'}}>Skills</div>
            <hr />
            {/* While data is true, loop through each skill in array */}
            {data && data.map((skill) => {
                return (
                    <div key={skill}>
                        {/* Displays a bullet point, then the current skill */}
                        &#x2022; {skill}
                    </div>
                )
            })}
        </div>
    )
}
