
import React from 'react'
import { Component } from 'react'

import Btn from 'essence-button'

class EssenceComponents extends Component {
    render() {
        return (
            <Btn label={'Button Example'} ripple={false} type={'success'} className={'raised'} />
        )
    }
}
export default EssenceComponents

