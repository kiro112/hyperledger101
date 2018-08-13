import React, { Component } from 'react';

class JavaSdk extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="3c95b14a9e8b11e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@81b0e6b5378e49f28d517ecb232c2c62" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@7bb32f9c705545cc963e24bc36f541b2">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="3c95b14a9e8b11e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@7bb32f9c705545cc963e24bc36f541b2" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h1>Client SDK for Java</h1>
                    <p>The official Java Client SDK is available on <a href="https://github.com/hyperledger/fabric-sdk-java">Github</a>. It follows the general SDK architecture, but has some peculiarities, which we will take a look at in this section.</p>
                    <h2>Install</h2>
                    <h3>As a maven package</h3>
                    <p>The Java SDK is supplied as a maven package, which is located in the maven repository under <a href="https://mvnrepository.com/artifact/org.hyperledger.fabric-sdk-java/fabric-sdk-java">org.hyperledger.fabric-sdk-java</a>.</p>
                    <p>To add it to your own maven project, just add this <code className="hljs hl-inline">dependency</code> to your project's <code className="hljs hl-inline">POM.xml</code> file:</p>
                    <pre><code className="hljs xml">{"\n"}&lt;dependencies&gt;{"\n"}{"    "}&lt;dependency&gt;{"\n"}{"        "}&lt;groupId&gt;org.hyperledger.fabric-sdk-java&lt;/groupId&gt;{"\n"}{"        "}&lt;artifactId&gt;fabric-sdk-java&lt;/artifactId&gt;{"\n"}{"        "}&lt;version&gt;1.0.1&lt;/version&gt;{"\n"}{"    "}&lt;/dependency&gt;{"\n"}&lt;/dependencies&gt;{"\n"}</code></pre>
                    <h3>Manually</h3>
                    <p>If you do not use maven, you can also fetch a snapshot <code className="hljs hl-inline">.jar</code> file from the <a href="http://central.maven.org/maven2/org/hyperledger/fabric-sdk-java/fabric-sdk-java/1.0.1/fabric-sdk-java-1.0.1.jar">maven repository</a>. Please note that you will also have to reference all dependent libraries being used, which can be found in the SDK's <code className="hljs hl-inline">POM.xml</code> file</p>
                    <h2>Simple client application</h2>
                    <p>As mentioned earlier, there are some small but very important peculiarities when using the Java SDK, so let us take a look at how to write a simple client application to interact with our network. We are going to write a client that connects to the <code className="hljs hl-inline">asus peer</code> and invokes the <code className="hljs hl-inline">createPC</code> function in our chaincode, similar to the <code className="hljs hl-inline">producerApp.js</code> NodeJS application. To keep it simple, we are not going to use maven, but just a simple Java project. We have used Eclipse for our Java project, but any environment of your choice should be fine.</p>
                    <h3>Dependency setup</h3>
                    <p>First of all, we need to get the libraries the SDK Client will need to work. For our example, we have used:</p>
                    <ul>
                        <li>bcprov-jdk15on-158.jar</li>
                        <li>org.apache.commons.logging-1.1.1.jar</li>
                        <li>bcpkix-jdk15on-158.jar</li>
                        <li>commons-compress-1.14.jar</li>
                        <li>netty-all-4.1.15.Final.jar</li>
                        <li>fabric-sdk-java-1.0.1.jar</li>
                        <li>protobuf-java-3.4.0.jar</li>
                        <li>commons-codec-1.10.jar</li>
                        <li>grpc-all-1.6.1.jar</li>
                        <li>grpc-protobuf-1.6.1.jar</li>
                        <li>grpc-core-1.6.1.jar</li>
                        <li>grpc-stub-1.6.1.jar</li>
                        <li>grpc-netty-1.6.1.jar</li>
                        <li>instrumentation-api-0.4.3.jar</li>
                        <li>guava-23.0.jar</li>
                        <li>grpc-protobuf-lite-1.6.1.jar</li>
                        <li>grpc-context-1.6.1.jar</li>
                    </ul>
                    <p>For the SDK Client, we use:</p>
                    <p>create a lib folder, put in all the libraries and reference them in your project configuration. Now you should be able to use the SDK in your Java project!</p>
                    <h3>Setting up the client</h3>
                    <p>We start with a simple main class, in which we want to set the client up. You can instantiate a new client object with:</p>
                    <pre><code className="hljs java">{"\n"}HFClient client = HFClient.createNewInstance();{"\n"}client.setCryptoSuite(CryptoSuite.Factory.getCryptoSuite());{"\n"}</code></pre>
                    <h3>Create an own user class implementation</h3>
                    <p>The SDK supplies us with an interface for a user class in <code className="hljs hl-inline">SDK PATH</code>. We are going to implement our own user class in <code className="hljs hl-inline">TestUser.java</code></p>
                    <p>The class needs to implement the following interface methods:</p>
                    <pre><code className="hljs java">{"\n"}public String getAccount();{"\n"}public String getAffiliation();{"\n"}public Enrollment getEnrollment();{"\n"}public String getName();{"\n"}public Set&lt;String&gt; getRoles();{"\n"}public String getMspId();{"\n"}</code></pre>
                    <p>In this sample, we will only need to actually write the <code className="hljs hl-inline">getEnrollment</code>, <code className="hljs hl-inline">getName</code> and <code className="hljs hl-inline">getMspId</code> methods, the others can just return <code className="hljs hl-inline">null</code>. The <code className="hljs hl-inline">getEnrollment</code> method should return an <code className="hljs hl-inline">Enrollment</code> object, which itself implements the <code className="hljs hl-inline">getKey</code> and <code className="hljs hl-inline">getCert</code> methods. We can set those up in the <code className="hljs hl-inline">TestUser</code> constructor and just return them in a new <code className="hljs hl-inline">Enrollment</code> object. We hardcode the Name and MSP id for this sample.</p>
                    <p>The full code for the <code className="hljs hl-inline">TestUser</code> class follows:</p>
                    <pre><code className="hljs java">{"\n"}package test.b9lab.hlftest;{"\n"}{"\n"}import java.security.PrivateKey;{"\n"}import java.util.Set;{"\n"}{"\n"}import org.hyperledger.fabric.sdk.Enrollment;{"\n"}import org.hyperledger.fabric.sdk.User;{"\n"}{"\n"}public class TestUser implements User {"{"}{"\n"}{"    "}private final PrivateKey privateKey;{"\n"}{"    "}private final String cert;{"\n"}{"\n"}{"    "}public TestUser(PrivateKey privateKey, String cert) {"{"}{"\n"}{"        "}this.privateKey = privateKey;{"\n"}{"        "}this.cert = cert;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}@Override{"\n"}{"    "}public String getAccount() {"{"}{"\n"}{"        "}return null;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}@Override{"\n"}{"    "}public String getAffiliation() {"{"}{"\n"}{"        "}return null;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}@Override{"\n"}{"    "}public Enrollment getEnrollment() {"{"}{"\n"}{"        "}PrivateKey _privateKey = this.privateKey;{"\n"}{"        "}String _cert = this.cert;{"\n"}{"\n"}{"        "}return new Enrollment() {"{"}{"\n"}{"            "}@Override{"\n"}{"            "}public PrivateKey getKey() {"{"}{"\n"}{"                "}return _privateKey;{"\n"}{"            "}{"}"}{"\n"}{"\n"}{"            "}@Override{"\n"}{"            "}public String getCert() {"{"}{"\n"}{"                "}return _cert;{"\n"}{"            "}{"}"}{"\n"}{"        "}{"}"};{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}@Override{"\n"}{"    "}public String getName() {"{"}{"\n"}{"        "}return "AsusAdmin";{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}@Override{"\n"}{"    "}public Set&lt;String&gt; getRoles() {"{"}{"\n"}{"        "}return null;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}@Override{"\n"}{"    "}public String getMspId() {"{"}{"\n"}{"        "}return "AsusMSP";{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                    <div className="b9-info">
                        The private key is saved in the PKCS#1 format, which will be changed to PKCS#5 in the future.
                        The certificate has to be supplied as a simple string, including linebreaks, like this:
                        <pre>"-----BEGIN CERTIFICATE-----\nM..\nJ...4yyGzH1W0=\n-----END CERTIFICATE-----\\n"{"\n"}</pre>
                    </div>
                    <h3>Load certificates</h3>
                    <p>Before we can use this <code className="hljs hl-inline">User</code> class, we need to load the private key and certificate. We are using the same files as used in the nodejs <code className="hljs hl-inline">producerApp</code> sample:</p>
                    <ul>
                        <li><code className="hljs hl-inline">79f4fc12e3b36d4dcb106b1e1e4e4c60bbe0f4b393a49c368083fb57cf9e1c8b_sk</code></li>
                        <li><code className="hljs hl-inline">Admin@Asus.com-cert.pem</code></li>
                    </ul>
                    <p>We will add another helper class to load the keys and certificates, called <code className="hljs hl-inline">KeyUtils</code>.</p>
                    <pre><code className="hljs java">{"\n"}public class KeyUtils {"{"}{"    "}{"\n"}{"    "}public static String readPemCertificate(String filepath) {"{"}{"\n"}{"        "}try {"{"}{"\n"}{"            "}return new String(Files.readAllBytes(Paths.get(filepath)));{"\n"}{"        "}{"}"} catch (Exception e) {"{"}{"\n"}{"            "}System.out.println("exception");{"\n"}{"            "}e.printStackTrace();{"\n"}{"            "}return null;{"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}// read PKCS#1 key{"\n"}{"    "}public static PrivateKey readPrivateKey(String filepath){"  "}{"{"}{"\n"}{"        "}try {"{"}{"\n"}{"            "}PEMParser pemParser = new PEMParser(new FileReader(filepath));{"\n"}{"            "}JcaPEMKeyConverter converter = new JcaPEMKeyConverter().setProvider("BC");{"\n"}{"            "}PrivateKey privateKey = converter.getPrivateKey((PrivateKeyInfo) pemParser.readObject()); //kp.getPrivate();{"\n"}{"\n"}{"            "}System.out.println("read key:");{"\n"}{"            "}System.out.println(privateKey);{"\n"}{"            "}return privateKey;{"\n"}{"        "}{"}"} catch (Exception e) {"{"}{"\n"}{"            "}System.out.println("exception");{"\n"}{"            "}e.printStackTrace();{"\n"}{"            "}return null;{"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                    <h3>Create user and connect to the network</h3>
                    <p>Now it's time to bring everything together. We can load the keys with our helper and set them to our user class:</p>
                    <pre><code className="hljs java">{"\n"}String filepath_pk = "PATH_TO_FOLDER/79f4fc12e3b36d4dcb106b1e1e4e4c60bbe0f4b393a49c368083fb57cf9e1c8b_sk";{"\n"}PrivateKey privateKey = KeyUtils.readPrivateKey(filepath_pk);{"\n"}{"\n"}String filepath_cert = "PATH_TO_FOLDER/Admin@Asus.com-cert.pem";{"\n"}String cert = KeyUtils.readPemCertificate(filepath_cert);{"\n"}TestUser testUser = new TestUser(privateKey, cert);{"\n"}client.setUserContext(testUser);{"\n"}</code></pre>
                    <p>Then, we can setup the peer and channel and initialize the connection, similar to the NodeJS app:</p>
                    <pre><code className="hljs java">{"\n"}Peer asusPeer = client.newPeer("Asus", "grpc://localhost:7051");{"\n"}Orderer orderer = client.newOrderer("orderer", "grpc://localhost:7050");{"\n"}Channel channel0 = client.newChannel("asus");{"\n"}{"\n"}channel0.addOrderer(orderer);{"\n"}channel0.addPeer(asusPeer);{"\n"}{"\n"}channel0.initialize();{"\n"}</code></pre>
                    <h3>Create and send transaction</h3>
                    <p>Finally, we create a new transaction to invoke the <code className="hljs hl-inline">createPC</code> function in our chaincode.</p>
                    <pre><code className="hljs java">{"\n"}final TransactionProposalRequest proposalRequest = client.newTransactionProposalRequest();{"\n"}{"\n"}final ChaincodeID chaincodeID = ChaincodeID.newBuilder(){"\n"}{"    "}.setName("pcxchg"){"\n"}{"    "}.setVersion("1.0"){"\n"}{"    "}.setPath("PATH_TO_FOLDER/pcxchg/chaincode/pcxchg"){"\n"}{"    "}.build();{"\n"}{"\n"}// chaincode name{"\n"}proposalRequest.setChaincodeID(chaincodeID);{"\n"}// chaincode function to execute{"\n"}proposalRequest.setFcn("createPC");{"\n"}// timeout{"\n"}proposalRequest.setProposalWaitTime(60000);{"\n"}// arguments for chaincode function{"\n"}String[] args = {"{"} "Asus003", "foo", "bar" {"}"};{"\n"}proposalRequest.setArgs(args);{"\n"}{"\n"}// Sending transaction proposal{"\n"}final Collection&lt;ProposalResponse&gt; responses = channel0.sendTransactionProposal(proposalRequest);{"\n"}{"\n"}System.out.println("sending transaction");{"\n"}{"\n"}CompletableFuture&lt;BlockEvent.TransactionEvent&gt; txFuture = channel0.sendTransaction(responses, client.getUserContext());{"\n"}{"\n"}BlockEvent.TransactionEvent event = txFuture.get();{"\n"}</code></pre>
                    <h3>Test the client</h3>
                    <p>Now lets run the application. You can start the network we have created in the previous sections and then run our Java application. The network log should show a new block event after the transaction has been submitted.</p>
                    <p>You can run the <code className="hljs hl-inline">marketApp</code> from the NodeJS section to query the Blockchain for a list of all computers, which should now also include our new pc!</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default JavaSdk;