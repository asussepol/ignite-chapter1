
import { useState } from 'react'
export function Counter() {
    const [counter, setCounter] = useState(9)  // a funçao de setCounter server para alterar o valor de da variavel counter 

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{ counter }</h2>
            <button type="button" onClick={increment}> Incremento + 1</button>
        </div>
    )

}