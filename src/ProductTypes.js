import React from 'react'
import { Table } from 'reactstrap'
//import{Component}
//class ...extends Component
//follow the template put super() in it
//read react component in open source

class productTypes extends React.Component {
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
        const response = await fetch('http://localhost:3001/productTypes');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <div>
                <h1 className = 'text-center'>Product</h1>
            <Table bordered> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Added By</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.response.map(productType =>
                    <tr>
                        <td key ={productType.key}> {productType._id} </td>
                        <td key ={productType.key}> {productType.title} </td>
                        <td key ={productType.key}> {productType.description} </td>
                        <td key ={productType.key}> {productType.addedBy} </td>

                    </tr>
                )}
                </tbody>
           </Table>
            </div>
        )
    }
}

export default productTypes