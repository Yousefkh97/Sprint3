import React, { useState } from 'react';
import './TasksGraph.css'

// const UIObj = [
//     { label: 'week1', tasks: [1, 2, 3, 4], maxLength: 9 },
//     { label: 'week2', tasks: [1, 2, 3, 4, 5, 6], maxLength: 9 },
//     { label: 'week3', tasks: [1, 2], maxLength: 9 },
//     { label: 'week4', tasks: [], maxLength: 9 },
//     { label: 'week5', tasks: [1, 2, 3, 4, 5, 6, 7, 8, 9], maxLength: 9 },

//   ];

function TasksGraph(props) {
    const { content } = props;
    content.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return a._id - b._id;
    });
    content.map((item, index) => {
        item._id = (new Date(item._id)).toLocaleDateString();
    })




return (
    <div className='page'>
        <div className='chart'>
            {
                content.map((column, index) => {

                    return (
                        <div className='chart__column' style={{
                            height: `${(column.tasks.length / 10) * 100}%`,
                            width: `${(1 / content.length) * 90}%`
                        }}>
                            <div key={index + 'col'} className='chart__innerColumn' >
                                {column.tasks.length > 0 ? column.tasks.length : null}
                            </div>
                            <div className='chart__label'>
                                {column._id}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
);


}
export default TasksGraph;