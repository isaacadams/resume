import './index.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { History, Skill, List, Header, YSpacer } from './components';

function Resume(props) {
    
    return (
        <div className="resume mt-5">
            <div style={{ height: "75px" }}></div>
            <div className="content">
                <Header y={{
                    top: { 
                        left: "Isaac Adams", 
                        right: "isaac.d.adams@gmail.com"
                    },
                    bottom: {
                        left: "West Chester, PA", 
                        right: "(610) 742 6276"
                    }
                }} />
                <YSpacer space="15px" />
                <History title="Technical Skills">
                    <div className="row">
                        <div className="col mr-1">
                            <Skill category="Languages" examples={["Javascript", "C#", "SQL", "TypeScript", "Python", "HTML", "LESS"]} />
                            <YSpacer />
                            <Skill category="DevOps" examples={["Jenkins", "Docker", "Octopus", "Gulp", "IIS"]} />    
                        </div> 
                        <div className="col">
                            <Skill category="Technology" examples={[".NET Core", "React", "Node.js", "Angular", "EF Core", "jQuery", "NUnit", "API", "REST", "MVC"]} />
                            <YSpacer />
                            <Skill category="Other" examples={["Git", "Visual Studio", "JSON", "XML", "Jira"]} />
                        </div>
                    </div>   
                    <YSpacer />                 
                </ History>
                <History title="Experience">                    
                    <div>
                        <Header y={{
                            top: { 
                                left: <b>Software Engineer</b>, 
                                right: "June 2018 - Present"
                            },
                            bottom: {
                                left: <i>eMoney Advisor</i>, 
                                right: ""
                            }
                        }} />
                        <List items={[
                            "Helped usher in modern team practices such as pull requests, unit tests, and branch workflow",
                            "Setup automated tasks for transpiling and minifying js and scss files using gulp",
                            "Containerized and automated the build process using Docker to create a stable and flexible build environment",
                            "Facilited the ease of releases by creating .nupkg through Jenkins multi branch pipeline and pushing to Octopus",
                            "Built the data layer using a repostiory approach which inluded handling data in XML, JSON, and SQL",
                            "Halved number of files in a project by introducing a simpler repository approach in the new .NET Core app",
                        ]} />
                        <YSpacer />
                    </div> 
                    <div>
                        <Header y={{
                            top: { 
                                left: <b>Junior Software Developer</b>, 
                                right: "March 2017 - March 2018" 
                            },
                            bottom: {
                                left: <i>PROCONEX</i>, 
                                right: ""
                            }
                        }} />
                        <List items={[
                            "Sped development by an estimated 20% after creating a T4 script that generated C# code based on SQL schema",
                            "Developed a web and mobile application using Angular, C#, and SQL alongside a team of three other developers",
                            "Wrote an API with ASP.Net Core and Entity Framework used to communicate between SQL and Angular",
                            "Played a key role in the design of the entire application from the database to the user interface",
                        ]} />
                        <YSpacer />
                    </div>
                </ History>
                <History title="Projects">
                    <div>
                        <Header y={{
                            top: { 
                                left: <b>Health Coverage API</b>, 
                                right: "July 2018 - September 2018" 
                            },
                            bottom: {
                                left: <i>Remote</i>, 
                                right: ""
                            }
                        }} />
                        <List items={[
                            "Built an API that communicates with a health insurance API and displays the coverage information to clients",
                            "Designed the database in SQL, built the API using .NET Core, and used jQuery and bootstrap for the frontend",
                        ]} />
                        <YSpacer />
                    </div> 
                    <div>
                        <Header y={{
                            top: { 
                                left: <b>Game Of War</b>, 
                                right: "April 2018 - November 2018" 
                            },
                            bottom: {
                                left: <i>Side Project</i>, 
                                right: ""
                            }
                        }} />
                        <List items={[
                            "Originally built the card game as a console application using pure C#",
                            "Rebuilt the game using react so that actual pictures of cards could be used and the game could come to life",
                            "Applied the use of specific data structures like stack and queue for the card game to work properly",
                        ]} />
                        <YSpacer />
                    </div>
                </ History>
                <History title="Education">
                    <Header y={{
                        top: { 
                            left: <b>Drexel University</b>, 
                            right: "September 2013 – June 2018"
                        },
                        bottom: {
                            left: "BS Chemical Engineering, 3.82 GPA", 
                            right: "Philadelphia, PA"
                        }
                    }} />
                </History>
            </div>
        </div>
    );
}

ReactDOM.render(<Resume />, document.getElementById('resume'));