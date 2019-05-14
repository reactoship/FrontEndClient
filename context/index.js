import React, { Component, } from 'react'

// first we will make a new context
const StateContext = React.createContext()

// Then create a provider Component
class StateProvider extends Component {
  state = {
    User: {},
  };
  render() {
    return (
      <StateContext.Provider
        value={{
          state: this.state,
          setUser: (newUser) => {
            return this.setState({
              User: newUser,
            })
          },
        }}
      >
        {this.props.children}
      </StateContext.Provider>
    )
  }
}

// then make a consumer which will surface it
const StateConsumer = StateContext.Consumer

export default StateProvider
export { StateConsumer, }
