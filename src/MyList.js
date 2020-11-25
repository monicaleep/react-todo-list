import React, {Component} from 'react';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  state = {
    toDoItemArray: this.props.theList,
    newItem: ''
  }
  clearList = (e) => {
    this.setState({toDoItemArray: []})
  }
  newItemChange = (e) => {
    this.setState({newItem: e.target.value})
  }
  addItem = (e) => {
    e.preventDefault()
    this.setState({
      toDoItemArray: [
        ...this.state.toDoItemArray,
        this.state.newItem
      ],
      newItem: ""
    })
  }
  render() {
    const listItems = this.state.toDoItemArray.map((item, idx) => {
      return <ListItem doThis={item} key={idx}/>
    })
    return (<div>
      <h1>
        Things I should stop procrastinating:</h1>
      <ul>
        {listItems}
      </ul>
      <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
      <form>
        <input
          type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}/>
        <button onClick={(e) => this.addItem(e)}>Add it!</button>
      </form>
    </div>)
  }
}

export default MyList;
