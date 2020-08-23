import React from 'react'
//import{Component}
//class ...extends Component
//follow the template put super() in it
//read react component in open source

class Categories extends React.Component {
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
        const response = await fetch('http://localhost:3001/categories');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <div>
                <h1 >Categories Place holder</h1>
                <div>{this.state.response.map(category =>
                    <table>
                        <tr key ={category.key}>
                        <td> {category.name} </td>
                        <td> {category.description} </td>
                        </tr>
                    </table>
                )}</div>
            </div>
        )
    }
}

export default Categories