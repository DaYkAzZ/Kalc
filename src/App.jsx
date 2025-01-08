import React from 'react';
import { useState } from 'react';
import { Calc } from './components/utils/Calc';

function App() {

  const [calc, setCalc] = useState(false)

  return (
    <div className='bg-black/95'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-center text-white p-10 font-bold'>Ne vous souciez plus des <span className='bg-gradient-to-tr from-fuchsia-500 to-blue-600 bg-clip-text text-transparent'>chiffres</span>, grâce à <br />
          <span className='bg-gradient-to-br from-fuchsia-500 to-blue-600 bg-clip-text text-transparent'>Kalc.</span></h1>
        <button onClick={() => {
          if (calc) {
            setCalc(false)
          } else {
            setCalc(true)
          }
        }} className={`text-lg mt-5 p-3 rounded-xl text-white font-thin`}>
          {calc ? 'Fermer' : 'Calculer'}
          <i className={`ri-arrow-right-up-line m-1 text-xl`}></i>
        </button>
        <div className={`transition-all transition-ease-in-out duration-1000 ${calc ? 'opacity-100' : 'opacity-0'} ${calc ? 'scale-100' : 'scale-75'} ${calc ? 'p-16' : 'p-0'}`}>
          {calc && <Calc />}
        </div>
      </div>
    </div>
  )
}

export default App