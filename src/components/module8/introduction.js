'use strict';

import React, { Component } from 'react';

class Introduction extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="817f39e0acc111e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@538b16b088cc4cf99af942c095453871" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@7b92ef8750a749f596599f64ff7d1eee">
                    <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="817f39e0acc111e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@7b92ef8750a749f596599f64ff7d1eee" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Ethics</h3>
                    <iframe width="809" height="455" src="https://www.youtube.com/embed/x-7-GL2_3l0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@eb703d0c3c0c4cedbae01b1a4079debd">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="817f39e0acc111e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@eb703d0c3c0c4cedbae01b1a4079debd" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h2>Introduction</h2>
                    <p>Much of our daily lives have become closely intertwined with all kinds of systems and technologies. The way we exchange value, trade, communicate, make decisions, make art, find love, find our way around and gather information and knowledge is defined by the possibilities and options provided by the tools we use.</p>
                    <p>This in turn means that a growing responsibility lies on the shoulders of software developers as we make hundreds of small decisions every day which has a profound influence on the lives of people using the technology.</p>
                    <p>In this section we will have a look at our responsibility as developers and as blockchain developers specifically. We are going to look at the ethical dimensions of private blockchains specifically. </p>
                    <h2>Responsibility of Developers</h2>
                    <p>Millions of small decisions are taken by developers every day yet we rarely reflect on the immense amount of power over the daily lives of millions of people around the globe. Every small implementation decision might not carry a lot of weight in itself but taken together they shape the way people can interact with each other and perceive the world around them.</p>
                    <p>If we look around us we see that most development teams tend to be culturally very homogeneous groups. While we might disagree on implementation specifics or how to best approach a problem we probably approach problem solving in general in a similar fashion.</p>
                    <p>When we build systems that are as internally immutable as private blockchains are we should keep the following things in mind:</p>
                    <h3>We all have blind spots</h3>
                    <p>What about the unknown unknowns? What are we missing? Are we building an implementation that works for people like us or are we building something with input from many different people?</p>
                    <h3>Most of us exist in our own echo chambers</h3>
                    <p>Are we getting enough input from people with different ways of thinking, different approaches, different political views, different needs? The more diverse our input, the better our solutions.</p>
                    <h3>"You don't have to use it" does not exist</h3>
                    <p>Network effects mean that people might not like the way a technical solution works or it might not work for them. But if enough others use it, they will too. In many places it is probably increasingly difficult to get a job without a Linkedin, Facebook or Twitter profile. So we need to consider that even if we see our solution as an option, users may not have a choice in the future. So it has to work for everyone.</p>
                    <h2>Delegation of Responsibility</h2>
                    <p>Private blockchains carry a very specific risk: they allow decision makers and managers within organisations to shed their responsibility for services or processes by pointing at the blockchain and saying "They computer says no and I can't do anything about it". Private blockchains can potentially reduce corruption but they also reduce the capacity for individuals in organisations to make individual decisions. In practice, depending on how they are implemented, private blockchains can impose a one-size-fits-all, lowest common denominator interface for customers and users even though it might not work well for many of those users. </p>
                    <p>When you are designing private blockchain systems or you are building chaincode for an employer, speak up. Keep this in mind. Always push for the right thing and a conscious approach to technology delegation.</p>
                    <h2>Liability</h2>
                    <p>Finally, always think about yourself, too. If your employer, customer or manager asks you to do something illegal, you might be ultimately liable. Especially with the recent ICO craze you should keep this in mind.</p>
                    <p>Recently one of the engineers involved in the Volkswagen diesel scandal was <a href="https://www.reuters.com/article/us-volkswagen-emissions-sentencing/vw-engineer-sentenced-to-40-month-prison-term-in-diesel-case-idUSKCN1B51YP">sentenced to 40 months in prison</a> because he followed illegal orders.</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Introduction;