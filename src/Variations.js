import React from 'react'
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
                <div>Variations Place holder</div>
                <div>{this.state.response.map(variation =>
                    <p key ={variation.key}> {variation.color} </p>
                )}</div>
            </div>
        )
    }
}

export default Variations