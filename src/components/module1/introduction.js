import React, { Component } from 'react';

class Introduction extends Component {

    render () {
        return (
            <div className="course-content">
                <h2>Introduction</h2>

                <p>Welcome to our Hyperledger Fabric Online Course! </p>

                <p>During this course, we aim to answer the following questions:</p>

                <ul>
                    <li>What is Hyperledger Fabric?</li>
                    <li>What can we do with it?</li>
                    <li>How does it compare to alternatives?</li>
                    <li>How can we use it?</li>
                </ul>

                <p>Along the way, we will gather perspective about some &quot;big picture&quot; ideas. </p>

                <ul>
                    <li>What is blockchain? What does it mean?</li>
                    <li>How does a blockchain work?</li>
                    <li>What are the key elements?</li>
                </ul>

                <p>We&#39;re going to acquaint you with creating Hyperledger Fabric networks and developing software for this unique platform. You&#39;ll discover how this new technology works and how it differs from traditional software. </p>

                <p>The first module is here to demystify the idea of a blockchain and help ensure your understanding of cryptography techniques that will be important as we go forward. Also, if you&#39;re new to Google&#39;s Golang language, we will help you get started because Golang will be used when we begin writing chaincode for Hyperledger Fabric. </p>

                <p>The modules include learning materials for your studies, examples and exercises for your practice. You&#39;ll also find content from around the Internet to help delve deep into this subject. </p>

                <p>To understand Hyperledger Fabric, we must first understand blockchain. </p>

                <h3>What is Blockchain?</h3>

                <p>Satoshi Nakamoto (whose identity remains shrouded in mystery) published his seminal white paper in October, 2008. His paper presented a solution the &quot;double-spending&quot; problem for digital currency. In so doing, he revealed the underlying technology known as blockchain and an example of blockchain&#39;s possible applications in the form of a simple blockchain implementation called &quot;Bitcoin&quot;. </p>

                <p>&quot;Bitcoin&quot; has gained widespread attention since that time. The underlying mechanism, blockchain, has also gained recognition and has found applications in diverse contexts. Indeed, the world has discovered blockchain is useful in many contexts and varied inplementations. Hyperlegder Fabric, one of 5 projects at Hyperledger, is one such implementation. </p>

                <p>In the following course, we will first look at the theoretical foundation then gather practical experience with Hyperledger Fabric applications. So, let’s start at the beginning with blockchain itself.</p>

                <h4>What Does Blockchain Solve?</h4>

                <p>We&#39;re all familiar with digital artifacts and the ease with which they can be copied. These present obvious problems when one considers using such things to represent assets such as money. What prevents someone from making copies and spending the same money twice? Traditionally, this is resolved by using a third party as a trusted ledger keeper. Examples include banks, charge card companies and payment services. They all keep digital ledgers to address the double-spending problem. </p>

                <p>Consequently, it is not generally possible for two parties to exchange value online without also involving a trusted third party with the settlement process. That is, it wasn&#39;t possible before Bitcoin demonstrated a new method of addressing the double-spending problem. </p>

                <p>At a high level, Bitcoin solves the problem by replacing the trusted central ledger-keeper with a network of ledger-keepers. They each have a replica of the ledger and they use this to observe proposed changes and reach consensus about new ledger states. No one can make a change to the ledger without first achieving network consensus about the change. It&#39;s as though each transaction is observed by a large crowd of witnesses who form a consensus of everything that has occurred and even prohibit events that should not occur. Events that should not occur include spending non-existent funds and double-spending. </p>

                <p>Bitcoin convincingly demonstrates that a network of nodes that don&#39;t necessarily trust each other can form a consensus about transaction validation, transaction history and the resulting state. This is interesting because simple ledgers of account balances and a simple protocol for moving funds is far from the only use-case for shared consensus about data.   </p>

                <h4>How Does it Work?</h4>

                <p>Imagine one wants to retain and monitor changes to a file, for example a logfile. Further, imagine one wants to verify an unbroken history of all changes ever made to the file. How can one proceed? </p>

                <p>A well-understood solution uses cryptographic <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">hash functions</a>. Let us briefly introduce the concept in case you are unfamiliar with it. </p>

                <blockquote>
                    <p>The ideal cryptographic hash function has five main properties:</p>

                    <ul>
                        <li>it is deterministic so the same message always results in the same hash</li>
                        <li>it is quick to compute the hash value for any given message</li>
                        <li>it is infeasible to generate a message from its hash value except by trying all possible messages</li>
                        <li>a small change to a message should change the hash value so extensively that the new hash value appears uncorrelated with the old hash value</li>
                        <li>it is infeasible to find two different messages with the same hash value</li>
                    </ul>
                </blockquote>

                <p>You can see hashing in action to get the feel for it here: <a href="http://onlinemd5.com/"><a href="http://onlinemd5.com/">http://onlinemd5.com/</a></a>. Notice that there are different hashing algorithms that aim for similar results as described above. Also notice that as you type in the <em>text</em> box the hash updates and even a miniscule change to the input creates a completely different hash. Finally, notice that each algorithm consistently produces hashes of the same size regardless of the size of the input. </p>

                <p>A hash can be used to prove an input exactly matches the original, but the original cannot be reconstructed from a hash. </p>

                <p>We can start with the first version of a file and record a hash of the file contents.  </p>

                <p>What about subsequent changes to the file? Let&#39;s suppose that we will only append new entries to the end of the file. </p>

                <p>We can make a rule that states that in addition to the new content, the previous hash will also be an input to the next hash. That is (pseudocode), </p>
                <pre><code class='hljs javascript'>
                    version2Hash = hash(version2Changes + version1Hash)
                </code></pre>
                <p>This way, one can examine <em>candidate</em> changes and confirm that the previous file is correct, and the subsequent changes are accurately disclosed. This process repeats for all subsequent versions. Any version of the file contents can be shown to be part of an unbroken chain of changes all the way back to the file inception. This is pure mathematics. Any departure from the system, e.g. a hash does not compute as expected, proves a break in the history and is therefore invalid. </p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/blockchainintro.png" /></p>

                <p>Interestingly, since knowledge of the current hash of the latest valid version is an input to the next version&#39;s hash function, it is not possible to generate a new valid version without knowledge of the valid version that precedes it. This process forces changes to be appended to a previous valid version. </p>

                <p>Blockchain functions in a similar manner. Blocks of transactions are appended using hashes of previous blocks as inputs into hashes of subsequent blocks. Any participant can quickly verify an unbroken chain of blocks (in the correct order). </p>

                <p>Transaction blocks are logical units that wrap up a set of transactions in a specific order. While the implementation details are somewhat more subtle, for now, let&#39;s think of this as the set of transactions that occurred during a time interval, in a specific order. </p>

                <p>Transaction ordering is surprisingly challenging in a blockchain system due to design goals and constraints. We&#39;ll use the example of Bitcoin and its novel solution to understand the issues and how this can be addressed. </p>

                <ul>
                    <li>As a distributed network, everyone has a little bit of authority. For example, all nodes can generate transactions and then announce that information to other nodes. </li>
                    <li>In a truly distributed network, no one&#39;s clock is considered more authoritative than anyone else&#39;s clock. Therefore, we need a solution that doesn&#39;t involve timestamps or network time. </li>
                    <li>Anyone can, theoretically, listen to transaction proposals and organize a valid block containing an <em>opinion</em> about the correct order of events. </li>
                    <li>Because of physics and network latency, everyone on the network will learn about transaction proposals in a slightly different order. How then can the <em>correct</em> order of transactions be determined?</li>
                </ul>

                <p>Even if we assume that all members of the network mean well and participate honestly, they will surely arrive at somewhat different opinions about the correct ordering of transactions and there is no obvious way to settle the matter. Transaction order must be resolved because processing transactions out of order produces non-trivial differences in outcomes. Without agreement about transaction order, there can be no agreement about results. </p>

                <p>Bitcoin uses a process called Proof-of-Work which can be (simplistically) thought of as a lottery. The lucky winner wins the privilege of being authoritative for one block of transactions. The winning lottery ticket, called the nonce, is used as another input for the hash function. This is easily verified by other participants. The lottery winner&#39;s opinion about the order of transactions within the block becomes the network&#39;s de facto official result. </p>

                <p>In case the foregoing isn&#39;t clear: A valid block is a well ordered set of transactions, contains the hash of the previous block, and contains a &quot;winning lottery ticket&quot; (nonce). Other participants recognize this unlikely combination (unlikely because of the winning lottery ticket) and accept the block as a de facto correct opinion about the order of transactions. This process disambiguates the order of the transactions even though well-meaning nodes independently arrive at slightly different opinions about the matter. The process does so without reliance on an authoritative time source.  </p>

                <p>A well ordered set of blocks of well-ordered transactions is a well-ordered set of all transactions. </p>

                <p>Cryptographic hash functions are instrumental in that they empower all participants to satisfy themselves that they possess an undistorted history of everything. Since all nodes can verify the chain independently, they can proceed on the assumption that all other nodes will eventually come into agreement about the history of everything. This is known as eventual consensus. </p>

                <p>A blockchain starts with a known state. This is a simple matter of an initialized universe in which nothing has happened. A blockchain proceeds by constructing a verifiable and widely agreed history of everything that has ever happened. Nodes independently construct a present state of the universe by reviewing the ordered history of every change (the transactions) that has ever occurred. The history of everything that has ever occurred moves forward in time as &quot;lottery winners&quot; announce new transaction blocks and these are accepted as valid by a consensus of network participants.   </p>

                <h4>Links</h4>

                <ul>
                    <li>Double-spending: <a href="https://en.wikipedia.org/wiki/Double-spending">https://en.wikipedia.org/wiki/Double-spending</a></li>
                </ul>

            </div>
        );
    }
}


export default Introduction;