import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import './style.css'
import CardComp from './atoms/CardComp'
import { company, evoting, izinbelajar, krisar, laundry, ngaji, pajak, pasar, ppdb, yatim, toko } from '../assets'
const AppComp = () => {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                    <h2 className="title">My Portofolio</h2>
                    <Row>
                        <Col md={4}>
                            <CardComp
                            title="Web Company Profile"
                             src={company} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Aplikasi Evoting"
                             src={evoting} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web Sistem Izin Belajar"
                             src={izinbelajar} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web Penilaian Sekolah"
                             src={krisar} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web Company Profile"
                             src={laundry} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Aplikasi Al-Quran"
                             src={ngaji} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web Jasa Akuntansi"
                             src={pajak} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Aplikasi Pasar Online Pacitan"
                             src={pasar} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web PPDB SMKN 1 Kawali"
                             src={ppdb} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web Yayasan Dulur Salembur"
                             src={yatim} />
                        </Col>
                        <Col md={4}>
                            <CardComp
                            title="Web Toko Online "
                             src={toko} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AppComp
