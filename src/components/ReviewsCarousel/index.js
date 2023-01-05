// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onIncrement = () => {
    const {count} = this.state

    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    console.log(count)
    console.log(imgUrl)
    console.log(username)
    console.log(companyName)
    console.log(description)

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="img" />
        <div className="arrow-container">
          <button
            type="button"
            className="button"
            onClick={this.onDecrement}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="para">{username}</p>
          <button
            type="button"
            className="button"
            onClick={this.onIncrement}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="para1">{companyName}</p>
        <p className="para1">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
