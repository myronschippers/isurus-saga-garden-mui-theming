import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    TextField,
    Button,
 } from '@material-ui/core'

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            id: 4,
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: ''
        }
    }

    handleNameChange = (event, plantKey) => {
        console.log('event happened')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [plantKey]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PLANTS', payload: this.state.newPlant });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form className="inputSpacer" onSubmit={this.addNewPlant}>
                    <TextField
                        label="Plant Name"
                        value={this.state.newPlant.name}
                        onChange={(event) => this.handleNameChange(event, 'name')}
                    />
                    <TextField
                        label="Plant Kingdom"
                        value={this.state.newPlant.kingdom}
                        onChange={(event) => this.handleNameChange(event, 'kingdom')}
                    />
                    <TextField
                        label="Plant Clade"
                        value={this.state.newPlant.clade}
                        onChange={(event) => this.handleNameChange(event, 'clade')}
                    />
                    <TextField
                        label="Plant Order"
                        value={this.state.newPlant.order}
                        onChange={(event) => this.handleNameChange(event, 'order')}
                    />
                    <TextField
                        label="Plant Family"
                        value={this.state.newPlant.family}
                        onChange={(event) => this.handleNameChange(event, 'family')}
                    />
                    <TextField
                        label="Plant Sub-Family"
                        value={this.state.newPlant.subfamily}
                        onChange={(event) => this.handleNameChange(event, 'subfamily')}
                    />
                    <TextField
                        label="Plant Genus"
                        value={this.state.newPlant.genus}
                        onChange={(event) => this.handleNameChange(event, 'genus')}
                    />
                    <Button variant="outlined" type="submit">Add New Plant</Button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
