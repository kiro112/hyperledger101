import React, { Component } from 'react';

class SmartContacts extends Component {

    render() {
        return (
            <div>
                <h2>Smart Contracts</h2>
                <h3>Introduction</h3>
                <p>Chaincode is Hyperledger Fabric's [1] implementation of smart contracts. </p>
                <p>A contract is commonly known as a formalisation of a relationship and/or transaction. In common law a contract is understood as a “meeting of minds”. In economics the contracting phase, the working steps and procedures in regard to contracts, are often illustrated in a two-phase model dividing contract management into ex-ante and ex-post tasks. </p>
                <p>In the first phase, the main steps include the search for possible contract parties, the negotiation of contract contents, and the commitment to a contract by the contracting parties. In the latter phase, the main tasks are the performance of the contract's stipulated actions and possible adjudication.</p>
                <p>Smart contracts combine rising technical possibilities with insights from business administration. The term smart contract was first used in Nick Szabo’s 1994 article <a href="http://ojphi.org/ojs/index.php/fm/article/view/548/469;%20accessed:%2004/25/17">“Formalizing and securing relationships on public networks”</a> which referred to the possibility of representing traditional contracts (from common law) in distributed protocols, especially in conjunction with digital transactions. </p>
                <p>Since much of the contracting process (performance, monitoring, and enforcement) can be automated through the employment of software, human involvement is widely expected to be minimised. It is assumed that this would lead to lower costs and more efficient structuring of relationships. Proponents expect automation to lower error rates by eliminating humans from the process as far as possible. </p>
                <p>In the more recent context of blockchain protocols, a smart contract represents a digital agreement and interaction framework for the parties involved. The contract itself contains the enforcement of its terms. Third parties play a much smaller role in execution and enforcement of the contract, however they may still be called upon when addressing performance evaluation and in dispute resolution.</p>
                <p>Smart contracts have several benefits:</p>
                <ul>
                <li>They facilitate the process of forming contracts through the use of protocols and user interfaces. </li>
                <li>Smart contracts reduce transaction costs by automating stipulated actions. The need for often costly and time-consuming litigation is potentially reduced drastically, because parties can be forced to comply with the rules and specifications of their contract by including stipulated actions in the underlying code. This makes smart contracts largely self-enforcing. </li>
                </ul>
                <p>As is common with new technology, smart contracts present new challenges and demand for specialised skills. As with traditional software and common-law contracts, precise construction of smart contracts may require enlisting assistance from transactional attorneys and specialised programmers.   Smart contracts, like regular contracts, face the ex-ante problem of hidden knowledge, also known as adverse selection. </p>
                <p>Asymmetric information can lead to sub-optimal outcomes. Smart contracts do not mitigate the ex-post difficulty of hidden actions, often referred to as moral hazard, which refers to a situation in which participants take risks willingly because they do not have to bear the costs of risky behaviour.</p>
                <p>Like other forms of software, smart contracts tend to do precisely what they are programmed to do. This can, at times, stand in stark contrast to what the author intended the contract to do. The self-enforcing nature of smart contracts implies that unintended outcomes may be non-trivial. Importantly, smart contracts do not include the concept of intent. </p>
                <p>The degree to which smart contracts can be used within the existing legal systems remains unsettled and largely untested.</p>
                <p>Smart Contracts require that contingencies and outcomes are specified in great detail to ensure proper functioning as well as to prevent unintended consequences, which in common law would be disputed in court.</p>
                <h3>Contract Dimensions and Applying Blockchain</h3>
                <p>To analyse difficulties, which arise during the contract phases, we can highlight three important dimensions contracts have to cover:</p>
                <ul>
                <li>observability by contract principals</li>
                <li>verifiability by third parties such as auditors and adjudicators</li>
                <li>and privity</li>
                </ul>
                <p>In this section we will cover these aspects in a bit more detail as a basis to assess smart contracts objectively.</p>
                <h4>Important Dimensions in Contracting</h4>
                <p>As mentioned before the three principles central in developing contracts are observability, verifiability, and privity.</p>
                <p><strong>Observability</strong> is the ability of principals to observe the contract performance of all principals and therefore in the end prove performance vis-à-vis other principals and/or intermediaries, such as accountants and auditors.</p>
                <p><strong>Verifiability</strong> can be understood as the ability of a principal to demonstrate to other principals and adjudicators that the transaction specified in the contract has been performed. With a high degree of verifiability an adjudicator is able to evaluate the performance or even a possible breach of contract.</p>
                <p><strong>Privity</strong> stipulates the distribution of rights, responsibilities and knowledge to protect principals. At the same time, it provides contractual parties with the means necessary to fulfil their performance responsibilities. Privity serves to limit third parties’ knowledge, access, and control, while at the same time allowing accountability.</p>
                <p>These three principles are of importance when designing contracts in the realm of common law, as well as smart contracts.</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/three-priciples.png" /></p>
                <h4>Possible difficulties</h4>
                <p>Both as a general contract form as well as a vehicle for digital contracts, smart contracts pose a range of challenges and security considerations.</p>
                <h4>Enforceability</h4>
                <p>In the paper-based world, contract breach, fraud, or other damaging behaviour is penalised with financial disincentives or the use of the nation state violence monopoly. When we exclusively rely on digital contracts the measures available to enforce the transaction directly are very limited.</p>
                <h4>Observability</h4>
                <p>Using the three dimensions discussed above, we can outline challenges that might hinder the fulfilment of a smart contract. If the observability principle is not sufficiently applied during the search and negotiation phase, hidden knowledge problems can arise. Hidden action problems result when observability is not fully given and principals are not able to drop out during the performance phase in case of unfavourable developments due to an information asymmetry between the principals.</p>
                <h4>Verifiability</h4>
                <p>Contract enforcement often requires the involvement of intermediaries as third parties control principals and hold them accountable.</p>
                <h4>Privity</h4>
                <p>Issues such as eavesdropping, the observance of contents or performances by third parties threaten principals’ interests and contract performance. Privacy and confidentiality specifications, as well as restricted access to information and parties’ performance can minimise the vulnerability to third parties’ actions.</p>
                <h3>Security Challenges</h3>
                <p>We can differentiate between proactive/preventive and reactive security measures. Proactive measures include the prevention of breaching actions by drawing up the smart contract in a manner breaches are made impossible. This requires extreme care both in legal drafting as well as the implementation aspect of contract development and is nearly impossible to achieve. Including a drop-out mechanism with minimal losses for principals in case of contract breach is also a proactive measure, because it reduces incentives for damaging behaviour.</p>
                <p>Reactive measures are focused on targeting security issues after the performance phase. These types of measures rely on verifiability and the enforcement of penalties. Under ideal conditions the statistic distribution of verification failures, the costs these failures create, and the amount of penalties that would result would be known.</p>
                <p>Due to imperfect information and the nature of the digital realm, penalties can often only be implemented through reputation costs. That means that when a contract party misbehaves, information about this is released so that their reputation is damaged. This is not an ideal approach as there are many ways to minimise reputation damage. It is also far from the ideal enforcement scenario put forward by smart contract proponents. </p>
                <p>Other possible reactive security measures also include the enforcement of contract contents by utilising tort law against third parties and the recovery of damages through secured transactions. This relies on a common or constitutional law system that has jurisdiction over the digital contract in question and is therefore not a fully self-executing smart contract.</p>
                <p>Until now security measures mostly cover reactive measures. Preventive security measures could be included in smart contracting, as a mean to improve security in the digital realm and at the same time address smart contract-specific issues.</p>
                <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
            </div>
        )
    }
}

export default SmartContacts;