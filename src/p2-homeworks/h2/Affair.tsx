import React from 'react'
import {TaskType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: TaskType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <button onClick={deleteCallback}>X</button>

            {props.affair.name}
        </div>
    )
}

export default Affair
