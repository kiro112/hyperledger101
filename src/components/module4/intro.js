import React, { Component } from 'react';

class Intro extends Component {

    render() {
        return (
            <div>
                <h2>Network</h2>
                <p>Now it's time to get straight down to the nitty-gritty!</p>
                <p>We will imagine a somewhat more ambitious use-case and write a slightly more intricate chaincode. We will create a custom Hyperledger Fabric[1] network and implement a simple chaincode.</p>
                <p>In the example we will:</p>
                <ol>
                    <li>Define the use case</li>
                    <li>Create the certificates for the organisations</li>
                    <li>Create the genesis block for the orderer</li>
                    <li>Create the initial channel configurations</li>
                    <li>Set up the network and run the container</li>
                    <li>Write a chaincode and deploy it to the network</li>
                </ol>
                <p><strong>Let's roll up your sleeves and start!</strong></p>
                <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@67885e291dde45a4942fabdfbfde4c57">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="0d2d7e3e96b011e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@67885e291dde45a4942fabdfbfde4c57" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Hyperledger Fabric Overview Introduction</h3>
                    <iframe src="https://www.youtube.com/embed/B-tMzh1WNqU" allow="autoplay; encrypted-media" allowFullScreen width={809} height={455} frameBorder={0} />
                    <div className="focus_grabber last" />
                </div>
                </div>
            </div>
        )
    }
}

export default Intro;