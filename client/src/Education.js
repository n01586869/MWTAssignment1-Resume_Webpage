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
            {data && data.map((edu) => {
                return (
                    <div>
                        <div style={{ fontSize: 18 }}>{edu.school}</div>
                        <div style={{ display: "flex", justifyContent: 'space-between', color: '#006DA3' }}>
                            <div>
                                {edu.type} in {edu.program}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div>{edu.startDate} -&nbsp;</div>
                                <div> {edu.graduationDate}</div>
                            </div>
                        </div>
                        <div>
                            {edu.city} -&nbsp;
                            {edu.province}
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
