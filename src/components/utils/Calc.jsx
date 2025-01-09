import React, { useState } from 'react';
import tjmData from '../../data/tjm.json';

export function Calc() {
    const [workers, setWorkers] = useState([]);

    const addNewProfile = (e) => {
        e.preventDefault();
        setWorkers([
            ...workers,
            { experienceLevel: '', role: '', tjm: 0, days: 0 }, // Profil initial vide
        ]);
    };

    const updateWorker = (index, field, value) => {
        const updatedWorkers = [...workers];
        updatedWorkers[index][field] = value;

        // Met à jour automatiquement le TJM si `role` ou `experienceLevel` change
        if (field === 'role' || field === 'experienceLevel') {
            const workerData = tjmData.find(
                (worker) => worker.role === updatedWorkers[index].role
            );
            if (workerData) {
                updatedWorkers[index].tjm =
                    updatedWorkers[index].experienceLevel === 'Junior'
                        ? workerData.juniorTJM
                        : updatedWorkers[index].experienceLevel === 'Senior'
                            ? workerData.seniorTJM
                            : 0;
            }
        }

        setWorkers(updatedWorkers);
    };

    return (
        <div className="w-[900px] rounded-lg shadow-md flex flex-col p-10 text-black bg-white">
            <h1 className="font-bold text-4xl py-2 mb-5 bg-gradient-to-l from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
                Chiffrer votre projet
            </h1>
            <form className="flex flex-col">
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-lg my-3">Parties prenantes du projet</h2>
                        </div>
                        <div>
                            <button
                                onClick={addNewProfile}
                                className="bg-blue-500 text-white p-2 my-3 rounded-lg mt-2"
                            >
                                <i className="ri-add-line"></i> Ajouter un profil
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="my-3 flex flex-col">
                        {workers.map((worker, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between items-center bg-slate-200 p-5 rounded-md mb-3"
                            >
                                <div className='p-2 border-1 border-black rounded-lg m-2'>
                                    <label>
                                        Ancienneté
                                        <select
                                            className="p-2 rounded-lg shadow-lg w-full"
                                            value={worker.experienceLevel}
                                            onChange={(e) =>
                                                updateWorker(index, 'experienceLevel', e.target.value)
                                            }
                                        >
                                            <option value="">Choisir</option>
                                            <option value="Junior">Junior</option>
                                            <option value="Senior">Senior</option>
                                        </select>
                                    </label>
                                </div>
                                <div className='p-2 border-1 border-black rounded-lg m-2'>
                                    <label>
                                        Métier
                                        <select
                                            className="p-2 rounded-lg shadow-lg w-full"
                                            value={worker.role}
                                            onChange={(e) =>
                                                updateWorker(index, 'role', e.target.value)
                                            }
                                        >
                                            <option value="">Choisir</option>
                                            {tjmData.map((data, idx) => (
                                                <option key={idx} value={data.role}>
                                                    {data.role}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className='p-2 border-1 border-black rounded-lg m-2'>
                                    <label>
                                        TJM en €/J
                                        <input
                                            type="number"
                                            className="p-2 rounded-lg shadow-lg w-full"
                                            value={worker.tjm}
                                            readOnly
                                        />
                                    </label>
                                </div>
                                <div className='p-2 border-1 border-black rounded-lg m-2'>
                                    <label>
                                        Jours
                                        <input
                                            type="number"
                                            className="p-2 rounded-lg shadow-lg w-full"
                                            value={worker.days}
                                            onChange={(e) =>
                                                updateWorker(index, 'days', e.target.value)
                                            }
                                            step="1"
                                            min="0"
                                        />
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div>
                        <h2 className='text-lg my-3'>
                            Résultat du chiffrage
                        </h2>
                        <hr />
                        <div className='bg-gradient-to-tl from-fuchsia-500 to-blue-500 shadow-md rounded-md p-10'>
                            <span className='text-5xl flex justify-center items-center text-white'>
                                18 780€
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
