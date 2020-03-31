import React from 'react';

class Grocerylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    }
  }
	
  render(){
    return (
      <>{this.state.list.map(function (item) {
        return <h2>{item.name} {item.quantity > 1 ? '- ' + item.quantity : ''}</h2>
      })}</>
    );
   }

}

export default Grocerylist;