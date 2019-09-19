import React, { Component } from 'react';
import './App.css';
// import Button from 'components/button2';
import Card from 'components/card2';
import Header from 'components/header2';
import Page from 'components/page';
import Row from 'components/rowTable';

class App extends Component {
  render() {
    return (
      <Page>
        <Header
          image={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"}
          title={"Great title"}
          subtitle={"This is how you make a header"}
          text={"Don't forget to propose a small description here"}
          button={"Press Me"} />
        <Row>
          <Card image={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} text={'This is a presentation of the object inside the card'} button={'Press Me'} />
          <Card image={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} text={'This is a presentation of the object inside the card'} button={'Press Me'} />
          <Card image={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} text={'This is a presentation of the object inside the card'} button={'Press Me'} />
        </Row>
      </Page>
    );
  }
}

export default App;
