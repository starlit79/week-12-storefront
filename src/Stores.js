import React from "react";
import { Table } from "reactstrap";

class Stores extends React.Component {
  constructor() {
    super();
    this.state = {
      response: [],
    };
  }

  componentDidMount() {
    this.callApi()
      .then((response) => {
        this.setState({ response });
      })
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("http://localhost:3001/stores");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Stores</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Added By</th>
            </tr>
          </thead>
          <tbody>
            {this.state.response.map((store) => (
              <tr>
                <td key={store.key}> {store._id} </td>
                <td key={store.key}> {store.name} </td>
                <td key={store.key}> {store.city} </td>
                <td key={store.key}> {store.state} </td>
                <td key={store.key}> {store.addedBy} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Stores;
