import { useState } from "react"
import { Button } from 'react-bootstrap'

const Counter = () => {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Ha hecho click {count} veces</h1>
            <hr />
            <Button onClick={incrementCounter}>Presiona aquì</Button>
        </>
    )
}

export default Counter