import React from 'react';

class Grocerylist extends React.Component {	
  render(){
    let listStyle = {
      height: '50px',
      borderRadius: '12px',
      color: 'white',
      cursor: 'pointer',
      backgroundColor: 'green',
      border: '1px solid black',
      boxShadow: '7px 7px 3px black',
      transition: 'transform 0.05s ease-in-out'
    };

    return (
      <div>{this.props.list.map(function (item) {
        return <h2 style={listStyle} onMouseEnter={(event) => event.target.style.transform = 'scale(1.03)'}
                                     onMouseLeave={(event) => event.target.style.transform = 'scale(1)'}
         onClick={(event) => event.target.style.backgroundColor === 'green' ? event.target.style.backgroundColor = 'red' : event.target.style.backgroundColor = 'black' }
                    data-tooltip={item.name}> 
                      {item.name} {item.quantity > 1 ? ' -   ' + item.quantity : ''}</h2>
      })}</div>
    );
   }

}

export default Grocerylist;