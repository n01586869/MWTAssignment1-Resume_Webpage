import { useEffect, useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Experience({ API }) {

    const [data, setData] = useState()

    useEffect(()=>
    {fetch(`${API}/getExp`)
        .then((res) => {
        if (res.status !== 200) {
            console.log("error");
            return Promise.reject("Exit promise");
        }
        // console.log(res)
        return res.json();
        })
        .then((json) => {
        setData(json);
        // console.log(json);
        })
        .catch((err) => console.log(err))}
    )

    return (
    <div>
        {data && data.map((exp)=>{
            return (
                <div className="mx-auto" style={{maxWidth: 800, paddingTop: 15, paddingBottom: 15}}>
                        <div style={{fontSize: 18}}>{exp.company}</div>
                        <div style={{display: "flex", justifyContent: 'space-between', color: '#006DA3'}}>
                            <div>
                            {exp.jobTitle}
                            </div>
                            <div style={{display: 'flex'}}>
                                <div>{exp.startDate} -&nbsp;</div>
                                <div> {exp.endDate}</div>
                            </div>
                        </div>
                        <div>
                            {exp.responsibilities.map((resp)=>{
                            return <div>&#x2022; {resp}</div>
                        })}
                        </div>
                </div>
            )
        })}
    </div>
    );
}

export default Experience;
