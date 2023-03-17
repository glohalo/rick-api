import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseGetAllCharacter } from '../components/getAllCharactersQuery';
import './filterStyle.css';

function Gender(prueba='male') {
    
    const [open, setOpen] = useState(false);
    const [gender, setGender]=useState('');
    const [openSpecies, setOpenSpecies] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);
    const {data} = UseGetAllCharacter();
    const handleOpen = () => {
        setOpen(!open);
    };
    const handleOpenSpecies = () => {
        setOpenSpecies(!openSpecies);
    };
    const handleOpenStatus = () => {
        setOpenStatus(!openStatus);
    };

    const handleMenuSpecies = () => {
        setOpenSpecies(false)
    };
    const handleMenuStatus = () => {
        setOpenStatus(false)
    };
    const selectGender = genderSelected =>{
        setGender(genderSelected.target.value);
        setOpen(false);
        
    }
    const setOfGender =[... new Set(data?.map((Gender)=>Gender.gender))];
    const listOfGender = setOfGender.map((item)=>
        <Link to={'./filtergender'} state={{ from: item }}>
            <li class="menu-item" >
                <button  onClick={selectGender} value={item}>{item}</button>
            </li>
        </Link>
    );
    const setOfSpecies =[... new Set(data?.map((Species)=>Species.species))];
    const listOfSpecies = setOfSpecies.map((item)=>
        <Link to={'./filtergender'} state={{ from: item }}>
            <li class="menu-item">
                <button onClick={handleMenuSpecies}>{item}</button>
            </li>
        </Link>
        
    );
    const setOfStatus =[... new Set(data?.map((Status)=>Status.status))];
    const listOfStatus = setOfStatus.map((item)=>
        <Link to={'./filtergender'} state={{ from: item }}>
            <li class="menu-item">
                <button onClick={handleMenuStatus} type='input' >{item}</button>    
            </li>
        </Link>    
    );
    return (
        <div class="wrap-content">
            <div class="dropdown wrap">
                <button >Gender</button>
                    <div class='dropdownIcon' onClick={handleOpen}>
                        <i className="bi bi-chevron-compact-down" ></i>
                    </div>
                    {open ? (
                            <ul class="menu">{listOfGender}</ul>
                        
                    ) : null}    
            </div>
            <div class='wrap' id='contanier-group'>
                <div class="dropdown wrap">
                    <button >Species</button>
                        <div class='dropdownIcon' onClick={handleOpenSpecies}>
                            
                            <i className="bi bi-chevron-compact-down" ></i>
                        </div>
                        {openSpecies ? (
                             <ul class="menu">{listOfSpecies}</ul>
                        ) : null}    
                </div>
                <div class="dropdown wrap">
                    <button >Status</button>
                        <div class='dropdownIcon' onClick={handleOpenStatus}>
                            <i className="bi bi-chevron-compact-down" ></i>
                        </div>
                        {openStatus ? (
                        <ul class="menu">{listOfStatus}</ul>
                        ) : null}    
                </div>
            </div>
        </div>
    );
}
export default Gender;