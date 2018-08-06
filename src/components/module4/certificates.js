import React, { Component } from 'react';

class Certificates extends Component {

    render() {
        return (
            <div>
                <h2>Certificates</h2>

                <h3>Create Folder</h3>
                <p>First of all, create a folder called <code className="hljs hl-inline">pcxchg/</code>. 
                This is important because we will use <a href="https://docs.docker.com/compose/networking/">compose networking</a>. 
                By default, it takes the name of the folder as the project name. Alternatively, you can use the <code className="hljs hl-inline">--project-name</code> flag to override the project name, like this:</p>
                <pre><code className="hljs sh">{"\n"}docker-compose --project-name pcxchg -f docker-compose-pcxchg.yaml up{"\n"}</code></pre>
                
                <h3>Network artifacts</h3>
                <p>What do we need to generate before we can start the network? 
                Here is an overview:
                <img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/certs.png" /></p>
                
                <h3>Generate Membership Certificates</h3>
                <p>Now, before we go on, let's create the certificates we will need for our network. We use the <code className="hljs hl-inline">cryptogen</code> tool to create the certificates.</p>
                
                <h4>Cryptogen</h4>
                <p><code className="hljs hl-inline">cryptogen</code> needs a configuration file, <code className="hljs hl-inline">crypto-config.yaml</code>. Let's create it:</p>
                <pre><code className="hljs yaml">{"\n"}OrdererOrgs:{"\n"}{"  "}- Name: Orderer{"\n"}{"    "}Domain: pcxchg.com{"\n"}{"    "}Specs:{"\n"}{"      "}- Hostname: orderer{"\n"}PeerOrgs:{"\n"}{"  "}- Name: Asus{"\n"}{"    "}Domain: Asus.com{"\n"}{"    "}Template:{"\n"}{"      "}Count: 1{"\n"}{"    "}Users:{"\n"}{"      "}Count: 1{"\n"}{"  "}- Name: Amazon{"\n"}{"    "}Domain: Amazon.com{"\n"}{"    "}Template:{"\n"}{"      "}Count: 1{"\n"}{"    "}Users:{"\n"}{"      "}Count: 1{"\n"}{"  "}- Name: Dell{"\n"}{"    "}Domain: Dell.com{"\n"}{"    "}Template:{"\n"}{"      "}Count: 1{"\n"}{"    "}Users:{"\n"}{"      "}Count: 1{"\n"}{"  "}- Name: HP{"\n"}{"    "}Domain: HP.com{"\n"}{"    "}Template:{"\n"}{"      "}Count: 1{"\n"}{"    "}Users:{"\n"}{"      "}Count: 1{"\n"}</code></pre>
                <p>That's it. The admin certificates will be created automatically with the peer certificates. In addition to admin, we have one member per organisation. </p>
                <p>If you're unsure where to store the file, refer to the Folder Structure in the earlier section. </p>
                <p>We use a separate organisation for the orderer. The examples in module 3 offer such configuration files with useful comments.</p>
                <p>Now, we will need the binary file <code className="hljs hl-inline">cryptogen</code>, which was downloaded with the Hyperledger Fabric Samples and so should be in:</p>
                <pre><code className="hljs sh">{"\n"}YOUR_HLF_LOCATION/fabric-samples/bin{"\n"}</code></pre>
                <p>Export the binary path:</p>
                <pre><code className="hljs sh">{"\n"}export PATH=YOUR_HLF_LOCATION/fabric-samples/bin:$PATH{"\n"}</code></pre>
                <p>Then, run <code className="hljs hl-inline">cryptogen</code> with:</p>
                <pre><code className="hljs sh">{"\n"}cd pcxchg/{"\n"}cryptogen generate --config crypto-config.yaml{"\n"}</code></pre>
                <p>in the <code className="hljs hl-inline">pcxchg</code> folder. This generates a folder named <code className="hljs hl-inline">crypto-config</code> with the certificates.</p>
                
                <h3>Genesis Block</h3>
                <p>Now we need the <code className="hljs hl-inline">genesis.block</code> to initialise the chain and start the orderer. We can create it with <code className="hljs hl-inline">configtxgen</code>. It is also located in</p>
                <pre><code className="hljs sh">{"\n"}YOUR_HLF_LOCATION/fabric-samples/bin{"\n"}</code></pre>
                
                <h4>Define the profiles</h4>
                <p>This time, we need a <code className="hljs hl-inline">configtx.yaml</code> file:</p>
                <pre><code className="hljs yaml">{"\n"}Profiles:{"\n"}{"\n"}{"    "}PCXCHGOrdererGenesis:{"\n"}{"        "}Orderer:{"\n"}{"            "}&lt;&lt;: *OrdererDefaults{"\n"}{"            "}Organizations:{"\n"}{"                "}- *OrdererOrg{"\n"}{"        "}Consortiums:{"\n"}{"            "}PCXCHG:{"\n"}{"                "}Organizations:{"\n"}{"                    "}- *Asus{"\n"}{"                    "}- *Dell{"\n"}{"                    "}- *HP{"\n"}{"                    "}- *Amazon{"\n"}</code></pre>
                <p>We are not yet out of the woods. But let's stop here for a while to understand the first profile we define. It is called <code className="hljs hl-inline">PCXCHGOrdererGenesis</code> and we will use it to generate the <code className="hljs hl-inline">genesis.block</code>. This blockchain is sometimes called a "system channel for the ordering service". </p>
                <p>Now, let's define the channels:</p>
                <pre><code className="hljs yaml">{"\n"}{"    "}AsusChannel:{"\n"}{"        "}Consortium: PCXCHG{"\n"}{"        "}Application:{"\n"}{"            "}&lt;&lt;: *ApplicationDefaults{"\n"}{"            "}Organizations:{"\n"}{"                "}- *Asus{"\n"}{"                "}- *Amazon{"\n"}{"    "}DellChannel:{"\n"}{"        "}Consortium: PCXCHG{"\n"}{"        "}Application:{"\n"}{"            "}&lt;&lt;: *ApplicationDefaults{"\n"}{"            "}Organizations:{"\n"}{"                "}- *Dell{"\n"}{"                "}- *Amazon{"\n"}{"    "}HPChannel:{"\n"}{"        "}Consortium: PCXCHG{"\n"}{"        "}Application:{"\n"}{"            "}&lt;&lt;: *ApplicationDefaults{"\n"}{"            "}Organizations:{"\n"}{"                "}- *HP{"\n"}{"                "}- *Amazon{"\n"}</code></pre>
                <p>As you can see, we have three profiles for three channels. We are also referring to organisations: Amazon, Asus, Dell and HP. We need to define those organisations and use the certificates we created. </p>
                <p>So, we continue with the organisation definitions:</p>
                <pre><code className="hljs yaml">{"\n"}Organizations:{"\n"}{"\n"}{"    "}- &amp;OrdererOrg{"\n"}{"        "}Name: OrdererMSP{"\n"}{"        "}ID: OrdererMSP{"\n"}{"\n"}{"        "}MSPDir: crypto-config/ordererOrganizations/pcxchg.com/msp{"\n"}{"\n"}{"    "}- &amp;Asus{"\n"}{"        "}Name: AsusMSP{"\n"}{"        "}ID: AsusMSP{"\n"}{"\n"}{"        "}MSPDir: crypto-config/peerOrganizations/Asus.com/msp{"\n"}{"\n"}{"        "}AnchorPeers:{"\n"}{"            "}- Host: peer0.Asus.com{"\n"}{"              "}Port: 7051{"\n"}{"\n"}{"    "}- &amp;Amazon{"\n"}{"        "}Name: AmazonMSP{"\n"}{"        "}ID: AmazonMSP{"\n"}{"\n"}{"        "}MSPDir: crypto-config/peerOrganizations/Amazon.com/msp{"\n"}{"\n"}{"        "}AnchorPeers:{"\n"}{"            "}- Host: peer0.Amazon.com{"\n"}{"              "}Port: 7051{"\n"}{"\n"}{"    "}- &amp;Dell{"\n"}{"        "}Name: DellMSP{"\n"}{"        "}ID: DellMSP{"\n"}{"\n"}{"        "}MSPDir: crypto-config/peerOrganizations/Dell.com/msp{"\n"}{"\n"}{"        "}AnchorPeers:{"\n"}{"            "}- Host: peer0.Dell.com{"\n"}{"              "}Port: 7051{"\n"}{"\n"}{"    "}- &amp;HP{"\n"}{"        "}Name: HPMSP{"\n"}{"        "}ID: HPMSP{"\n"}{"\n"}{"        "}MSPDir: crypto-config/peerOrganizations/HP.com/msp{"\n"}{"\n"}{"        "}AnchorPeers:{"\n"}{"            "}- Host: peer0.HP.com{"\n"}{"              "}Port: 7051{"\n"}</code></pre>
                <p>Okay, we are almost done with this file. There is one last step. We must define the properties of our blockchain:</p>
                <pre><code className="hljs yaml">{"\n"}Orderer: &amp;OrdererDefaults{"\n"}{"    "}OrdererType: solo{"\n"}{"\n"}{"    "}Addresses:{"\n"}{"        "}- orderer.pcxchg.com:7050{"\n"}{"\n"}{"    "}BatchTimeout: 2s{"\n"}{"\n"}{"    "}BatchSize:{"\n"}{"\n"}{"        "}MaxMessageCount: 10{"\n"}{"        "}AbsoluteMaxBytes: 99 MB{"\n"}{"        "}PreferredMaxBytes: 512 KB{"\n"}{"\n"}{"    "}Organizations:{"\n"}{"\n"}{"\n"}Application: &amp;ApplicationDefaults{"\n"}{"    "}Organizations:{"\n"}</code></pre>
                <p>Done! The complete configuration should be placed in one file, <code className="hljs hl-inline">configtx.yaml</code>.</p>
                <div className="b9-info">
                A Block in Hyperledger Fabric is also called Batch.
                </div>
                
                <h4>Generate the artifacts</h4>
                <p>Let's do something with this configuration. Create a folder called <code className="hljs hl-inline">orderer/</code> inside <code className="hljs hl-inline">pcxchg/</code>. Then, let's generate the genesis block with:</p>
                <pre><code className="hljs sh">{"\n"}export FABRIC_CFG_PATH=./{"\n"}configtxgen -profile PCXCHGOrdererGenesis -outputBlock ./orderer/genesis.block{"\n"}</code></pre>
                <p>Let's also create the channel configuration transactions with this configuration file, by using the other profiles. First create another folder with the name <code className="hljs hl-inline">channels/</code> in <code className="hljs hl-inline">pcxchg/</code>. Then, run:</p>
                <pre><code className="hljs sh">{"\n"}configtxgen -profile AsusChannel -outputCreateChannelTx ./channels/Asus.tx -channelID asus{"\n"}{"\n"}configtxgen -profile DellChannel -outputCreateChannelTx ./channels/Dell.tx -channelID dell{"\n"}{"\n"}configtxgen -profile HPChannel -outputCreateChannelTx ./channels/HP.tx -channelID hp{"\n"}</code></pre>
                <p>At last, we have to generate the anchor peer update transactions:</p>
                <pre><code className="hljs sh">{"\n"}configtxgen -profile AsusChannel -outputAnchorPeersUpdate ./channels/asusanchor.tx -channelID asus -asOrg AsusMSP{"\n"}{"\n"}configtxgen -profile DellChannel -outputAnchorPeersUpdate ./channels/dellanchor.tx -channelID dell -asOrg DellMSP{"\n"}{"\n"}configtxgen -profile HPChannel -outputAnchorPeersUpdate ./channels/hpanchor.tx -channelID hp -asOrg HPMSP{"\n"}{"\n"}configtxgen -profile AsusChannel -outputAnchorPeersUpdate ./channels/amazonanchorasus.tx -channelID asus -asOrg AmazonMSP{"\n"}{"\n"}configtxgen -profile DellChannel -outputAnchorPeersUpdate ./channels/amazonanchordell.tx -channelID dell -asOrg AmazonMSP{"\n"}{"\n"}configtxgen -profile HPChannel -outputAnchorPeersUpdate ./channels/amazonanchorhp.tx -channelID hp -asOrg AmazonMSP{"\n"}</code></pre>
                <p>Great, we now have everything to set up the network and create the channels.</p>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@bfbd6e7229df46bb93d39eb4217b6f9a">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="1a989f3896b311e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@bfbd6e7229df46bb93d39eb4217b6f9a" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Watch Rob generate the certificates</h3>
                    <iframe src="https://www.youtube.com/embed/KgXBP-94Ggs" allow="autoplay; encrypted-media" allowFullScreen width={809} height={455} frameBorder={0} />
                </div>
                </div>
            </div>
        )
    }
}

export default Certificates;