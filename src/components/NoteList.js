import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const NoteList = (props) => {

    const renderFormattedDate = (timeCreated) => {
        return moment(timeCreated).format('DD MMM YYYY [at] h:mm a');
    }

    if (!props.notes || props.notes.length === 0) {
        return (<div>There are no notes</div>)
    }

    const listItems = props.notes.map((note) =>
        <NavLink activeClassName='active' to={`/note/${note.id}`}
            className="list-group-item"
            key={note.id.toString()}
            onClick={props.viewNote.bind(this, note.id)}>
            <div className="text-truncate primary">{note.title}</div>
            <div className="font-weight-light font-italic small">{renderFormattedDate(note.timeCreated)}</div>
        </NavLink >
    );

    return (<ul className="list-group">{listItems}</ul>);
}

export default NoteList;