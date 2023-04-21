import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('Constructor method is called')
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000)
    console.log('componentDidMount method is called')
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
    console.log('componentWillUnmount method is called')
  }

  render() {
    const {date} = this.state
    console.log('render method is called')

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="heading">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
