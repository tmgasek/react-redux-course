import React from 'react';

class SearchBar extends React.Component {
  state = { term: '', password: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            className="field"
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
