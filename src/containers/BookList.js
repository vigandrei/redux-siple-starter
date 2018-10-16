
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export class BookList extends Component {

  static defaultProps = {

  }

  renderList() {
    return (
      this.props.books.map((book) => {
        return (
          <li key={book.title} className='list-group-item'>{book.title}</li>
        )
      })
    )
  }

  render() {
    return (
      <div>
         <ul className='list-group col-sm-4'>
          {this.renderList()}
        </ul>  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(BookList)
