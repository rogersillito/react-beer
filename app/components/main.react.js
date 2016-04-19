import React from 'react';
import Header from './Header.react.js';

const Main = React.createClass({
    getInitialState() {
        // only pure functions - instant results, non-blocking!
        return {
            numBeers: 10,
            beers: []
        };
    },
    incrementBeers() {
        const beerAmount = this.state.numBeers + 1;
        this.setState({numBeers: beerAmount});
    },
    loadBeers(searchTerm = 'mild') {
        console.log('searching for: ', searchTerm);
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
                         .then(data => data.json())
                         .then((beers) => {
                             // !! - if property exists, return true
                             // implicit return on lambdas (when no { })
                             // also they don't rebind this - so it still refers to parent scope!
                             const filteredBeers = beers.data.filter(beer => !!beer.labels);
                             this.setState({beers: filteredBeers});
                         });
    },
    componentWillMount() {
        this.loadBeers();
    },
    render() {
        return (
            <div className="wrapper">
                <Header siteName="Give me beer" subTitle="because it's beer time"/>
                <button onClick={this.incrementBeers}>Beer Count = {this.state.numBeers}</button>
                {/* ... is spread operator (ES8?) - perform an object copy */}
                {React.cloneElement(this.props.children, {loadBeers:this.loadBeers, ...this.state })}
            </div>
        );
    }
});

export default Main;
