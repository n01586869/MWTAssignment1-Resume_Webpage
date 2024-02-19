import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Overview from './Overview'

export default function Info({ fetchData }) {

    const [data, setData] = useState()

    useEffect(() => {
        fetchData('/getInfo', setData)
    })

    return (
        <>
        {/* While data is true, show Card */}
        {data &&
            <Card className="mx-auto component">
                <Card.Header>
                    {/* Display name */}
                    <div style={{ fontSize: 26, color: '#4A556D' }}>
                        {data.name}
                    </div>
                </Card.Header>
                <Card.Body>
                    <div>
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
                            Contact information: <a href={"mailto:" + data.email} style={{ color: '#006DA3', textDecoration: 'none' }}>{data.email}</a>, {data.phone}
                        </div>
                    </div>
                    <hr />
                    <Overview fetchData={fetchData}/>
                </Card.Body>
            </Card>
        }
        </>
    )

}
