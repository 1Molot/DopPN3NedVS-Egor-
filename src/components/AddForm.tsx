import React, {ChangeEvent,  useState} from 'react';
import {SuperButton} from "./SuperButton";

type PropsType = {
    addFilm: (nameFilm: string, newRating: number) => void
}

export const AddForm = (props: PropsType) => {

    const [nameFilm, setNameFilm] = useState<string>("")

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const [rating, setRating] = useState<number>(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFilm(e.currentTarget.value)
    }
    const onChangeHandlerRating = (e: ChangeEvent<HTMLInputElement>) => {
        setRating(+e.currentTarget.value)
    }
    const addFilmHandler = () => {
        props.addFilm(nameFilm, rating)
        setNameFilm('')
        setRating(0)
    }
    const collapsedHandler = () => {
        setIsCollapsed(!isCollapsed)
    }
    let buttonDisabled = true

    return (
        <div>
            {/*<button onClick={collapsedHandler}>Add Film</button>*/}
            <SuperButton name={'Add Film'} onClickCallback={collapsedHandler}/>
            {!isCollapsed &&
                <div>
                    <input value={nameFilm} type={'text'} onChange={onChangeHandler}/>
                    <input value={rating} type={'number'} min={0} onChange={onChangeHandlerRating}/>
                    <SuperButton name={'ADD'} onClickCallback={addFilmHandler}  disabled={buttonDisabled}
                    />
                    {/*<button onClick={addFilmHandler}>Add</button>*/}
                </div>
            }
        </div>
    )
}
