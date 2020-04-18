import React, { Component } from "react";

import Roll from "react-reveal/Roll";

import icon from "../../assets/search.png";

import "./search-bar.style.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(search);
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div className="search">
        <form className="form" onSubmit={this.handleSubmit}>
          <img className="icon" src={icon} alt="" />
          <Roll left>
            <input
              type="search"
              name="search"
              value={this.state.search}
              placeholder="Search"
              required
              onChange={this.handleChange}
            />
          </Roll>
        </form>
      </div>
    );
  }
}

export default SearchBar;
