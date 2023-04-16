import React, {ChangeEvent, MouseEventHandler, useState} from 'react';

type PropsType = {
    addFilm: (nameFilm: string) => void
}

export const AddForm = (props: PropsType) => {

    const [nameFilm, setNameFilm] = useState<string>("")

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const [rating, setRating] = useState<number>(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFilm(e.currentTarget.value)
    }
    const addFilmHandler = () => {
        props.addFilm(nameFilm)
        setNameFilm('' )
    }
    const collapsedHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <button onClick={collapsedHandler}>Add Film</button>
            { !isCollapsed &&
                <div>
                <input value={nameFilm} onChange={onChangeHandler}/>
                <input/>
                <button onClick={addFilmHandler}>Add</button>
            </div>
            }
        </div>
    )
}

///по кнопке адд или интер зачищялся инпут ///
// добавить рейнти нг