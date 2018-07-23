import React, { Component } from 'react';

class ChainOfBlocks extends Component {

    render () {
        return (
            <div className="course-content">
                <h2>Blockchain definitions</h2>

                <h3>What</h3>
                <p>Blockchain is a complex and rapidly evolving technology. It took up many bright minds many years of development, plus a combination of advances in cryptography, distributed computing and economics to arrive at the current technology. So, expect grasping blockchain to require serious effort. </p>
                <p>There are many different ways to look at blockchain technology. In order to give you a thorough understanding and a complete view we do not restrict ourselves to one definition of blockchain but give you multiple. In the OSI network model fashion, we can break down the technology thus:</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/blockchain-layers.png" /></p>

                <h3>Transaction you say?</h3>
                <p>A transaction is an atomic event - an event whose parts make no sense in isolation.</p>
                <p>If the word <em>transaction</em> conjures up a financial transaction in your mind, this is indeed appropriate. For instance, a single transaction may be described as follows:</p>

                <ul>
                    <li>reduce account A by $10</li>
                    <li>increase account B by $9</li>
                    <li>increase account C by $1</li>
                </ul>

                <p>We immediately understand this transaction as a payment. If you were told only &quot;reduce account A by $10&quot; happened, you would rightfully ask where did those $10 go? This is what it means to be atomic.</p>
                <p>If the word <em>transaction</em> conjures up an SQL transaction in your mind, this too is appropriate. For instance, technology permitting, a single transaction may be described as follows:</p>

                <ul>
                    <li>charge customer for $10</li>
                    <li>ship 1 widget</li>
                    <li>add 1 en-route shipment for customer</li>
                    <li>reduce widget stock by 1</li>
                </ul>

                <p>In the context of blockchain, a transaction is any atomic event that is allowed by the underlying protocol.</p>


                <h3>Blockchain as a distributed ledger</h3>
                <p>In this definition:</p>
                <ul>
                    <li>a transaction is an atomic event</li>
                    <li>the blockchain is the ordered list of all transactions since inception</li>
                </ul>
                <p>Banks, especially, are prone to identify blockchain as a distributed ledger as it indeed dovetails with their world models. </p>
                <p>In this view, instead of each bank relying exclusively on their own table of accounts in their own siloed (SQL) databases, the blockchain offers the promise of consolidating the table of accounts of one bank with the table of accounts of another bank, typically in the case of a transaction between accounts. At the moment, this is done through netting and then settlement via central bank or corresponding accounts, which turns out to be expensive and time-consuming.</p>
                <p>That&#39;s one reason why transactions between banks, especially if in different countries, take so long. </p>
                <p>The blockchain&#39;s elegant solution is to use a single transaction to update separate tables of accounts for the whole network, i.e. of all participating banks. Banks view this technology, at the very least, as an opportunity to reduce operational costs by using a common, distributed ledger with their peers.</p>
                <p>(cf. R3 Distributed Ledger Group)</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/blockchain_as_a_distributed_ledger.png" /></p>

                <h3>Blockchain as a data structure</h3>
                <p>As the name suggests, a blockchain is a chain of blocks (cf. Nakamoto).</p>
                <p>In this view:</p>

                <ul>
                    <li>a transaction is, as ever, an atomic event</li>
                    <li>a block is a list of transactions in a set sequence</li>
                    <li>a blockchain is a well-ordered set of blocks (cf. Blockstream)</li>
                </ul>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/blockchain_as_a_data_structure.png" /></p>

                <h3>Blockchain as a decentralized consensus network</h3>
                <p>A blockchain is a well-ordered set of data, on which all peers <em>eventually</em> agree.
                What all participants agree upon is construed as the single truth.
                This single truth is the single true state of the distributed ledger.</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/blockchain_as_a_consensus_network.png" /></p>

                <h3>Blockchain as a digital common</h3>
                <p>There is much talk about tech giants milking their positions and monetising data generated by users of their open platforms. Because they are ultimately in control of their platforms, they can erect barriers, censor and seek rents.</p>
                <p>The blockchain, as a distributed system, is, in a way, in charge of itself. To participate may not be free (as in <em>free beer</em>), but is nonetheless governed by rules defined in the protocol and enforced by all participants, and as such can be seen as free (as in <em>free speech</em>). However small, an honest participant, contributes to the enforcement of the protocol rules.</p>
                <p>Additionally, a blockchain-based organisation could decide on how to reward participants, and evolve such reward structure. This would be different from current organisations that are typically defined at the outset.</p>
                <p>In this, and other, regard, blockchain can be seen as a digital common. Or any number of digital commons.</p>

                <h3>Blockchain as a new computing paradigm</h3>
                <p>Imagine a computer, how do you describe its working? It takes commands then executes them in an ordered and deterministic fashion. The sequence of execution determines the state the computer is in.</p>
                <p>Ethereum is a blockchain that implements Turing-complete Smart Contracts, like HLF. Each transaction is in effect a command, and the &quot;execution&quot; of all these commands results in a state that is the Ethereum computer&#39;s state. Each new transaction changes the state of this computer. In effect an Ethereum blockchain defines a distributed state machine, a world computer, the state of which all nodes agree on.</p>
                <p>With this introduction, a smart contract is a program on the world computer, a distributed application (or DApp) is one too, as is a coordinated collection of smart contracts.</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/Blockchain_As_A_Computing_Paradigm.png" /></p>

                <h2>Blockchain as a Merge of Data Storage and Network</h2>
                <p>In the history of computing, data storage and network have long been kept separate, essentially because the former was adopted long before the latter. 
                Storage was then <em>connected</em> to the network.</p>
                <p>Blockchain merges these two concepts into one by combining elements of databases with a P2P network. 
                The data storage is done as in a decentralised database. 
                In addition, blockchain also describes a network typology, since it relies on P2P networking.</p>
                <p>This has immense implications on the techno-social systems building on top of the technological layer.</p>
                <p>See Vinay Gupta elaborate on the <a href="https://vimeo.com/161183966">significance of blockchains</a>.</p>

                <h3>Distributed vs. Decentralised</h3>
                <p>The degree of decentralisation has vast implications on the functioning of a network.</p>
                <p>There is great debate as to what properly constitutes distributed as opposed to decentralised systems. In addition, systems can in fact be a mix of both.</p>
                <p>In 1964, before major discoveries and developments such as public key crypto systems and P2P networking, Paul Baron published a paper <a href="https://www.rand.org/content/dam/rand/pubs/research_memoranda/2006/RM3420.pdf"><em>On Distributed Communications</em></a>. 
                In it, he attempted to differentiate between diverse degrees of decentralisation. 
                Networks could be either centralised, decentralised or distributed. </p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/PaulBaran.png" /></p>
                <p>In Baran’s conceptualisation of the degree of centralisation, he identified a spectrum of network typologies -centralisation and decentralisation were attributes introduced long before to describe political systems and power structures. 
                The main point of differentiation between the different typologies is the number of so-called points of failures. 
                Centralised networks only have one point of failure, whereas erasing point of failure leads to less centralisation and towards a distributed network. 
                A point of failure can be understood as a node or part of a system, respectively a network, which upon failing leads to the whole system/network shutting down and/or no longer being able to perform the intended operations. </p>
                <p>After Baran’s typology and accompanied by developments in regard to networks, databases, computing and cryptography, a more detailed continuum of typologies was proposed. 
                Among other aspects, the importance of resource and power control was emphasised. </p>
                <p>But as <a href="https://www.youtube.com/watch?v=7S1IqaSLrq8">Greg Slepak</a> points out differentiating  distributed and decentralised networks by the location and control of resources does still include a linear spectrum notion of centralisation in networks. </p>

                <div class="b9-tip">
                    Please watch <a href="https://www.youtube.com/watch?v=7S1IqaSLrq8">Greg Slepak</a> explain the concept of decentralisation in 5 minutes. 
                </div>

                <p>There has a debate been evolving in regard to the benefits and disadvantages of centralised, decentralised and distributed networks. 
                One can conclude that network design has implications on functionality and more general issues regarding for example privacy, transparency, etc. 
                It is important to keep in mind, that a network does not have to be centralised, decentralised or distributed -it can be a mix of different components of each- and that network design should always match the envisioned functions of the network. </p>


            </div>
        )
    }

}

export default ChainOfBlocks;