import { useContext, useState } from 'react';
import AppContext from '../context/appContext';
import { MdClear, MdChevronRight, MdSearch } from "react-icons/md";

const Search = () => {

    const { 
        toggleSearch, 
        searchOpen, 
        setLocation
    } = useContext(AppContext);

    const [ input, setInput ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input) {
            setLocation(input);
        }
    }

    return (
            <div className={searchOpen ? "searchOn": "searchOff"}>
                <div className="flex justify-end mb-10">
                    <MdClear className="text-text-500 text-2xl cursor-pointer" onClick={toggleSearch}/>
                </div>

                <form className="flex h-12 items-center gap-3 mb-14">
                    <div className="flex-1 flex searchborder h-full items-center">
                        <label htmlFor="search" className=" px-3">
                            <MdSearch className="text-utils-500 text-2xl" />
                        </label>
                        <input className="input"
                        type="text" 
                        id="search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="search location"/>
                    </div>
                    <button onClick={handleSubmit} className="h-full bg-button-search text-text-500 px-3" type="submit">Search</button>
                </form>
                
                <div className="flex flex-col text-text-500">
                    <button onClick={() => setLocation("London")} className="group locationsearchbtn locationbutton">
                        <p>London</p>
                        <MdChevronRight className="text-utils-500 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button onClick={() => setLocation("Lagos")} className="group locationsearchbtn locationbutton">
                        <p>Lagos</p>
                        <MdChevronRight className="text-utils-500 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button onClick={() => setLocation("Barcelona")} className="group locationsearchbtn locationbutton">
                        <p>Barcelona</p>
                        <MdChevronRight className="text-utils-500 opacity-0 group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        
    )
}

export default Search
