import { useState, useEffect } from 'react'

export default function Overview({ fetchData }) {

    const [data, setData] = useState()

    useEffect(()=>{
        fetchData('/getOverview', setData)
    })

    return (
        <div className="mx-auto component">
            {/* Display overview */}
            {data && data.overview}
        </div>
    )
}
