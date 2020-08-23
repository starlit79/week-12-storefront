import React from 'react'
import { Table } from 'reactstrap'
//import{Component}
//class ...extends Component
//follow the template put super() in it
//read react component in open source

class Products extends React.Component {
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
        const response = await fetch('http://localhost:3001/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <Table bordered> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.response.map(product =>
                    <tr>
                        <td key ={product.key}> {product._id} </td>
                        <td key ={product.key}> {product.title} </td>
                        <td key ={product.key}> {product.description} </td>
                    </tr>
                )}
                </tbody>
           </Table>
        )
    }
}

export default Products