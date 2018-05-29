import React, { Component } from 'react';


import List from './listItem.js';


class ContactList extends Component {

  render() {
    return (
      <article>
        <div className="contacts-container">
          <header>
            <h2>Search your pokemon!</h2>
           </header>
           <List/>
        </div>
      </article>
    );
  }
}

export default ContactList;
