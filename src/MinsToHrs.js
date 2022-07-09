import React, {useState} from 'react'

export function MinsToHrs(){
    const [amount, setAmount] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const onChange = (e)=> setAmount(e.target.value)
    const onFlip = ()=> {
        reset()
        setFlipped(prev=>!prev)
    }
    const reset = ()=> setAmount(0)

    return (
        <div>
            <h3>Minutes to Hours</h3>
            <div className='grid'>
                <label htmlFor="mins">Minutes </label>
                <input value={!flipped ? amount: amount*60}
                       id='mins'
                       placeholder="Minutes"
                       type="number"
                       onChange={onChange}
                       disabled={flipped}></input>
                <label htmlFor="hrs">Hours </label>
                <input value={ flipped ? amount : Math.round(amount/ 60) }
                        id='hrs'
                        placeholder="Hours"
                        type="number"
                        onChange={onChange}
                        disabled={!flipped}></input>
            </div>
            <button onClick={reset}> Reset </button>
            <button onClick={onFlip}> Flip</button>
        </div>
    )
}