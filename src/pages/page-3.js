import React,{useState} from 'react'
import {Link} from 'gatsby'
import {Button, Container, Col, Row, Form,ListGroup} from 'react-bootstrap'
import Layout from '../components/layout'
import datReportImg from '../images/dataReportImg.png'

export default function DownloadPage() {
    const [user,setUser] = useState(typeof window !== 'undefined' && window.localStorage.getItem('user'))
    const [dateFrom,setDateFrom]=useState(false)
    const [dateTo,setDateTo]=useState(false)
    const [typeOfReport,setTypeOfReport]=useState(false)

   

    const downloadFile=()=>{
    alert("Downloading File")
    }

    return (
        <Layout>
            <section className="vh-100 d-flex  align-items-center">
            <Container className="bg-white shadow rounded">
    
                <Row>
                    <Col md={6} className="p-5">
                  
                <h3>How to use:</h3>
                <small>1. Select the dates you need</small>
                <small> 2. Choose on the the four reports:</small>
                <ListGroup variant="flush">
                <ListGroup.Item><small><strong>Daily:</strong> A report for each of the dates you select: For entering into the online T2 system</small></ListGroup.Item>
                <ListGroup.Item><small><strong>Weekly:</strong> The funding report summary that needs to be entered into T2 once a week</small></ListGroup.Item>
                <ListGroup.Item><small><strong>Team:</strong> A deck of key data points that will help your team review planning and impacts</small></ListGroup.Item>
                <ListGroup.Item><small><strong>Dashboard:</strong> A set of embeddable widget codes that you can add to your website</small></ListGroup.Item>
                </ListGroup>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" placeholder="Select date" onChange={(e)=>{
                                setDateFrom(true)
                            }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" placeholder="Select date" onChange={(e)=>{
                            setDateTo(true)
                        }}/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Type of Report</Form.Label>
                        <Form.Control as="select" onChange={(e)=>{
                            setTypeOfReport(true)
                        }}>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Team</option>
                        <option>Dashboard</option>
                        </Form.Control>
                    </Form.Group>
                    <a href="https://res.cloudinary.com/demo/image/upload/example_pdf.pdf" className="btn text-uppercase bg-purple d-block" download>DOWNLOAD REPORT</a>
                    {/* <div className="btn text-uppercase bg-purple d-block" onClick={downloadFile}>Download Report</div> */}
                        </Form>

                    </Col>

                    <Col md={6} className="bg-purple d-flex justify-content-center align-items-center py-4">
                    <div className="text-center p-5">
                        <h5 className="text-white">You are almost done with your report</h5>
                        <img src={datReportImg}/>
                    </div>
                    </Col>
                </Row>

            </Container>
            </section>
        </Layout>
    )
}
