import React, { Component } from 'react'

class TextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText1: 'initial text',
            inputText2: 'initial text2',
            inputText3: 'initial text3'
        }
    }

    handleChangeText1() {
        console.log(this)
    }
    handleChangeText2() {
        console.log('Text2 changed')
    }
    handleChangeText3(event) {
        this.setState({
            inputText3: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type text="text" placeholder="Insert text 1" defaultValue={this.state.inputText} onChange={this.handleChangeText1.bind(this) }/>
                <input type text="text" placeholder="Insert text 2" defaultValue={this.state.inputText} onChange={this.handleChangeText2}/>
                <input type text="text" placeholder="Insert text 3" defaultValue={this.state.inputText} onChange={this.handleChangeText3.bind(this)}/>
            </form>
        )

    }
}

export default TextInput