import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List(props) {
    return (
        <div >
            <ListGroup>
                {
                    props.data.map(element=>{
                        return (
                            <ListGroup.Item action variant="light" key={element.id} onClick={e=>props.itemClick(element.id)}>
                                {element.name}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}



