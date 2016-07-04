import React from 'react';
import { Component } from 'react';

import Icon from 'essence-icon';
import DataTable from 'essence-data-table';


var tableInfo = {
  'header': [
   {
    'name': 'Column 1',
    'tooltip': 'Caption for the column 1',
    'onSorting': (function() { console.log('sort by Column 1'); })
   },
   {
    'name': 'Column 2',
    'tooltip': 'Caption for the column 2',
    'onSorting': (function() { console.log('sort by Column 2'); })
   }
  ],
  'rows': [
   ['Row 1 Column 1', 'Row 1 Column 2'],
   ['Row 2 Column 1', 'Row 2 Column 2'],
   ['Row 3 Column 1', 'Row 3 Column 2']
  ],
  'footer': {
   'limit': 5,
   'total': 100,
   'pagination': {
   'start': 1,
   'end': 10,
   'callback': (function() { console.log('footer page change'); })
  },
  'next': {
   'context': (<Icon name='hardware-keyboard-arrow-right' />),
   'callback': (function() { console.log('footer next page'); })
  },
  'prev': {
   'context': (<Icon name='hardware-keyboard-arrow-left' />),
   'callback': (function() { console.log('footer previous page'); })
   },
  }
};

class EssenceComponentTable extends Component {
    render() {
        return (
            <DataTable data={tableInfo}/>
        )
    }
}
export default EssenceComponentTable



