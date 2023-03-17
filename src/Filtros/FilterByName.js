import './filterStyle.css';
import { useState } from 'react';
import { UseGetAllCharacter } from '../components/getAllCharactersQuery';
import {Link} from "react-router-dom";
function FilterByName() {
    const [query, setSearch] =useState('');
    return (
        <div>
            <div class='wrap'>
                <div class='searchButton'>
                    <i className="bi bi-search" ></i>
                </div>                      
                <div class='search'>
                    <Link to={"/filterbyname"}>
                        <input class='searchTerm' type="text" placeholder="Filter By Name..." onChange={(e)=> setSearch(e.target.value)}/>
                    </Link>
                   
                </div>
            </div>
            
        </div>

    );
}
export default FilterByName;
