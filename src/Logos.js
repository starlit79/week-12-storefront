import React, { Component } from 'react'
import { Table } from 'reactstrap'

class Logos extends Component {
    constructor () {
        super()
        this.state = {
            response: []
        }
    }

componentDidMount() {
    this.callApi()
    .then((response) => {
        this.setState({ response })
    })
    .catch(err => console.log(err))
}

callApi = async () => {
    const response = await fetch('http://localhost:3001/logos')
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
}

render () {
    return (
        <div>
        <h1 className= 'text-center'>Logos</h1>
        <Table bordered> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.response.map(logo =>
                    <tr>
                        <td key ={logo.key}> {logo._id} </td>
                        <td key ={logo.key}> {logo.name} </td>
                        <td key ={logo.key}> {logo.description} </td>
                    </tr>
                )}
                </tbody>
           </Table>
           </div>
        )
    }
}
export default Logos
