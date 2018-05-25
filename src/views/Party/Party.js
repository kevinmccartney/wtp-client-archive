import React from 'react';

class Party extends React.Component {
  static async fetchUserData() {
    const req = await fetch('/api/me', { credentials: 'same-origin' });
    const reqJson = await req.json();

    return reqJson;
  }

  constructor() {
    super();

    this.state = {
      response: null,
    };
  }

  async componentDidMount() {
    const userData = await Party.fetchUserData();

    // eslint-disable-next-line
    this.setState({
      response: userData,
    });
  }

  render() {
    return (
      <div
        className="w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-light"
      >
        <section
          className="container bg-white"
        >
          <div className="p-5">
            {this.state.response && JSON.stringify(this.state.response, null, 2)}
          </div>
        </section>
      </div>
    );
  }
}

export default Party;
