import React from 'react';
import { useState } from 'react';
import { Calc } from './components/Calc';
import { WorkersProvider } from './components/context/WorkersContext';
import { Heading } from './components/utils/Heading';

function App() {

  const [calc, setCalc] = useState(false)

  return (
    <div className='flex justify-center items-center min-h-screen' style={{
      backgroundImage:
        calc
          ? 'linear-gradient(to bottom left, rgb(0, 0, 100), rgb(40, 0, 100))'
          : 'linear-gradient(to bottom left, rgb(0, 0, 80), rgb(40, 0, 110))',
      transition: 'all 1s ease-in-out'
    }}>
      <WorkersProvider>
        <div className='flex flex-col justify-center items-center'>
          {!calc && <Heading />}
          <button onClick={() => {
            if (calc) {
              setCalc(false)
            } else {
              setCalc(true)
            }
          }} className={`text-lg mt-5 p-1 rounded-xl text-white relative group hover:underline-effect`}>
            {calc ? 'Fermer' : 'Calculer'}
            <span class="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-fuchsia-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
            <i className={`ri-arrow-right-up-line m-1 text-xl`}></i>
          </button>
          <div className={`transition-all transition-ease-in-out duration-1000 ${calc ? 'opacity-100' : 'opacity-0'} ${calc ? 'scale-100' : 'scale-0'} ${calc ? 'p-16' : 'p-0'}`}>
            {calc && <Calc />}
          </div>
          <div className={`transition-all transition-ease-in-out duration-1000 ${calc ? 'opacity-100' : 'opacity-0'} ${calc ? 'scale-100' : 'scale-0'} ${calc ? 'p-16' : 'p-0'}`}>
            {!calc}
          </div>
        </div>
      </WorkersProvider>
    </div>
  )
}

export default App