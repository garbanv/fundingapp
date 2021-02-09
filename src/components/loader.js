import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function loader() {
    return (
        <div>
            <Spinner animation="border" variant="light" size="sm" role="status"/>
        </div>
    )
}
