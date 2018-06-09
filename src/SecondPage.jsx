import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

import ThirdPage from './ThirdPage';

export default class SecondPage extends React.Component {
  pushPage() {
    localStorage.setItem("words", {});
    this.props.navigator.pushPage({component: ThirdPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  N5FromApiAsync() {
    return fetch('json/N5.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Second Page</div>
      </Toolbar>
    );
  }

  render() {
     console.log(localStorage.getItem("selectedLevel"));
     let wordList = this.N5FromApiAsync();
     console.log(wordList);
     return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}
