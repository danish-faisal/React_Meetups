import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
    const [showModal, setShowModal] = useState(false);

    function deleteHandler() {
        setShowModal(true);
    }

    function modalFuncsHandler() {
        setShowModal(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {showModal && <Modal onCancel={modalFuncsHandler} onConfirm={modalFuncsHandler} />}
            {showModal && <Backdrop onCancel={modalFuncsHandler} />}
        </div>
    )
}

export default Todo