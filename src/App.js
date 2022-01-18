import './App.css';
import React, {Component} from "react";

import Projects from "./Projects/Projects";
import SocialProfiles from "./SocialProfiles/SocialProfiles";

import profile from './assets/profile.png'

class App extends Component {
    state = {isShowMore: false}

    toggleShowMore = () => {
        this.setState({isShowMore: !this.state.isShowMore});
    }

    render() {
        return (
            <div className="App">
                <img src={profile} alt="profile" className='profile'/>
                <h1>Hello I am Keerthinaik</h1>
                {this.state.isShowMore ? <p>I'm a Software Engineer</p> : null}
                <button onClick={this.toggleShowMore}>{this.state.isShowMore ? 'Show Less' : 'Show More'}</button>
                <hr/>
                <Projects />
                <SocialProfiles />
            </div>)
    }

}

export default App;
