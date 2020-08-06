import React from 'react';

import OtherComp from './OtherComp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    // Change this into your own JSX and add/import more components
    return (
      <div>
        <h1>Hello From React</h1>
        <OtherComp />
      </div>
    );
  }
}

export default App;
