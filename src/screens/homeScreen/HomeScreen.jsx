import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesBar } from '../../Components/CategoriesBar/CategoriesBar';
import { Video } from '../../Components/Video/Video';
import "./_homescreen.scss";

export const HomeScreen = () => {
  return (
    <Container className='home'>
        <CategoriesBar/>
        <Row>
            {[...new Array(20)].map(() => (
                <Col lg={3} md={4}>
                    <Video/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
