import React from "react";
import SeasonDisplay from "./component/SeasonDisplay";
import Spinner from "./component/Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );

//   return <div>hi there</div>;
// };

class App extends React.Component {
  //no need of intitalizing state inside constructor as babel internall converts to same format
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  rederBody() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    return <Spinner />;
  }

  render() {
    return <div className="border red solid">{this.rederBody()}</div>;
  }
}

export default App;
