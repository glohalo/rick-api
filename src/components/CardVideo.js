import './styles.css'
import { UseGetAllCharacter } from './getAllCharactersQuery';
import { Link } from 'react-router-dom';
function CardVideo(){
    const {data, isLoading} = UseGetAllCharacter();
        return(    
        <div class='container-card '>
            {isLoading ? (
                <div class='wrap-loading'>
                    <div id='container-loading'>
                            <p>LOAD MORE</p>
                    </div> 
                </div>
            ): data ? (
                data.map((characters, key)=> {
                    return (
                        
                             <div id='card'>
                                <Link to='./characterdetail' state={{ from: characters.id }}>
                                <div class="header-card">
                                    <img src={characters.image} />
                                </div>
                                </Link>
                                    <div class="body-card">
                                        <h2>{characters.name}</h2>
                                        <p>Estatus {characters.status}</p>
                                        <p>Species {characters.species}</p>
                                        <p>Gender {characters.gender}</p>
                                </div>
                            </div>
                        
                       
                        
                    )
                })
            ):(
                <h1>Whoops No Data Available!</h1>
            )}       
        </div>
   
    );
};
export default CardVideo;