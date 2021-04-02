import React, { Component } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import TableHead from './components/TableHead/TableHead';
import Search from './components/Search/Search';
import people from "./people.json";
import "./App.css";

class App extends Component {
    //state is being set to the people.json array
    state = {
        people,
        search: ""
    };

    inputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    //this code will help with filtering which roles are being searched
    submitForm = (e) => {
        e.preventDefault()
        const people = this.state.people.filter(people => people.role === this.state.search);
        this.setState({ people });
    }

    reset = () => {
        this.setState({ people });
    };

    //to sort new people
    clickSort = (sortBy) => {
        const newbies = this.state.people
        newbies.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1: -1)
        this.setState({ people: newbies })
    }

    render() {
        return (
          <div>
            <Header />
            <Search 
            inputChange={this.inputChange} 
            submitForm={this.submitForm}/>
            <table className="table container">
              <TableHead clickSort={this.clickSort}/>
              {this.state.people.map(people => (
                <Table
                  id={people.id}
                  key={people.id}
                  name={people.name}
                  dob={people.dob}
                  role={people.role}
                  phone={people.phone}
                  email={people.email}
                />
                ))}
            </table>
          </div>
        );
      }
}

export default App;