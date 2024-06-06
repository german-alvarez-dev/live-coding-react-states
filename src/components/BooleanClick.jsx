import { useState } from "react"
import { Button } from 'react-bootstrap'

const BooleanClick = () => {

    const [isClicked, setIsClicked] = useState(false)

    const showClickedText = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
            <h1>¿Ha hecho ya click? ¡{isClicked ? 'Sí' : 'No'}!</h1>
            <p>Esto me pone muy {isClicked ? 'contento 😄' : 'triste 😔'}</p>

            <hr />

            <Button
                onClick={showClickedText}
                variant={isClicked ? 'success' : 'warning'}>
                Presiona aquì
            </Button>
        </>
    )
}

export default BooleanClick