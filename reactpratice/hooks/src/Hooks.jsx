import React, { useState } from 'react'

const Hooks = () => {
    const [sum, setsum] = useState(0);

    const useEffect = () => ({

    }, [sum])
    return (
        <div>
            <h1>aarthick</h1>
            <p>{sum}</p>
            <button onClick={() => setsum(1)}>Add</button>
        </div>
    )
}

export default Hooks