import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import Scroll from './Scroll';
import {setSearchField, requestRobots} from './actions.js';

const mapStateToProps = state =>{
    return{
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         //searchfield: ''
    //     }
    //     console.log('constructor');
    // }

    componentDidMount() { //after all the elements of the page is rendered correctly, this method is called. After the markup is set on the page, 
                         //this technique called by React itself to either fetch the data from An External API or perform some unique operations which need the JSX elements.
        //console.log(this.props.store.getState());
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response=>
        // {
        //    return response.json();
        // })
        // .then(users => {
        //     this.setState({ robots: users })
        // });
        // // this.setState({robots: robots});
        // console.log('componontDidMount');

        this.props.onRequestRobots();
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    //     //console.log(event.target.value);
    //     //console.log(filteredRobots);
    // }

    render() {
        //console.log('render');
        //const {robots} = this.state;
        const {searchfield, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (isPending) {
            return <h1></h1>
        } else {
            return (
                <div className='tc'>
                <h1>Robots</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            );
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order function