import React from 'react';
import Loader from './Loader.react.js';
import Glass from './Glass.react.js';

const Single = React.createClass({
    getInitialState() {
        return {
            beer: {},
            loading: true
        };
    },
    loadBeer() {
        this.setState({loading: true});
        const beerId  = this.props.params.beerId;
        /* console.log('beerId  = ' + beerId);
           console.log(`http://api.react.beer/v2/beer/${beerId}`);
         */
        fetch(`http://api.react.beer/v2/beer/${beerId}`)
            .then(data => data.json())
            .then((beer) => {
                /* console.log(beer); */
                this.setState({beer: beer.data, loading: false});
            });
    },
    componentWillMount() {
        this.loadBeer();
    },
    renderAbv(beer) {
        if (!beer.abv) return;
        return (
            <p><strong>ABV:</strong> {beer.abv}%</p>
        );
    },
    render() {
        if (this.state.loading) {
            return <Loader message="Pouring a cold one..." />;
        }
        const { beer } = this.state;
         return (
             <div className="single-beer">
                 <Glass glass={beer.glass} />
                 <div className="desc">
                     <h2>{beer.name}</h2>
                     {this.renderAbv(beer)}
                     {beer.description ? <p>{beer.description}</p> : null}
                     <img src={beer.labels.large} />
                 </div>
             </div>
         );
    }
});

export default Single;
