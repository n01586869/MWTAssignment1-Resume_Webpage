import { useEffect, useState } from "react";

export default function Experience({ fetchData }) {

    const [data, setData] = useState()

    useEffect(() =>
        fetchData('/getExp', setData)
    )

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            <div style={{fontSize: 24, color: '#4A556D'}}>Experience</div>
            <hr />
            {/* While data is true, loop through each object in array */}
            {data && data.map((exp, i) => {
                return (
                    <div key={exp.company}>
                        {/* Display company name */}
                        <div style={{ fontSize: 18 }}>{exp.company}</div>

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
                                {/* Display bullet point, then responsibility */}
                                return <div key={resp}>&#x2022; {resp}</div>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}