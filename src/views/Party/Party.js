import React from 'react';

class Party extends React.Component {
  static async fetchUserData() {
    const req = await fetch('/api/me');
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

  renderName() {
    if (this.state.response) {
      return this.state.response.display_name || this.state.response.id;
    }

    return undefined;
  }


  render() {
    return (
      <div
        className="w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-light"
      >
        <section
          className="container bg-white"
        >
          {this.state.repsonse &&
            <div className="p-5">
              {JSON.stringify(this.state.response, null, 2)}
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Party;
