import React, { Component } from 'react'
import TextInput from './TextInput'
import Button from './Button'
import LikeButton from './LikeButton'
import Avatar from './Avatar'
import BelleComponents from './BelleComponents'
import EssenceComponents from './EssenceComponents'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div> App Component </div>
                <div><Button/></div>
                <div><TextInput/></div>
                <div><LikeButton/></div>
                <div><Avatar pagename = "Engineering" /></div>
                <div><BelleComponents/></div>
                <div><EssenceComponents/></div>
            </div>
        )
    }
}

export default App