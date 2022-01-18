import React, { Component } from 'react';

import SOCIAL_PROFILES from "../data/socialProfiles";
import SocialProfile from "./SocialProfile/SocialProfile";

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                {
                    SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                    })
                }
            </div>
        );
    }
}

export default SocialProfiles;