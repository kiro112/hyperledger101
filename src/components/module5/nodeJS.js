import React, { Component } from 'react';

class NodeJs extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="5dd41c909e8911e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@27dee822987049ac9d9c9228ee5b9d28" data-block-type="vertical">
                <div className="vert-mod">
                    <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@b0d7f3fc0e6f49529d6c008dc68f5824">
                        <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="5dd41c909e8911e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@b0d7f3fc0e6f49529d6c008dc68f5824" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                        <h2>Hyperledger Fabric Client SDK for Node.js</h2>
                        <p>At the moment, the Hyperledger Fabric[1] Client(HFC) SDK for Node.js is the most thoroughly documented and best supported HFC SDK for Hyperledger Fabric[1]. </p>
                        <div className="b9-info">
                            Your first point of information about HFC SDK for Node.js is <a href="https://github.com/hyperledger/fabric-sdk-node/tree/release-1.1">https://github.com/hyperledger/fabric-sdk-node/tree/release-1.1</a>
                        </div>
                        <p>What can we do with it? As you can see in the documentation's landing page, one can:</p>
                        <ul>
                            <li>create channels</li>
                            <li>join peers into channels</li>
                            <li>install chaincodes</li>
                            <li>instantiate chaincodes</li>
                            <li>invoke transactions</li>
                            <li>query the ledger</li>
                        </ul>
                        <p>The HFC SDK includes two components:</p>
                        <ul>
                            <li><strong>fabric-client</strong></li>
                            <li><strong>fabric-ca-client</strong>.</li>
                        </ul>
                        <p>We can interact with peers and orderers using <strong>fabric-client</strong>. For now, it's sufficient to know that there is also a component <strong>fabric-ca-client</strong>. 
                            We will deal with it in the next module, when we introduce <strong>Fabric-CA</strong>.</p>
                        <div className="b9-warning">
                            <p>Install Node.js and npm. For step-by-step guidance follow the instructions on <a href="https://gist.github.com/d2s/372b5943bce17b964a79">https://gist.github.com/d2s/372b5943bce17b964a79</a>.</p>
                            <p>If you are new to Node.js, <a href="https://github.com/workshopper/learnyounode">https://github.com/workshopper/learnyounode</a> is a good starting point.</p>
                        </div>
                        <h3>First Test</h3>
                        <p>We are lucky. The Hyperledger Fabric Project offers examples using the HFC SDK. So, go to your <code className="hljs hl-inline">fabric-samples</code> folder.</p>
                        <pre><code className="hljs bash">{"\n"}cd balance-transfer{"\n"}./runApp.sh{"\n"}</code></pre>
                        <div className="b9-warning">
                            You will need to install <a href="https://stedolan.github.io/jq/">jq</a> to run our test. See its <a href="https://stedolan.github.io/jq/download/">download</a> page.
                        </div>
                        <p>Now open another terminal and run:</p>
                        <pre><code className="hljs bash">{"\n"}./testAPIs.sh{"\n"}</code></pre>
                        <p>A successful run will produce a lot of output in both terminals:</p>
                        <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/testAPI.png" /></p>
                        <p>What happens in this test? First, what does our network look like? We can see this in <code className="hljs hl-inline">balance-transfer/artifacts/docker-compose.yaml</code>:</p>
                        <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/balance_transfer_network.png" /></p>
                        <p>After the network has started, <code className="hljs hl-inline">runApp.sh</code> starts the <code className="hljs hl-inline">app.js</code> with:</p>
                        <pre><code className="hljs bash">{"\n"}npm install{"\n"}PORT=4000 node app{"\n"}</code></pre>
                        <p>Lets' explore <code className="hljs hl-inline">app.js</code>. </p>
                        <div className="b9-info">
                            If you are unfamiliar with promises, now is a good time to learn about them. <a href="https://www.promisejs.org">This introduction</a> would be a good start. And <a href="https://bevacqua.github.io/promisees/">here</a> is a good visualiser.
                            Going forward, we assume you understand what promises are, their syntax and how to combine them.
                        </div>
                        <p>What does it do?</p>
                        <ul>
                            <li>it sets and starts a server with <a href="http://expressjs.com/">Express</a></li>
                            <li>it defines REST endpoints to:
                            <ul>
                                <li>Register and enroll users</li>
                                <li>Create Channel</li>
                                <li>Join Channel</li>
                                <li>Install chaincode on target peers</li>
                                <li>Instantiate chaincode on target peers</li>
                                <li>Invoke transaction on chaincode on target peers</li>
                                <li>Query on chaincode on target peers</li>
                                <li>Query Get Block by BlockNumber</li>
                                <li>Query Get Transaction by Transaction ID</li>
                                <li>Query Get Block by Hash</li>
                                <li>Query for Channel Information</li>
                                <li>Query to fetch all Installed/instantiated chaincodes</li>
                                <li>Query to fetch channels</li>
                            </ul></li>
                        </ul>
                        <p>So, it covers most of the HFC SDK. Let us focus on invoke transaction on chaincode. For that, open <code className="hljs hl-inline">./app/invoke-transaction.js</code>. </p>
                        <p>What is important there? This part:</p>
                        <pre><code className="hljs javascript">{"\n"}var request = {"{"}{"\n"}{"    "}targets: targets,{"\n"}{"    "}chaincodeId: chaincodeName,{"\n"}{"    "}fcn: fcn,{"\n"}{"    "}args: args,{"\n"}{"    "}chainId: channelName,{"\n"}{"    "}txId: tx_id{"\n"}{"}"};{"\n"}return channel.sendTransactionProposal(request);{"\n"}</code></pre>
                        <p>Ok, we see the structure of a <code className="hljs hl-inline">request</code> required by <code className="hljs hl-inline">channel.sendTransactionProposal</code>. In the documentation you will find more information about <a href="https://fabric-sdk-node.github.io/global.html#ChaincodeInvokeRequest__anchor">it</a>. </p>
                        <p>In <code className="hljs hl-inline">Channel.js</code> of the SDK, you can find:</p>
                        <pre><code className="hljs javascript">{"\n"}/**{"\n"} * Sends a transaction proposal to one or more endorsing peers.{"\n"} *{"\n"} * After a chaincode gets [installed]{"{"}@link Client#installChaincode{"}"} and{"\n"} * [instantiated]{"{"}@link Channel#instantiateChaincode{"}"}, it's ready to take endorsement{"\n"} * proposals and participating in transaction processing. A chaincode transaction{"\n"} * starts with a proposal that gets sent to the endorsing peers, which executes{"\n"} * the target chaincode and decides whether the proposal should be endorsed (if it{"\n"} * executes successfully) or not (if the chaincode returns an error).{"\n"} *{"\n"} * @param {"{"}ChaincodeInvokeRequest{"}"} request{"\n"} * @returns {"{"}Promise{"}"} A Promise for the {"{"}@link ProposalResponseObject{"}"}{"\n"} */{"\n"}</code></pre>
                        <p>And what does the <code className="hljs hl-inline">testAPIs.sh</code> do? It will tell you when you run it. Just open it and you can see the structure of the REST calls.</p>
                        <p>Then, have a look inside <code className="hljs hl-inline">balance-transfer/artifacts/network-config.yaml</code>, which is the configuration file used by this example HFC client. So, if you change something in your network (<code className="hljs hl-inline">docker-compose.yaml</code>), you should also edit the <code className="hljs hl-inline">network-config.yaml</code>.</p>
                        <div className="b9-warning">
                            In the following screencast, Rob uses Node.js v6.11. You will need to install Node.js v8.4 or higher.
                        </div>
                        </div>
                    </div>
                    <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@fef26069e095461c82e027636297a8f1">
                        <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="5dd41c909e8911e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@fef26069e095461c82e027636297a8f1" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                            <h3 className="hd hd-2">Watch Rob run the exercise on Ubuntu</h3>
                            <iframe width="809" height="455" src="https://www.youtube.com/embed/L-n3MiCBGCs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="vert vert-2" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@e7f4a8ae655f4f7089ad2f57cd48fa97">
                        <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="5dd41c909e8911e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@e7f4a8ae655f4f7089ad2f57cd48fa97" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                            <h3>Second Test</h3>
                            <p>The Hyperledger Fabric[1] Docs include an excellent example. It is much simpler than our first test and the corresponding content is very valuable. So, visit the <a href="https://hyperledger-fabric.readthedocs.io/en/release-1.1/write_first_app.html">documentation</a> and work through it. </p>
                            <p>It uses <code className="hljs hl-inline">./fabric-samples/fabcar</code> for the client and <code className="hljs hl-inline">./fabric-samples/basic-network</code> for the network.</p>
                            
                            <h3>Write an application</h3>
                            <p>Let's write two clients for our <strong>PCXCHG</strong> network. What do we want?</p>
                            <ul>
                                <li>Our first client will be called <strong>producerApp</strong>. It will let manufacturers invoke <code className="hljs hl-inline">createPC</code> on the <code className="hljs hl-inline">pcxchg</code> chaincode.</li>
                                <li>Our second client will be called <strong>marketApp</strong>. In our case, it will be used by Amazon and will let it invoke <code className="hljs hl-inline">buyPC</code>, query <code className="hljs hl-inline">queryStock</code> and <code className="hljs hl-inline">queryDetail</code>. It could also combine the outputs of <code className="hljs hl-inline">queryStock</code> and <code className="hljs hl-inline">queryDetail</code>.</li>
                            </ul>
                            <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NodeJs;