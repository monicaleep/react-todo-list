import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    const listItems = this.props.theList.map((item,idx)=>{
      return <ListItem doThis={item} key={idx} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}


export default MyList;
