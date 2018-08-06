import React, { Component } from 'react';

class UseCase extends Component {

    render() {
        return (
            <div>
                <h1>Computer Exchange</h1>
                <p>Now, let's develop a chaincode that does more than just read / write key / value pairs to and from the ledger. First we need an use case.</p>
                
                <h2>Use Case</h2>
                <p>Let us assume we have a set of computer manufacturers:</p>
                <pre><code className="hljs golang">{"\n"}{"{"} Asus, Dell, HP {"}"}{"\n"}</code></pre>
                <p>And we have a market place, <code className="hljs hl-inline">{'{'} Amazon {'}'}</code>.</p>
                <p>The following figure gives you an overview:</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/sketch.png" /></p>
                <p>We will keep the network simple. So we will use pre-created certificates and one Orderer in "Solo" mode.</p>
                <p>Each producer should be able to:</p>
                <ul>
                    <li><code className="hljs hl-inline">createPC</code>: a producer writes into the ledger when a new PC is created. The key shall be the serialnumber of the PC.</li>
                </ul>
                <p>Amazon should be able to:</p>
                <ul>
                    <li><code className="hljs hl-inline">buyPC</code>: Amazon buys a PC from a producer to sell it to the market.</li>
                    <li><code className="hljs hl-inline">handBackPC</code>: Amazon wants to hand back a bought PC.</li>
                </ul>
                <p>Permissions:</p>
                <ul>
                    <li>Only the members of <code className="hljs hl-inline">{'{'} Asus, Dell, HP {'}'}</code> should be able to create a PC on the platform.</li>
                    <li>Only the members of <code className="hljs hl-inline">{'{'} Amazon {'}'}</code> can invoke <code className="hljs hl-inline">buyPC</code> or <code className="hljs hl-inline">handBackPC</code>.</li>
                    <li>Additionally, only the participants which are involved in an exchange transaction should be able to see it.</li>
                </ul>
                <p>We will use a single network with multiple channels. The channels will provide privacy between Amazon and each producer. </p>
                <p>Let's write the chaincode and then create the network.</p>
                
                <h2>Folder structure</h2>
                <p>We will create and edit quite a few files to describe this. The folder structure below may be helpful for orientation and quick reference:</p>
                <pre><code className="hljs sh">{"\n"}pcxchg/{"\n"}├── chaincode{"\n"}│{"   "}└── pcxchg{"\n"}│{"       "}└── pcxchg.go{"\n"}├── channels{"\n"}│{"   "}├── Asus.tx{"\n"}│{"   "}├── Dell.tx{"\n"}│{"   "}└── HP.tx{"\n"}├── cli.yaml{"\n"}├── configtx.yaml{"\n"}├── crypto-config{"\n"}│{"   "}├── ordererOrganizations{"\n"}│{"   "}└── peerOrganizations{"\n"}│{"       "}├── Amazon.com{"\n"}│{"       "}├── Asus.com{"\n"}│{"       "}├── Dell.com{"\n"}│{"       "}└── HP.com{"\n"}├── crypto-config.yaml{"\n"}├── docker-compose-pcxchg.yaml{"\n"}├── orderer{"\n"}│{"   "}└── genesis.block{"\n"}└── peer.yaml{"\n"}</code></pre>
                
                <div className="b9-warning">
                    Some files are omitted for clarity.
                </div>
            </div>
        )
    }
}

export default UseCase;