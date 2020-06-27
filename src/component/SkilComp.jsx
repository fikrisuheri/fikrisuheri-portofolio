import React from 'react'
import { Container, Row, Col,ProgressBar } from 'react-bootstrap'
import './style.css'
import ProgressComp from './atoms/ProgressComp'
const SkilComp = () => {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                <h2 className="title">My  Skills</h2>
                <ProgressComp title="PHP Native" now={93} label="2 Tahun" />
                <ProgressComp title="Framework Codeigniter" now={85} label="2 Tahun" />
                <ProgressComp title="Framework Laravel" now={95} label="2 Tahun" />
                <ProgressComp title="Bootstrap" now={90} label="2 Tahun" />
                <ProgressComp title="Jquery" now={88} label="2 Tahun" />
                <ProgressComp title="Mysql" now={93} label="2 Tahun" />
                <ProgressComp title="React JS" now={86} label="1 Tahun" />
                <ProgressComp title="Github" now={89} label="1 Tahun" />
                <ProgressComp title="React Native" now={85} label="1 Tahun" />
                <ProgressComp title="Sistem Operasi Linux" now={91} label="1 Tahun" />
                </Col>
            </Row>
        </Container>
    )
}

export default SkilComp
