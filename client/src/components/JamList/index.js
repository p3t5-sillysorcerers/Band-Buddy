import React from 'react';


const ListItem = ({ value, onClick }) => (
    <li onClick={onClick}>{value}</li>
  );
  
  const List = ({ items, onItemClick }) => (
    <ul>
      {
        items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
      }
    </ul>
  );
  
  class JamList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        musicians: []
      };
    }
  
    onClick = (e) => {

      this.setState({ inputValue: e.target.id })
      console.log(e.target.id)
      const { inputValue, musicians } = this.state;
      if (inputValue) {
        const nextState = [...musicians, inputValue];
        this.setState({ musicians: nextState, inputValue: '' });
      }
      console.log(this.state)
    }
  
    // onChange = (e) => this.setState({ inputValue: e.target.id });
  
    handleItemClick = (e) => {console.log(e.target.innerHTML)}

    handleCheck(e) {
      console.log(e.target.id);
  }
  
    render() {
      const { musicians, inputValue } = this.state;
      return (
        <div>
          {/* <input type="text" value={inputValue} onChange={this.onChange} /> */}
          <button id="musician" onClick={this.onClick}>Musician</button>
          <List items={musicians} onItemClick={this.handleItemClick} />
        </div>
      );
    }
  }


  export default JamList
  
  
  