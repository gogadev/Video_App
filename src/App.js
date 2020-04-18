import React, { Component } from "react";

import { Navbar, SearchBar, VideoList, Footer } from "./components";

import API from "./api/API";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  handleSubmit = async (search = "cat") => {
    const response = await API.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY,
        q: search,
      },
    });
    // console.log(response.data);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Navbar />
        <SearchBar onFormSubmit={this.handleSubmit} />
        <VideoList videos={videos} />
        <Footer />
      </div>
    );
  }
}

export default App;
