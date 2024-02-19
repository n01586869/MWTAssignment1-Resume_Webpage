import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap'

export default function Experience({ fetchData }) {

    const [data, setData] = useState()

    useEffect(() =>
        fetchData('/getExp', setData)
    )

    return (
        <>
        {data &&
        <Card className="mx-auto component">
            <Card.Header>
                <div className="header">Experience</div>
            </Card.Header>
            <Card.Body>
                {/* While data is true, loop through each object in array */}
                {data.map((exp, i) => {
                    return (
                        <div style={{ paddingBottom: 10 }} key={exp.company}>
                            {/* Display company name */}
                            <div className="subheader">{exp.company}</div>
                            {/* Container to display job title and start/end dates in a flex row */}
                            <div style={{ display: "flex", justifyContent: 'space-between', color: '#006DA3' }}>
                                <div>
                                    {/* Display job title */}
                                    {exp.jobTitle}
                                </div>
                                <div style={{ display: 'flex' }}>
                                    {/* Display start and end dates */}
                                    <div>{exp.startDate} -&nbsp;</div>
                                    <div> {exp.endDate}</div>
                                </div>
                            </div>
                            <div>
                                {/* Loop through responsibility array */}
                                {exp.responsibilities.map((resp) => {
                                    {/* Display bullet point, then responsibility */ }
                                    return <div key={resp}>&#x2022; {resp}</div>
                                })}
                            </div>
                        </div>
                    )
                })}
            </Card.Body>
        </Card>
        }
        </>
    );
}