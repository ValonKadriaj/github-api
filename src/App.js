import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Loader from './loader';
import User from './user';
class App extends Component {
  state = {
    name: '',
    userName: null,
    avatar: null,
    loading: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.setState({ loading: true });
    try {
      const res = await axios.get(`https://api.github.com/users/${name}`);
      this.setState({
        userName: res.data.login,
        avatar: res.data.avatar_url,
        loading: false,
        name: '',
      });
    } catch {
      this.setState({ loading: false, name: '' });
      alert('Something went wrong');
    }
  };
  render() {
    const { userName, avatar, loading, name } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="search user in github"
            onChange={this.handleChange}
            type="text"
            value={name}
            name="name"
          />
          <button>Submit</button>
        </form>
        {loading && <Loader />}
        {userName && <User avatar={avatar} userName={userName} />}
      </div>
    );
  }
}
export default App;
