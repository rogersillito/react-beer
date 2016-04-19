import React from 'react';

const Search = React.createClass({
    handleSubmit(e) {
        // stop the form submitting
        e.preventDefault(); 
        // get the value from the input box
        const searchTerm = this.refs.q.value;
        console.log("searchTerm = ", searchTerm);
        // change url to use the search term
        this.context.router.push(`/search/${searchTerm}`);
    }, 
    render() {
         return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="q" placeholder="Search a beer"/>
                    <input type="submit" value="Search!"/>
                </form>
            </div>
         );
    },
    // provde access to the router
    contextTypes: {
        router: React.PropTypes.object.isRequired
    }
});

export default Search;
