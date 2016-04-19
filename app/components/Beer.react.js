import React from 'react';
import slug from 'slug';
import { Link } from 'react-router';

const Beer = React.createClass({
    render() {
        const { name, labels, id } = this.props.details;

        return (
            <div className="beer">
                <Link to={`/beer/${id}/${slug(name)}`}>
                    <h2>{name}</h2>
                    <img src={labels.medium}/>
                </Link>
            </div>
        );
    }
});

export default Beer;
