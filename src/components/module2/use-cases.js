import React, { Component } from 'react';

class UseCases extends Component {

    render() {
        return (
            <div>
                <h2>Hyperledger: Use Cases</h2>
                <h3>Public Blockchains and Enterprise Requirements</h3>
                <p>Let’s briefly recall the properties of public blockchains and common enterprise requirements. We will use Ethereum as our reference public blockchain for comparison, because it is the most popular permissionless blockchain that integrates Smart Contracts.</p>
                <h4>Public chains are:</h4>
                <ul>
                <li><p><strong>Permissionless:</strong> Anyone/anything that follows protocol can participate. Importantly, in the context of an Ethereum blockchain, the Truth is whatever a majority of miners say it is. Governance of protocol changes is vested in a loosely defined majority of mining hash power. This situation is not acceptable in many use-cases where the participants have responsibility for the stewardship of systems and assets in their custody.</p></li>
                <li><p><strong>Transparent:</strong> The default setting is transparency. All Transaction payloads, contracts, and contract states are visible to all interested parties. Indeed, no confidential information can be safely represented in an Ethereum blockchain without considerable design effort to conceal the true meaning of the Data. Confidentiality is a critical requirement for many enterprise use-cases.</p></li>
                <li><p><strong>Currently limited in scale</strong>: At the time of writing, the Ethereum block time was roughly 16 seconds with a block gas limit of approximately 4 million. As compared to enterprise-scale transaction processing needs, these factors create a rather low ceiling. </p></li>
                <li><p><strong>Based on Proof-of-Work</strong> with a planned transition to Proof-of-Stake. Proof-of-Work is an innovative approach to reaching eventual consensus when little trust (or even distrust) exists between anonymous participants. What if the participants are well-identified, are well-vetted, are accountable and are well-incentivised to prioritise the correct operation of the network? Is Proof-of-Work the best approach to consensus where high-trust exists between participants? </p></li>
                </ul>
                <h4>Enterprise use-cases frequently required:</h4>
                <ul>
                <li><p><strong>strictly permissioned participation.</strong> It’s simply not acceptable to allow unknown participants into the network or to allow unknown participants to influence the truth or changes to the protocol.</p></li>
                <li><p><strong>strictly confidential transactions and data.</strong> Many forms of business and regulatory compliance require strict guardianship of confidential information. </p></li>
                <li><p><strong>significantly scaled up transaction velocity.</strong> When we consider using blockchain for enterprise-scale applications, transaction velocities upwards of thousands per second are well within reason. Current public blockchains have insufficient capacity to meet demands of this magnitude. This challenge is known as the scaling problem. Although scaling solutions are frequently proposed and debated across many leading blockchain communities, there is currently no public blockchain that can run code with the sophistication of Ethereum smart contracts at such a scale.</p></li>
                <li><p><strong>flexible consensus mechanisms optimised for use-case.</strong> Proof-of-Work is a novel approach to eventual consensus among distrustful participants. It provides a way to arrive at transaction finalisation even when the parties don’t trust one another. Consensus can be achieved using a variety of techniques and no single technique is universally ideal.</p></li>
                </ul>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/table-hlf-use-cases-1.png" /></p>
                <p><strong>Figure 1</strong>: Public Blockchains and Enterprise Requirements. </p>
                <h3>Permissioned Blockchains, Representative Industry Use-Cases</h3>
                <p>While public blockchains themselves are an imperfect solution in enterprise settings, some generalised properties of blockchains remain quite promising. Among these are:</p>
                <ul>
                <li>Distributed consensus</li>
                <li>Asset representation bound to immutable logic</li>
                <li>Transaction finalisation</li>
                <li>A single, shared reference database of the Truth. </li>
                </ul>
                <p>As we have seen, additional properties are needed in enterprise settings:</p>
                <ul>
                <li>Strictly permissioned</li>
                <li>Selective disclosure / privacy / confidentiality</li>
                <li>Significantly increased transaction processing capacity</li>
                <li>Flexible consensus mechanisms</li>
                </ul>
                <p>A solution with these additional properties would be better suited to many use cases across many industry sectors:</p>
                <ul>
                <li>Finance</li>
                <li>Insurance</li>
                <li>Health Care</li>
                <li>Supply Chain, Logistics</li>
                <li>Energy, Utility Grids</li>
                <li>Governance and Public Sector</li>
                <li>Real Estate</li>
                <li>Global Trade and Settlement</li>
                <li>Central Banking</li>
                </ul>
                <h4>Enterprise and Public Domains, Differing Engineering Constraints</h4>
                <p>We have established that Enterprises have significantly different requirements from those the public blockchains were designed to address. Enterprise network environments are also different. When designing an Enterprise blockchain network, one can proceed on significantly different engineering assumptions. </p>
                <p>Again, we compare to Ethereum's public blockchain for smart contracts. </p>
                <h4>The Public Ethereum blockchain;</h4>
                <ul>
                <li><p><strong>is aimed at widespread participation</strong> meaning the network is composed of and is designed to accommodate multitudes of unreliable nodes operated by unidentified owners. </p></li>
                <li><p><strong>is designed for minimal system requirements.</strong> The overall design is inclusive, imposing minimal system requirements on network participants. </p></li>
                <li><p><strong>is designed for decentralised consensus-based governance.</strong> In particular, the “Truth” is whatever a majority of the miners say it is. Splits (forks) are possible (as was the case in June 2016) when significant disagreement emerges between participants. This is by design because many participants view any form of centralisation (including governance) as a single point of failure.</p></li>
                </ul>
                <h4>Private blockchains;</h4>
                <ul>
                <li><p><strong>can be designed for a limited number of vetted and approved participants.</strong> Accommodation of performance-challenged and poorly connected nodes is of lesser importance. </p></li>
                <li><p><strong>can be designed for optimised performance.</strong> Most participants in an Enterprise network will be well-capable of standing up well-connected high-performance and high-availability nodes. A group of participants can agree to raise the bar defining minimum system requirements significantly. For example, participation might be limited to sizable Enterprise-class servers with redundant low-latency, high-bandwidth network connections.</p></li>
                <li><p><strong>can be governed by a well-defined agreement between the participants.</strong> Such agreement may codify the decision-making processes that will be used to decide such matters as protocol upgrades, admission requirements, and remedial action. In a private or consortium setting, “who decides?” can (likely must) be determined well in advance of an incident. </p></li>
                </ul>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/table-hlf-use-cases-2.png" /></p>
                <p><strong>Figure 2</strong>: Public and Private Blockchain Design Constraints</p>
                <p>In summary, while the benefits of blockchain technology such as a single source of Truth, smart contracts, asset representations, value transfers and transaction finalisation are clear in both public and private settings the design constraints and objectives differ significantly between public and private environments. </p>
                <p>A public blockchain (in its present form) is inherently transparent and aims to decentralise control while being inclusive of poorly-connected, unreliable nodes with limited capacity. A private blockchain may require centralised stewardship of a network entrusted with confidential information that achieves high performance by reasonably imposing higher standards for Node performance, Node availability and network latency.</p>
                <p>We would be remiss if we failed to mention that public blockchains rely on economic systems of incentives and punishment to encourage constructive network participation and discourage mischief. These systems generally take the form of protocol-level value tokens. Economic incentivisation provides an alternative to centralised authority that would likely be unworkable in a system of unidentified participants. </p>
                <p>Permissioned blockchains rely on more centralised forms of control, knowledge of the true identifies of the participants, and generally do not implement a native value token because they have no need for such a thing.</p>
                <h4>Permissioned Blockchain Solutions</h4>
                <p>It appears self-evident that blockchain networks and distributed ledgers derive much of their value from a combination of widespread participation and shared faith in the underlying technology. Arguably, widespread participation and shared faith in the underlying technology most often emerges from cooperation. </p>
                <p>Several cooperative consortia have been launched to explore and develop permissioned blockchain and distributed ledger projects. Generally speaking, these projects aim to improve efficiency of existing processes by increasing certainty (finalisation), thereby reducing delays and costs related to such processes as reconciliation with counter-parties; processes that can potentially be  automated or eliminated. </p>
                <h4>Privacy</h4>
                <p>As has been described, public blockchains (in their present form) relying on Proof-of-Work disclose all information to all parties at all times because consensus demands that details are exposed for independent verification. This is a significant departure from the norms we are accustomed to in the business world. Let us consider the "normal" pattern of disclosure. </p>
                <p>Consider a simple transaction. Alice sends Bob some funds in exchange for an asset. Further consider that this unfolds with regulatory oversight and the asset itself is registered with a registrar. The transaction would be disclosed to the four parties; buyer, seller, regulator and registrar. This seems logical, since they are all either participants or otherwise need to know about the details.</p>
                <p>We would find it strange if Carol, Dave, Eve, Fred and everyone else also learned about the transaction details. Individuals might find it unacceptable that their detailed transaction histories are available for all to see. Enterprises might find it unacceptable that their competitors would be able to deduce deep insight into their activities. As strange as this situation may appear when described in these terms, this is precisely how public blockchains treat information; everyone can see everything. </p>
                <p>Hyperledger Fabric implements an entirely different consensus mechanism that more closely models the comparatively "normal" situation; information is disseminated among those who need to know. We will explore the mechanics of this in more detail later in the course.</p>
                <h3>Examples</h3>
                <p>Many activities in many sectors exist soley for the purpose of mitigating risk that arises from uncertainty; uncertainty about counterparties, uncertainty about goods, uncertainty about what will happen next. Smart contracts and immutable ledgers provide a basis for designing applications and protocols for a world in which uncertainty is largely eliminated. </p>
                <p>This has widespread potential application. Examples are innumerable. Indeed, in any given sector, one can usually find teams around the world working on numerous use cases. </p>
                <p>The following links do not express opinions of either B9lab or the authors. They provide interesting food for thought and glimpse new thinking emerging in various industries. </p>
                <h3>Learn More</h3>
                <h4>Finance</h4>
                <ul>
                <li><a href="http://www3.weforum.org/docs/WEF_The_future_of_financial_infrastructure.pdf">http://www3.weforum.org/docs/WEF<em>The</em>future<em>of</em>financial_infrastructure.pdf</a></li>
                </ul>
                <h4>Insurance</h4>
                <ul>
                <li><a href="https://www.pwc.co.uk/financial-services/fintech/assets/blockchain-in-insurance.pdf">https://www.pwc.co.uk/financial-services/fintech/assets/blockchain-in-insurance.pdf</a></li>
                </ul>
                <h4>Health Care</h4>
                <ul>
                <li><a href="https://www2.deloitte.com/content/dam/Deloitte/us/Documents/public-sector/us-blockchain-opportunities-for-health-care.pdf">https://www2.deloitte.com/content/dam/Deloitte/us/Documents/public-sector/us-blockchain-opportunities-for-health-care.pdf</a></li>
                <li><a href="https://www.healthit.gov/sites/default/files/8-31-blockchain-ibm_ideation-challenge_aug8.pdf">https://www.healthit.gov/sites/default/files/8-31-blockchain-ibm<em>ideation-challenge</em>aug8.pdf</a></li>
                </ul>
                <h4>Supply Chain, Logistics</h4>
                <ul>
                <li><a href="https://wiki.hyperledger.org/requirements/use-cases/use-case-supply-chain-logistics">https://wiki.hyperledger.org/requirements/use-cases/use-case-supply-chain-logistics</a></li>
                </ul>
                <h4>Energy, Utility Grids</h4>
                <ul>
                <li><a href="https://www.pwc.com/gx/en/industries/assets/pwc-blockchain-opportunity-for-energy-producers-and-consumers.pdf">https://www.pwc.com/gx/en/industries/assets/pwc-blockchain-opportunity-for-energy-producers-and-consumers.pdf</a></li>
                </ul>
                <h4>Governance and Public Sector</h4>
                <ul>
                <li><a href="http://tech.newstatesman.com/public-sector/blockchain-going-important-public-sector-next-year">http://tech.newstatesman.com/public-sector/blockchain-going-important-public-sector-next-year</a></li>
                </ul>
                <h4>Real Estate</h4>
                <ul>
                <li><a href="https://www2.deloitte.com/us/en/pages/financial-services/articles/blockchain-in-commercial-real-estate.html">https://www2.deloitte.com/us/en/pages/financial-services/articles/blockchain-in-commercial-real-estate.html</a></li>
                </ul>
                <h4>Global Trade and Settlement</h4>
                <ul>
                <li><a href="https://github.com/TarantulaTechnology/Documents-Blockchain/blob/master/EBA_May2016_eAPWG_Applying_cryptotechnologies_to_Trade_Finance.pdf">https://github.com/TarantulaTechnology/Documents-Blockchain/blob/master/EBA_May2016_eAPWG_Applying_cryptotechnologies_to_Trade_Finance.pdff</a></li>
                </ul>
                <h4>Central Banking</h4>
                <ul>
                <li><a href="https://www.imf.org/external/pubs/ft/sdn/2016/sdn1603.pdf">https://www.imf.org/external/pubs/ft/sdn/2016/sdn1603.pdf</a></li>
                </ul>
            </div>
        )
    }
}

export default UseCases;