import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as AppActions from '../actions'

import Error from '../components/Error'

import Todo from '../../todo/containers/Todo'

class App extends Component {
  componentDidMount() {
    this.props.setError('e')
  }

  render() {
    console.log('r', this.props.error)
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>

            <Link to="/">Home</Link>
            <Link to="/Todo">Todo</Link>
          </div>
          <div className="Error">
            <Error error={this.props.error} />
          </div>

          <Route exact path="/" component={Todo}/>
          <Route path="/todo" component={Todo}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  error: state.app.error,
  loading: state.app.loading,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(AppActions, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
