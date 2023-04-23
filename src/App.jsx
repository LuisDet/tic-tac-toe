import { useState } from 'react'
import './App.css'

let matriz = [
  {
    x: -1,
    y: 1,
    selector: '',
    points: 0
  },
  {
    x: 0,
    y: 1,
    selector: '',
    points: 0
  }, {
    x: 1,
    y: 1,
    selector: '',
    points: 0
  }, {
    x: -1,
    y: 0,
    selector: '',
    points: 0
  },
  {
    x: 0,
    y: 0,
    selector: '',
    points: 0
  }, {
    x: 1,
    y: 0,
    selector: '',
    points: 0
  }, {
    x: -1,
    y: -1,
    selector: '',
    points: 0
  },
  {
    x: 0,
    y: -1,
    selector: '',
    points: 0
  }, {
    x: 1,
    y: -1,
    selector: '',
    points: 0
  }
]


function App() {

  const [toggle, setToggle] = useState('blue')

  const winner = (positionX, positionY, selector) => {
    let hPoints = 0
    let vPoints = 0

    let pointZero = matriz.some(token => token.y === 0 && token.x === 0 && token.selector === selector)

    if (pointZero) {
      let bonusPoints = matriz.some(token => token.x === -positionX && token.y === -positionY && token.selector === selector && positionX !== 0 && positionY !== 0)
      if (bonusPoints) {
        return selector + ' win 1'
      }
    }

    for (const token of matriz) {
      if (token.selector === selector) {
        if ((token.y === positionY)) {
          hPoints += 1
          if (Math.abs(hPoints) === 3) return selector + ' win 2'
        }
        if ((token.x === positionX)) {
          vPoints += 1
          if (Math.abs(vPoints) === 3) return selector + ' win 3'
        }
      }
    }
  }

  const handleClick = (e, fija) => {
    if (!fija.selector) {
      fija.selector = toggle
      e.target.classList.add(`${fija.selector}-player`)
      setToggle(curr => curr === 'blue' ? 'red' : 'blue')
      console.log(winner(fija.x, fija.y, fija.selector))
      console.log(matriz)
    }
  }

  return (
    <div className='tablero'>
      <p>
        winner {toggle}
      </p>
      <div className='caja'>
        {matriz.map((fijas, idx) => <div className="bloques" key={idx} onClick={(e) => { handleClick(e, fijas) }}>

        </div>
        )}
      </div>
      <div className='player'>
        <div className={`bloques ${toggle}-player`}></div>
      </div>
    </div>
  )
}

export default App
