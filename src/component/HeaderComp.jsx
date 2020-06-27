import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'
import { poto } from '../assets'
import './style.css'

const HeaderComp = () => {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col md={6}>
                    <h2 className="title">Selamat Datang</h2>
                    <p className="about">Saya merupakan junior programmer lulusan smk tahun 2020, dalam 3 tahun sekolah saya memfokuskan diri dalam bidang programming terutama Web Developer.Dalam kurun waktu tersebut saya merasa sudah siap untuk terjun ke dunia kerja</p>
                </Col>
                <Col md={6}>
                    <Image src={poto} thumbnail roundedCircle style={{ width: 400 }} />
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderComp
