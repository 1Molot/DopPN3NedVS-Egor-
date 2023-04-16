import React from 'react';
import {AddForm} from "./AddForm";

export type PropsType = {
    movies: MovieType[]
    title: string
    removeFilms: (id: string) => void
    addFilm: (nameFilm:string,newRating:number) => void
}

export type MovieType = {
    id: string
    name: string
    watched: boolean
    rating: number
}


export const Watchlist = (props: PropsType) => {
    return (
        <>
            <h3> {props.title} </h3>
            <ul>
                {props.movies.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => {
                                props.removeFilms(el.id)
                            }}>x
                            </button>
                            <input type={'checkbox'} checked={el.watched}/>
                            {`${el.name}: ${el.rating}`}
                        </li>
                    )
                })}
            </ul>
            <AddForm
                addFilm={props.addFilm}
            />
        </>
    );
};
