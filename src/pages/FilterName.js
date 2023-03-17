import { useState } from 'react';
import { UseGetAllCharacter } from '../components/getAllCharactersQuery';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function FilterByName() {
    const [query, setSearch] =useState('');
    const {data} = UseGetAllCharacter();

    return (
        <div>
            <div id="nav-bar-header">
                <NavBar></NavBar>
            </div>
            <div class='container-card'>
                <div class='wrap '>
                    <div class='searchButton'>
                        <i className="bi bi-search" ></i>
                    </div>                      
                    <div class='search'>
                            <input class='searchTerm' type="text" placeholder="Filter By Name..." onChange={(e)=> setSearch(e.target.value)}/>                    
                    </div>
                </div>
            </div>
            
            <div class='container-card '>
                {data?.filter(character=>character.name.toLowerCase().includes(query)
                ).map((character)=>(
                
                    <div id='card' key={character.id}>
                        <div class="header-card">
                            <img src={character.image} />
                        </div>
                            <div class="body-card" >
                                <h2>{character.name}</h2>
                                <p>Estatus {character.status}</p>
                                <p>Species {character.species}</p>
                                <p>Gender {character.gender}</p>
                        </div>
                    </div>
                
                ))}
            </div>
            <Footer></Footer> 
            
        </div>

    );
}
export default FilterByName;



