import React, {useState} from 'react'

export function KmsToMiles(){
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
          <h3>Kilometers to Miles</h3>
          <div className='grid'>
            <label htmlFor='kms'>Kilometers </label>
            <input
              value={!flipped ? amount :(amount / 1.609).toFixed(2)}
              id='kms'
              placeholder='Kilometers'
              type='number'
              onChange={onChange}
              disabled={flipped}></input>

            <label htmlFor='miles'>Miles </label>
            <input
              value={flipped ? amount: (amount * 1.609).toFixed(2)}
              id='miles'
              placeholder='Miles'
              type='number'
              onChange={onChange}
              disabled={!flipped}></input>
          </div>
            <button onClick={reset}> Reset</button>
            <button onClick={onFlip}> Flip</button>
        </div>
    )
}