import React from 'react';
import Beer from './Beer.react.js';
import Loader from './Loader.react.js';

const Results = React.createClass({
    getBeers() {
        return this.props.beers.map((details, i) =>
            <Beer details={details} key={i}/>
        ); 
    },
    render() {
        if (this.props.loading) {
            return <Loader message="Who's round is it?!" />
        }
         return (
             <div className="results">
                 <div className="beers">
                     {this.getBeers()}
                 </div>
             </div>
         );
    }
});

export default Results;
