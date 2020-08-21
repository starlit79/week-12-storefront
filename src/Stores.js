import React from 'react'

class Stores extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount(){
        this.callApi()
        .then((response) => {
            this.setState({ response })
        })
        .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/stores')
        const body = await response.json();
        if(response.status !==200) throw Error(body.message)

        return body
    }

    render(){
        return(
            <div>
                <div>Stores Place holder</div>
                <div>{this.state.response.map(store => 
                    <p key ={store.key}>{store.name}</p>
                    )}

                </div>
            </div>
        )
    }
}

export default Stores
