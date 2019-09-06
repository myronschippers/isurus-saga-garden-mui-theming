import React, { Component } from "react";
import { connect } from 'react-redux';



function PlantDetails(props) {
    const plantInfo = props.reduxState.plantList.filter((plant, index) => {
        console.log(plant, 'haaa!');

        return plant.id == props.match.params.id

    })
    console.log(plantInfo);

    return (
        <div>
            <h3>Id: {props.match.params.id}</h3>
            <p>{plantInfo[0].name}</p>
            <p>{plantInfo[0].family}</p>
            <p>{plantInfo[0].kingdom}</p>
            <p>{plantInfo[0].clade}</p>
            <p>{plantInfo[0].subfamily}</p>
            <p>{plantInfo[0].order}</p>
            <p>{plantInfo[0].genus}</p>


        </div>
    )
}




// class PlantDetails extends Component {
//     render() {
//         console.log('Plant details', this.props);
//         return (
//             <div>
//                 <ul>
//                     <li>Hey There!</li>
//                     {/* <li>{this.props.plant.kingdom}</li>
//                     <li>{this.props.plant.clade}</li>
//                     <li>{this.props.plant.family}</li>
//                     <li>{this.props.plant.order}</li>
//                     <li>{this.props.plant.subfamily}</li>
//                     <li>{this.props.plant.genus}</li> */}
//                 </ul>
//             </div>
//         )
//     }
// }

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(PlantDetails);