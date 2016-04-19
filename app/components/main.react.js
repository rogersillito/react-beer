import React from 'react';
import Header from './Header.react.js';
/* import Loader from './Loader.react.js';
   import Results from './Results.react.js';
   import Search from './Search.react.js';
   import Single from './Single.react.js';
   import Beer from './Beer.react.js';
 */
const Main = React.createClass({
    render() {
        return (
            <div className="wrapper">
                <Header siteName="Give me beer" subTitle="because it's beer time"/>
            </div>
        );
    }
});

export default Main;
