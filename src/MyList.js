import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  state = {
    toDoItemArray : this.props.theList
  }
  clearList = (e) =>{
    this.setState({
      toDoItemArray: []
    })
  }
  render() {
    const listItems = this.state.toDoItemArray.map((item,idx)=>{
      return <ListItem doThis={item} key={idx} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {listItems}
        </ul>
        <button onClick={(e)=>this.clearList(e)}>Finished the List!</button>
      </div>
    )
  }
}


export default MyList;
