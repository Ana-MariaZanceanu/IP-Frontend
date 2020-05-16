import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './item';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: props.courses,
    };
  }

  render() {
    return (
      <div id="menu">
        <p className="menuTitle">Our menu</p>
        <div id="items">
          {this.state.courses.map((item) => {
            console.log('aiiiiiccccciiiiiii' + item._id);
            return (
              <Item
                itemId={item._id}
                itemPicture={item.image}
                itemName={item.name}
                itemPrice={item.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
