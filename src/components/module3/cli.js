import React, { Component } from 'react';

class Cli extends Component {

    render() {
        return (
            <div>
                <h2>CLI</h2>
                <p>Hyperledger Fabric offers a command line interface. This is implemented in "peer" by 
                <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/main.go">main.go</a>.
                <br />
                Typically, one uses the image <code className="hljs hl-inline">hyperledger/fabric-tools</code> to start a container and run the "peer" commands.</p>
                <p>Let's explore the commands "peer" offers:</p>
                <pre><code className="hljs golang">{"\n"}mainCmd.AddCommand(version.Cmd()){"\n"}mainCmd.AddCommand(node.Cmd()){"\n"}mainCmd.AddCommand(chaincode.Cmd(nil)){"\n"}mainCmd.AddCommand(clilogging.Cmd(nil)){"\n"}mainCmd.AddCommand(channel.Cmd(nil)){"\n"}</code></pre>
                <p>They are each packages imported at the beginning of <code className="hljs hl-inline">main.go</code>. Let's explore those commands individually.</p>
                <h3><code className="hljs hl-inline">version</code></h3>
                <p>This <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/version/version.go">command</a> gives you:</p>
                <ul>
                <li>Version: <em>The version of fabric peer</em>.</li>
                <li>Go version: <em>Go tree's version at the time of the build</em>.</li>
                <li>OS/Arch: <em>GOOS: target OS</em> and <em>GOARCH: target architecture</em>.</li>
                <li>Base Image Version: <em>Fabric base image version</em>. Set <a href="https://github.com/yeasy/docker-hyperledger-fabric-base/blob/master/v1.1.0/Dockerfile">there</a>. <br /> This image is also used by other Hyperledger Fabric Images(e.g. <a href="https://github.com/yeasy/docker-hyperledger-fabric-peer/blob/master/v1.1.0/Dockerfile">peer</a>, orderer etc.).</li>
                <li>Base Docker Namespace: hyperledger</li>
                <li>Base Docker Label: org.hyperledger.fabric</li>
                <li>Docker Namespace: hyperledger</li>
                </ul>
                <h3><code className="hljs hl-inline">node</code></h3>
                <p>This <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/node/node.go">command</a> is for operating a peer node. You can use it for a <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/node/start.go">start</a> or <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/node/status.go">status</a>
                request. It maybe confusing but HLF uses same peer binary for the client and the server. This <em>server node</em> interacts with the HLF network.(See module 2, section fabric definitions). </p>
                <p><code className="hljs hl-inline">peer node status</code> gives status information. For example <code className="hljs hl-inline">STARTED</code> if the peer is started and running.</p>
                <h3><code className="hljs hl-inline">chaincode</code></h3>
                <p>You can use the <code className="hljs hl-inline">peer chaincode</code> <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/chaincode/chaincode.go">command</a> to, for instance, install, instantiate and invoke chaincodes.</p>
                <p>The command <code className="hljs hl-inline">peer chaincode</code> gives you the following sub-commands:</p>
                <ul>
                <li><code className="hljs hl-inline">install</code>:      Package the specified chaincode into a deployment spec and save it on the peer's path.</li>
                <li><code className="hljs hl-inline">instantiate</code>:  Deploy the specified chaincode to the network.</li>
                <li><code className="hljs hl-inline">invoke</code>:       Invoke the specified chaincode.</li>
                <li><code className="hljs hl-inline">package</code>:      Package the specified chaincode into a deployment spec.</li>
                <li><code className="hljs hl-inline">query</code>:        Query using the specified chaincode.</li>
                <li><code className="hljs hl-inline">signpackage</code>:  Sign the specified chaincode package</li>
                <li><code className="hljs hl-inline">upgrade</code>:      Upgrade chaincode.</li>
                <li><code className="hljs hl-inline">list</code>:         List of chaincodes on a channel or on a peer</li>
                </ul>
                <p>Ok, let's talk about those commands.</p>
                <p>Each peer node needs an installation to run the chaincode. The installation is a <em>SignedProposal</em> to the <em>LSCC</em> (See module 2, section chaincode, system chaincodes), so a <em>LSCC</em> call.</p>
                <p>A chaincode is placed on the peer as a file <code className="hljs hl-inline">&lt;chaincode name&gt;.&lt;chaincode version&gt;</code>. This is called a <strong>chaincode package</strong>. There is a format called <code className="hljs hl-inline">ChaincodeDeploymentSpec</code> (CDS) for <code className="hljs hl-inline">peer install</code> in HLF.
                It defines the chaincode package with the code, the name and version. One signs a package to define ownership:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode package -n mycc -p chaincodedev/chaincode/chaincode_example02 -v 0 -s -S -i "AND('OrgA.admin')" ccpack.out{"\n"}</code></pre>
                <ul>
                <li><code className="hljs hl-inline">-n</code> the chaincode named <em>mycc</em></li>
                <li><code className="hljs hl-inline">-p</code> the path to the chaincode</li>
                <li><code className="hljs hl-inline">-v</code> the chaincode version</li>
                <li><code className="hljs hl-inline">-s</code> a package which can be signed by multiple owners if used with <code className="hljs hl-inline">-S</code> flag.</li>
                <li><code className="hljs hl-inline">-i</code> an instantiation policy. Above, only <code className="hljs hl-inline">OrgA.admin</code> can instantiate the chaincode.</li>
                </ul>
                <p>One can verify the content of the package and prove ownership with a signature.</p>
                <p>Now, an owner can sign a created signed package:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode signpackage ccpack.out signedccpack.out{"\n"}</code></pre>
                <p>So that <code className="hljs hl-inline">signedccpack.out</code> contains an additional signature.</p>
                <p>One can <code className="hljs hl-inline">upgrade</code> a chaincode like this:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode upgrade -n mycc -v 1 -c '{"{"}"Args":["d", "e", "f"]{"}"}' -C mychannel{"\n"}</code></pre>
                <p>Note, that <code className="hljs hl-inline">upgrade</code> transaction calls <code className="hljs hl-inline">Init</code> of the chaincode.</p>
                <h3><code className="hljs hl-inline">logging</code></h3>
                <p>The <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/clilogging/logging.go">command</a> <code className="hljs hl-inline">peer logging</code> is for logging level control.</p>
                <p>One can use:</p>
                <ul>
                <li><code className="hljs hl-inline">peer logging getlevel</code> to get the logging level</li>
                <li><code className="hljs hl-inline">peer logging revertlevels</code> reverts the logging level to the default</li>
                <li><code className="hljs hl-inline">peer logging setlevel</code> sets the logging level</li>
                </ul>
                <p>We get information about the logging level from the <a href="https://gowalker.org/github.com/hyperledger/fabric/core/chaincode/shim">shim</a> package:</p>
                <ul>
                <li><code className="hljs hl-inline">CRITICAL</code>: we can create such a log with <code className="hljs hl-inline">shim.Critical</code>. The corresponding info in the "shim" package is: <em>Critical logs always appear; They can not be disabled.</em> </li>
                <li><code className="hljs hl-inline">ERROR</code>: we can create such a log with <code className="hljs hl-inline">shim.Error</code>. The corresponding info in the "shim" package is: <em>Error logs will appear if the ChaincodeLogger LoggingLevel is set to LogError, LogWarning, LogNotice, LogInfo or LogDebug.</em> </li>
                <li><code className="hljs hl-inline">WARNING</code>: such a log can be created with <code className="hljs hl-inline">shim.Warning</code>. The corresponding info is: <em>Warning logs will appear if the ChaincodeLogger LoggingLevel is set to LogWarning, LogNotice, LogInfo or LogDebug.</em> </li>
                <li><code className="hljs hl-inline">NOTICE</code>: therefore use <code className="hljs hl-inline">shim.Notice</code>. The corresponding info is: <em>Notice logs will appear if the ChaincodeLogger LoggingLevel is set to LogNotice, LogInfo or LogDebug.</em></li>
                <li><code className="hljs hl-inline">INFO</code>: corresponding function is <code className="hljs hl-inline">shim.Info</code> and the corresponding info is: <em>Info logs will appear if the ChaincodeLogger LoggingLevel is set to LogInfo or LogDebug.</em></li>
                <li><code className="hljs hl-inline">DEBUG</code>: <code className="hljs hl-inline">shim.Debug</code> and the corresponding info: <em>Debug logs will only appear if the ChaincodeLogger LoggingLevel is set to LogDebug.</em></li>
                </ul>
                <div className="b9-tip">
                You can change the logging level for a node with the environment variable <code>CORE_LOGGING_LEVEL</code>. It makes sense to have it set to <code>CORE_LOGGING_LEVEL=DEBUG</code> for development and <code>CORE_LOGGING_LEVEL=WARNING</code> for production.
                </div>
                <h3><code className="hljs hl-inline">channel</code></h3>
                <p>Finally, let's have a look at the channel <a href="https://github.com/hyperledger/fabric/blob/release-1.1/peer/channel/channel.go">command</a>.</p>
                <p>There we have:</p>
                <pre><code className="hljs golang">{"\n"}channelCmd.AddCommand(createCmd(cf)){"\n"}channelCmd.AddCommand(fetchCmd(cf)){"\n"}channelCmd.AddCommand(joinCmd(cf)){"\n"}channelCmd.AddCommand(listCmd(cf)){"\n"}channelCmd.AddCommand(updateCmd(cf)){"\n"}channelCmd.AddCommand(signconfigtxCmd(cf)){"\n"}channelCmd.AddCommand(getinfoCmd(cf)){"\n"}</code></pre>
                <p>You can run <code className="hljs hl-inline">peer channel</code> to summon the help information:</p>
                <pre><code className="hljs sh">{"\n"}Available Commands:{"\n"}create{"       "}Create a channel{"\n"}fetch{"        "}Fetch a block{"\n"}getinfo{"      "}get blockchain information of a specified channel.{"\n"}join{"         "}Joins the peer to a channel.{"\n"}list{"         "}List of channels peer has joined.{"\n"}signconfigtx Signs a configtx update.{"\n"}update{"       "}Send a configtx update.{"\n"}</code></pre>
                <p>You can use <code className="hljs hl-inline">fetch</code> to get information about a block, like <code className="hljs hl-inline">peer channel fetch newest output.file</code>. We will do this in next example, to see a block.</p>
                <p>With <code className="hljs hl-inline">create</code> you can generate a genesis block for a channel. That will be sent to you from the orderer. A peer can also <code className="hljs hl-inline">join</code> a channel by using that block.
                The command <code className="hljs hl-inline">peer channel list</code> is also useful and tells you the channels your peer connected to.</p>
                <p>
                <code className="hljs hl-inline">signconfigtx</code> and <code className="hljs hl-inline">update</code> are used if you add a new organization to the channel. The update transaction are created with another tool, you don't need to care about those commands at this point. 
                </p>
            </div>
        )
    }
}

export default Cli;