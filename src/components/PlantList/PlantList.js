import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PlantCard from '../PlantCard/PlantCard'

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_PLANTS'})
    }

    render() {

        console.log(this.props.reduxState.plantList)
        
        return (
            <div>
                <Grid container spacing={3}>
                    {this.props.reduxState.plantList.map((plant, index) => {
                        {console.log('meow',plant.name)}
                        return (
                            <Grid key={index} item>
                                <PlantCard plant={plant}></PlantCard>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
