import { useState } from "react";

export const NewProfileForm = ({ setWorkers }) => {
    const [name, setName] = useState(""); 
    const [tjm, setTjm] = useState(0);    
    const [exp, setExp] = useState("");    

    const addNewProfile = (e) => {
        e.preventDefault();
        const newProfile = { experienceLevel: exp, role: name, tjm: tjm, days: 0 }; // Profil avec valeur par défaut de jours
        setWorkers((prevWorkers) => [...prevWorkers, newProfile]);  
        setName("");
        setTjm(0);
        setExp("");
    };

    return (
        <div className="bg-slate-200 w-[400px] h-auto rounded-md p-5">
            <h1 className="text-xl text-center">Ajouter un profil</h1>
            <hr className="m-5 bg-black" />
            <form onSubmit={addNewProfile}>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className='text-md m-5'>
                        <i className="ri-profile-line"></i> Nom du profil
                        <input type="text" className="m-1 p-2 w-full" placeholder='Entrez le nom du profil' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className="text-md m-5">
                        <i className="ri-stairs-line"></i> Ancienneté
                        <select value={exp} onChange={(e) => setExp(e.target.value)} className="m-1 p-2 w-full">
                            <option value="">--Choisissez--</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </label>
                </div>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className='text-md m-5'>
                        <i className="ri-money-euro-box-line"></i>
                        TJM en €/J
                        <input type="number" value={tjm} onChange={(e) => setTjm(e.target.value)} className="m-1 p-2 w-full" placeholder='Entrez le TJM en €/J' />
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-2">
                    <i className="ri-add-line"></i> Ajouter
                </button>
            </form>
        </div>
    );
}
