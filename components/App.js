import React, { Component } from 'react'
import TextInput from './TextInput'

class App extends Component {
    render(){
        return (
            <div className="app">   
                <div> App Component</div>
                <div> App Component second line</div>
                <TextInput/>
            </div>
        )
    }
}

export default App