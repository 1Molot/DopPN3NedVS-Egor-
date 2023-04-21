import React, {ChangeEvent} from 'react';
import {AddForm} from "./AddForm";
import {SuperButton} from "./SuperButton";

export type PropsType = {
    movies: MovieType[]
    title: string
    removeFilms: (id: string) => void
    addFilm: (nameFilm:string,newRating:number) => void
    changeStatus:(id:string,watched:boolean)=>void
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
                    const HandlerCheckbox=(e:ChangeEvent<HTMLInputElement>)=>{
                    props.changeStatus(el.id,e.currentTarget.checked)
                    }
                    return (
                        <li key={el.id}>
                            <SuperButton name={'X'} onClickCallback={() =>
                                props.removeFilms(el.id)}/>
                            <input type={'checkbox'} onChange={HandlerCheckbox} checked={el.watched}/>
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
