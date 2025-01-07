import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Calc } from './components/utils/calc';

function App() {

  const [calc, setCalc] = useState(false)

  return (
    <div className='bg-black/95'>
      <Header />
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-center text-white p-10 font-bold'>Ne vous souciez plus des <span className='bg-gradient-to-tr from-fuchsia-500 to-blue-600 bg-clip-text text-transparent'>chiffres</span>, grâce à <br />
          <span className='bg-gradient-to-br from-fuchsia-500 to-blue-600 bg-clip-text text-transparent'>Kalc.</span></h1>
        <button onClick={() => {
          if (calc) {
            setCalc(false)
          } else {
            setCalc(true)
          }
        }} style={{
          borderColor: calc ? 'red' : 'rgb(59, 130, 246)',
        }} className='border-2 border-blue-500 text-lg mt-5 p-3 rounded-xl text-white'>
          {calc ? 'Fermer' : 'Calculer'}
        </button>
        <div className={`transition-all duration-1000 ${calc ? 'opacity-100' : 'opacity-0'} ${calc ? 'scale-100' : 'scale-75'} ${calc ? 'p-16' : 'p-0'}`}>
          {calc && <Calc />}
        </div>
      </div>
    </div>
  )
}

export default App
