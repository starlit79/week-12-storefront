import React from 'react'
import { Table } from 'reactstrap'
//import{Component}
//class ...extends Component
//follow the template put super() in it
//read react component in open source

class Variations extends React.Component {
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
        } )
        .catch(err => console.log(err));
    }
    //async we are waiting
    //wait for the fetch to run
    //when result comes back , going into response
    callApi = async () => {
        const response = await fetch('http://localhost:3001/variations');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <div>
            <h1 className = 'text-center'>Variations</h1>
            <Table bordered> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Added By</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.response.map(variation =>
                    <tr>
                        <td key ={variation.key}> {variation._id} </td>
                        <td key ={variation.key}> {variation.name} </td>
                        <td key ={variation.key}> {variation.Color} </td>
                        <td key ={variation.key}> {variation.addedBy} </td>
                    </tr>
                )}
                </tbody>
           </Table>
           </div>
        )
    }
}

export default Variations