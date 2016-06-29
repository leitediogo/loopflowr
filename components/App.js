import React, { Component } from 'react'
import TextInput from './TextInput'
import Button from './Button'


class App extends Component {
    render(){
        return (
            <div className="app">   
                <div> App Component </div>
                <TextInput/>
                <Button/>
            </div>
        )
    }
}

export default App