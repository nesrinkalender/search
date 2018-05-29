import React from 'react';
import axios from 'axios';

class List extends React.Component {
 constructor(props){
    super(props);
    this.state ={
      initialList: [],
      filteredList: []
    }
  }


  filterList(event){
    var text = event.target.value;
    var array = this.state.initialList;

    if ( text.length < 0 ) {
      this.setState({ filteredList: this.state.initialList} );
    }else {
      function result(text){
          return array.filter(function(el) {
          return el.toLowerCase().indexOf(text.toLowerCase()) > -1;
        })
      }

      this.setState({ filteredList: result(text)} );
    }

  }

  componentDidMount() {
    axios.get(`../static/data.json`)
      .then(res => {
        this.setState({ initialList: res.data, filteredList: res.data });
      });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
          <ul className="contact-list">
            {
                this.state.filteredList.map(function(item, index) {
                  return <li className="list-group-item" key={index}>{item}</li>
                })
               }
          </ul>
      </div>
    );
  }
}
export default List;
