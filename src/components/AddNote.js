import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router';

const divStyle = {
    display: 'none'
};

const AddNote = (props) => {
    const [redirect, setRedirect] = useState(false);
    const title = useRef(null);
    const id = useRef(null);
    const content = useRef(null);

    const saveNote = (event) => {
        event.preventDefault();
        if (title.value === "") {
            alert("Title is needed");
        } else {
            const note = {
                id: Number(id.current.value),
                title: title.current.value,
                content: content.current.value
            }
            props.persistNote(note);
            setRedirect(true);
        }
    }

    const deleteNote = (event) => {
        console.log('deleteNote');
        event.preventDefault();
        props.deleteNote(props.note.id);
    }

    const renderFormTitleAction = () => {
        return (props.note.id !== undefined) ? "Edit Note" : "Add Note";
    }

    const renderFormButtons = () => {
        if (props.note.id !== undefined) {
            return (<div>
                <button type="submit" className="btn btn-success float-right">Save Note</button>
                <button onClick={deleteNote} className="btn btn-danger">Delete Note</button>
            </div>);
        }
        return (

            <button type="submit" className="btn btn-success float-right">Save Note</button>
        );
    }


    if (redirect) {
        if (!props.note) {
            return <Redirect push to="/" />;
        }
        return <Redirect push to={`/note/${props.note.id}`} />;
    }

    return (
        <div className="card">
            <div className="card-header bg-transparent">
                {renderFormTitleAction()}
            </div>
            <div className="card-body">
                <form onSubmit={saveNote}>
                    <div className="form-group">

                        <p><input className="form-control" style={divStyle} disabled ref={id}
                            defaultValue={props.note.id} /></p>

                        <p><input className="form-control" ref={title}
                            defaultValue={props.note.title}
                            placeholder="enter title" /></p>

                        <p><textarea className="form-control" rows="10"
                            ref={content}
                            defaultValue={props.note.content} placeholder="enter description" />
                        </p>
                    </div>
                    {renderFormButtons()}
                </form>
            </div>

        </div>
    )
}

export default AddNote;