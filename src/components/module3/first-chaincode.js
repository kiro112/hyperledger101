import React, { Component } from 'react';

class FirstChaincode extends Component {

    render() {
        return (
            <div>
                <h2>Chaincode</h2>
                <p>Let's start by writing a simple chaincode. It will have functions for:</p>
                <ul>
                <li><code className="hljs hl-inline">set</code></li>
                <li><code className="hljs hl-inline">get</code></li>
                </ul>
                <p>to store/read a key/value pair in the blockchain. We will test it on <em>dev mode</em>. So we have:</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/firstCC.png" /></p>
                <h3>Create the chaincode</h3>
                <p>Recall that we can build and run chaincodes from</p>
                <pre><code className="hljs sh">{"\n"}&lt;YOUR_HLF_LOCATION&gt;/fabric-samples/chaincode{"\n"}</code></pre>
                <p>in our <em>chaincode</em> container. This file:</p>
                <pre><code className="hljs sh">{"\n"}docker-compose-simple.yaml {"\n"}</code></pre>
                <p>includes</p>
                <pre><code className="hljs yaml">{"\n"}chaincode:{"\n"}volumes:{"\n"}{"    "}- /var/run/:/host/var/run/{"\n"}{"    "}- ./msp:/etc/hyperledger/msp{"\n"}{"    "}- ./../chaincode:/opt/gopath/src/chaincode{"\n"}</code></pre>
                <p>That means we can access </p>
                <pre><code className="hljs sh">{"\n"}./../chaincode{"\n"}</code></pre>
                <p>here:</p>
                <pre><code className="hljs sh">{"\n"}/opt/gopath/src/chaincode{"\n"}</code></pre>
                <p>in our container. </p>
                <p>So, create a folder called <code className="hljs hl-inline">setget</code> in <code className="hljs hl-inline">YOUR_HLF_LOCATION/fabric-samples/chaincode</code>. Open the editor of your choice with code highlighting for Golang and, in the new folder, create the file <code className="hljs hl-inline">setget.go</code>.</p>
                <h2>Writing the chaincode</h2>
                <p>We'll build up complexity slowly and then deploy the chaincode in its entirety at the end. Let's start with the header:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"github.com/hyperledger/fabric/core/chaincode/shim"{"\n"}{"    "}pb "github.com/hyperledger/fabric/protos/peer"{"\n"}){"\n"}</code></pre>
                <p>Let's implement the <em>Chaincode interface</em> for <code className="hljs hl-inline">type SetGetChaincode struct</code> by implementing the required methods, namely <code className="hljs hl-inline">Init</code> and <code className="hljs hl-inline">Invoke</code>. </p>
                <p>Chaincode always has <code className="hljs hl-inline">Init</code> and <code className="hljs hl-inline">Invoke</code>. In this example we will leave <code className="hljs hl-inline">Init</code> empty since we have nothing important to do during initialisation:</p>
                <pre><code className="hljs golang">{"\n"}// Implement Barebone Init{"\n"}func (t *SetGetChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {"{"} {"\n"}{"    "}return shim.Success(nil){"\n"}{"}"}{"\n"}</code></pre>
                <p>On the other hand, <code className="hljs hl-inline">Invoke</code> is where the meat happens. We need a case for <code className="hljs hl-inline">set</code> and another for <code className="hljs hl-inline">get</code>, with an outline like so:</p>
                <pre><code className="hljs golang">{"\n"}// Implement Invoke{"\n"}func (t *SetGetChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {"{"}{"\n"}{"    "}fmt.Println("Start Invoke"){"\n"}{"    "}defer fmt.Println("Stop Invoke"){"\n"}{"\n"}{"    "}// Get function name and args{"\n"}{"    "}function, args := stub.GetFunctionAndParameters(){"\n"}{"\n"}{"    "}if function == "set" {"{"}{"\n"}{"        "}// The peer invoked set{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}if function == "get" {"{"}{"\n"}{"        "}// The peer invoked get{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                <h3>The <code className="hljs hl-inline">set</code> branch</h3>
                <p>First, <code className="hljs hl-inline">set</code> needs exactly two arguments, one for the key, the other for the value. Failing that, we shall return an error. So:</p>
                <pre><code className="hljs golang">{"\n"}if len(args) != 2 {"{"}{"\n"}{"    "}// We cannot proceed without both a key and a value{"\n"}{"    "}return shim.Error("Expecting 2 arguments"){"\n"}{"}"}{"\n"}</code></pre>
                <p>That snippet goes inside the <code className="hljs hl-inline">if</code> block for <code className="hljs hl-inline">set</code>. If that was okay, we may proceed and set the key / value. </p>
                <pre><code className="hljs golang">{"\n"}// put key,value in writeset{"\n"}err := stub.PutState(args[0], []byte(args[1])){"\n"}</code></pre>
                <div className="b9-info">
                An error would appear in the logs. Remember, you have learned about using information levels in the logs. 
                </div>
                <p>How does that work? We can call the method <code className="hljs hl-inline">stub.PutState</code> because <code className="hljs hl-inline">stub</code> is a <a href="https://godoc.org/github.com/hyperledger/fabric/core/chaincode/shim#ChaincodeStubInterface"><code className="hljs hl-inline">ChaincodeStubInterface</code></a>. First take note of the comment for <code className="hljs hl-inline">PutState</code>:</p>
                <pre><code className="hljs golang">{"\n"}{"    "}// PutState puts the specified `key` and `value` into the transaction's{"\n"}{"    "}// writeset as a data-write proposal. PutState doesn't effect the ledger{"\n"}{"    "}// until the transaction is validated and successfully committed.{"\n"}{"    "}// Simple keys must not be an empty string and must not start with null{"\n"}{"    "}// character (0x00), in order to avoid range query collisions with{"\n"}{"    "}// composite keys, which internally get prefixed with 0x00 as composite{"\n"}{"    "}// key namespace.{"\n"}{"    "}PutState(key string, value []byte) error{"\n"}</code></pre>
                <p>So, we simply put a key/value pair in the <a href="http://hyperledger-fabric.readthedocs.io/en/latest/readwrite.html"><em>writeset</em></a>.</p>
                <p><code className="hljs hl-inline">err</code> will thus hold an error if something goes wrong. No error shall be swept under the carpet on our watch, so our next step is to check it. We'll <code className="hljs hl-inline">return</code> an error if something went wrong, and success otherwise.</p>
                <pre><code className="hljs golang">{"\n"}if err != nil {"{"}{"\n"}{"    "}return shim.Error(err.Error()){"\n"}{"}"}{"\n"}return shim.Success(nil){"\n"}</code></pre>
                <p>Our assembled <code className="hljs hl-inline">set</code> branch therefore looks like this:</p>
                <pre><code className="hljs golang">{"\n"}if function == "set" {"{"}{"\n"}{"    "}// The peer invoked set{"\n"}{"    "}if len(args) != 2 {"{"}{"\n"}{"        "}// We cannot proceed without both a key and a value{"\n"}{"        "}return shim.Error("Expecting 2 arguments"){"\n"}{"    "}{"}"}{"\n"}{"    "}// put key,value in writeset{"\n"}{"    "}err := stub.PutState(args[0], []byte(args[1])){"\n"}{"    "}if err != nil {"{"}{"\n"}{"        "}return shim.Error(err.Error()){"\n"}{"    "}{"}"}{"\n"}{"    "}return shim.Success(nil){"\n"}{"}"}{"\n"}</code></pre>
                <h3>The <code className="hljs hl-inline">get</code> branch</h3>
                <p>Here again we need to check that the arguments are correct. The count or arguments in this case. We need a key, so only 1 argument. Then we fetch the state using the key and, again, check for any possible error. We'll output the value and return success:</p>
                <pre><code className="hljs golang">{"\n"}{"}"} else if function == "get" {"{"}{"\n"}{"    "}// The peer invoked get{"\n"}{"    "}if len(args) != 1 {"{"}{"\n"}{"        "}// We cannot proceed without a key{"\n"}{"        "}return shim.Error("Expecting key"){"\n"}{"    "}{"}"}{"\n"}{"    "}// Look up into readset{"\n"}{"    "}v, err := stub.GetState(args[0]){"\n"}{"    "}// Not on my watch!{"\n"}{"    "}if err != nil {"{"}{"\n"}{"        "}return shim.Error("Failed to get state for " + args[0]){"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}fmt.Printf("Get Response for key %v is %v\n", args[0], v){"\n"}{"    "}return shim.Success(v){"\n"}{"}"}{"\n"}</code></pre>
                <p>We're almost there. We also need a <code className="hljs hl-inline">main()</code>.</p>
                <pre><code className="hljs golang">{"\n"}func main() {"{"}{"\n"}{"    "}err := shim.Start(new(SetGetChaincode)){"\n"}{"    "}if err != nil {"{"}{"\n"}{"        "}fmt.Printf("Error starting first chaincode sample: %s", err){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                <p>Above, we use <code className="hljs hl-inline">stub.GetState</code> method. Here's the description in the source code:</p>
                <pre><code className="hljs golang">{"\n"}{"    "}// GetState returns the value of the specified `key` from the{"\n"}{"    "}// ledger. Note that GetState doesn't read data from the writeset, which{"\n"}{"    "}// has not been committed to the ledger. In other words, GetState doesn't{"\n"}{"    "}// consider data modified by PutState that has not been committed.{"\n"}{"    "}// If the key does not exist in the state database, (nil, nil) is returned.{"\n"}{"    "}GetState(key string) ([]byte, error){"\n"}</code></pre>
                <div className="b9-tip">
                When you invoke getState, you don't get the writeset. You get the readset. Unlike a traditional database, where you would expect to be able to read what you previously wrote, you mustn't proceed with that assumption in Hyperledger. This is because the writeset is proposed and subject to network verification. 
                </div>
                <h3>Complete chaincode</h3>
                <p>When put together our chaincode, it is complete and looks like this:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"github.com/hyperledger/fabric/core/chaincode/shim"{"\n"}{"    "}pb "github.com/hyperledger/fabric/protos/peer"{"\n"}){"\n"}{"\n"}type SetGetChaincode struct {"{"} // define to implement CC interface{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}err := shim.Start(new(SetGetChaincode)){"\n"}{"    "}if err != nil {"{"}{"\n"}{"        "}fmt.Printf("Error starting first chaincode sample: %s", err){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}{"\n"}func (t *SetGetChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {"{"} // implement Init{"\n"}{"    "}return shim.Success(nil){"\n"}{"}"}{"\n"}{"\n"}// Implement Invoke{"\n"}func (t *SetGetChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {"{"}{"\n"}{"    "}fmt.Println("Start Invoke"){"\n"}{"    "}defer fmt.Println("Stop Invoke"){"\n"}{"\n"}{"    "}// Get function name and args{"\n"}{"    "}function, args := stub.GetFunctionAndParameters(){"\n"}{"\n"}{"    "}if function == "set" {"{"}{"\n"}{"        "}// The peer invoked set{"\n"}{"        "}if len(args) != 2 {"{"}{"\n"}{"            "}// We cannot proceed without both a key and a value{"\n"}{"            "}return shim.Error("Expecting 2 arguments"){"\n"}{"        "}{"}"}{"\n"}{"        "}// put key,value in writeset{"\n"}{"        "}err := stub.PutState(args[0], []byte(args[1])){"\n"}{"        "}if err != nil {"{"}{"\n"}{"            "}return shim.Error(err.Error()){"\n"}{"        "}{"}"}{"\n"}{"        "}return shim.Success(nil){"\n"}{"    "}{"}"} else if function == "get" {"{"}{"\n"}{"        "}// The peer invoked get{"\n"}{"        "}if len(args) != 1 {"{"}{"\n"}{"            "}// We cannot proceed without a key{"\n"}{"            "}return shim.Error("Expecting key"){"\n"}{"        "}{"}"}{"\n"}{"        "}// Look up into readset{"\n"}{"        "}v, err := stub.GetState(args[0]){"\n"}{"        "}// Not on my watch!{"\n"}{"        "}if err != nil {"{"}{"\n"}{"            "}return shim.Error("Failed to get state for " + args[0]){"\n"}{"        "}{"}"}{"\n"}{"\n"}{"        "}fmt.Printf("Get Response for key %v is %v\n", args[0], v){"\n"}{"        "}return shim.Success(v){"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}return shim.Error("Invalid invoke function name."){"\n"}{"}"}{"\n"}</code></pre>
                <p>Notice <code className="hljs hl-inline">shim.Start</code>. You need not fully understand precisely what it does for now, beside that, as the name suggests, it gets things started. The curious can explore it <a href="https://github.com/hyperledger/fabric/blob/release-1.1/core/chaincode/shim/chaincode.go">here</a>. </p>
                <h2>Test it</h2>
                <h3>Start the Network</h3>
                <p>Copy the complete chaincode into </p>
                <pre><code className="hljs sh">{"\n"}YOUR_HLF_LOCATION/fabric-samples/chaincode/setget/setget.go{"\n"}</code></pre>
                <p>Open a terminal and start your <em>dev mode</em> network as described in the <em>Devmode</em> section. </p>
                <h3>Compile it</h3>
                <p>Start bash in the chaincode container:</p>
                <pre><code className="hljs sh">{"\n"}docker exec -it chaincode bash{"\n"}</code></pre>
                <p>in a new terminal. Go to your chaincode source code:</p>
                <pre><code className="hljs sh">{"\n"}cd setget{"\n"}</code></pre>
                <p>Build the chaincode:</p>
                <pre><code className="hljs sh">{"\n"}go build{"\n"}</code></pre>
                <h3>Run it</h3>
                <pre><code className="hljs sh">{"\n"}CORE_PEER_ADDRESS=peer:7052 CORE_CHAINCODE_ID_NAME=setget:0 ./setget{"\n"}</code></pre>
                <h3>Install it</h3>
                <p>Open another terminal and run:</p>
                <pre><code className="hljs sh">{"\n"}docker exec -it cli bash{"\n"}</code></pre>
                <p>Install the chaincode on the peer (We only have one peer in <em>dev mode</em>):</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode install -p chaincodedev/chaincode/setget -n setget -v 0{"\n"}</code></pre>
                <p>and instantiate it (call <code className="hljs hl-inline">Init</code>) with </p>
                <pre><code className="hljs sh">{"\n"}peer chaincode instantiate -n setget -v 0 -c '{"{"}"Args":["init"]{"}"}' -C myc{"\n"}</code></pre>
                <p>on the channel. </p>
                <p>To see the block height, do:</p>
                <pre><code className="hljs sh">{"\n"}peer channel fetch newest output.dat -o orderer:7050 -c myc{"\n"}</code></pre>
                <h3>Test it</h3>
                <p>Confirm that your instantiation worked as planned. Invoke it with <code className="hljs hl-inline">set</code>:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode invoke -n setget -c '{"{"}"Args":["set","keyOne","valueOne"]{"}"}' -C myc{"\n"}</code></pre>
                <p>Look for the block height again. Did it increment as expected?</p>
                <p>Confirm that the result was committed to the network. Invoke with <code className="hljs hl-inline">get</code>:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode invoke -n setget -c '{"{"}"Args":["get","keyOne"]{"}"}' -C myc{"\n"}</code></pre>
                <p>Confirm that the block height increased with each <code className="hljs hl-inline">Invoke</code>. The function <code className="hljs hl-inline">get</code> will not change the ledger. So, you could do a <code className="hljs hl-inline">query</code> call instead of <code className="hljs hl-inline">invoke</code> and see the difference by checking the block height.</p>
                <h3>Isolated Storage</h3>
                <p>The data stored by this chaincode can supposedly only be accessed by this chaincode. Let's confirm that. Open another terminal, then run:</p>
                <pre><code className="hljs sh">{"\n"}docker exec -it chaincode bash{"\n"}cd setget{"\n"}</code></pre>
                <p>We will run the same chaincode but give it another name. This will demonstrate how the data is stored separately in each chaincode instance even when the underlying code happens to be identical. We can have two different chaincodes with identical software and identical keys with different values stored.</p>
                <div className="b9-info">
                The source code doesn't determine the chaincode id. 
                </div>
                <p>So let's use the same <code className="hljs hl-inline">setget.go</code> to run another chaincode in the network. This time, run it with:</p>
                <pre><code className="hljs sh">{"\n"}CORE_PEER_ADDRESS=peer:7052 CORE_CHAINCODE_ID_NAME=setget2:0 ./setget{"\n"}</code></pre>
                <p>Back in the CLI terminal, install the chaincode on the peer with :</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode install -p chaincodedev/chaincode/setget -n setget2 -v 0{"\n"}</code></pre>
                <p>and instantiate it (call <code className="hljs hl-inline">Init</code>) with</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode instantiate -n setget2 -v 0 -c '{"{"}"Args":["init"]{"}"}' -C myc{"\n"}</code></pre>
                <p>Now, <code className="hljs hl-inline">setget</code> and <code className="hljs hl-inline">setget2</code> should both be running. Let's query <code className="hljs hl-inline">setget2</code>:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode query -n setget2 -c '{"{"}"Args":["get","keyOne"]{"}"}' -C myc{"\n"}</code></pre>
                <p>Just to be sure, let's confirm that <code className="hljs hl-inline">setget</code> did not lose its storage:</p>
                <pre><code className="hljs sh">{"\n"}peer chaincode query -n setget -c '{"{"}"Args":["get","keyOne"]{"}"}' -C myc{"\n"}</code></pre>
                <p>Since each chaincode has exclusive access to its own data, we need to learn how we invoke one chaincode from another.</p>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@4a9dec8e66d343bca1b4b2fe8d4140c8">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="939a3e70913411e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@4a9dec8e66d343bca1b4b2fe8d4140c8" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Watch Rob install and invoke chaincode</h3>
                    <iframe src="https://www.youtube.com/embed/TfdwfHgvLtU" allow="autoplay; encrypted-media" allowFullScreen width={809} height={455} frameBorder={0} />
                </div>
                </div>
            </div>
        )
    }
}

export default FirstChaincode;