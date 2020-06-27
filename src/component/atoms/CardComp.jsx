import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { colorDark } from '../../assets/colors'
const CardComp = ({ src, title, desc }) => {
    return (
        <div>
            <Card style={{ border: 'none', backgroundColor: colorDark }}>
                <Card.Img variant="top" src={src} style={{borderRadius:5}} />
                <Card.Body>
                    <Card.Title className="text-white">{title}</Card.Title>
                    <Card.Text className="text-white">{desc}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComp
