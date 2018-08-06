import React, { Component } from 'react';

class ManagedBlockchains extends Component {

    render() {
        return (
            <div>
                <h2>Welcome Back!</h2>
                <p>So far, we have explored fundamental cryptography concepts and the foundations of blockchain technology. As we go forward, we will assume your understanding of the basic concepts. In this module, we will turn our attention to Hyperledger Fabric. Hyperledger Fabric is a managed blockchain framework.</p>
                <h3>Introduction to Managed Blockchains</h3>
                <p>Managed networks, just like public networks, rely on blockchain data structures. But unlike public blockchain networks they do not <em>necessarily</em> need to mitigate the Byzantine General's Problem because they operate in a predictable environment with elements of authority, hierarchy and accountability.</p>
                <h3>Managed Networks</h3>
                <p>Public networks are based on game theory and economic incentives, which means that every action is probabilistic. We have no guarantee that our transactions will be picked up and even the integrity of the network is merely very likely, not 100% guaranteed.</p>
                <p>This is often unacceptable for many traditional financial institutions. Still, one of the biggest expenses financial and other institutions face is the operation and maintenance of infrastructure as well as the cost resulting from leaks, hacks, errors and data incompatibility. Blockchain seems like a promising solution. </p>
                <p>
                <img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/managed-network.png" />
                </p>
                <p>A managed blockchain network might use the same protocol or infrastructure as a public blockchain protocol with a few differentiating attributes:</p>
                <ul>
                    <li><em>Limited access</em> - Unlike public networks, many managed blockchain models limit access to vetted and approved participants. In this context, a consortium blockchain is a managed network created and managed by a group of enterprises that wishes to use a blockchain within their group.</li>
                    <li><em>Different consensus approaches</em> - Because the scope of participants can be limited, cryptoeconomic incentives might not be necessary in a consortium blockchain network. Also, the creation and verification of blocks may be executed by a limited group of authorised nodes.</li>
                </ul>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/consortium.png" /></p>
                <p>Let's look at an example often used for consortium blockchain networks: <em>Interbank Settlement</em>.
                Currently each bank runs its own legacy infrastructure. When these banks settle trades between their customers their systems need to interact with each other, often through several layers of third-party software.</p>
                <p>Now, consider that all these banks are operating a common blockchain network only they have access to. </p>
                <p>Unlike in public networks where the interaction between participants is governed by the protocol and crypto-economic incentives, in managed networks the blockchain protocol is a technical enforcement of an already existing, enforceable legal relationship.</p>
                <p>There are several frameworks for managed networks, among which we find Hyperledger Fabric. </p>
                <ul>
                    <li><a href="https://hyperledger-fabric.readthedocs.io/en/latest/">Hyperledger Fabric</a></li>
                    <li><a href="https://chain.com/">Chain</a></li>
                    <li><a href="http://blockapps.net/">BlockApps</a></li>
                    <li><a href="http://www.multichain.com/">MultiChain</a></li>
                </ul>
                <h3>Public vs. Private/Managed Networks</h3>
                <p>
                The difference between both deployment types becomes visible in direct comparison. 
                It is of importance to understand the differences as well as the implications resulting from this difference to better assess what type of blockchain is useful for what situation and/or task.
                </p>
                <p>
                Let's again take a look at the organisational difference schematically.
                </p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/privatepublicschematic.png" /></p>
                <p>
                Often private and public blockchain networks are compared respectively to the Intranet and Internet in the 1990s. 
                </p>
                <p>
                Private blockchains are by many seen as contradicting the existential notion of blockchain technology. 
                Blockchains were introduced as a mean to replace trusted third parties and create (procedural) trust relations between pseudonymous participants. 
                Private blockchains are criticised as contradictory in regard to this notion and also the high degree of transparency. 
                They are often said to be “only a database” or a traditional centralised system with some degree of cryptographic auditability.
                </p>
                <h3>Learn more</h3>
                <ul>
                    <li><a href="https://blog.ethereum.org/2016/05/09/on-settlement-finality/">Vitalik Buterin on private chains</a></li>
                </ul>
            </div>
        )
    }
}

export default ManagedBlockchains;