import React, { Component } from 'react';

class Examples extends Component {

    render() {
        return (
            <div>
                <h2>Fabric Samples</h2>
                <p>Let's deploy the <a href="https://hyperledger-fabric.readthedocs.io/en/release-1.1/build_network.html">"Building Your First Network" (BYFN)</a> sample. </p>
                <p>Determine a location for Hyperledger Fabric on your machine. The location is up to you but we suggest you create a folder (e.g. "hlf") in your home or documents folder. </p>
                <p>Go to the location and run </p>
                <pre><code className="hljs sh">{"\n"}git clone -b release-1.1 https://github.com/hyperledger/fabric-samples.git{"\n"}</code></pre>
                <p>to clone the repository. Then </p>
                <pre><code className="hljs sh">{"\n"}cd fabric-samples{"\n"}git checkout v1.1.0{"\n"}</code></pre>
                <p>Ensure the docker daemon is running. Refer to the Docker <a href="https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/">installation guide</a> for your OS.</p>
                <p>Run a script to download the images and binaries you will need:</p>
                <pre><code className="hljs sh">{"\n"}curl -sSL https://raw.githubusercontent.com/hyperledger/fabric/release-1.1/scripts/bootstrap.sh | bash -s 1.1.0{"\n"}</code></pre>
                <p>export the binary path:</p>
                <pre><code className="hljs sh">{"\n"}export PATH=&lt;your HLF location&gt;/fabric-samples/bin:$PATH{"\n"}</code></pre>
                <p>Go to <a href="https://raw.githubusercontent.com/hyperledger/fabric/release-1.1/scripts/bootstrap.sh">https://raw.githubusercontent.com/hyperledger/fabric/release-1.1/scripts/bootstrap.sh</a> with your browser and explore the bash script we executed. 
                You will see that the binaries are downloaded from <a href="https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/">here</a> according to your machine. </p>
                <p>The platform-specific binaries are:</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/table-hlf-binaries.png" /></p>
                <p>The script uses <code className="hljs hl-inline">docker pull</code> to pull images from <a href="https://hub.docker.com/">Docker Hub</a>. 
                You can visit <strong>Docker Hub</strong> and look for <em>hyperleger/fabric-peer</em>, which is the first image the script downloads to the local registry. 
                You can also see the tag names on <strong>Docker Hub</strong>. 
                You can see in the script, that it uses <code className="hljs hl-inline">...-1.1.0</code> tagged images tagged images by default. We are using the <strong>1.1.0</strong> production-ready release.</p>
                <p>Let's have a look at the images:</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/table-hlf-images.png" /></p>
                <p>These images are based on <a href="https://github.com/hyperledger/fabric-baseimage">fabric-baseimage</a> and <em>fabric-baseos</em>. 
                They include free opensource software and the environment. </p>
                <h3>Run</h3>
                <p>The BFYN sample offers a script to quickly bootstrap a HLF network with two organisations, each with two peers and an Ordering Service (OS). It will also join peers to a channel, deploy chaincode and execute transactions. </p>
                <p>Go to <code className="hljs hl-inline">&lt;your HLF location&gt;/fabric-samples/first-network</code>
                Run</p>
                <pre><code className="hljs sh">{"\n"}./byfn.sh -h{"\n"}</code></pre>
                <p>and have a look into help text.</p>
                <p>Use </p>
                <pre><code className="hljs sh">{"\n"}./byfn.sh generate{"\n"}</code></pre>
                <p>We see as an output, that <code className="hljs hl-inline">cryptogen</code> generates x509 certificates. It will use <em>crypto-config.yaml</em> to generate the certificates. They are based on standard PKI implementation.</p>
                <p>Have a look at <em>crypto-config.yaml</em> configuration file. If we leave out the comments, we have:</p>
                <pre><code className="hljs yaml">{"\n"}OrdererOrgs:{"\n"}{"  "}- Name: Orderer{"\n"}{"    "}Domain: example.com{"\n"}{"    "}Specs:{"\n"}{"      "}- Hostname: orderer{"\n"}{"\n"}PeerOrgs:{"\n"}{"  "}- Name: Org1{"\n"}{"    "}Domain: org1.example.com{"\n"}{"    "}Template:{"\n"}{"      "}Count: 2{"\n"}{"    "}Users:{"\n"}{"      "}Count: 1{"\n"}{"  "}- Name: Org2{"\n"}{"    "}Domain: org2.example.com{"\n"}{"    "}Template:{"\n"}{"      "}Count: 2{"\n"}{"    "}Users:{"\n"}{"      "}Count: 1{"\n"}</code></pre>
                <p>And with this file, <code className="hljs hl-inline">cryptogen</code> generates all certificates we need to set up this network. 
                Those are stored in the <code className="hljs hl-inline">crypto-config</code> folder. Have a look into folder structure(e.g. with <code className="hljs hl-inline">tree crypto-config/</code>). This folder includes the MSP. </p>
                <p>
                If you run <code>tree crypto-config | grep msp</code>, then you will see that there are two different MSPs. We will talk about the folder structure in the next modules.
                </p>
                <p>Do not forget to read the <em>crypto-config.yaml</em> file, the comments are very helpful.</p>
                <p>In addition, <code className="hljs hl-inline">configtxgen</code> creates 4 configuration artifacts with the <code className="hljs hl-inline">configtx.yaml</code> file. You can find them in the <code className="hljs hl-inline">channel-artifacts/</code> folder. </p>
                <p>There you see:</p>
                <ol>
                <li>Orderer bootstrap block: Genesis block for the ordering service(genesis.block);</li>
                <li>Fabric channel configuration transaction: Channel configuration for the OS(channel.tx);</li>
                <li>Anchor peer transaction: The anchor peer of the first organisation(Org1MSPanchors.tx);</li>
                <li>Anchor peer transaction: The anchor peer of the second organisation(Org2MSPanchors.tx).</li>
                </ol>
                <div className="b9-tip">
                An anchor peer is a peer node that is defined in the configuration block. Because they are in the configuration block, they work as endpoints. So, if another peer joins the channel, it will first connect to these endpoints.
                </div>
                <p>You can find the <code>MSPDir</code> value in <code>configtx.yaml</code>. As you can see, it uses one of the MSPs for each organization. </p>
                <p>Ok, let's run a test:</p>
                <pre><code className="hljs bash">{"\n"}./byfn.sh up{"\n"}</code></pre>
                <p>Read the output, to see what is happening. You can stop and clean the network in another terminal with:</p>
                <pre><code className="hljs bash">{"\n"}./byfn.sh down{"\n"}</code></pre>
                <p>This script uses <em>Docker Compose</em> and different configuration files to create the network. 
                At the moment, it is not particularly useful to look into those files(<code className="hljs hl-inline">docker-compose-base.yaml</code>, <code className="hljs hl-inline">peer-base.yaml</code>, <code className="hljs hl-inline">docker-compose-e2e.yaml</code>, ...). 
                The next network we will try is the so called <em>dev mode</em>. There, we have a simpler configuration and we will use it to understand such Docker Compose files.</p>
                <h3>The Network</h3>
                <p>Here is the network we create with the compose file:
                <img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/samples-network-01.png" /></p>
                <p>There is also a <em>cli</em> container, connected to the peer0.org1, in the network. It runs <code className="hljs hl-inline">script.sh</code>. The comments tell you, what it does:</p>
                <pre><code className="hljs bash">{"\n"}# Create channel{"\n"}# Join all the peers to the channel{"\n"}# Set the anchor peers for each org in the channel{"\n"}# Install chaincode on peer0.org1 and peer0.org2{"\n"}# Instantiate chaincode on peer0.org2{"\n"}# Query chaincode on peer0.org1{"\n"}# Invoke chaincode on peer0.org1{"\n"}# Install chaincode on peer1.org2{"\n"}# Query on chaincode on peer1.org2, check if the result is 90{"\n"}</code></pre>
                <p>There, <code className="hljs hl-inline">peer0.org2</code> and <code className="hljs hl-inline">peer1.org2</code> are called <code className="hljs hl-inline">Peer2/Org2</code> and <code className="hljs hl-inline">Peer3/Org2</code>.</p>
                <h3>What we did not mention</h3>
                <p>There are other files which come with <a href="https://raw.githubusercontent.com/hyperledger/fabric/release-1.1/scripts/bootstrap.sh">https://raw.githubusercontent.com/hyperledger/fabric/release-1.1/scripts/bootstrap.sh</a> but the example doesn't use them by default. They are included for other tests.</p>
                <p>We did not talk about <em>peer</em> binary, which is downloaded. It is also included in <em>fabric-tools</em>, like <em>cryptogen</em>, <em>configtxgen</em>  and <em>configtxlator</em>. 
                In this example, these are used for generating artifacts before the containers start, so therefore the script downloads those binaries.</p>
                <p>Images we did not talk about are:</p>
                <ol>
                <li><em>couchdb</em>: Apache CouchDB is an open source database software. One can use it for the state database.</li>
                <li><em>ccenv</em>: the Fabric Chaincode (CC) environment.</li>
                <li><em>javaenv</em>: the Fabric Java CC environment.</li>
                <li><em>kafka</em>: includes Apache kafka. Our initial examples will use the "solo" ordering service. As we progress you will learn how to use the kafka alternative. </li>
                <li><em>zookeeper</em>: Apache ZooKeeper is a centralised service. It is used for naming, distributed synchronisation and group services. In Hyperledger Fabric, it is used for <em>kafka</em>.</li>
                </ol>
                <p>You can list all images you have with <code className="hljs hl-inline">docker images</code> and see basic information about them, such as size. You may use <code className="hljs hl-inline">docker images</code> before and after you start the network and see which additional images are created.</p>
                <p>The (BYFN) sample <a href="http://hyperledger-fabric.readthedocs.io/en/latest/build_network.html">documentation</a> also tells you to download Node.js. 
                This is a JavaScript runtime primarily used for server-side applications. It has a package manager called <em>npm</em>. You will find a <code className="hljs hl-inline">docker-compose-e2e-template.yaml</code> file in the <code className="hljs hl-inline">first-network</code> folder. 
                This uses the Node.js SDK, which we will present later in the training. </p>
            </div>
        )
    }
}

export default Examples;