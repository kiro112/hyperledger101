import React, { Component } from 'react';

class Chaincode extends Component {

    render() {
        return (
            <div>
                <h2>Chaincode</h2>
                <p>Chaincode is Hyperledger Fabric's [1] implementation of smart contracts. At the time of writing, shim packages (Hyperledger Fabric's support for chaincode) are available for Go, NodeJS and Java. </p>
                <p>The Hyperledger Fabric team's position is that one can write chaincode in any programming language. At the protocol level, chaincode is the compiled form of smart contracts that run on Hyperledger Fabric networks. </p>
                <p>The most supported high-level language is currently Go. Therefore, in this course we will write chaincode in Go.</p>
                <h3>Shim</h3>
                <p>The package we will use to write chaincode is the <a href="https://godoc.org/github.com/hyperledger/fabric/core/chaincode/shim">package shim</a>. It provides the <strong>type Chaincode interface</strong>, which is an interface. The definition is:</p>
                <pre><code className="hljs golang">{"\n"}type Chaincode interface {"{"}{"\n"}{"    "}// Init is called during Instantiate transaction after the chaincode container{"\n"}{"    "}// has been established for the first time, allowing the chaincode to{"\n"}{"    "}// initialize its internal data{"\n"}{"    "}Init(stub ChaincodeStubInterface) pb.Response{"\n"}{"\n"}{"    "}// Invoke is called to update or query the ledger in a proposal transaction.{"\n"}{"    "}// Updated state variables are not committed to the ledger until the{"\n"}{"    "}// transaction is committed.{"\n"}{"    "}Invoke(stub ChaincodeStubInterface) pb.Response{"\n"}{"}"}{"\n"}</code></pre>
                <p>So, a chaincode has to implement those two functions: <strong>Init</strong> and <strong>Invoke</strong>.</p>
                <p>It's ok if you're unfamiliar with interfaces in Golang. We will teach you about interfaces in the next module. For now just keep in mind, that every chaincode will have an <strong>Init</strong> and an <strong>Invoke</strong> method.</p>
                <p>Take note of the comments above for summaries of what <strong>Init</strong> and <strong>Invoke</strong> actually do. Additionally:</p>
                <ul>
                <li>Both are passed a <strong>ChaincodeStubInterface</strong> called <strong>stub</strong> and return a <strong>Response</strong> message. Remember, we talked about <strong>Response</strong>. The name <strong>stub</strong> comes from gRPC. In this context, chaincode is a <em>client</em> that implements the service methods. We will manipulate the ledger with this object. Later you will learn about the functions in this <a href="https://godoc.org/github.com/hyperledger/fabric/core/chaincode/shim#ChaincodeStubInterface">interface</a>.</li>
                <li><strong>Init</strong> will be called when you <em>instantiate</em> a chaincode. It will also be called if you <em>update</em> your chaincode. We leave this function empty if we don't need to initialise data.</li>
                <li><strong>Invoke</strong> is called when you <em>invoke</em> a chaincode after initialisation. </li>
                </ul>
                <div className="b9-tip">
                When we consider the purpose of a smart contract, what should a chaincode implement? The elements of the solution shall be implemented by the chaincode, which shall be verified by the Blockchain network. Notice, that a chaincode will be executed on each peer on which it is installed. This affects the performance of the network. Thus, we do not want to implement everything in a chaincode.
                </div>
                <h3>Deployment and Invocation</h3>
                <p>The workflow to deploy and use a chaincode is:</p>
                <ul>
                <li>Install it on peers that will be <em>endorsers</em> for your chaincode. This calls the <strong>Install</strong> method on the <strong>LSCC</strong> (Lifecycle System Chaincode).</li>
                <li>Instantiate it in channels that use the chaincode. At this step, you can optionally use an <em>instantiation policy</em> to define permissions. This is also a call on the <strong>LSCC</strong>. When this succeeds, a chaincode container running the chaincode will start.</li>
                </ul>
                <p>Note that your network can use <em>peers</em> for different purposes. You may differentiate <em>endorser</em> and <em>committer</em> peers in Hyperledger Fabric:</p>
                <ul>
                <li>An <em>endorser</em> simulates and endorses transactions. The endorsement comes from the <strong>ESCC</strong> (Endorsement System Chaincode). Peers send the read/write set to <strong>ESCC</strong>.</li>
                <li>A <em>committer</em> validates transactions and appends them to the ledger. This happens by calling <strong>VSCC</strong> (Validation System Chaincode). </li>
                <li>Blocks of ordered transactions are delivered by the <em>Ordering Service</em> made of <em>orderers</em>. </li>
                </ul>
                <h3>System Chaincodes</h3>
                <p>A <em>System Chaincode</em> (SCC) customizes behavior of the fabric. It does not run in a separate container. SCCs are binaries.</p>
                <p>Several are integrated in Hyperledger Fabric. </p>
                <ul>
                <li><strong>VSCC</strong>: <a href="https://github.com/hyperledger/fabric/blob/master/core/scc/vscc/validator_onevalidsignature.go">Validation system chaincode</a> implements the transaction validation policy. </li>
                <li><strong>LSCC</strong>: The <a href="https://github.com/hyperledger/fabric/blob/master/core/scc/lscc/lscc.go">life cycle system chaincode</a> for deploying and managing chaincode. </li>
                <li><strong>ESCC</strong>: <a href="https://github.com/hyperledger/fabric/blob/master/core/scc/escc/endorser_onevalidsignature.go">Endorsement system chaincode</a> signs transaction <a href="https://github.com/hyperledger/fabric/blob/release-1.1/protos/peer/proposal_response.proto">proposal response</a>. It generates transactions and sends them to the ordering service via an orderer.</li>
                <li><strong>CSCC</strong>: <a href="https://github.com/hyperledger/fabric/blob/master/core/scc/cscc/configure.go">Configuration system chaincode</a> is used to configure the channel.</li>
                <li><strong>QSCC</strong>: <a href="https://github.com/hyperledger/fabric/blob/master/core/scc/qscc/query.go">Query system chaincode</a> handles queries on ledger.</li>
                </ul>
                <h3> Chaincode with NodeJS </h3>
                <p>
                After the release of v1.1, one can now use <a href="https://github.com/hyperledger/fabric-chaincode-node">JavaScript to write chaincode</a>. 
                The chaincode needs to have a <code>class</code> with two <code>async</code> functions <code>Init</code> and <code>Invoke</code>. So this time we have:
                </p>
                <pre><code className="hljs javascript">{"\n"}class ChaincodeInterface {"{"}{"\n"}{"    "}/**{"\n"}{"     "}* Called during chaincode instantiate and upgrade. This method can be used{"\n"}{"     "}* to initialize asset states{"\n"}{"     "}* @async{"\n"}{"     "}* @param {"{"}ChaincodeStub{"}"} stub The chaincode stub is implemented by the <code>fabric-shim</code>{"\n"}{"     "}* library and passed to the ChaincodeInterface calls by the Hyperledger Fabric platform. The stub{"\n"}{"     "}* encapsulates the APIs between the chaincode implementation and the Fabric peer{"\n"}{"     "}*/{"\n"}{"    "}async Init(stub) {"{"}{"}"}{"\n"}{"\n"}{"    "}/**{"\n"}{"     "}* called throughout the life time of the chaincode to carry out business{"\n"}{"     "}* transaction logic and effect the asset states{"\n"}{"     "}* @async{"\n"}{"     "}* @param {"{"}ChaincodeStub{"}"} stub The chaincode stub is implemented by the <code>fabric-shim</code>{"\n"}{"     "}* library and passed to the ChaincodeInterface calls by the Hyperledger Fabric platform. The stub{"\n"}{"     "}* encapsulates the APIs between the chaincode implementation and the Fabric peer{"\n"}{"     "}*/{"\n"}{"    "}async Invoke(stub) {"{"}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                <p>
                Because there is no such things like interfaces in JavaScript, the <code>shim</code> class <a href="https://github.com/hyperledger/fabric-chaincode-node/blob/release-1.1/src/lib/chaincode.js">checks</a> if <code>Init</code> and <code>Invoke</code> are implemented:
                </p>
                <pre><code className="hljs javascript">{"\n"}{"        "}if (typeof chaincode.Init !== 'function'){"\n"}{"            "}throw new Error('The "chaincode" argument must implement the "Init()" method');{"\n"}{"\n"}{"        "}if (typeof chaincode.Invoke !== 'function'){"\n"}{"            "}throw new Error('The "chaincode" argument must implement the "Invoke()" method');{"\n"}</code></pre>
                <p>
                There are some other differences between chaincodes in Go and JavaScript, like e.g. defining dependencies or installation, but it makes sense to talk about those things later, when we start working with networks and writing our first chaincode, so next week.
                </p>
                <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
            </div>
        )
    }
}

export default Chaincode;