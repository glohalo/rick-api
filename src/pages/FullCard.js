import { UseGetAllCharacter } from "../components/getAllCharactersQuery";
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function FullCard(){
    const {data}=UseGetAllCharacter();
    const location = useLocation();
    const { from } = location.state;
    console.log("this is from", from);
    const foundCard = data.find(obj => {
        return obj.id === from;
      });
    return (
        <div>
            <div id="nav-bar-header">
                <NavBar></NavBar>
            </div>
            <div id='fullcard'>
                <div class="fullheader-card">
                    <img src={foundCard.image} />
                </div>
                <h2>{foundCard.name}</h2>
                    <div id="container-body-columns">
                        <div class='body-card'>
                            <h3>Informations</h3>
                            <p><b>Gender</b></p>
                            <p>{foundCard.gender}</p>
                            <p><b>Estatus</b></p>
                            <p>{foundCard.status}</p>
                            <p><b>Species</b></p>
                            <p>{foundCard.species}</p>
                            <p><b>Origin</b></p>
                            <p>{foundCard.origin.name}</p>
                            <p><b>Type</b></p>
                            <p>{foundCard.type}</p>
                            <p><b>Location</b></p>
                            <p>{foundCard.location.name}</p>
                            
                        </div>
                        <div class='body-card'>
                            <h3>Episodes</h3>
                          
                        </div>
                        
                </div>
        </div>
            <Footer></Footer>
        </div>
                
        
    )
}