import React, { useState } from 'react';
import InputField from '../InputField';

// function showLocation(position) {
//   const { latitude, longitude } = position;
//   //   const latitude = position.coords.latitude;
//   //   const longitude = position.coords.longitude;
//   console.log(`Latitude : ${latitude} Longitude: ${longitude}`);
// }

// function errorHandler(err) {
//   if (err.code === 1) {
//     alert('Error: Access is denied!');
//   } else if (err.code === 2) {
//     alert('Error: Position is unavailable!');
//   }
// }

// const getGeoLocationCoordinates = e => {
//   e.preventDefault();

//   if (navigator.geolocation) {
//     // timeout at 60000 milliseconds (60 seconds)
//     const options = { timeout: 60000 };
//     navigator.geolocation.getCurrentPosition(
//       showLocation,
//       errorHandler,
//       options,
//     );
//   } else {
//     alert('Sorry, browser does not support geolocation!');
//   }
// };

const geoCoordinates = () => {
  // const [inputLatitude, setLatitude] = useState(0);
  // const [inputLongitude, setLongitude] = useState(0);
  const [state, setState] = useState({
    inputLatitude: '',
    inputLongitude: '',
  });

  function showLocation(position) {
    console.log(position);

    const { latitude, longitude } = position.coords;

    setState({ inputLatitude: latitude, inputLongitude: longitude });

    console.log(`set state latitude ${state.inputLatitude}`);

    setState(state.inputLongitude);

    console.log(latitude, longitude);
    //   const latitude = position.coords.latitude;
    //   const longitude = position.coords.longitude;
    console.log(`Latitude : ${latitude} Longitude: ${longitude}`);
  }

  function errorHandler(err) {
    if (err.code === 1) {
      alert('Error: Access is denied!');
    } else if (err.code === 2) {
      alert('Error: Position is unavailable!');
    }
  }

  const getGeoLocationCoordinates = e => {
    e.preventDefault();

    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        showLocation,
        errorHandler,
        options,
      );
    } else {
      alert('Sorry, browser does not support geolocation!');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={getGeoLocationCoordinates}>
            <div className="form-group">
              <label htmlFor="inputLatitude">Latitude:</label>
              <input
                type="text"
                className="form-control"
                value={state.inputLatitude}
                id="inputLatitude"
                placeholder="Latitude"
                aria-describedby="inputLatitude"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputLongitude">Longitude:</label>
              <input
                type="text"
                className="form-control"
                value={state.inputLongitude}
                id="inputLongitude"
                placeholder="Longitude"
                aria-describedby="inputLongitude"
              />
            </div>
            <div>
              <button type="submit">Geo Location</button>
            </div>
            <InputField
              fieldName="inputAddress"
              type="text"
              value={state.inputAddress}
            >
              Address
            </InputField>
          </form>
        </div>
      </div>
    </div>
  );
};

export default geoCoordinates;
