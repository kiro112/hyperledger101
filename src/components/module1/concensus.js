import React, { Component } from 'react';

class Concensus extends Component {

    render () {
        return (
            <div>
                <h2>Consensus</h2>
                <p>In a distributed network without authorities, we need a process to reach consensus about what is to be considered as the truth; this is referred to as distributed consensus. An identified problem in distributed computing, which is provably unsolvable but can nonetheless be mitigated, is how to reach consensus in a hierarchy-free, permission-less and failure-prone network.</p>
                <p>This problem is commonly known as the Byzantine generals&#39; problem. Mitigation strategies are known as Byzantine fault tolerance. In the traditional description of the problem, generals, whose armies are spread around a target city, need to reach consensus on a time to attack. To achieve this, they can only rely on unsecured communication channels, whereby, for instance, a lack of acknowledgement can either be caused by a failure to deliver a message, by a dead general or by a failure to deliver the acknowledgment.</p>
                <p>The &quot;problematic&quot; decision a distributed ledger needs to make is to identify the agreed list, and correct order, of transactions. Indeed, as this technology is distributed, individual transactions are sent to the network from individual nodes. These nodes then pass, or fail to pass, transactions to other nodes. Because of physical latencies, not all nodes see the same transactions at the same time, so each node builds its own order of transactions. All nodes being equal citizens, there is, as such, no authoritative order of transactions; although a decision has to be made as to which node&#39;s version, or any version, of the truth shall be the authoritative truth.</p>
                <p>One of the innovations introduced by Bitcoin in addition to the chain of blocks was to use proof-of-work to obtain consensus. Since then many other consensus algorithms for new blocks were proposed. One should note that there were consensus algorithms presented in the academic community before Bitcoin. Let&#39;s look at some of the most popular consensus algorithms.</p>

                <h3>Proof-of-Work</h3>
                <p>A user completes a task of arbitrary difficulty. This is generally implemented as a search for a random number which when combined with ordered transactions in a block yields a hash function result that matches a criteria such as minimum number of leading zeroes. Finding such a solution is taken as evidence of considerable effort (or proof that considerable work <em>must</em> have been invested) in the search. </p>

                <h3 class="hd hd-2">Proof of Work</h3>
                <iframe width="100%" height="415"
                    src="https://www.youtube.com/embed/iCYj6BfxxJE?autoplay=0">
                </iframe>

                <p>Nodes in the network conduct their searches independently. The successful node that announces a solution first receives an economic reward that encourages participation in the process. The idea of substantiating a claim through an arbitrary amount of work was previously suggested as a way to combat spam in other contexts. </p>
                <p>If a node wishes to distort the ledger in a PoW system, it must first acquire an authoritative position, otherwise it will be unable to influence the ledger. Acquiring an authoritative position implies overcoming the <em>combined</em> problem-solving capacity of the network and maintaining that lead over time. This known attack vector is called the 51% attack. As the name suggests, if a single party acquires more than 51% of the total problem-solving capacity of the network, that party is theoretically able to alter the consensus. </p>
                <p>The control mechanism for the amount of work is called &quot;difficulty&quot; and it guarantees a given average block creation time. PoW networks set a target average time for a solution to be found by <em>any</em> node on the network. Difficulty adjusts to compensate for increasing/decreasing total network problem-solving capacity. Thus, PoW networks do not get faster as more compute capacity is added. They become more resilient by increasing difficulty, which raises the threshold a 51% attacker will need to overcome. </p>

                <h3>Proof-of-Stake</h3>
                <p>Proof-of-Stake (PoS) is another method of selecting the authoritative node for a given block. PoS is based on the assumption that those with the most to lose are the most incentivised to safeguard network integrity. </p>
                <p>A successful Proof-of-Stake system must address the problem of &quot;nothing at stake.&quot; That is, randomly-selected validators must face a disincentive for bad behaviour as well as a high probability that bad behaviour will be detected. The burden of detection usually falls on the rest of the network that can either accept or reject the validator&#39;s opinion. A solution to the disincentive aspect is to extract a penalty for emitting opinions that are ultimately rejected by the network. </p>
                <p>Validators place funds at risk (the stake). For any given block, a validator is selected in pseudo-random fashion with preference to validators with the largest stake. While PoS systems generally do not reward validators with new coins, validators receive transaction fees in return for generating blocks the rest of the network accepts. Validators face economic penalties in the case that they generate blocks that are rejected by sizable numbers of the other nodes. </p>
                <p>A validator is thus incentivised to generate blocks that are likely to be accepted by the network and faces economic punishment in the case that it fails to do so. </p>
                <p>The planned PoS protocol for Ethereum is called “CASPER”.  PoS is already used in Nxt. PoS solves the energy problem in PoW (due to its work-heavy process). </p>

                <h3>Delegated-Proof-of-Stake</h3>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/delegated-proof-of-stake.png" /></p>
                <p>An extension of proof-of-stake algorithms is called delegated-proof-of-stake (DPoS). It is, for example, employed in Bitshares. In this type of consensus mechanism, there are so-called witnesses, which are elected by the stakeholders of the network. Afterwards, several witnesses are chosen for the block creation in such a manner that they represent at least 50% of the stakeholders’ votes.  </p>

                <h3>Proof-of-Burn</h3>
                <p>The term “burn” in this context refers to the mechanism of sending coins to a “burn” address, of which it is believed nobody owns the private key, by the prospective creators of the new blocks. The coins on the “burn” address cannot then be spent due to the absence of a private key. To be considered for the new block creation one can participate in a lottery and will get rewarded by it, when chosen. Because of the coins’ worth, the same underlying philosophy as in the case of proof-of-work is utilised, but furthermore the energy problem and the “nothing at stake problem” are solved. </p>

                <h3>Proof-of-Importance</h3>
                <p>The idea here is to solve the “rich man gets richer” problem, which arises in PoS algorithms. For this reason, the protocol rewards the activity in the network based on the so-called importance score, which is calculated by the graph theory. This calculation includes the transactions to and from an address. The probability to be chosen to build new blocks increases with the value of the importance score. Proof-of-importance (PoI) is implemented in NEM. </p>

                <h3>Practical Byzantine Fault Tolerance (PBFT)</h3>
                <p>PBFT was published in 1999 and arose in academic corners. It is a three-phase protocol, in which the client sends a request to a so called primary. In the first phase, the primary broadcasts the request with a sequence number to the replicas. Then the replicas agree on the sequence number and create a message. If a cretain amount of same message is reached, the message is verified and replicas agree on total order for requests within a view. At the end, the replicas send the reply to the client. This of course is very simplified. You can access the paper by Miguel Castro and Barabara Liskov <a href="http://pmg.csail.mit.edu/papers/osdi99.pdf">here</a>. But there is also a very understandble <a href="http://www.comp.nus.edu.sg/%7Erahul/allfiles/cs6234-16-pbft.pdf">presentation</a>. </p>

                <h3>Proof-of-Activity (PoA)</h3>
                <p>PoA is a combination of PoW and PoS. The miner creates a template with the nonce and deploys it to the network. Then the signers are chosen by the block hash of this template. If the template is signed by the signers, it becomes a block. In the end, the reward is shared between the miner and signers.</p>

                <h3>Proof-of-Capacity (PoC)</h3>
                <p>PoC uses the memory or HDD of a user to reach consensus. It creates hashes and stores these. Then it selects parts of the data, taking into account the last block header in the blockchain. The selected data is hashed and must fulfill a given difficulty. PoC is utilised in order to be fairer, because memory access times do not vary as much as CPU power. </p>

                <h3>Proof-of-elapsed-time (PoET)</h3>
                <p>PoET elects a leader via a lottery algorithm. The key point is the lottery and it must be performed in a trusted execution environment (TEE). For this purpose, Intel offers Software Guard Extensions (SGX). The lottery provides every validator with a randomised wait time. The validator with the shortest time becomes the leader. The leader is eligible to create a block after the allotted time. The underlying idea is the same as Bitcoin in that the first node to announce a valid block wins. Rather than compute-intensive proof-of-work, but SGX assumes the task of declaring a lottery winner. PoET is used in Intel’s Hyperledger Project Sawtooth Lake.  The new block must be accepted(BFT) by the rest of the network.</p>

                <h3>Further Reading</h3>

                <ul>
                    <li><p><a href="https://medium.com/oracles-network/proof-of-authority-consensus-model-with-identity-at-stake-d5bd15463256">Proof of Authority: consensus model with Identity at Stake</a></p></li>
                    <li><p><a href="http://tendermint.com/docs/tendermint.pdf">Tendermint</a> is a decentralized consensus engine that runs its own public blockchain and also supports decentralised computing. It differs from Ethereum on its consensus protocol, which uses the concept of validators who need to bind funds to validate and who validate blocks over the course of a certain number of rounds.</p></li>
                    <li><p><a href="http://counterparty.io/platform/">Counterparty</a> aims to extend the Bitcoin blockchain and allows for a limited degree of smart contract execution. They also created their initial coins in an innovative way, by <a href="http://counterparty.io/news/why-proof-of-burn/"><em>proof-of-burn</em></a> of Bitcoins.</p></li>
                    <li><p><a href="https://www.stellar.org/developers/learn/get-started/get-started.html">Stellar</a> was originally forked from Ripple, has now completely diverged from it, and introduced what they called a &quot;Federated Byzantine Agreement&quot;, whereby consensus is reached by quorum slices.</p></li>
                </ul>

            </div>
        )
    }

}

export default Concensus;