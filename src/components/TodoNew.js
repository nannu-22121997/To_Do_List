import React from "react";
class TodoNew extends React.Component {
  constructor() {
    super();
    this.state = { values: {}, itemtext: " " };
  }
  updatetext = (evt) => {
    this.setState({ itemtext: evt.target.value });
  };
  additem = () => {
    var x = this.state.values;
    var txt = this.state.itemtext.toUpperCase();
    if (Object.keys(x).indexOf(txt) === -1) {
      x[txt] = 1;
    } else {
      x[txt]++;
    }
    this.setState({ values: x });
  };
  removeitem = (evt) => {
    var x = evt;
    var items = this.state.values;
    var qty = items[x];
    if (qty > 1) items[x]--;
    else delete items[x];
    this.setState({ values: items });
  };
  render() {
    var items = Object.keys(this.state.values);
    return (
      <div className="outerbox">
        <h1>Todo New List</h1>
        <div className="firstbox">
          <input
            type="text"
            value={this.state.itemtext}
            onChange={this.updatetext}
          ></input>
          <button onClick={this.additem}>Add</button>
        </div>
        <div className="secondbox">
          {items.map((x) => (
            <div className="event">
              <div className="eventtext">{x}</div>
              {this.state.values[x]}
              <button className="eventbtn" onClick={() => this.removeitem(x)}>
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default TodoNew;
