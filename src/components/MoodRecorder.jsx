import { useState } from "react"

const MoodRecorder = () => {

    const [moodValue, setMoodValue] = useState(0)

    const handleMood = e => {
        const { value } = e.target
        setMoodValue(value)
    }

    const emojiMoods = ['😡', '😔', '😅', '😂', '✨']

    return (
        <>
            <h1>Hoy estoy {emojiMoods[moodValue]}</h1>
            <hr />
            <input type="range" step={1} min={0} max={4} onChange={handleMood} />
        </>
    )
}

export default MoodRecorder