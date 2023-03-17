import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allCharacterUrl ="https://rickandmortyapi.com/api/character?page=4";
const getAllCharacters = async () => {
    const response = await axios.get(allCharacterUrl);
    return response.data.results;
};

export const UseGetAllCharacter = () => {
    const {isLoading, data} = useQuery(['allCharacter'], getAllCharacters);
    return {data, isLoading};
};