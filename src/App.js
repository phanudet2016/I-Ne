import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import User from './User';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://demo1946494.mockable.io/spaces')
    .then(res => res.json())
    .then((data) => {
      this.setState({ data: data.page.entities })
      this.props.setApi(this.state.data)
    })
    .catch(console.log)
  }

  render () {
    return (
      <div>
        <User username={this.props.myApi.data}/>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    myApi: state.myApi
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setApi: (data) => {
      dispatch({
        type: 'setApi',
        payload: data
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
