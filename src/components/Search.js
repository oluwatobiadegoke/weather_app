import { useContext, useRef } from 'react';
import AppContext from '../context/appContext';
import { MdClear, MdChevronRight, MdSearch } from "react-icons/md";

const Search = () => {

    const { 
        toggleSearch, 
        searchOpen, 
        setLocation
    } = useContext(AppContext);

    const form = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        ref={form}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="search location"/>
                    </div>
                    <button onClick={handleSubmit} className="h-full bg-button-search text-text-500 px-3" type="submit">Search</button>
                </form>
                
                <div className="flex flex-col text-text-500">
                    <button className="locationsearchbtn locationbutton">
                        <p>London</p>
                        <MdChevronRight className="text-utils-500 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button className="locationsearchbtn locationbutton">
                        <p>Barcelona</p>
                        <MdChevronRight className="text-utils-500 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button className="locationsearchbtn locationbutton">
                        <p>Long beach</p>
                        <MdChevronRight className="text-utils-500 opacity-0 group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        
    )
}

export default Search
