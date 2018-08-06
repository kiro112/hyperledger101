import React, { Component } from 'react';

class FabricDefinitions extends Component {

    render() {
        return (
            <div>
                <h2>Fabric Definitions</h2>
                <p>Hyperledger Fabric [1] was initiated by Tamas Blummer from Digital Asset Holdings and Christopher Ferris from IBM at the 2016 F2F hackathon in New York City. </p>
                <p>Subsequently, Digital Assets Holdings and IBM pledged full-time employees to the project. </p>
                <p>You will get here an overview about most used terms in Hyperledger Fabric. </p>
                <h3>Nodes</h3>
                <p>Hyperledger Fabric has three types of Nodes, which are:</p>
                <ul>
                <li><strong>Client</strong></li>
                <li><strong>Peer</strong> </li>
                <li><strong>Orderer</strong> </li>
                </ul>
                <p><em>Node</em> refers to a logical and not necessarily physical separation of function. In fact, we will test our networks on the same host. Therefore, we will use <strong>Docker</strong>.</p>
                <h4>Client</h4>
                {/* ![](images/client.png) */}
                <p>Clients are the end-user facing nodes. Hyperledger Fabric architecture provides multiple interfaces to the blockchain. These are presented by the client nodes.</p>
                <ul>
                <li>SDKs (Software Development Kit)</li>
                <li>CLI (Command Line Interface)</li>
                </ul>
                <p>Users (which may be application software) send transaction requests to the Hyperledger Fabric network using these interfaces via a client node.</p>
                <p>Transaction requests execute chaincode functions. The most important requests are:</p>
                <ul>
                <li><strong>Invoke:</strong>  Run a potentially state-changing chaincode function by sending a transaction. </li>
                <li><strong>Query:</strong> Call a read-only chaincode function. This does not change the ledger. </li>
                </ul>
                <p>You will learn in the next module the CLI. The SDKs are aviable for different languages, we will teach you Hyperledger Fabric SDK for Node.js and we will introduce SDKs for Java and Golang.</p>
                <h4>Peer</h4>
                {/* ![](images/peers.png) */}
                <p>Peers maintain the state of the ledger. Peers execute chaincode and participate in consensus formation. Chaincode is installed on peers. </p>
                <p>A Peer does not create new blocks but it validates blocks and transactions. Transaction validation is performed by simulating transactions and applying the endorsement policy. </p>
                <p>They can have several special roles in the network. A peer can be a <strong>validating peer</strong>, if chaincode is installed on it, or a <strong>committing peer</strong>. In addition a peer can be an <strong>anchor peer</strong>, a stable entry point.</p>
                <h4>Ordering Service (OS) Node</h4>
                {/* ![](images/orderer.png) */}
                <p>The OS creates new blocks by ordering the transactions. It provides a shared communication channel to clients and peers. It has two services: </p>
                <ol>
                <li><strong>Broadcast:</strong> to inject messages into the system.</li>
                <li><strong>Deliver:</strong> for receiving ordered batches</li>
                </ol>
                <p>At the time of writing, three different ordering service types are described:</p>
                <ol>
                <li><strong>Solo ordering service:</strong> For development and testing without consensus using a single central authority.</li>
                <li><strong>Kafka:</strong> For ordering without Byzantine Fault Tolerance.</li>
                <li><strong>sBFT:</strong> <em>Simplified Byzantine Fault Tolerance</em> is for ordering messages in a byzantine fault tolerant way. It is smilar to PBFT(see module one) but still not implemented yet. </li>
                </ol>
                <p>Expectations of consistency and delivery guaranties vary by OS type. </p>
                <h3>Membership Service Providers (MSP)</h3>
                <p>As you learned before, Hyperledger Fabric uses certificates for authentication and validation. One can use different tools like <strong>Openssl</strong>, <strong>cryptogen</strong> or <strong>Fabric CA</strong> to generate needed certificates and keys.</p>
                <h3>Channels</h3>
                <p>If you want to run multiple blockchains in the same network, Hyperledger Fabric offers so called channels. They offer the possibility of broadcasting transactions only to select channel members. So, channels are useful for scaleability and privacy. 
                Lastly, channels provide a means to control deployment of chaincode.</p>
                <p>Channels are an important concept you must keep in mind, if you design your network. You can find <a href="https://gendal.me/2017/07/20/what-slack-can-teach-us-about-privacy-in-enterprise-blockchains/">here</a> a critical view of channels and a discussion about it. </p>
                <p>You may also be interested into future ideas about channels, so have a <a href="https://docs.google.com/presentation/d/1mVrWayAlBjzqzW_DAmupMkEzo7c3DVzedT0oj20a7so/edit#slide=id.p4">quick</a> look into this <a href="https://docs.google.com/document/d/1ShrgrYPWLznZSZrl5cnvmFq9LtLJ3tYUxjv9GN6rxuI/edit">private channel data proposal</a>.</p>
                <h3>Chaincode</h3>
                <p>Chaincode is Hyperledger Fabric's implementation of Smart Contracts. Valid chaincode has two underlying functions:</p>
                <ol>
                <li><strong>init</strong>: These run one time upon deployment. </li>
                <li><strong>invoke</strong>: These are (potentially) state-changing transactions, i.e. "Write". </li>
                </ol>
                <p>Chaincode is installed in the peers. Transactions are proposed by clients. </p>
                <h3>Genesis Block</h3>
                <p>The orderer needs a genesis block, the first block in the blockchain. In this block, we define members and policies. We will generate such blocks to set up networks and channels.</p>
                <h3>Ledger</h3>
                <p>In Hyperledger Fabric, the ledger is maintained and validated by the Peers. </p>
                <p>The ledger includes the history of all transactions. This can be used to reconstruct the world state (also called <em>state database</em>).</p>
                <p>It is stored at</p>
                <pre><code className="hljs bash">{"\n"}/var/hyperledger/production/ledgersData{"\n"}</code></pre>
                <p>on each peer. <a href="http://hyperledger-fabric.readthedocs.io/en/latest/ledger.html?highlight=state%20database">State databases</a> on each node contain the latest key values agreed upon by the nodes on each channel. Local state databases support efficient chaincode interactions. CouchDB and LevelDB are both supported for actual storage of the state database.</p>
                <h3>Transaction</h3>
                <p>Let's see how nodes work together to execute a transaction.</p>
                <p>For now, let's assume that the chaincode is already installed on the Peers. </p>
                {/* TODO Uschi: create an animated audio of the graphic below with the description. */}
                <ol>
                <li>Transaction requests are proposed by a client. The client must be connected to the required number of peers according to the endorsement policy. A proposed Transaction (Fig. <strong>Step 1</strong>) is forwarded to Peers for Endorsement. </li>
                <li>Each endorsing peer simulates and validates the transaction. The results and an attached certificate are returned to the client. (Fig. <strong>Step 2</strong>). Importantly, validation includes running the endorsement policy. For example, the endorsement policy might direct them to confirm the request was signed by the required clients. Peers reply with their Endorsement and certificate if they agree that the transaction is permitted. </li>
                <li>The client receives results from different Peers and can thus verify agreement among the Peers. Upon verification, the client forwards the transaction to the OS. (Fig. <strong>Step 3</strong>).</li>
                <li>Determining a well-ordered sequence of transactions is vital to consensus. This is the task of the Ordering Service (OS). The OS generates transaction blocks containing validated transactions in the order they are deemed to have occured by the OS. These blocks are transmitted to Peers which then include them in their local blockchain databases. Control of the OS can be shared among Peers on the network. (Fig. <strong>Step 4</strong>) </li>
                </ol>
                <p><img alt="" src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/transaction-flow.svg" /> </p>
                <h2>Communication</h2>
                <p>The communication in a Hyperledger Fabric network is based on <a href="https://grpc.io/">gRPC</a>. It is a remote procedure call (RPC) developed by Google. The chosen mechanism to serialise data is called <a href="https://developers.google.com/protocol-buffers/">protocol buffers</a>. </p>
                <p>They are defined in <em>.proto</em> files. You can find the <a href="https://github.com/hyperledger/fabric/tree/release-1.1/protos">proto buffer files</a> in the Hyperledger Fabric repository. The provided tool generates <code className="hljs hl-inline">.go</code> files, so one can use them. </p>
                <p>The definition is simple. For <code className="hljs hl-inline">Response</code> we have:</p>
                <pre><code className="hljs go">{"\n"}message Response {"{"}{"\n"}{"\n"}{"    "}// A status code that should follow the HTTP status codes.{"\n"}{"    "}int32 status = 1;{"\n"}{"\n"}{"    "}// A message associated with the response code.{"\n"}{"    "}string message = 2;{"\n"}{"\n"}{"    "}// A payload that can be used to include metadata with this response.{"\n"}{"    "}bytes payload = 3;{"\n"}{"}"}{"\n"}</code></pre>
                <p>So our defined message type includes a status code <code className="hljs hl-inline">int32</code>, a message as <code className="hljs hl-inline">string</code>, a payload as <code className="hljs hl-inline">bytes</code> (in most languages this is the same as <code className="hljs hl-inline">string</code>). The assigned numbers are needed for binary format. There is unique number for each field.</p>
                <p><a href="https://github.com/hyperledger-archives/fabric/blob/master/docs/protocol-spec.md">Read more</a> about Hyperledger Fabric Architecture Protocol messages.</p>
                <p>
                The Orderer can deliver blocks and messages. 
                </p>
                <p>
                Another way for communication is called <a href="http://hyperledger-fabric.readthedocs.io/en/latest/gossip.html">Gossip</a>. It is a way to establish peer to peer communication. With it the network performance can be improved. One can activate it by setting the needed parameter in the peers' environments, we will do so later.
                </p>
                <h2>No Native Value Token</h2>
                <p>Lastly, there is no Hyperledger Fabric currency. </p>
                <p>Recall that protocol tokens typically exist to enable economic systems of reward and/or punishment in systems that arrive at consensus among nodes that neither know nor trust each other. As a permissioned network, Hyperledger Fabric achieves consensus among nodes that <em>do</em> know each other and consequently operate in an environment of comparatively high trust. </p>
                <p>Hyperledger Fabric consensus mechanisms operate without token-based incentives and Brian Behlendorf, executive director of the Hyperledger Project has stated unreservedly that there will never be a Hyperledger token. </p>
                <div className="b9-info">
                <a href="https://www.hyperledger.org/announcements/2017/07/11/hyperledger-announces-production-ready-hyperledger-fabric-1-0">Hyperledger announced the general availability of production-ready Hyperledger Fabric 1.0 on July 11, 2017.</a>
                </div>
                <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
            </div>
        )
    }
}

export default FabricDefinitions;