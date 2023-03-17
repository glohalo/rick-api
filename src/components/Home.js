import NavBar from "./NavBar";
import Header from "./Header";
import FilterByName from "../Filtros/FilterByName";
import Gender from "../Filtros/Gender";
import CardVideo from "./CardVideo";
import Footer from "./Footer";
import './styles.css'
function Home() {
    return (
        <div>
            <div id="nav-bar-header">
                <NavBar></NavBar>
            </div>
            
            <Header></Header>
            <div class='container-filters '>
                <FilterByName></FilterByName>
                <Gender></Gender>
            </div> 
            <CardVideo></CardVideo>
            
                <Footer></Footer> 
            
            
        </div>
    );
  }
  
  export default Home;