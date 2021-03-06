import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import Keyboard from 'material-ui/svg-icons/hardware/keyboard';
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import CloudCircle from 'material-ui/svg-icons/file/cloud-circle';
import CompareArrows from 'material-ui/svg-icons/action/compare-arrows';
import Print from 'material-ui/svg-icons/action/print';
import './App.css';

//const localKey = 'tabIndex';
const hashes = ['main-projects', 'side-projects'];

class App extends Component {
  constructor() {
    super();

    const tab = hashes.indexOf(window.location.hash.replace('#', ''));
    this.state = {tabIndex: (tab > -1) ? tab : 0};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({tabIndex: value});
    window.location.hash = hashes[value];
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
              Hello! I'm a Product Manager at Google working on Gboard. This is my website.
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
            <Tabs className="tabs container" onChange={this.handleChange} 
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
              <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Gboard" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><Keyboard className="icon"/></td>
                      <td>I currently work on the Gboard team. My aim is to build a best-in-class input experience on&nbsp;
                        <a href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US">Android</a>
                        &nbsp;and&nbsp;
                        <a href="https://itunes.apple.com/us/app/gboard/id1091700242?mt=8">iOS</a>.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card>
              <br/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Android: Auth and Identity" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><PlaylistAddCheck className="icon"/></td>
                      <td>I led the creation of <a href="https://www.cnet.com/how-to/this-setting-makes-entering-passwords-on-android-oreo-a-breeze-autofill/">Autofill in Android Oreo and above</a>, letting users seamlessly fill out credit cards, addresses, and logins in all native apps with a single tap.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card>
              <br/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Android: Location and Context" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" src="/ic/els.png"/></td>
                      <td>I created the <a href="https://blog.google/topics/google-europe/helping-emergency-services-find-you/">
                      Emergency Location Service
                      </a> to deliver faster and more accurate locations to emergency services <a href="https://thenextweb.com/eu/2017/03/10/googles-clever-tool-for-emergency-services-is-now-saving-lives/">and save lives</a>.
                      </td>
                    </tr>
                    <tr>
                      <td><img className="icon" src="/ic/nearby.png"/></td>
                      <td>I launched <a href="https://blog.google/products/android/introducing-nearby-new-way-to-discover/">Nearby</a>, for powering device-to-device discovery and communication, and for discovering relevant experiences over BLE.</td>
                    </tr>
                    <tr>
                      <td><DirectionsRun className="icon"/></td>
                      <td>I worked on <a href="https://developers.google.com/android/reference/com/google/android/gms/location/DetectedActivity">Activity Recognition</a>, using phone sensors to classify user activity. This enables Google Fit, the Google Now parking card, and is also available as an API.</td>
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
                      <td>I led creation and development of the <a href="https://console.cloud.google.com">Google Cloud Console
                      </a>, unifying Google's cloud offerings and APIs into a redesigned experience for developers.</td>
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
                      <td>I helped bring the first <a href="https://googleblog.blogspot.com/2011/12/google-cloud-print-picks-up-steam.html">cloud-ready printers to market</a>, and brought native cloud printing support to Chrome and Chrome OS.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/><br/>

              <img className="big logo" src="/captricity.png"/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Software Engineer" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" src="https://www.gstatic.com/images/icons/material/system/2x/settings_black_48dp.png"/></td>
                      <td>First hire at <a href="https://captricity.com/">Captricity</a>. Built a system to automate data entry of paper forms using mechanical turk.</td>
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
                      <td><CompareArrows className="icon"/></td>
                      <td>Implemented support for parallelized network requests to speed up Google's structured data crawling infrastructrure.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/><br/>

              <img className="logo big" src="/ic/berkeley.png"/>
              <Card className="card">
                <CardTitle className="cardTitle" title="Publications" />
                <CardText className="cardText">
                  <List>
                    <ListItem innerDivStyle={{padding: 10}}
                        href="http://dl.acm.org/citation.cfm?id=2160605"
                        primaryText="Shreddr: pipelined paper digitization for low-resource organizations"
                        secondaryText="2012 - ACM Dev"/>
                    <ListItem innerDivStyle={{padding: 10}}
                        href="http://dl.acm.org/citation.cfm?id=2007210"
                        primaryText="Exploring schema repositories with Schemr"
                        secondaryText="2011 - ACM Sigmod"/>
                    <ListItem innerDivStyle={{padding: 10}}
                        href="http://dl.acm.org/citation.cfm?id=1807285"
                        primaryText="OpenII: an open source information integration toolkit"
                        secondaryText="2010 - ACM Sigmod"/>
                  </List>
                </CardText>
              </Card>

            </div>
            <div className="content">
              <Card className="card">
                <CardTitle className="cardTitle" title="JustBeamIt" />
                <CardMedia style={{textAlign: 'center'}}>
                  <a href="https://justbeamit.com/"><img className="ss" src="/ic/jbi.png"/></a>
                </CardMedia>
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><a href="https://justbeamit.com/">JustBeamIt.com</a> makes it easy to stream files to friends, directly from within the browser, with no size limits. Featured on <a href="http://lifehacker.com/5849783/justbeamit-makes-transferring-large-files-super-easy">Lifehacker</a> and <a href="http://www.addictivetips.com/internet-tips/justbeamit-offers-peer-to-peer-p2p-file-sharing-without-signup/">AddictiveTips</a>, has an <a href="https://play.google.com/store/apps/details?id=com.justbeamit">Android app</a>, and continues to get ~1k Daily Active Users.
                      </td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/>
              <Card className="card">
                <CardTitle className="cardTitle" title="iWantTheTime.com" />
                <CardMedia style={{textAlign: 'center'}}>
                  <a href="https://www.iWantTheTime.com/"><img className="ss" src="/ic/iwtt.png"/></a>
                </CardMedia>
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><a href="https://www.iWantTheTime.com">iWantTheTime.com</a> lets you track time and weather around the world. Uses React, IP Geolocation, Google Places APIs, and material design.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/>
              <Card className="card">
                <CardTitle className="cardTitle" title="SensorMusic" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" style={{opacity: 1.0}} src="/ic/music.png"/></td>
                      <td><a href="https://github.com/theak/sensormusic">SensorMusic</a> is an Android app for using the sensors on your phone (accel, gyro, light, mag) as a MIDI controller to make music.</td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/>
              
              <Card className="card">
                <CardTitle className="cardTitle" title="Beat Maker" />
                <CardText className="cardText">
                  <table><tbody>
                    <tr>
                      <td><img className="icon" style={{opacity: 1.0}} src="https://lh3.googleusercontent.com/p7L13rD58bcY0HZ1gczQ0C-BqNqRTefFI3fbxIe9Qid4LPBDiTo0EzDTHruagjHj3HWy=w104-rw"/></td>
                      <td>I produce beats! <a href="https://soundcloud.com/themostcrispy">Check out my Soundcloud</a>. </td>
                    </tr>
                  </tbody></table>
                </CardText>
              </Card><br/>
            </div>
          </SwipeableViews>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
