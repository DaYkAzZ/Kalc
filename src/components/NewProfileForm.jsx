import { useContext, useState } from "react";
import { WorkersContext } from "./context/WorkersContext";


export const NewProfileForm = (e) => {

    const { workers, setWorkers } = useContext(WorkersContext);
    const [name, setName] = useState();
    const [tjm, setTjm] = useState(0);
    const [exp, setExp] = useState();

    const addNewProfile = (e) => {
        e.preventDefault();
        setWorkers([
            ...workers,
            { experienceLevels: exp, role: name, tjm: tjm }
        ])
        console.log(workers);
    }

    return (
        <div className={`bg-slate-200 w-[400px] h-[500px] rounded-md p-5`}>
            <h1 className="text-xl text-center">
                Ajouter un profil
            </h1>
            <hr className="m-5 bg-black" />
            <form className="">
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className='text-md m-5'>
                        <i class="ri-profile-line"></i> Nom du profil
                        <input type="text" className="m-1 p-2 w-full" placeholder='Entrez le nom du profil' value={name} onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value)
                        }} />
                    </label>
                </div>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className="text-md m-5">
                        <i class="ri-stairs-line"></i> Ancienneté
                        <select value={exp} onChange={(e) => {
                            console.log(e.target.value);
                            setExp(e.target.value)
                        }} className="m-1 p-2 w-full">
                            <option value="">--Choisissez--</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </label>
                </div>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className='text-md m-5'>
                        <i class="ri-money-euro-box-line"></i>
                        TJM en €/J
                        <input type="number" value={tjm} onChange={(e) => setTjm(e.target.value)} className="m-1 p-2 w-full" name="" id="" placeholder='Entrez le TJM en €/J' />
                    </label>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-lg mt-2" onClick={addNewProfile}>
                    <i className="ri-add-line"></i>
                    Ajouter
                </button>
            </form>
        </div>
    )
}