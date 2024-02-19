import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

export default function Skills({ fetchData }) {

    const [data, setData] = useState()

    useEffect(()=>{
        fetchData('/getSkills', setData)
    })

    return (
        <>
        {data && 
            <Card className="mx-auto component">
                <Card.Header className="header">
                    <div className="header">Skills</div>
                </Card.Header>
                <Card.Body>
                    {/* While data is true, loop through each skill in array */}
                    {data && data.map((skill) => {
                        return (
                            <div key={skill}>
                                {/* Displays a bullet point, then the current skill */}
                                &#x2022; {skill}
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        }
        </>

    )
}
