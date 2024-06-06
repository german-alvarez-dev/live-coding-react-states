import { useState } from "react"
import { Spinner } from 'react-bootstrap'
import axios from 'axios'


const CoastersList = () => {

    const [coasters, setCoasters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    axios
        .get('http://localhost:5005/api/coasters')
        .then(response => {
            setCoasters(response.data)
            setIsLoading(false)
        })

    return (

        isLoading ? <Spinner /> :
            coasters.map(eachCoaster => (
                <div className="coasterCard">
                    <img src={eachCoaster.imageUrl} alt={eachCoaster.title} />
                    <h3>{eachCoaster.title}</h3>
                </div>
            ))
    )
}

export default CoastersList