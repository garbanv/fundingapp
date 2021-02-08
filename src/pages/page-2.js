import React, {useState} from "react"
import { Link, navigate } from "gatsby"
import {Container, Row, Col, Button, Form,ProgressBar} from 'react-bootstrap'
import axios from 'axios'
import Layout from "../components/layout"
import fileUploadImg from "../images/fileUpload.png"


const calcPercent = (value, total) => Math.round(value/total * 100)

const SecondPage = () => {

  const [user,setUser] =useState(localStorage.getItem('user'))
  const [file,setFile]=useState('')
  const [percent,setPercent]=useState(0)
  const [selectedFileName,setSelectedFileName]=useState('')
  const [data,setData]=useState([])

  const handleFile= async ()=> {

    const data = new FormData()
    data.append('files', file)

    const upload_file = await axios({
        method:'POST',
        url:'http://localhost:1337/upload',
        data:data,
        onUploadProgress: function (progress) {
          setPercent(calcPercent(progress.loaded,progress.total))
        },
    })
    const response = await JSON.parse(upload_file.request.response)

    navigate('/page-3')


  } // end of handleFile
    
  return(
  <Layout>
 
    <section className="vh-100 d-flex  align-items-center">
      <Container className="bg-white shadow rounded">
        <Row>
          <Col md={6} className="py-4 px-5  bg-white d-flex align-items-center justify-content-center"> 
          <div>    
          <h4 className="fs-4 font-weight-bold">Hi {user}</h4>
            <p>Select a file from your computer</p>
          <Form>
          <input type="file" id="file" onChange={(e)=>{
            setSelectedFileName(e.target.files[0].name)
                        setFile(e.target.files[0])
                      }}/> 
        <label for="file" className="btn bg-green-bh d-block">Select file</label>
        {selectedFileName ? <div className="alert alert-secondary"><small>You selected: {selectedFileName}</small></div> : null}
        <hr/>
        <div className="btn bg-purple d-block" onClick={handleFile}>Upload File</div>
        {percent > 0 ? <ProgressBar animated now={`${percent}`} className="my-5"/> : null }
        {percent ? <div className="alert alert-warning text-center"><small>Uploading file</small></div> : null}
        </Form>
          </div>
          </Col>


          <Col md={6} className="bg-green-bh d-flex justify-content-center align-items-center py-4">
            <div className="text-center">
              <h5 className="text-white">Upload your csv file</h5>
             <img src={fileUploadImg}/>
            </div>
          </Col>
        </Row>
    
    </Container>
    </section>
  </Layout>
)}

export default SecondPage
