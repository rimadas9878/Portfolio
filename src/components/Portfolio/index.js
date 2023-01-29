import Card from 'react-bootstrap/Card';
import Horizon from '../../assets/Horizon.png'
import CSSSNIPPET from '../../assets/CSSSnippet.png'
import CSSPortfolio from '../../assets/CssPortfolio.gif'
import PasswordGenerator from '../../assets/PasswordGenerator.png'
import TestYourKnowledge from '../../assets/Test-Your-Knowledge.gif'
import SaveTheTask from '../../assets/Save_The_Task.png'
import WhatsTheWeather from '../../assets/Weather_Image.png'
import ReadMeGenerator from '../../assets/ReadMeGenerator.gif'
import TeamGenerator from '../../assets/Team-generator.png'
// import ReadMeGenerator from '../../assets/ReadMeGenerator.gif'
// import ReadMeGenerator from '../../assets/ReadMeGenerator.gif'
// import ReadMeGenerator from '../../assets/ReadMeGenerator.gif'


function Portfolio() {
    return (
        <div class="profileContainer">
            <div class="row1Container">
                <div class="horizonContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Horizon} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">HORIZON</span></Card.Title>
                            <Card.Text>
                                Horizon was an introductory assignment that uses the basics of HTML, this assignment helped to understand the logical structure of a website and how different elements relate to one another, which was an important foundation for later learning about styling and layout using CSS.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/HTML_CSS_GIT/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/HTML_CSS_GIT" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="cssSnippetContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CSSSNIPPET} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">CSS SNIPPET</span></Card.Title>
                            <Card.Text>
                                CSS snippet was an assignment where we experiment with different CSS properties and learn how to apply them
                                to their HTML elements. Used Flexbox tool allows for the creation of responsive grids, and media queries,
                                helped to change the layout of their webpage depending on the screen size, and by using CSS linear gradient function,
                                we learned how to add background color to their webpage.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/Collection-of-CSS-snippets/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Collection-of-CSS-snippets" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="CSSPortfolioContainer">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CSSPortfolio} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">CSS Portfolio</span></Card.Title>
                            <Card.Text>
                            This webpage is a portfolio created using HTML and CSS which showcases my skills, abilities, and accomplishments. 
                            Soft skills, such as communication, problem-solving, and teamwork, and
                             Hard skills, such as technical expertise or proficiency in a specific software
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/Creating-a-Portfolio/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Creating-a-Portfolio" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="PasswordGeneratedContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={PasswordGenerator} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Password Generator</span></Card.Title>
                            <Card.Text>
                                Password Generator is an application that enables to generate random passwords based on criteria that have been selected.
                                The code is written in JavaScript and it has a clean and polished, responsive user interface that adapts to multiple screen sizes.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/Password-Generator/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Password-Generator" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>


                <div class="TestYourKnowledgeContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TestYourKnowledge} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Test Your Knowledge</span></Card.Title>
                            <Card.Text>
                                A "Test your Knowledge" quiz that runs in the browser and utilizes HTML, CSS, and JavaScript was a great way
                                that assesses understanding of the material and skills in a practical setting. The use of multiple-choice questions,
                                timed coding quiz and dynamic updates to HTML and CSS using JavaScript, allows a comprehensive evaluation of the
                                understanding of the web development concepts.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/Test-Your-Knowledge/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Test-Your-Knowledge" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="SaveTheTaskContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={SaveTheTask} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Save The Task</span></Card.Title>
                            <Card.Text>
                                Save The Task is a simple calendar application that allows a user to save events for each hour of the day.
                                This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                                Used the Moment.js library to work with date and time.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/Save-The-Task/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Save-The-Task" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="WeatherContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={WhatsTheWeather} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Whats The Weather</span></Card.Title>
                            <Card.Text>
                            What's The Weather uses utilizes web APIs and local storage.  
                            With the OpenWeather API, the app can retrieve weather data for different cities in real time. 
                            Additionally, using local storage, we stored data on the client side, allowing the app to remember the user's 
                            preferences and settings even after the browser is closed.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://rimadas9878.github.io/Whats-The-Weather/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Whats-The-Weather" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="ReadMeGeneratorContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ReadMeGenerator} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">ReadMe Generator</span></Card.Title>
                            <Card.Text>
                            ReadMe Generator is a command-line application that dynamically generates a professional README.md file from a user's input 
                            using the Inquirer package. This include what the app is for, how to use the app, how to install it,
                             how to report issues, and how to make contributions.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            
                            <Card.Link href="https://github.com/rimadas9878/ReadMe-Generator" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="TeamGeneratorContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TeamGenerator} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Team Generator</span></Card.Title>
                            <Card.Text>
                            TEAM PROFILE GENERATOR is a Node.js command-line application that takes in information about employees
                             on a software engineering team, then generates an HTML webpage that displays summaries for each person.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://drive.google.com/file/d/1BNInPNkDNNWkXFFRNHUB9SmbT6OpiqGR/view?usp=share_link" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Employees-Details" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="EmployeeTracker">
                </div>

                <div class="Gamethon">
                </div>

                <div class="SocialNetworkAPI">
                </div>

                <div class="Text Editor">
                </div>

                <div class="React Portfolio">
                </div>
            </div>
        </div>
    );
}

export default Portfolio;


