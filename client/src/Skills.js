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
            {data && data.map((skill) => {
                return (
                    <div>
                        &#x2022; {skill}
                    </div>
                )
            })}
        </div>
    )
}
