import { UseGetAllCharacter } from '../components/getAllCharactersQuery';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

function FilterSpecies() {
    const {data} = UseGetAllCharacter();
    const location = useLocation();
    const { from } = location.state;
    console.log("this is from", from);
    return (
        <div>
            <div id="nav-bar-header">
                <NavBar></NavBar>
            </div>
            <div class='container-card '>
                {data?.filter(character=>character.species.includes(from)
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
export default FilterSpecies;



