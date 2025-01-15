import React, { useState } from 'react';
import tjmData from '../data/tjm.json';
import { NewProfileForm } from './NewProfileForm';

export function Calc() {
    const [workers, setWorkers] = useState([]);

    const addProfile = (e) => {
        e.preventDefault();
        setWorkers([
            ...workers,
            { experienceLevel: '', role: '', tjm: 0, days: 0 },  // Profil vide initial
        ]);
    };

    const updateWorker = (index, field, value) => {
        const updatedWorkers = [...workers];
        updatedWorkers[index][field] = value;

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

    const [displayForm, setDisplayForm] = useState(false);

    const [total, setTotal] = useState(0);

    const calculate = () => {
        setTotal(workers.reduce((acc, worker) => acc + (worker.tjm * worker.days), 0));
    };

    return (
        <div className="w-[900px] rounded-lg shadow-md flex flex-col p-10 text-black bg-white">
            {displayForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <NewProfileForm setWorkers={setWorkers} />
                        <button
                            onClick={() => setDisplayForm(false)}
                            className="bg-red-500 text-white p-2 rounded-lg mt-2"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
            <div style={{ filter: displayForm ? 'blur(5px)' : 'none' }}>
                <h1 className="font-bold text-4xl py-2 mb-5 bg-gradient-to-l from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
                    Chiffrer votre projet
                </h1>
                <form className="flex flex-col">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-lg my-3">Parties prenantes du projet</h2>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setDisplayForm(true);
                                    }}
                                    className="bg-gradient-to-bl from-fuchsia-500 to-blue-600 text-white p-2 m-1 rounded-lg mt-2"
                                >
                                    <i className="ri-add-line"></i> Nouv. Profil
                                </button>
                                <button
                                    onClick={addProfile}
                                    className="bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white p-2 m-1 rounded-lg mt-2"
                                >
                                    <i className="ri-add-line"></i> Profil pré-existants
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
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='bg-gradient-to-l from-fuchsia-500 to-blue-600 bg-clip-text text-transparent items-center flex justify-center p-5 text-5xl'>
                        {total ? total : "Votre total s'affichera ici..."} €
                    </div>
                </form>
                <button onClick={calculate} className='bg-blue-500 p-1 text-white rounded-md flex justify-center m-auto items-center'>
                    Résultat <i className={`ri-arrow-right-up-line m-1 items-center`}></i>
                </button>
            </div>
        </div>
    );
}
