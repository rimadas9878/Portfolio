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
import EmployeeTracker from '../../assets/Employee_Tracker.gif'
import Gamethon from '../../assets/Gamethon.jpeg'
import SocialNetworkAPI from '../../assets/SocialNetworkAPI.gif'
import TextEditor from '../../assets/TextEditor.gif'
import RobinGoodFoods from '../../assets/robingoodfoods.png'

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

                <div class="EmployeeTrackerContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={EmployeeTracker} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Employee Tracker</span></Card.Title>
                            <Card.Text>
                                Content Management System (CMS), a software application that allows users to create, manage, and publish digital
                                content without the need for specialized technical knowledge. It typically provides a user-friendly interface that
                                allows non-technical users to easily add, edit, and delete content, such as text, images, and videos,
                                and store it in a database.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/rimadas9878/Employee-Tracker" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="GamethonContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Gamethon} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Gamethon</span></Card.Title>
                            <Card.Text>
                                Gamethon was a group project created for gamers. This application uses Node.js and Express.js to create a RESTful API,
                                Handlebars.js as the template engine, MySQL and the Sequelize ORM for the database, have GET and POST routes for
                                retrieving and adding new data and deployed using Heroku.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/rimadas9878/Gameathon" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="SocialNetworkAPIContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={SocialNetworkAPI} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">SocialNetworkAPI</span></Card.Title>
                            <Card.Text>
                                Build an API for a social network web application where users can share their thoughts, react to friend's
                                thoughts, and create a friend list.
                                We had to use MoongoDB for creating the database and Insomnia to display and add the data.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/rimadas9878/Social-Network" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="TextEditorContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TextEditor} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">Text Editor</span></Card.Title>
                            <Card.Text>
                                Build a Progressive Web Application and uploaded it to Heroku.
                                This application uses the Manifest file which declares that this app is installable,
                                and uses src-sw that takes all the content and caches it so that when we are offline it
                                serves the purpose, used Webpack that bundles all the files together, and also uses IndexedDB
                                to store data we use indexedDB
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://arcane-reef-48618.herokuapp.com/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/Text-Editor" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div class="RobinGoodFoodsContainer">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={RobinGoodFoods} />
                        <Card.Body>
                            <Card.Title><span class="assignmentTitle">RobinGoodFoods</span></Card.Title>
                            <Card.Text>
                            Created an e-commerce website for all breakfast lovers. The project was created on REACT and used Apollo-server, MongoDB, Express, node.js, and GraphQL, and for CSS we used Tailwind.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://immense-woodland-28981.herokuapp.com/" target="_blank">Website</Card.Link>
                            <Card.Link href="https://github.com/rimadas9878/RobinGoodFoods" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;


