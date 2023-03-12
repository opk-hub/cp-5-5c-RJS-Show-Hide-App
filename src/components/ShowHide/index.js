import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="first-name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="first-name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
