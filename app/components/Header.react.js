import React from 'react';             // import the whole module
import { Link } from 'react-router';   // import just 'Link' from the module

const Header = React.createClass({
    render() {
        return (
            <h1>
                <Link to="/">{this.props.siteName}</Link>
                {this.props.subTitle}
            </h1>
        );
    },
    // a means to 'strong type' component property expectations
    propTypes: {
        siteName: React.PropTypes.string.isRequired,
        subTitle: React.PropTypes.string
    }
});

export default Header;
