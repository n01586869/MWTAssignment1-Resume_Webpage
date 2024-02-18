import React from 'react'
import { useState, useEffect } from 'react'

export default function Info({ fetchData }) {

    const [data, setData] = useState()

    useEffect(()=>{
        fetchData('/getInfo', setData)
    })

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            {data && 
                <div>
                    {/* Display name */}
                    <div style={{fontSize: 26, color: '#4A556D'}}>
                        {data.name}
                    </div>
                    {/* Display city and province */}
                    <div>
                        {data.city}, {data.province}
                    </div>
                    {/* Display postal code */}
                    <div>
                        {data.postalCode}
                    </div>
                    {/* Display contact info */}
                    <div>
                        Contact information: <a href={"mailto:" + data.email} style={{color: '#006DA3', textDecoration: 'none'}}>{data.email}</a>, {data.phone}
                    </div>
                </div>
            }
        </div>
    )

}
