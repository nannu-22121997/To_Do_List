import React from 'react';
class Todo extends React.Component {
    constructor() {
        super();
        this.state = { 'itemtext': ' ', values: [] };
    }
    updatetext = (evt) => {
        this.setState({ 'itemtext': evt.target.value });
    }
    additem = () => {
        var x = this.state.values;
        if (x.indexOf(this.state.itemtext.toUpperCase()) === -1) {
            x.push(this.state.itemtext.toUpperCase());
            this.setState({ 'values': x, 'itemtext': ' ' });
        }
    }
    removeitem = (evt) => {
        var x = evt.target.id.toUpperCase();
        var items = this.state.values;
        var pos = items.indexOf(x);
        items.splice(pos, 1);
        this.setState({ 'values': items });
    }
    render() {
        return (
            <div className='outerbox'>
                <h1>Todo List</h1>
                <div className='firstbox'>
                    <input type="text" value={this.state.itemtext}
                        onChange={this.updatetext}></input>
                    <button onClick={this.additem}>ADD</button>
                </div>
                <div className='secondbox'>
                    {this.state.values.map((item) => <div className='event'>
                        <div className='eventtext'>{item.toUpperCase()}
                            <button className='eventbtn' onClick={this.removeitem}>x</button></div>
                    </div>

                    )}
                </div>
            </div>
        );
    }
}
export default Todo;