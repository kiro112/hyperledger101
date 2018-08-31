'use strict';

import React, { Component } from 'react';

class InClosing extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="9cfc3c76acc211e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@d05cf521fda94078b882c4624e70ce28" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@b53b2743b217430dadced2ae5b302fa2">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="9cfc3c76acc211e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@b53b2743b217430dadced2ae5b302fa2" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h1>In closing</h1>
                    <p>Enjoy this inspirational short film about the potential of blockchain. You are part of the community.</p>
                    <p>Oh, and Jaya, who makes an appearance in the video, is the brain and conscience behind this ethics section.</p>
                    {/*
                    The Blockchain: Change Everything Forever, https://www.youtube.com/watch?v=2Zp37zarSQc
                    */}
                    </div>
                </div>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@d6c1b0fcba884acea8601529ffdf25d3">
                    <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="9cfc3c76acc211e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@d6c1b0fcba884acea8601529ffdf25d3" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                        <h3 className="hd hd-2">The Blockchain: Change Everything Forever</h3>
                        <iframe width="809" height="455" src="https://www.youtube.com/embed/2Zp37zarSQc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default InClosing;