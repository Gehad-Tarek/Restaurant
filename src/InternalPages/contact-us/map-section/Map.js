import React from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export default class Map extends React.Component {
    render() {
        return (
            <>
            <map />
            </>
        //     <Map google={this.props.google} zoom={14}>

        //         <Marker onClick={this.onMarkerClick}
        //         name={'Current location'}  />

        //         <InfoWindow>

        //         </InfoWindow>
        //     </Map>
        );
    }
}

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyD7i_Jo0FFeMlhXhItTYUlK1Pl7KTPb6oA")
// })(Maps);
