import React, { Component } from 'react';

import Project from './Project/Project';
import PROJECTS from "../data/projects";

class Projects extends Component{
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map((PROJECT) => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            )
                        } )
                    }
                </div>
            </div>
        );
    }
}

export default Projects;