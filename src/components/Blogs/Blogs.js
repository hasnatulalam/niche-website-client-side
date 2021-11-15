import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <div className='text-center mb-5 pt-5 pb-1'>
                    <h6 style={{ color: 'rgb(197,168,128)' }}>FEATURED BLOGS</h6>
                    <h1>Latest Featured Blog</h1>
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://i.ibb.co/q1PG7yc/reviews-person1.jpg" />
                            <Card.Body>
                                <Card.Title>Learn: Bike Riding</Card.Title>
                                <Card.Text><small className='text-muted'>I would like to say thank you to the whole team of organizers for the perfect event. It was the best sport competition I’ve ever attended and I am really looking forward to the series next year. Good luck!.  ...</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>OCT. 20, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>8 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://i.ibb.co/Kqt5QvV/reviews-person2.jpg" />
                            <Card.Body>
                                <Card.Title>Suzuki Gixxer</Card.Title>
                                <Card.Text><small className='text-muted'>The whole experience was absolutely amazing. Thank you to the team for the perfect organization of the event. It was a great first bicycle race experience for me and I really look forward to next years’ competitions  </small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>OCT. 22, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://i.ibb.co/562yBRt/bike4pg.jpg" />
                            <Card.Body>
                                <Card.Title>Latest  feature</Card.Title>
                                <Card.Text><small className='text-muted'>The whole experience was absolutely amazing. Thank you to the team for the perfect organization of the event. It was a great first bicycle race experience for me and I really look forward to next years’ competitions</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>NOV. 01, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>9 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://i.ibb.co/7S3tCFx/bike5.jpg" />
                            <Card.Body>
                                <Card.Title>Watch Evolution</Card.Title>
                                <Card.Text><small className='text-muted'> Safe Trading Electric Motorcycle on Leading B2B Platform. Quality Electric Motorcycle with Competitive Price. China’s B2B Impact Award. SGS Audited Suppliers.  </small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>NOV. 03, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>5 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blogs;