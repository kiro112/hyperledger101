import React, { Component } from 'react';

class Introduction extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="2e66625c9e8811e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@a66dbe5cc2be42e9985c2f92e168c33d" data-block-type="vertical">
                <div className="vert-mod">
                    <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@ff5ab988bb8c4d8585544e0076426d11">
                        <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="2e66625c9e8811e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@ff5ab988bb8c4d8585544e0076426d11" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                            <h2>Fabric SDKs</h2>
                            <p>Here we go again! Last week we made massive steps forward and acquired a lot of hands-on experience. We will keep this pace with the following module. We will focus on the interaction with a HLF network and work with Fabric Client SDK for Node.js.</p>
                            <p>You can find different SDKs for Hyperledger Fabric[1] on Hyperledger Project GitHub <a href="https://github.com/hyperledger">repository</a>.</p>
                            <p>There are:</p>
                            <ul>
                                <li><a href="https://github.com/hyperledger/fabric-sdk-node/tree/release-1.0">Hyperledger Fabric Client SDK for Node.js</a></li>
                                <li><a href="https://github.com/hyperledger/fabric-sdk-java/tree/master">Java SDK for Hyperledger Fabric </a></li>
                                <li><a href="https://github.com/hyperledger/fabric-sdk-go">Hyperledger Fabric Client SDK for Go</a></li>
                                <li><a href="https://github.com/hyperledger/fabric-sdk-py">Fabric-SDK-Py</a></li>
                            </ul>
                            <p>These SDKs provide gRPC packages to interact with the Hyperledger Fabric network. So, one can choose any of them to program client software. Remember that a regular user interacts with the Hyperledger Fabric network through a client application.</p>
                            <p>The good thing is, there is a <a href="https://docs.google.com/document/d/1R5RtIBMW9fZpli37E5Li5_Q9ve3BnQ4q3gWmGZj6Sv4/edit#">SDK Design Specification</a>. So, the different SDKs are smilar in the sense that learning one will help you learn the next one faster.</p>
                            <p>Since Hyperledger Fabric Client SDK for Node.js is the most mature, and best supported, at the time of writing, we will focus on the SDK for Node.js. </p>
                            <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;