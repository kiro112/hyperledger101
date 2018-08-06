import React, { Component } from 'react';

class Devmode extends Component {

    render() {
        return (
            <div>
                <h2>Dev Mode</h2>
                <p>We are approaching our exploration of the structure and deployment of chaincode. To get started, let's define and set up a test environment.</p>
                <p>The <a href="http://hyperledger-fabric.readthedocs.io/en/release-1.1/peer-chaincode-devmode.html">official documentation</a> of Hyperledger Fabric [1] offers such a set-up.</p>
                <p>So, let's use the <em>fabric-samples</em> <a href="https://github.com/hyperledger/fabric-samples/tree/release-1.1">repository</a>. You should already have the necessary Docker images, binaries and location environment variables, if you installed the BYFN sample.</p>
                <p>The <code className="hljs hl-inline">fabric-samples</code> repository offers a so called <em>dev mode</em> for the chaincode development phase. </p>
                <h3>Docker Compose</h3>
                <p>Let us clarify some points before we go on. 
                The network uses </p>
                <pre><code className="hljs sh">{"\n"}docker-compose-simple.yaml{"\n"}</code></pre>
                <p>You can open it and see what it does.</p>
                <p>The peer starts with </p>
                <pre><code className="hljs sh">{"\n"}peer node start --peer-chaincodedev=true -o orderer:7050{"\n"}</code></pre>
                <p>When the flag for <code className="hljs hl-inline">--peer-chaincodedev=true</code> is set we need to start the chaincode. This differs from a regular Hyperledger Fabric network.</p>
                <p>You see a lot of environment variables defined for each container. How can we figure out, what they do? At the moment, the best reference is <a href="https://github.com/hyperledger/fabric/blob/release-1.1/sampleconfig/core.yaml">core.yaml</a>. The environment variables we define in the compose file, overwrite those. The keyword <code className="hljs hl-inline">CORE</code> at the beginning comes from <strong>Viper</strong>, which is used by HLF for configuration. So for an example:</p>
                <pre><code className="hljs yaml">{"\n"}CORE_PEER_ID=peer{"\n"}</code></pre>
                <p>in the compose file corresponds to</p>
                <pre><code className="hljs yaml">{"\n"}peer:{"\n"}{"    "}# The Peer id is used for identifying this Peer instance.{"\n"}{"    "}id: peer{"\n"}</code></pre>
                <p>in <code className="hljs hl-inline">core.yaml</code>.</p>
                <p>It's not necessary to absorb all the details at once. The main point here is that you can discover the meaning of the environment variables by exploring the comments in <code className="hljs hl-inline">core.yaml</code>.</p>
                <div className="b9-remember">
                You can use <a href="https://docs.docker.com/compose/compose-file/compose-file-v2/">https://docs.docker.com/compose/compose-file/compose-file-v2/</a> to understand compose files.
                </div>
                <h3>Start the Network</h3>
                <p>First, go to </p>
                <pre><code className="hljs sh">{"\n"}&lt;your HLF location&gt;/fabric-samples/chaincode-docker-devmode/{"\n"}</code></pre>
                <p>Now, use </p>
                <pre><code className="hljs sh">{"\n"}docker-compose -f docker-compose-simple.yaml up{"\n"}</code></pre>
                <p>to start the development network.
                In another terminal, use </p>
                <pre><code className="hljs sh">{"\n"}docker ps{"\n"}</code></pre>
                <p>to prove each container is running. You should see:</p>
                <ul>
                <li>A Peer container</li>
                <li>A CLI container</li>
                <li>A Chaincode container</li>
                <li>An Orderer container</li>
                </ul>
                <p>So our network is:
                <img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/dev-mode-network-01.png" /></p>
                <p>We will communicate with the network by using the peer client in the CLI container. This client will communicate with the peer server in the peer container. At the same time, we will build and run our chaincode in the chaincode container. </p>
                <div className="b9-tip">
                If you want to stop your network, you can use <kbd>Ctrl-C</kbd> in the terminal where you started the network with <code>docker-compose</code>. However, you should always shut down the network with
                <pre> docker-compose -f docker-compose-simple.yaml down{"\n"}</pre>
                which is very similar to the way you started it.  
                </div>
                <p>In a new terminal run:</p>
                <pre><code className="hljs sh">{"\n"}docker exec -it chaincode bash{"\n"}</code></pre>
                <p>This runs an interactive (<code className="hljs hl-inline">-it</code>) bash in the chaincode container. After you run this command, you are in a bash running on the chaincode container. Now enter:</p>
                <pre><code className="hljs sh">{"\n"}cd chaincode_example02{"\n"}</code></pre>
                <p>This folder is on your host, located at</p>
                <pre><code className="hljs sh">{"\n"}&lt;your HLF location&gt;/fabric-samples/chaincode/{"\n"}</code></pre>
                <p>We will place our chaincodes there. Now run</p>
                <pre><code className="hljs sh">{"\n"}cd go{"\n"}go build -o chaincode_example02{"\n"}</code></pre>
                <p>Remember, if you don't get any messages then the compilation was successful. </p>
                <p>Now run </p>
                <pre><code className="hljs sh">{"\n"}CORE_PEER_ADDRESS=peer:7052 CORE_CHAINCODE_ID_NAME=mycc:0 ./chaincode_example02{"\n"}</code></pre>
                <p>The terminal outputs the log. Ok, as a sidebar exercise, let's look in <code className="hljs hl-inline">core.yaml</code> to see what <code className="hljs hl-inline">CORE_CHAINCODE_ID_NAME</code> means:</p>
                <pre><code className="hljs yaml">{"\n"}chaincode:{"\n"}{"    "}# The id is used by the Chaincode stub to register the executing Chaincode{"\n"}{"    "}# ID with the Peer and is generally supplied through ENV variables{"\n"}{"    "}# the `path` form of ID is provided when installing the chaincode.{"\n"}{"    "}# The `name` is used for all other requests and can be any string.{"\n"}{"    "}id:{"\n"}{"        "}path:{"\n"}{"        "}name:{"\n"}</code></pre>
                <p>So, we named our chaincode <code className="hljs hl-inline">mycc</code>.</p>
                <p>We need another new terminal. Start a terminal, then go into the cli container with</p>
                <pre><code className="hljs sh">{"\n"}docker exec -it cli bash{"\n"}</code></pre>
                <p>Now run </p>
                <pre><code className="hljs sh">{"\n"}peer channel list{"\n"}</code></pre>
                <p>You will see that our peer is operating in the channel <code className="hljs hl-inline">myc</code>.</p>
                <p>Run</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode install -p chaincodedev/chaincode/chaincode_example02/go -n mycc -v 0{"\n"}</code></pre>
                <p>to install the chaincode in the peer. We use the name <code className="hljs hl-inline">mycc</code> and the version <code className="hljs hl-inline">0</code>. This, of course, is the chaincode we run in the chaincode container. </p>
                <p>Now use </p>
                <pre><code className="hljs sh">{"\n"}peer chaincode instantiate -n mycc -v 0 -c '{"{"}"Args":["foo","a","100","b","200"]{"}"}' -C myc{"\n"}</code></pre>
                <p>to instantiate the chaincode. Have a look at the terminal where you ran <code className="hljs hl-inline">docker-compose</code>. You should see a transaction and other information about what is going on in the network when you instantiate a chaincode on a peer. The values for <code className="hljs hl-inline">"a"</code> and <code className="hljs hl-inline">"b"</code> are stored in the blockchain. How this happens will become more clear in upcoming modules. But if you want, have a look into <code className="hljs hl-inline">chaincode_example02</code>.</p>
                <p>We instantiate chaincode once per channel. Chaincode has a different state in each channel.</p>
                <p>Test the instantiation:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode query -n mycc -c '{"{"}"Args":["query","a"]{"}"}' -C myc{"\n"}</code></pre>
                <p>Do the same also for the value <code className="hljs hl-inline">"b"</code> and confirm you see <code className="hljs hl-inline">"Query Result: 100"</code> and <code className="hljs hl-inline">"Query Result: 200"</code> respectively. </p>
                <p>At last:</p>
                <ul>
                <li>Call an invoke:</li>
                </ul>
                <pre><code className="hljs sh">{"\n"}peer chaincode invoke -n mycc -c '{"{"}"Args":["invoke","a","b","2"]{"}"}' -C myc{"\n"}</code></pre>
                <ul>
                <li>Query <code className="hljs hl-inline">'a'</code> and <code className="hljs hl-inline">'b'</code> to see, what happened.</li>
                <li>Have a look into created blocks and transactions regarding what you did. You can jump into peer container and run something like <code>peer channel fetch newest -c myc -o orderer:7050</code> or <code>peer channel getinfo -c myc</code>...</li>
                </ul>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@2e62dfd1cff04dd08cde2015b175ab0d">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="a4ada2ca913311e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@2e62dfd1cff04dd08cde2015b175ab0d" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Deploy Chaincode</h3>
                    <iframe src="https://www.youtube.com/embed/mkNjISLr3R0" allow="autoplay; encrypted-media" allowFullScreen width={809} height={455} frameBorder={0} />
                </div>
                </div>
                <div className="vert vert-2" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@8762597872664a9dbc3d4a7a6f00de03">
                <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="a4ada2ca913311e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@8762597872664a9dbc3d4a7a6f00de03" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <p>Congratulations! You have a working network for learning to write chaincode. </p>
                    <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Devmode;