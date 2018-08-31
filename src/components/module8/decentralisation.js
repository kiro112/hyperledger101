'use strict';

import React, { Component } from 'react';

class Decentralisation extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="33bef118acc211e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@daf54001250648e7a6940ab9278a20da" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@1b48d53d7eba4729b17e64616a4785da">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="33bef118acc211e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@1b48d53d7eba4729b17e64616a4785da" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h1>Decentralisation</h1>
                    <p>Decentralisation could be said to be the most fundamental principle of blockchain technology. A decentralised computer network does not necessarily mean decentralised power, and often decentralised systems are based on some centralised attributes for reasons of accountability, security or other things. At times there can also be several different versions of what decentralisation means in practice. It is important to clarify and bear in mind what particular form of decentralisation is a priority in the system to be able to evaluate the design in those terms.Once again, both the Bitcoin block size conflict and the Ethereum hardfork serve as good examples.</p>
                    <p>The Bitcoin block size conflict last year can be simplified as a conflict between two versions of decentralisation: One that prioritised faster transaction validation (by increasing the blocksize) in order to compete with Visa Mastercard and Paypal for instant transactions, risking centralising mining and full nodes in the process.</p>
                    <p>And, one that prioritised a continued decentralisation of the mining and full node infrastructure to allow for broad participation in the governance of the network while risking slow transactions [1]. While there were many other options on the table these two positions show how decentralisation can mean very different things when applied in practice, resulting in this case in a dispute over the future development of Bitcoin.</p>
                    <p>Let’s push the principle of decentralisation even further with a look at the Ethereum hard fork. With a proof-of-work consensus algorithm, the hard fork is firstly and most often viewed from the perspective of hashing power, and by extension the security and value of the network. From this perspective a hard fork is a bad thing: If a hardfork happens, that means hashing power for the main chain is weakened. Secondly, and from the perspective of governance, a hard fork might be good, or at least necessary: In the current situation, where governance takes place across the network of various actors rather than a trusted authority, hard forks could be viewed as network actors voicing diverse opinions and taking an active role in governing the direction of the project.</p>
                    <p>But if these diverse opinions are eventually swallowed by more powerful actors in the network into a single chain anyway, is that decentralisation of power or just a dictatorship of the majority? We could consider a third perspective on hard forks in which a split into two or more new chains with different priorities and value structures might occasionally be seen as a good thing as it allows for diversity and disagreement.</p>
                    <p>In other words, it would allow for the opposite of consensus - dissensus, allowing for people to disagree and do things differently. By extension, one might also consider the option of leaving the blockchain system altogether, in other words, allow for a fundamental disagreement resulting in an exodus.</p>
                    <ul>
                        <li>What aspects of this system is decentralised?</li>
                        <li>Does that represent decentralisation of power and authority as well?</li>
                        <li>Through what processes might dissensus take place?</li>
                        <li>Through what processes can exodus take place?</li>
                        <li>What would be the consequences for those leaving?</li>
                    </ul>
                    <h2>Exodus</h2>
                    <p>If it becomes compulsory to take part in the decentralised system it becomes an oppressive authority in its own right, the only difference being that it is less obvious than centralised authorities of the past because power is executed across multiple actors in the network. Exodus is therefore an important aspect of preserving difference, diversity and freedom.</p>
                    <ul>
                        <li>What possibility is there to leave the system?</li>
                        <li>What does it mean to leave the system, in terms of data and immutability?</li>
                        <li>What are the likely consequences that one might face when leaving?</li>
                        <li>Do the consequences hit some people harder than others?</li>
                    </ul>
                    <h2>Other reading:</h2>
                    <ul>
                        <li><a href="https://www.amazon.com/Protocol-Control-Exists-Decentralization-Leonardo/dp/0262572338">Protocol, how control exists after decentralisation by Alexander Galloway</a></li>
                        <li><a href="https://www.amazon.com/Political-Thinking-Action-Chantal-Mouffe/dp/0415305217">On the political, Chantal Mouffe</a></li>
                    </ul>
                    <h2>References</h2>
                    <p>
                        [1] For more of an explanation of the two options, see: <a href="https://bitcoinmagazine.com/articles/on-consensus-or-why-bitcoin-s-block-size-presents-a-political-trade-off-1452887468">https://bitcoinmagazine.com/articles/on-consensus-or-why-bitcoin-s-block-size-presents-a-political-trade-off-1452887468</a></p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Decentralisation;