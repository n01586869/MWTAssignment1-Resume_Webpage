import React from 'react'
import { useEffect, useState } from 'react'

export default function Education({ fetchData }) {

    const [data, setData] = useState()

    useEffect(() =>
        fetchData('/getEdu', setData)
    )

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            <div style={{fontSize: 24, color: '#4A556D'}}>Education</div>
            <hr />
            {/* While data is true, loop through each object in Edu array */}
            {data && data.map((edu) => {
                return (
                    <div key={edu.school}>
                        {/* Display school name */}
                        <div style={{ fontSize: 18 }}>{edu.school}</div>
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
                        <div>
                            {/* Display school city and province */}
                            {edu.city} -&nbsp;
                            {edu.province}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
