import React,{useState} from 'react'
import {Link} from 'gatsby'
import {Button, Container, Col, Row, Form} from 'react-bootstrap'
import Layout from '../components/layout'
import datReportImg from '../images/dataReport.png'

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
                    <h3 className="text-center">You are almost done</h3>
                <p className="text-center">Please complete options to download your report</p>
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
                       
                    <div className="btn text-uppercase bg-purple d-block" onClick={downloadFile}>Download Report</div>
                        </Form>

                    </Col>

                    <Col md={6} className="bg-purple d-flex justify-content-center align-items-center py-4">
                    <div className="text-center p-5">
                        <h5 className="text-white"></h5>
                        <img src={datReportImg}/>
                    </div>
                    </Col>
                </Row>

            </Container>
            </section>
        </Layout>
    )
}
