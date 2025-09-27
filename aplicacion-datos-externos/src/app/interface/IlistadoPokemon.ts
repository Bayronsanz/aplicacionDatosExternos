import { Ipokemom } from "./Ipokemon"

export interface IlistadoPokemon{
    count: number
    next: string
    previous: string | null
    result: Ipokemom[]
}