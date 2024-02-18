import React from 'react'
import { useState, useEffect } from 'react'
import { Anchor, Link } from 'react-bootstrap'

export default function Info({ fetchData }) {

    const [data, setData] = useState()

    useEffect(()=>{
        fetchData('/getInfo', setData)
    })

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            {data && 
                <div>
                    <div style={{fontSize: 26, color: '#4A556D'}}>
                        {data.name}
                    </div>
                    <div>
                        {data.city}, {data.province}
                    </div>
                    <div>
                        {data.postalCode}
                    </div>
                    <div>
                        Contact information: <a href={"mailto:" + data.email} style={{color: '#006DA3', textDecoration: 'none'}}>{data.email}</a>, {data.phone}
                    </div>
                </div>
            }
        </div>
    )

}
