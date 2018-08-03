import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/home.css'

class Home extends Component {

    render () {
        return (
            <main id="main" aria-label="Content" tabIndex={-1}>
                <div className="container">
                <div className="last-viewed-section">
                </div>
                <div className="info-wrapper">
                    <section className="updates">
                    <div className="recent-updates">
                        <article className="updates-article">
                        <h5 className="date" id="msg-date-0">June 15, 2018</h5>
                        <button className="toggle-visibility-button" data-hide="Hide" data-show="Show" aria-describedby="msg-date-0" aria-controls="msg-content-0" aria-expanded="true" />
                        <div className="toggle-visibility-element article-content " id="msg-content-0">
                            <h1 className="info-headline" id="welcome-and-thanks-for-joining-this-course-">Welcome and thanks for joining this course!</h1>
                            <p>We hope you are as excited as we are! In weeks ahead you will become familiar with one of today’s most relevant managed blockchains. In this in depth course about Hyperledger Fabric we will work together on different aspects of blockchain technology and Hyperledger Fabric in particular. You will learn how Hyperledger Fabric works and how YOU can work with it! b9lab has invested a lot of time digging into blockchain and its recent developments. Due to its significant progress, the decision to create a course about Hyperledger Fabric was clear. We are excited to guide you through one of the most promising and fascinating managed blockchains!
                            </p>
                            <h1 className="info-headline" id="course-duration-and-delivery"> Course Duration &amp; Delivery</h1>
                            <p>This course is an in-depth journey into blockchain theory, how Hyperledger Fabric works with a lot of hands-on experimentation. The course starts on <strong>12th of July 2018</strong>. You can choose your individual learning path during the whole course duration till <strong>6th of September 2018</strong>. </p>
                            <p>You can follow the course at a flexible pace. But be aware that we are delivering the course material weekly and the discussions going on on slack will mostly be referring to the corresponding week. We estimate a workload of 8 to 12 hours per week.</p> 
                            <p>Our course is delivered through a mixture of reading material, videos, a quiz at the end of each module, various exercises and further readings to deepen your knowledge in specific areas. Each week, on <b>Thursday at 5.00pm UTC</b>, we deliver new content to you.</p>
                            <p><img src="https://academy.b9lab.com/assets/courseware/v1/16c353ee184d08546a9c132e6d1be9ef/asset-v1:B9lab+ETH-15+2017-08+type@asset+block/Academy_Mockup.png" style={{width: 500, display: 'block', margin: '0 auto'}} /></p>
                            <h1 className="info-headline" id="support-and-communication">Teaching &amp; Communication</h1>
                            <p>Teaching and communication in the course will take place in a dedicated Slack channel. We invite you to collaborate with your classmates and instructors, Anil and Rob, who will help you with questions and invite you to engage in discussing course topics. Their role is to guide you through the course and assist you in reaching your learning objectives.</p>
                            <p>
                            <img src="https://academy.b9lab.com/assets/courseware/v1/35df583e8e071e8de196949b1ecd0df9/asset-v1:B9lab+ETH-15+2017-08+type@asset+block/Slack_Mockup.png" style={{width: 500, display: 'block', margin: '0 auto'}} /></p>
                            <h1 className="info-headline" id="exam-and-certification">Exam &amp; Certification</h1>
                            <p>All the courseware is part of the exam (except further reading).</p>
                            <p>At the end of the 8 weeks tutored course, you can decide on the date of your exam. The exam consists of a theoretical part and a practical part. You will have a period of 12 weeks within which you can pass the exam whenever you feel ready. Submission deadline of the final exam is 29th of November 2018.
                            </p>
                            <p>The pass mark is fairly high and requires an average of 80% or more. Successful participants receive a certificate that is verified on the Ethereum platform.
                            </p>
                            <p>You can see how that looks like in the <a href="https://certificates.b9lab.com/">B9lab Certificate Center</a>
                            </p><p><img src="https://academy.b9lab.com/assets/courseware/v1/f914f6a922133f67bb5dddf6eb3a8b65/asset-v1:B9lab+ETH-15+2017-08+type@asset+block/cert-mockup.png" style={{width: 500, display: 'block', margin: '0 auto'}} /></p>
                            <p /><p>
                            Looking forward to seeing you in the course starting on Wednesday, 12th of July!
                            </p><p>
                            <strong>Anil &amp; Rob!</strong></p>
                        </div>
                        </article>
                    </div>
                    </section>
                    <section aria-label="Handout Navigation" className="handouts">
                    <h1 className="handouts-header">Course Curriculum</h1>
                    <h4>MODULE 1: What is Blockchain</h4>
                    <ul><font size={-1}>
                        <li>Basics</li>
                        <li>Public Blockchains</li>
                        <li>Consensus</li>
                        <li>Cryptography Fundamentals</li>
                        <li>Getting Started with Golang</li>
                        </font></ul>
                    <h4>MODULE 2: Fabric</h4>
                    <font size={-1}><ul>
                        <li>Managed Blockchains</li>
                        <li>Hyperledger Project</li>
                        <li>Fabric Definitions</li>
                        <li>Smart Contracts</li>
                        <li>Use Cases</li>
                        <li>Golang Basic Types</li>
                        </ul></font>
                    <h4>MODULE 3: First Run</h4>
                    <font size={-1}><ul>
                        <li>HLF First Network</li>
                        <li>Command Line Interface</li>
                        <li>HLF Dev Mode</li>
                        <li>Golang Interfaces</li>
                        <li>First chaincode</li>
                        </ul></font>
                    <h4>MODULE 4: Sketch a Network</h4>
                    <font size={-1}><ul>
                        <li>Certificates</li>
                        <li>Network</li>
                        <li>Chaincode</li>
                        <li>Golang Control Structures</li>
                        </ul></font>
                    <h4>MODULE 5: Clients</h4>
                    <font size={-1}><ul>
                        <li>NodeJS SDK</li>
                        <li>Other SDKs</li>
                        <li>Golang Arrays</li>
                        </ul></font>
                    <h4>MODULE 6: Certificate Authority</h4>
                    <font size={-1}><ul>
                        <li>Fabric CA</li>
                        <li>Membership Service Providers</li>
                        <li>Golang Core Packages</li>
                        </ul></font>
                    <h4>MODULE 7: Frameworks &amp; Tools</h4>
                    <font size={-1}><ul>
                        <li>Hyperledger Composer</li>
                        <li>Kafka OS</li>
                        <li>Chaintool</li>
                        <li>Golang Concurrency</li>
                        </ul></font>
                    <h4>MODULE 8: Ethics</h4>
                    <font size={-1}><ul>
                        <li>Neutrality</li>
                        <li>Decentralisation</li>
                        <li>Golang Testing</li>
                        </ul></font>
                    </section>
                </div>
                </div>
            </main>
        );
    }

}


export default Home;