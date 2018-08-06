import React, { Component } from 'react';

class Hyperledger extends Component {

    render() {
        return (
            <div>
                <h2>Hyperledger Project</h2>
                <p>Hyperledger, a Linux Foundation Project, supports developers with infrastructure, meetings, events etc. The communities build blockchain frameworks and platforms. Hyperledger attracted big players from the tech industry, including IBM and Intel. The project has partners from the financial sector, for example, J.P. Morgan. </p>
                <p>Have a look on the <a href="https://www.hyperledger.org/about/members">members’</a> site of the official Hyperledger website. </p>
                <p>The <a href="https://www.hyperledger.org/about/charter">final authority</a> is the Linux Foundation. Hyperledger does not intend to establish any kind of Hyperledger coin. Hyperledger organises the projects according to status, which is referred as the project <a href="https://wiki.hyperledger.org/community/project-lifecycle">lifecycle</a>.</p>
                <p>Hyperledger project states are classified as: </p>
                <ul>
                <li>proposal, </li>
                <li>incubation, </li>
                <li>active, </li>
                <li>deprecated,</li>
                <li>end of life.</li>
                </ul>
                <div className="b9-tip">
                Read more about <a href="https://www.hyperledger.org/wp-content/uploads/2017/08/Hyperledger_Arch_WG_Paper_1_Consensus.pdf">Hyperledger Architecture</a>
                </div>
                <h3>Hyperledger Fabric</h3>
                <p>Hyperledger Fabric is one of five Hyperledger projects hosted by the Linux Foundation and is the first Hyperledger project in active status. Hyperledger Fabric is a permissioned blockchain platform aimed at business use. It is contributed by IBM and Digital Asset Holdings and provides plug-and-play modular blockchain components.</p>
                <p>Hyperledger Fabric is a rapidly-evolving system. You can see here the <a href="https://www.youtube.com/watch?v=LdE-YuCN1Ds">commit history visualisation</a>.</p>
                <p>Hyperledger Fabric runs <strong>chaincode</strong> which is comparable to Ethereum's smart contracts. The consensus protocol is pluggable. </p>
                <p>Hyperledger fits our description of a managed blockchain:</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/table-hlf-traits.png" /> </p>
                <p>In a Hyperledger Fabric network, nodes are not equals. Various roles such as certificate authority, peer and ordering service exist. Participation in a given role is always controlled by permission. That is to say, a node can't independently decide it wants to provide the ordering service. It can only be appointed to that role by a higher authority. </p>
                <p>Also, in a Hyperledger Fabric network, nodes don't all see exactly the same thing. Hyperledger Fabric introduces the concept of <strong>channels</strong>. As the name suggests, this is node-to-node communication that re-introduces a degree of privacy.</p>
                <p>We will cover these concepts in more detail. For now, you may find the following presentation to be a useful introduction:</p>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=6nGIptzBZis">Whats new in Hyperledger Fabric 1.0 - Nikolay Vlasov - FOSSASIA Summit 2017</a></li>
                </ul>
                <p>The official IBM Hyperledger page:</p>
                <ul>
                <li><a href="https://www.ibm.com/blockchain/hyperledger.html">IBM Hyperledger Page</a></li>
                </ul>
                <h3>Other Projects</h3>
                <p>Other projects in active status are:</p>
                <ul>
                <li><a href="https://www.hyperledger.org/projects/sawtooth">Hyperledger Sawtooth</a></li>
                <li><a href="https://www.hyperledger.org/projects/iroha">Hyperledger Iroha</a></li>
                </ul>
                <p><a href="https://www.hyperledger.org/projects/hyperledger-burrow">Hyperledger Burrow</a> is in incubation status. The Burrow project was donated to the Hyperledger project by Monax and is part of their suite of technologies. Burrow is a smart contract execution platform in a permissioned Ethereum Virtual Machine. The consensus mechanism is based on the Tendermint consensus protocol.</p>
                <p>There are also Hyperledger Tools in incubation status:</p>
                <ul>
                <li><a href="https://www.hyperledger.org/projects/explorer">Hyperledger Explorer</a></li>
                <li><a href="https://www.hyperledger.org/projects/cello">Hyperledger Cello</a></li>
                <li><a href="https://www.hyperledger.org/projects/composer">Hyperledger Composer</a></li>
                </ul>
                <p>You will learn more about Hyperledger Composer in the Frameworks module.</p>
                <p>For an overview of the current Hyperledger modules and frameworks we invite you to read this <a href="https://www.hyperledger.org/community/projects">project overview</a> at Hyperledger.</p>
            </div>
        )
    }
}

export default Hyperledger;