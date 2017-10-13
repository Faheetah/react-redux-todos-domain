import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Filter from '../components/Filter'
import * as TodoActions from '../actions'

const Todo = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <Filter todos={todos} actions={actions} />
  </div>
)

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
