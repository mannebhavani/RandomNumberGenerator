// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  generateNumber = () => {
    this.setState(prevState => {
      console.log(`Previous state is:${prevState.count}`)
      return {count: Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.generateNumber} className="btn-style">
            Generate
          </button>
          <p className="num-text">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
