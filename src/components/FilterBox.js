import React from "react";
class FilterBox extends React.Component {
  constructor() {
    super();
    var arr = [
      "APPLE",
      "ORANGE",
      "BANANA",
      "MANGO",
      "PAPAPYA",
      "PINEAPPLE",
      "PROMEGRANTE",
      "AVOCADO",
      "STRAWBERRY",
      "JACKFRUIT",
      "KIWI",
      "APRICOT",
      "LIME",
      "WATERMELON",
      "CHERRY",
      "PEAR",
      "PEACH",
      "GRAPES",
    ];
    this.state = { values: arr, outlist: arr, searchtext: "" };
  }
  updatelist = (ect) => {
    this.setState({ searchtext: ect.target.value });
    var x = this.state.values;
    var y = x.filter((z) => z.indexOf(ect.target.value.toUpperCase()) >= 0);
    this.setState({ outlist: y });
  };
  render() {
    return (
      <div>
        <br />
        <div className="outerbox">
          <br />
          <h1>Filter Box</h1>
          <div className="first">
            <input
              type="text"
              value={this.state.searchtext}
              onChange={this.updatelist}
              placeholder="Search fruits..."
            ></input>
            <div className="secondbox">
              {this.state.outlist.map((x) => (
                <div>{x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterBox;
