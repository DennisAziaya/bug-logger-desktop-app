import React, {useState} from 'react';
import {Card, Form, Row, Col, Button} from "react-bootstrap";

function AddLogItem({addItem}) {
    const [user, setUser] = useState('')
    const [priority, setPriority] = useState('')
    const [text, setText] = useState('')

    const  onSubmit = (e) => {
        e.preventDefault()
        addItem({ text, user, priority})
        setText('')
        setUser('')
        setPriority('')
    }

    return (
        <Card className="mt-5 mb-3">
            <Col>
                <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                        <Col>
                            <Form.Control placeholder='Log' value={text} onChange={ e => setText(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Form.Control placeholder='User' value={user} onChange={ e => setUser(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control as="select"  value={priority} onChange={e => setPriority(e.target.value)}>
                                <option value="0"> Select Priority </option>
                                <option value="high"> High Priority </option>
                                <option value="moderate"> Moderate Priority </option>
                                <option value="low"> Low Priority </option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Button type='submit' variant='secondary' block> Add Log </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Card>
    );
}

export default AddLogItem;