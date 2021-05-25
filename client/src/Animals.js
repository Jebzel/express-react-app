import React from 'react';
import './App.css';
import axios from 'axios';

export default class Animals extends React.Component {
  state = {
    animals: [],
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:3030/Animals').then((res) => {
      const animals = res.data;
      this.setState({ animals });
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h2>Your Animal List</h2>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Species</th>
              </tr>
              {this.state.animals.map((animal) => (
                <tr>
                  <td>
                    <h5>{animal.name}</h5>
                  </td>
                  <td>
                    <h5>{animal.species}</h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}
