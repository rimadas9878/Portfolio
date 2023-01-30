import React from "react";
import Table from 'react-bootstrap/Table';

export default function Resume() {
    return (
        <div class="resumePage">
            <div class="resumeContainer">
                <p class="resumePageFont">Hi,</p>
                <p class="resumePageFont">This is Rima Das. I hope you're doing well!</p>
                <p class="resumePageFont">I have attached my resume and cover letter below for your consideration.</p>
                <div class="resumePDF">
                    <a class="resumePageFont" href="https://drive.google.com/file/d/1jQlQoPEEFIDgk6mreo5KGmsAZymwqDED/view?usp=share_link">Resume</a> <br/><br/>
                    <a class="resumePageFont" href="https://drive.google.com/file/d/10A4Z3zwdhlZbe1od9aAajn0Lccsdjx9D/view?usp=share_link">Cover Letter</a>
                </div>
            </div>
            <div class="proficienciesContainer">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Frontend</th>
                            <th>Backend</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML</td>
                            <td>API</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>Node</td>

                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>Express</td>
                        </tr>
                        <tr>
                            <td>jQuery</td>
                            <td>MySQL</td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td>Sequelize</td>
                        </tr>
                        <tr>
                            <td>Bootstrap</td>
                            <td>MongoDB</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rest</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>GraphQL</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}