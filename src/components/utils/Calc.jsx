import tjmData from '../../data/tjm.json';
import React, { useState } from 'react';


export function Calc() {
    const [workers, setWorkers] = useState([]);

    const newWorker = (e) => {
        e.preventDefault();
        setWorkers([...workers, ...tjmData]);
    };

    return (
        <div className="w-[900px] rounded-lg shadow-md flex flex-col p-10 text-black bg-white">
            <h1 className="font-bold text-4xl mb-5 bg-gradient-to-l from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
                Chiffrer votre projet
            </h1>
            <form className="flex flex-col">
                <div>
                    <h2 className='text-lg my-3'>
                        Parties prenantes du projet
                    </h2>
                    <hr />
                    <div className='my-3 flex flex-col'>
                        <h3 className='font-bold my-3'>
                        Ancienneté / Métier / TJM :
                        </h3>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <select className='p-2 rounded-lg shadow-lg w-full'>
                                    <option value="junior">Junior</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </div>
                            <div>
                                <select className='p-2 rounded-lg shadow-lg w-full'>
                                    {workers.map((worker) => (
                                        <option value={worker.role}>{worker.role}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select className='p-2 rounded-lg shadow-lg w-full'>
                                    {workers.map((worker) => (
                                        <option value={worker.juniorTJM }>{worker.juniorTJM} €/J</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onClick={newWorker} className='bg-blue-500 text-white p-2 rounded-lg mt-2'>
                        <i class="ri-add-line"></i> Nouv.
                    </button>
                </div>
            </form>
        </div>
    )
}

/*

- ajouter des participants
- ajouter des tâches / jours

- Les parties prenantes
- leurs tjm (déjà renseigné dans un JSON)
- leurs tâches / nombres de jours / heures */