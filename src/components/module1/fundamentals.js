import React, { Component } from 'react';

class Fundamentals extends Component {

    render () {
        return (
            <div className="course-content">
                <h2>Fundamentals</h2>

                <h3>Public key cryptosystems</h3>
                <p>Modern cryptographic systems leverage computer capabilities to make accessible the power of certain mathematical functions.</p>

                <h4>Public / private key</h4>
                <p>Such keys always come in pairs and offer various capabilities. Those capabilities are based on cryptographic mathematics. As their name suggest, the public key is meant to be distributed to whoever is relevant, while the private key is to be jealously guarded, akin to having your house address public, but keeping the key to your house private.</p>
                <p>Let&#39;s have a look at examples, which you may know under the names:</p>
                <ul>
                    <li>RSA</li>
                    <li>PGP, GnuPG</li>
                </ul>


                <p>Example (Linux):</p>
                <pre><code class='hljs sql'>
                <br />// Create SECP256K1 private key with explicit parameters for backward compatibility
                <br />$ openssl ecparam -name secp256k1 -genkey -noout -out secp256k1-key.pem -param_enc explicit
                <br />
                <br />// Create public key
                <br />$ openssl ec -in secp256k1-key.pem -pubout -out secp256k1-key-pub.pem
                <br />
                <br />// Show public key
                <br />$ openssl ec -in secp256k1-key-pub.pem -pubin -text -noout
                <br />
                <br />// Create RSA private key
                <br />$ openssl genrsa -des3 -out rsa-key.pem 2048
                <br />Generating RSA private key, 2048 bit long modulus
                <br />.....................................................+++
                <br />...........+++
                <br />e is 65537 (0x10001)
                <br />Enter pass phrase for rsa-key.pem:
                <br />Verifying - Enter pass phrase for rsa-key.pem:
                <br />
                <br />// Create public key
                <br />$ openssl rsa -in rsa-key.pem -outform PEM -pubout -out rsa-key-pub.pem
                <br />
                <br />Enter pass phrase for rsa-key.pem:
                <br />writing RSA key
                </code></pre>

                <p>This is like a password that is used to encrypt your private key on disk. If the private key was not encrypted, it would be at greater risk of theft. Since you are just testing here, you can put nothing or a simple word. But remember that whenever you create keys in the future, you need to protect them with a proper password.</p>
                <p>Note that you may need openssl version 1.0 or newer.</p>

                <h4>Encrypt and decrypt</h4>
                <p>Alice wants to send a message to Bob, and for Bob&#39;s eyes only:</p>
                <ul>
                    <li>Bob gives Alice his public key</li>
                    <li>Alice uses Bob&#39;s public key to encrypt the message</li>
                    <li>Alice sends Bob the encrypted message</li>
                    <li>Bob decrypts the message with his private key</li>
                </ul>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/keys-001.png" /></p>

                <p>Example:</p>
                <pre><code class='hljs bash'>
                <br />// Encrypt file
                <br />$ openssl pkeyutl -encrypt -pubin -inkey rsa-key-pub.pem -in helloworld.txt -out helloworld.enc
                <br />
                <br />// Decrypt file
                <br />$ openssl pkeyutl -decrypt -inkey rsa-key.pem -in helloworld.enc -out helloworld2.txt
                </code></pre>
                <p>If you receive an error, try with <code class='hljs hl-inline'>openssl rsautl</code> instead.</p>

                <h4>Sign and verify</h4>
                <p>Alice wants to make sure that Bob&#39;s public announcement is indeed from Bob:</p>

                <ul>
                    <li>Bob gives Alice his public key</li>
                    <li>Bob signs his announcement with his private key</li>
                    <li>Bob sends Alice his announcement and its signature</li>
                    <li>Alice verifies the signature with Bob&#39;s public key</li>
                </ul>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/keys-002.png" /></p>

                <p>Example:</p>
                <pre><code class='hljs bash'>
                      // Sign file hash
                <br />$ openssl dgst -sha256 -sign secp256k1-key.pem -out helloworld-bin.sha256 helloworld.txt
                <br />
                <br />// Encode signature in Base64
                <br />$ openssl base64 -in helloworld-bin.sha256 -out helloworld.sha256
                <br />
                <br />// Decode signature form Base64
                <br />$ openssl base64 -d -in helloworld.sha256 -out helloworld-bin-decoded.sha256
                <br />
                <br />// Verify signature
                <br />$ openssl dgst -sha256 -verify secp256k1-key-pub.pem -signature helloworld-bin-decoded.sha256 helloworld.txt
                <br />Verified OK
                </code></pre>

                <h4>Mix and match</h4>
                <p>It is possible to mix both ideas, whereby Alice encrypts her message with Bob&#39;s public key, then signs the encrypt file with her private key. Upon reception, Bob verifies the signature with Alice&#39;s public key, then decrypts the file with his private key.</p>
                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/keys-003.png" /></p>

                <h3>Key management, PKI</h3>
                <p>If you look again at the Alice and Bob examples, you will notice that there is a vulnerability in &quot;Bob gives Alice his public key&quot;. A malicious Charlie could intercept Bob&#39;s public key and pass on his own public key to Alice.
                Key management and public key infrastructure (PKI) is an important aspect of cryptography that helps mitigate this risk.</p>

                <h3>Theory</h3>

                <h4>RSA</h4>
                <p>RSA(Rives, Shamir, Adleman) is a public-key cryptosystem that was first published in 1977.</p>
                <p>The premise is that if you have a public key 
                    <span className="katex">
                        <span className="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mo>(</mo>
                                        <mi>p</mi>
                                        <mi>u</mi>
                                        <mi>b</mi>
                                        <mi>K</mi>
                                        <mi>e</mi>
                                        <mi>y</mi>
                                        <mo separator="true">,</mo>
                                        <mi>n</mi>
                                        <mo>)</mo>
                                    </mrow>
                                    <annotation encoding="application/x-tex">(pubKey,n)</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span className="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height: '0.75em' }}></span>
                            <span class="strut bottom" style={{ height: '1em', verticalAlign: '-0.25em' }}></span>
                            <span class="base">
                                <span class="mopen">(</span>
                                <span class="mord mathit">p</span>
                                <span class="mord mathit">u</span>
                                <span class="mord mathit">b</span>
                                <span class="mord mathit" style={{ marginRight:'0.07153em' }}>K</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>y</span>
                                <span class="mpunct">,</span>
                                <span class="mord mathit">n</span>
                                <span class="mclose">)</span>
                            </span>
                        </span>
                    </span> 
                    <br />
                    and a private key 
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mi>p</mi>
                                        <mi>r</mi>
                                        <mi>i</mi>
                                        <mi>K</mi>
                                        <mi>e</mi>
                                        <mi>y</mi>
                                    </mrow>
                                    <annotation encoding="application/x-tex">priKey</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height:"0.68333em"}}></span>
                            <span class="strut bottom" style={{ height:"0.8777699999999999em", "vertical-align":"-0.19444em" }}></span>
                            <span class="base">
                                <span class="mord mathit">p</span>
                                <span class="mord mathit" style={{ marginRight: '0.02778em' }}>r</span>
                                <span class="mord mathit">i</span>
                                <span class="mord mathit" style={{ marginRight: '0.07153em' }}>K</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>y</span>
                            </span>
                        </span>
                    </span> then you can:
                </p>

                <ul>
                    <li>encrypt a message with the following:</li>
                </ul>

                <p>
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mi>m</mi>
                                        <mi>e</mi>
                                        <mi>s</mi>
                                        <mi>s</mi>
                                        <mi>a</mi>
                                        <mi>g</mi>
                                        <msup>
                                            <mi>e</mi>
                                            <mrow>
                                                <mi>p</mi>
                                                <mi>u</mi>
                                                <mi>b</mi>
                                                <mi>K</mi>
                                                <mi>e</mi>
                                                <mi>y</mi>
                                            </mrow>
                                        </msup>
                                        <mo>≡</mo>
                                        <mi>e</mi>
                                        <mi>n</mi>
                                        <mi>c</mi>
                                        <mi>M</mi>
                                        <mi>e</mi>
                                        <mi>s</mi>
                                        <mi>s</mi>
                                        <mi>a</mi>
                                        <mi>g</mi>
                                        <mi>e</mi>
                                        <mo>
                                            <mo>mod</mo>
                                            <mspace width="0.333333em"></mspace>
                                            <mi>n</mi>
                                        </mo>
                                    </mrow>
                                    <annotation encoding="application/x-tex">message ^{`{pubKey}`} \equiv encMessage \mod n</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height:'0.8491079999999999em' }}></span>
                            <span class="strut bottom" style={{ height:'1.043548em', verticalAlign:'-0.19444em' }}></span>
                            <span class="base">
                                <span class="mord mathit">m</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">a</span>
                                <span class="mord mathit" style={{ marginRight:'0.03588em' }}>g</span>
                                <span class="mord">
                                    <span class="mord mathit">e</span>
                                    <span class="msupsub">
                                        <span class="vlist-t">
                                            <span class="vlist-r">
                                                <span class="vlist" style={{ height:'0.8491079999999999em' }}>
                                                    <span style={{ top:'-3.063em', 'marginRight': '0.05em' }}>
                                                        <span class="pstrut" style={{ height: '2.7em' }}></span>
                                                        <span class="sizing reset-size6 size3 mtight">
                                                            <span class="mord mtight">
                                                                <span class="mord mathit mtight">p</span>
                                                                <span class="mord mathit mtight">u</span>
                                                                <span class="mord mathit mtight">b</span>
                                                                <span class="mord mathit mtight" style={{ marginRight: '0.07153em' }}>K</span>
                                                                <span class="mord mathit mtight">e</span>
                                                                <span class="mord mathit mtight" style={{ marginRight: '0.03588em' }}>y</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span class="mrel">≡</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">n</span>
                                <span class="mord mathit">c</span>
                                <span class="mord mathit" style={{ marginRight: '0.10903em' }}>M</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">a</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>g</span>
                                <span class="mord mathit">e</span>
                                <span>
                                    <span class="mspace twelvemuspace"></span>m
                                </span>
                                od
                                <span class="mord mathit">
                                    <span class="mspace sixmuspace"></span>
                                    <span class="mord mathit">n</span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>

                <ul>
                    <li>decrypt the encrypted message with the following:</li>
                </ul>

                <p>
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mi>e</mi>
                                        <mi>n</mi>
                                        <mi>c</mi>
                                        <mi>M</mi>
                                        <mi>e</mi>
                                        <mi>s</mi>
                                        <mi>s</mi>
                                        <mi>a</mi>
                                        <mi>g</mi>
                                        <msup>
                                            <mi>e</mi>
                                            <mrow>
                                                <mi>p</mi>
                                                <mi>r</mi>
                                                <mi>i</mi>
                                                <mi>K</mi>
                                                <mi>e</mi>
                                                <mi>y</mi>
                                            </mrow>
                                        </msup>
                                        <mo>≡</mo>
                                        <mi>m</mi>
                                        <mi>e</mi>
                                        <mi>s</mi>
                                        <mi>s</mi>
                                        <mi>a</mi>
                                        <mi>g</mi>
                                        <mi>e</mi>
                                        <mo>
                                            <mo>mod</mo>
                                            <mspace width="0.333333em"></mspace>
                                            <mi>n</mi>
                                        </mo>
                                    </mrow>
                                    <annotation encoding="application/x-tex">encMessage ^{`{priKey}`} \equiv  message \mod n</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height:'0.8413309999999999em' }}></span>
                            <span class="strut bottom" style={{ height:'1.035771em', verticalAlign:'-0.19444em' }}></span>
                            <span class="base">
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">n</span>
                                <span class="mord mathit">c</span>
                                <span class="mord mathit" style={{ marginRight: '0.10903em' }}>M</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">a</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>g</span>
                                <span class="mord">
                                    <span class="mord mathit">e</span>
                                    <span class="msupsub">
                                        <span class="vlist-t">
                                            <span class="vlist-r">
                                                <span class="vlist" style={{ height:'0.8413309999999999em' }}>
                                                    <span style={{ top:'-3.063em', marginRight: '0.05em' }}>
                                                        <span class="pstrut" style={{ height: '2.7em' }}></span>
                                                        <span class="sizing reset-size6 size3 mtight">
                                                            <span class="mord mtight">
                                                                <span class="mord mathit mtight">p</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.02778em' }}>r</span>
                                                                <span class="mord mathit mtight">i</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.07153em' }}>K</span>
                                                                <span class="mord mathit mtight">e</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.03588em' }}>y</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span class="mrel">≡</span>
                                <span class="mord mathit">m</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">a</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>g</span>
                                <span class="mord mathit">e</span>
                                <span>
                                    <span class="mspace twelvemuspace"></span>m
                                </span>od
                                <span class="mord mathit">
                                    <span class="mspace sixmuspace"></span>
                                    <span class="mord mathit">n</span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>

                <p>Or that in fact there exist 
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mo>(</mo>
                                        <mi>p</mi>
                                        <mi>r</mi>
                                        <mi>i</mi>
                                        <mi>K</mi>
                                        <mi>e</mi>
                                        <mi>y</mi>
                                        <mo separator="true">,</mo>
                                        <mi>p</mi>
                                        <mi>u</mi>
                                        <mi>b</mi>
                                        <mi>K</mi>
                                        <mi>e</mi>
                                        <mi>y</mi>
                                        <mo separator="true">,</mo>
                                        <mi>n</mi>
                                        <mo>)</mo>
                                    </mrow>
                                    <annotation encoding="application/x-tex">(priKey,pubKey,n)</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height: '0.75em' }}></span>
                            <span class="strut bottom" style={{ height:'1em', verticalAlign: '-0.25em' }}></span>
                            <span class="base">
                                <span class="mopen">(</span>
                                <span class="mord mathit">p</span>
                                <span class="mord mathit" style={{ marginRight: '0.02778em' }}>r</span>
                                <span class="mord mathit">i</span>
                                <span class="mord mathit" style={{ marginRight: '0.07153em' }}>K</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>y</span>
                                <span class="mpunct">,</span>
                                <span class="mord mathit">p</span>
                                <span class="mord mathit">u</span>
                                <span class="mord mathit">b</span>
                                <span class="mord mathit" style={{ marginRight: '0.07153em' }}>K</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>y</span>
                                <span class="mpunct">,</span>
                                <span class="mord mathit">n</span>
                                <span class="mclose">)</span>
                            </span>
                        </span>
                    </span> such that 
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mo>(</mo>
                                        <mi>m</mi>
                                        <mi>e</mi>
                                        <mi>s</mi>
                                        <mi>s</mi>
                                        <mi>a</mi>
                                        <mi>g</mi>
                                        <msup>
                                            <mi>e</mi>
                                            <mrow>
                                                <mi>p</mi>
                                                <mi>u</mi>
                                                <mi>b</mi>
                                                <mi>K</mi>
                                                <mi>e</mi>
                                                <mi>y</mi>
                                            </mrow>
                                        </msup>
                                        <msup>
                                            <mo>)</mo>
                                            <mrow>
                                                <mi>p</mi>
                                                <mi>r</mi>
                                                <mi>i</mi>
                                                <mi>K</mi>
                                                <mi>e</mi>
                                                <mi>y</mi>
                                            </mrow>
                                        </msup>
                                        <mo>≡</mo>
                                        <mi>m</mi>
                                        <mi>e</mi>
                                        <mi>s</mi>
                                        <mi>s</mi>
                                        <mi>a</mi>
                                        <mi>g</mi>
                                        <mi>e</mi>
                                        <mo>
                                            <mo>mod</mo>
                                            <mspace width="0.333333em"></mspace>
                                            <mi>n</mi>
                                        </mo>
                                    </mrow>
                                    <annotation encoding="application/x-tex">(message ^{`{pubKey}`}) ^ {`{priKey}`} \equiv message \mod n</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height:'0.8491079999999999em' }}></span>
                            <span class="strut bottom" style={{ height:'1.0991079999999998em', verticalAlign: '-0.25em' }}></span>
                            <span class="base">
                                <span class="mopen">(</span>
                                <span class="mord mathit">m</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">a</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>g</span>
                                <span class="mord">
                                    <span class="mord mathit">e</span>
                                    <span class="msupsub">
                                        <span class="vlist-t">
                                            <span class="vlist-r">
                                                <span class="vlist" style={{ height: '0.8491079999999999em' }}>
                                                    <span style={{ top:'-3.063em', marginRight: '0.05em' }}>
                                                        <span class="pstrut" style={{ height: '2.7em' }}></span>
                                                        <span class="sizing reset-size6 size3 mtight">
                                                            <span class="mord mtight">
                                                                <span class="mord mathit mtight">p</span>
                                                                <span class="mord mathit mtight">u</span>
                                                                <span class="mord mathit mtight">b</span>
                                                                <span class="mord mathit mtight" style={{ marginRight: '0.07153em' }}>K</span>
                                                                <span class="mord mathit mtight">e</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.03588em' }}>y</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span class="mclose">
                                    <span class="mclose">)</span>
                                    <span class="msupsub">
                                        <span class="vlist-t">
                                            <span class="vlist-r">
                                                <span class="vlist" style={{ height: "0.8413309999999999em" }}>
                                                    <span style={{ top:'-3.063em', marginRight: '0.05em' }}>
                                                        <span class="pstrut" style={{ height: '2.7em' }}></span>
                                                        <span class="sizing reset-size6 size3 mtight">
                                                            <span class="mord mtight">
                                                                <span class="mord mathit mtight">p</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.02778em' }}>r</span>
                                                                <span class="mord mathit mtight">i</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.07153em' }}>K</span>
                                                                <span class="mord mathit mtight">e</span>
                                                                <span class="mord mathit mtight" style={{ marginRight:'0.03588em' }}>y</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span class="mrel">≡</span>
                                <span class="mord mathit">m</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">s</span>
                                <span class="mord mathit">a</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>g</span>
                                <span class="mord mathit">e</span>
                                <span> &nbsp;
                                    <span class="mspace twelvemuspace"></span>m
                                </span>od
                                <span class="mord mathit">
                                    <span class="mspace sixmuspace"></span>
                                    <span class="mord mathit">n</span>
                                </span>
                            </span>
                        </span>
                    </span>, with the additional hurdle that calculating 
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mi>p</mi>
                                        <mi>r</mi>
                                        <mi>i</mi>
                                        <mi>K</mi>
                                        <mi>e</mi>
                                        <mi>y</mi>
                                    </mrow>
                                    <annotation encoding="application/x-tex">priKey</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height: '0.68333em' }}></span>
                            <span class="strut bottom" style={{ height:'0.8777699999999999em', verticalAlign:'-0.19444em' }}></span>
                            <span class="base">
                                <span class="mord mathit">p</span>
                                <span class="mord mathit" style={{ marginRight:'0.02778em' }}>r</span>
                                <span class="mord mathit">i</span>
                                <span class="mord mathit" style={{ marginRight:'0.07153em' }}>K</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>y</span>
                            </span>
                        </span>
                    </span> out of 
                    <span class="katex">
                        <span class="katex-mathml">
                            <math>
                                <semantics>
                                    <mrow>
                                        <mo>(</mo>
                                        <mi>p</mi>
                                        <mi>u</mi>
                                        <mi>b</mi>
                                        <mi>K</mi>
                                        <mi>e</mi>
                                        <mi>y</mi>
                                        <mo separator="true">,</mo>
                                        <mi>n</mi>
                                        <mo>)</mo>
                                    </mrow>
                                    <annotation encoding="application/x-tex">(pubKey,n)</annotation>
                                </semantics>
                            </math>
                        </span>
                        <span class="katex-html" aria-hidden="true">
                            <span class="strut" style={{ height:'0.75em' }}></span>
                            <span class="strut bottom" style={{ height:'1em', verticalAlign:'-0.25em' }}></span>
                            <span class="base">
                                <span class="mopen">(</span>
                                <span class="mord mathit">p</span>
                                <span class="mord mathit">u</span>
                                <span class="mord mathit">b</span>
                                <span class="mord mathit" style={{ marginRight: '0.07153em' }}>K</span>
                                <span class="mord mathit">e</span>
                                <span class="mord mathit" style={{ marginRight: '0.03588em' }}>y</span>
                                <span class="mpunct">,</span>
                                <span class="mord mathit">n</span>
                                <span class="mclose">)</span>
                            </span>
                        </span>
                    </span> is computationally expensive and in practice impossible.
                </p>
            


            </div>
        )
    }

}

export default Fundamentals;