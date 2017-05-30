import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import Sms from 'material-ui/svg-icons/notification/sms';
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import CloudCircle from 'material-ui/svg-icons/file/cloud-circle';
import Print from 'material-ui/svg-icons/action/print';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {tabIndex: 0};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({tabIndex: value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
            <h2>AKSHAY KANNAN</h2>
            <h3>Product Manager • Software Engineer • Beat Maker</h3>
            <div className="flexbox">
            <div className="hello">
              Hello! I'm a Product Manager at Google. This is my website.
            </div>
            <div className="photo">
              <MuiThemeProvider>
                <Avatar src="/ak.jpg" size={200}/>
              </MuiThemeProvider>
            </div>
            </div>
          </div>
          <br/>
          <MuiThemeProvider>
            <Tabs className="tabs" onChange={this.handleChange} 
                inkBarStyle={{backgroundColor: 'rgb(0, 188, 212)', height: 3}}
                value={this.state.tabIndex}>
              <Tab label="Work Projects" value={0} />
              <Tab label="Side Projects" value={1} />
            </Tabs>
          </MuiThemeProvider>
        </div>
        <MuiThemeProvider>
        <div className="container">
          
          <SwipeableViews index={this.state.tabIndex} onChangeIndex={this.handleChange}>
            <div className="content">
              <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/><p className="jobtitle">Product Manager</p>
              <Card className="card">
                <CardTitle className="cardTitle" title="Android: Location, Context, Identity" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" src="/ic/els.png"/></td>
                      <td>I created Android's <a href="#">
                      Emergency Location Service
                      </a> to deliver significantly more accurate locations to emergency services and save lives.</td>
                    </tr>
                    <tr>
                      <td><PlaylistAddCheck className="icon"/></td>
                      <td>I introduced <a>Autofill in Android O</a>, letting users seamlessly fill out credit cards, addresses, and logins in native apps with a single tap.</td>
                    </tr>
                    <tr>
                      <td><img className="icon" src="/ic/nearby.png"/></td>
                      <td>I launched <a>Nearby</a>, for powering device-to-device discovery and communication, and for discovering relevant experiences over BLE.</td>
                    </tr>
                    <tr>
                      <td><DirectionsRun className="icon"/></td>
                      <td>I led <a>Activity Recognition</a>, using phone sensors to detect what the user is doing, powering experiences like Google Fit and parking detection in Google Now.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card>
              <br/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Google Cloud Platform" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><CloudCircle className="icon"/></td>
                      <td>I led development of the <a href="#">Google Cloud Console
                      </a>, unifying all of Google's cloud offerings and APIs into a redesigned developer-facing console.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card>
              <br/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Google Cloud Print" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><Print className="icon"/></td>
                      <td>I worked with major printer manufacturers to bring <a>cloud-ready printers</a> to market, and got native cloud printing functionality integrated into Chrome, Chrome OS, and eventually Android.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card>
              <br/><br/><br/>
              <img className="big logo" src="https://captricity.com/static/images/new-site/captricity-logo.png"/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Software Engineer" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" src="https://www.gstatic.com/images/icons/material/system/2x/settings_black_48dp.png"/></td>
                      <td>First engineer at Captricity, part of the founding team. Built V1 of a system to automate data entry of paper forms using mechanical turk based on <a>research findings</a>.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/><br/>

              <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Software Engineering Intern" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" src="https://www.gstatic.com/images/icons/material/system/2x/settings_ethernet_black_48dp.png"/></td>
                      <td>Designed and implemented support for parallelized network requests on Google's structured data crawling infrastructrure.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/><br/>
            </div>
            <div className="content">
              <h3>Side Projects</h3>
            </div>
          </SwipeableViews>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
