import React from 'react'

interface ICount {
  count: number
}

class ClassCounter extends React.Component<{}, ICount> {

  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }

  public handleClick() {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <>
        <h1>Class Counter</h1>
        <button onClick={() => this.handleClick()}>Count {this.state.count}</button>
      </>
    )
  }
}

export default ClassCounter
