import React, {ChangeEvent} from 'react';

type PropsType = {
    filter: string
    genreFilter:(filterValue:string) => void
    addFilm:(nameFilm:string)=>void
}

export const FilterMovies = (props: PropsType) => {
const genreFilterHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
    props.genreFilter(e.currentTarget.value)
}
    return (
        <div>
            <select onChange={genreFilterHandler}>
                <option value="all">All Genre</option>
                <option value="drama">Drama</option>
                <option value="crime">Crime</option>
                <option value="action">Action</option>
                <option value="military">Military</option>
                <option value="fantasy">Fantasy</option>
            </select>
            <span>Selected genre: {props.filter}</span>
        </div>

    )
}



