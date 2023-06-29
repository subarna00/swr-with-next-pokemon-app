import { Pokemon, PokemonPage } from "@/models/Pokemon";
import api from "./axios";

export async function getPokemon(name:string) {
    const response = await api.get<Pokemon>("/pokemon/"+name);
    return response.data;
}

export async function getPokemonPage(page:number) {
    const pageSizee = 12;
    const response = await api.get<PokemonPage>(`/pokemon?limit=${pageSizee}&offset=${pageSizee * (page -1)}`);
    return response.data;
}