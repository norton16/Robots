import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() { //after all the elements of the page is rendered correctly, this method is called. After the markup is set on the page, 
                         //this technique called by React itself to either fetch the data from An External API or perform some unique operations which need the JSX elements.
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>
        {
           return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        });
        // this.setState({robots: robots});
        console.log('componontDidMount');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        //console.log(event.target.value);
        //console.log(filteredRobots);
    }

    render() {
        console.log('render');
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            );
        }
    } 
}

export default App;
