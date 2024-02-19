import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

export default function Education({ fetchData }) {

    const [data, setData] = useState()

    useEffect(() =>
        fetchData('/getEdu', setData)
    )

    return (
        <>
        {/* While data is true, show Card */}
        {data &&
            <Card className="mx-auto component">
                <Card.Header>
                    <div className="header">Education</div>
                </Card.Header>
                <Card.Body>
                    {/* Loop through each object in Edu array */}
                    {data.map((edu) => {
                        return (
                            <div key={edu.school}>
                                {/* Display school name */}
                                <div className="subheader">{edu.school}</div>

                                <div style={{ fontSize: 14 }}>
                                    {/* Display school city and province */}
                                    {edu.city} -&nbsp;
                                    {edu.province}
                                </div>
                                {/* Container for degree type and program, and start/graduation date */}
                                <div style={{ display: "flex", justifyContent: 'space-between', color: '#006DA3' }}>
                                    <div>
                                        {/* Display degree type and program name */}
                                        {edu.type} in {edu.program}
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        {/* Display start date and graduation date */}
                                        <div>{edu.startDate} -&nbsp;</div>
                                        <div> {edu.graduationDate}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        }
        </>
    )
}
