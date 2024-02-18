import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Experience({ fetchData }) {

    const [data, setData] = useState()

    useEffect(() =>
        fetchData('/getExp', setData)
    )

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            <div style={{fontSize: 24, color: '#4A556D'}}>Experience</div>
            <hr />
            {data && data.map((exp) => {
                return (
                    <div>
                        <div style={{ fontSize: 18 }}>{exp.company}</div>
                        <div style={{ display: "flex", justifyContent: 'space-between', color: '#006DA3' }}>
                            <div>
                                {exp.jobTitle}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div>{exp.startDate} -&nbsp;</div>
                                <div> {exp.endDate}</div>
                            </div>
                        </div>
                        <div>
                            {exp.responsibilities.map((resp) => {
                                return <div>&#x2022; {resp}</div>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}