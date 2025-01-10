export const NewProfileForm = (e) => {
    return (
        <div className={`bg-slate-200 w-[400px] h-[500px] rounded-md p-5`}>
            <h1 className="text-xl text-center">
                Ajouter un profil
            </h1>
            <hr className="m-5 bg-black"/>
            <form className="">
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className='text-md m-5'>
                    <i class="ri-profile-line"></i> Nom du profil
                        <input type="text" className="m-1 p-1 w-full" placeholder='Entrez le nom du profil' />
                    </label>
                </div>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className="text-md m-5">
                    <i class="ri-stairs-line"></i> Ancienneté
                        <select name="" className="m-1 p-1 w-full">
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </label>
                </div>
                <div className="m-2 bg-slate-100 flex flex-col">
                    <label className='text-md m-5'>
                    <i class="ri-money-euro-box-line"></i>
                        TJM en €/J
                        <input type="number"className="m-1 p-1 w-full"  name="" id="" placeholder='Entrez le TJM en €/J'/>
                    </label>
                </div>
                <button className="bg-blue-500 text-white p-2 m-1 rounded-lg mt-2">
                <i className="ri-add-line"></i>
                    Ajouter
                </button>
            </form>
        </div>
    )
}