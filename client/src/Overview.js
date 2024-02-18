import React from 'react'
import { useState, useEffect } from 'react'

export default function Overview({ fetchData }) {

    const [data, setData] = useState()

    useEffect(()=>{
        fetchData('/getOverview', setData)
    })

    return (
        <div className="mx-auto" style={{ maxWidth: 800, paddingTop: 15, paddingBottom: 15 }}>
            {data && data.overview}
        </div>
    )
}
