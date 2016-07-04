import React from 'react'
import { Component } from 'react'
import belle from 'belle'
import { TextInput } from 'belle'
import { Button } from 'belle'
import { Card } from 'belle'
import { DatePicker } from 'belle'
import { Rating } from 'belle'

class BelleComponents extends Component {
    render() {
        return (
            <div>
                <TextInput defaultValue="Belle TextInput default value" placeholder="Name" />
                <Button primary>Belle Button</Button>
                <Button>Belle Button</Button>
                <Card style={{ borderTop: '1px solid #f2f2f2' }}>
                    Belle Card - Add any content here like paragraphs, images or other components …
                </Card>
                <DatePicker/>
                <Rating defaultValue={3}></Rating>
            </div>
        )
    }
}
export default BelleComponents


/*
var React = require('react');
var belle = require('belle');
var TextInput = belle.TextInput;

var App = React.createClass({

  render: function() {
    return (
      <div>
        <TextInput defaultValue="Update here and see how the input grows …" />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('react-root'));
*/