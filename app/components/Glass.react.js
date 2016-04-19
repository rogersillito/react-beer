import React from 'react';

const Glass = React.createClass({
    render() {
        if (!this.props.glass) {
            return null;
        }
         const src = `/images/glass-${this.props.glass.id}.jpg`;
         return (
                <img src={src}/>
         );
    }
});

export default Glass;
