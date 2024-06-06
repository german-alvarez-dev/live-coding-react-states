import { useState } from "react"
import { Button } from 'react-bootstrap'

const SimpleClick = () => {

    const [isClicked, setIsClicked] = useState('No')

    const showClickedText = () => {
        setIsClicked('Sí')
    }

    return (
        <>
            <h1>¿Ha hecho ya click? ¡{isClicked}!</h1>
            <hr />
            <Button onClick={showClickedText}>Presiona aquì</Button>
        </>
    )
}

export default SimpleClick