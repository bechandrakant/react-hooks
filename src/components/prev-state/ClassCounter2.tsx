import React from 'react'

interface ICount {
  count: number
}

class ClassCounter2 extends React.Component<{}, ICount> {

  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }

  public handleClick(): void { 
    this.setState((prevState) => {
      count: prevState.count + 1
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

export default ClassCounter2
