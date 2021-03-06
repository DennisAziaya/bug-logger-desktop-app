import React from 'react';
import {Button, Badge} from "react-bootstrap";
import Moment from 'react-moment';


function LogItem({ _id, text,priority,user,created, }) {

    const setVariant = () => {
        if (priority === 'high'){
            return 'danger'
        } else if (priority === 'moderate'){
            return 'warning'
        } else {
            return 'success'
        }
    }

    return (
        <tr>
            <td> <Badge variant={setVariant()} className="p-2">{ priority.charAt(0).toUpperCase() + priority.slice(1) }</Badge> </td>
            <td> { text } </td>
            <td> { user } </td>
            <td> <Moment format=" MMMM Do YYYY, h:mm:ss a">{ new Date(created)  }</Moment> </td>
            <td>
                <Button variant='danger' size='small'>x</Button>
            </td>
        </tr>
    );
}

export default LogItem;