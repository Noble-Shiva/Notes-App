import React, { useState } from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';

const NoteDetail = (props) => {

    const [redirect, setRedirect] = useState(false);

    const deleteNote = (event) => {
        event.preventDefault();
        props.deleteNote(props.note.id);
    }

    const editNote = (event) => {
        event.preventDefault();
        props.editNote(props.note.id);
    }

    const renderFormattedDate = () => {
        return 'Last edited:' + moment(props.note.timeCreated).format("DD MMM YYYY [at] h:mm a");
    }

    if (redirect || !props.note) {
        return <Redirect push to="/" />;
    }

    return (
        <div className="card">
            <div className="card-header bg-transparent">
                <p className="m-0 p-0 font-weight-light small text-muted">{renderFormattedDate()}</p>
            </div>
            <div className="card-body">
                <h4>{props.note.title}</h4>
                <p className="card-text">{props.note.content}</p>
            </div>
            <div className="card-footer m-0 p-1">
                <div className="float-right">
                    <button onClick={editNote} className="btn btn-success mr-2"><i className="fas fa-edit"></i></button>
                    <button onClick={deleteNote} className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default NoteDetail;