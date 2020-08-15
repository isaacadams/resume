import './index.less';
import './icons.ts';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { History, HistoryRecord, Skill, Header, YSpacer } from './components';

export default function Resume(props) {
    return (
        <div id="my-resume">
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
                            right: <a href="https://github.com/isaacadams" ><FontAwesomeIcon icon={["fab", "github"]} /> isaacadams</a> //"(610) 742 6276"
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
                        <YSpacer space="10px" />
                    </ History>
                    <History title="Experience">
                        <HistoryRecord 
                            position={<b>Software Engineer</b>}
                            company={<i>eMoney Advisor</i>}
                            date="June 2018 - Present"
                            descriptions={[
                                "Helped usher in modern team practices such as pull requests, unit tests, and branch workflow",
                                "Setup automated tasks for transpiling and minifying js and scss files using gulp",
                                "Containerized and automated the build process using Docker to create a stable and flexible build environment",
                                "Facilited the ease of releases by creating .nupkg through Jenkins multi branch pipeline and pushing to Octopus",
                                "Built the data layer using a repostiory approach which inluded handling data in XML, JSON, and SQL",
                                "Halved number of files in a project by introducing a simpler repository approach in the new .NET Core app"
                            ]}
                        />         
                        <YSpacer space="8px" />
                        <HistoryRecord 
                            position={<b>Junior Software Developer</b>}
                            company={<i>PROCONEX</i>}
                            date="March 2017 - March 2018"
                            descriptions={[
                                "Sped development after creating a T4 script that generated C# code based on SQL schema",
                                "Developed a web and mobile application using Angular, C#, and SQL alongside a team of three other developers",
                                "Wrote an API with ASP.Net Core and Entity Framework used to communicate between SQL and Angular",
                                "Played a key role in the design of the entire application from the database to the user interface",
                            ]}
                        />
                        <YSpacer space="10px" />
                    </ History>
                    <History title="Projects">
                        <HistoryRecord 
                            position={<b>Health Coverage API</b>}
                            company={<i>Remote</i>}
                            date="July 2018 - September 2018"
                            descriptions={[
                                "Aggregated data from a health insurance API and stored it in a database",
                                "Designed the database using EF Core and using the SQL provider",
                                "Displayed the coverage information to clients through a .NET core web app built using jQuery and bootstrap"
                            ]}
                        />
                        <YSpacer space="8px" />
                        <HistoryRecord 
                            position={<b>Game Of War</b>}
                            company={<i>Side Project</i>}
                            date="April 2018 - November 2018"
                            descriptions={[
                                "Originally built the card game as a console application using pure C#",
                                "Rebuilt the game using react so that actual pictures of cards could be used and the game could come to life",
                                "Applied the use of specific data structures like stack and queue for the card game to work properly",
                            ]}
                        />
                        <YSpacer space="10px" />
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
        </div>
    );
}