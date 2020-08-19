import React ,{ useState } from 'react';
import './Task.css'


function Task(props) {
    const { newItem, startDate, endDate} = props;
    const datev = (new Date(parseInt(newItem.diffItem.updatedTime, 10))).toLocaleDateString();
    const firstDate = (new Date(startDate)).toLocaleDateString();
    const lastDate = (new Date(endDate)).toLocaleDateString();
    const [myDate, setMyDate] = useState((datev >= firstDate && datev<=lastDate) ? datev : '');
    return (

        <p>{myDate}</p>
    )
}
export default Task;