import { useState } from "react"
import { Button } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'

const CoasterForm = () => {

    const [coasterName, setCoasterName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const changeCoasterName = e => {
        const { value } = e.target
        setCoasterName(value)
    }

    const saveNewCoaster = () => {
        setIsLoading(true)
        fetch('http://localhost:5005/api/coasters/new',
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify({ title: coasterName })
            })
            .then(() => setIsLoading(false))
    }

    return (
        <>
            <h1>¡Crea una nueva montaña rusa!</h1>
            <hr />
            <input
                type="text"
                placeholder="Escribe el nombre"
                onChange={changeCoasterName}
                disabled={isLoading}
            />

            <Button onClick={saveNewCoaster} disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>

            {isLoading && <><br /> <Spinner /></>}
        </>
    )
}

export default CoasterForm