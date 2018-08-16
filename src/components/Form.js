import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.getWeather}>
      <div align="center">
       <input type="text" name="city" placeholder="City..." size="100"/>       
       <button>Get Weather</button>
       </div>
      </form>
    );

  }
}

export default Form;
