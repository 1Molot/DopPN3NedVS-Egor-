import React from 'react';

type PropsType = {
    name:string
    onClickCallback:()=>void
    disabled?:boolean
}

export const SuperButton = (props:PropsType) => {

    const onClickHandler = () => {
        props.onClickCallback()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled}>
            {props.name}
        </button>
    )
}