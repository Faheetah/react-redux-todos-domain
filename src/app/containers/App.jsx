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
import Loading from '../components/Loading'

import Todo from '../../todo/containers/Todo'

class App extends Component {
  componentDidMount() {
    this.props.setError('Some error happened')
    this.props.setLoading(true)
    setTimeout(() => (this.props.setLoading(false)), 1000)
  }

  render() {
    if (this.props.loading === true) {
      return <Loading />
    }

    return (
      <Router>
        <div className="App">
          <h3>
            <Link to="/">[Home]</Link>
            <Link to="/Todo">[Todo]</Link>
          </h3>

          <div className="App-header">
            <h2>Welcome to React</h2>

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
