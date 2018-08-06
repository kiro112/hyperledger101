import mod1_Introduction from './module1/introduction';
import mod1_Basics from './module1/basics';
import mod1_PublicBlockchain from './module1/public-blockchain';
import mod1_Concensus from './module1/concensus';
import mod1_ChainOfBlocks from './module1/chain-of-blocks';
import mod1_Fundamentals from './module1/fundamentals';
import mod1_Metamask from './module1/metamask';
import mod1_GoInstall from './module1/go-install';


import mod2_ManagedBlockchains from './module2/managed-blockchains';
import mod2_Hyperledger from './module2/hyperledger';
import mod2_FabricDefinitions from './module2/fabric-definitions';
import mod2_SmartContracts from './module2/smart-contracts';
import mod2_chaincode from './module2/chaincode';
import mod2_UseCases from './module2/use-cases';
import mod2_Go from './module2/go';
import mod2_PopQuiz from './module2/pop-quiz';



import mod3_Intro from './module3/intro';
import mod3_Examples from './module3/examples';
import mod3_Cli from './module3/cli';
import mod3_Devmode from './module3/devmode';
import mod3_GoInterfaces from './module3/go-interfaces';
import mod3_FirstChaincode from './module3/first-chaincode';
import mod3_PopQuiz from './module3/pop-quiz';


import mod4_Intro from './module4/intro';
import mod4_UseCase from './module4/use-case';
import mod4_Certificates from './module4/certificates';
import mod4_Network from './module4/network';
import mod4_Chaincode from './module4/chaincode';
import mod4_AccessControl from './module4/access-control';
import mod4_ChaincodeInteraction from './module4/chaincode-interaction';
import mod4_GoControlStructure from './module4/go-control-structures';



const routes = [
    {
        module: 'Blockchain',
        menus: [
            {
                exact: 'exact',
                to: '/courses',
                label: 'Introduction',
                component: mod1_Introduction
            },
            {
                to: '/courses/blockchain/basics',
                label: 'Basics',
                component: mod1_Basics
            },
            {
                to: '/courses/blockchain/public-blockchains',
                label: 'Public Blockchains',
                component: mod1_PublicBlockchain
            },
            {
                to: '/courses/blockchain/concensus',
                label: 'Concensus',
                component: mod1_Concensus
            },
            {
                to: '/courses/blockchain/chain-of-blocks',
                label: 'Chain of Blocks',
                component: mod1_ChainOfBlocks
            },
            {
                to: '/courses/blockchain/fundamentals',
                label: 'Fundamentals',
                component: mod1_Fundamentals
            },
            {
                to: '/courses/blockchain/metamask',
                label: 'Metamask',
                component: mod1_Metamask
            },
            {
                to: '/courses/blockchain/go-install',
                label: 'Go Install',
                component: mod1_GoInstall
            },
        ]
    },

    {
        module: 'Fabric',
        menus: [
            {
                to: '/courses/fabric/managed-blockchains',
                label: 'Managed Blockchains',
                component: mod2_ManagedBlockchains
            },
            {
                to: '/courses/fabric/hyperledger',
                label: 'Hyperledger',
                component: mod2_Hyperledger
            },
            {
                to: '/courses/fabric/fabric-definitions',
                label: 'Fabric Definitions',
                component: mod2_FabricDefinitions
            },
            {
                to: '/courses/fabric/smart-contracts',
                label: 'Smart Contracts',
                component: mod2_SmartContracts
            },
            {
                to: '/courses/fabric/chaincode',
                label: 'Chaincode',
                component: mod2_chaincode
            },
            {
                to: '/courses/fabric/use-cases',
                label: 'Use Cases',
                component: mod2_UseCases
            },
            {
                to: '/courses/fabric/go',
                label: 'Go',
                component: mod2_Go
            },

            {
                to: '/courses/fabric/pop-quiz',
                label: 'Pop Quiz',
                component: mod2_PopQuiz
            },
        ]
    },

    {
        module: 'First Run',
        menus: [
            {
                to: '/courses/first-run/intro',
                label: 'Intro',
                component: mod3_Intro
            },
            {
                to: '/courses/first-run/examples',
                label: 'Examples',
                component: mod3_Examples
            },
            {
                to: '/courses/first-run/cli',
                label: 'CLI',
                component: mod3_Cli
            },
            {
                to: '/courses/first-run/devmode',
                label: 'Devmode',
                component: mod3_Devmode
            },
            {
                to: '/courses/first-run/go-interfaces',
                label: 'Go Interfaces',
                component: mod3_GoInterfaces
            },
            {
                to: '/courses/first-run/first-chaincode',
                label: 'First Chaincode',
                component: mod3_FirstChaincode
            },
            {
                to: '/courses/first-run/pop-quiz',
                label: 'Pop Quiz',
                component: mod3_PopQuiz
            },
        ]
    },

    {
        module: 'Network',
        menus: [
            {
                to: '/courses/network/intro',
                label: 'Intro',
                component: mod4_Intro
            },
            {
                to: '/courses/network/use-case',
                label: 'Use Case',
                component: mod4_UseCase
            },
            {
                to: '/courses/network/certificates',
                label: 'Certificates',
                component: mod4_Certificates
            },
            {
                to: '/courses/network/network',
                label: 'Network',
                component: mod4_Network
            },
            {
                to: '/courses/network/chaincode',
                label: 'Chaincode',
                component: mod4_Chaincode
            },
            {
                to: '/courses/network/access-control',
                label: 'Access Control',
                component: mod4_AccessControl
            },
            {
                to: '/courses/network/chaincode-interaction',
                label: 'Chaincode Interaction',
                component: mod4_ChaincodeInteraction
            },
            {
                to: '/courses/network/go-control-structure',
                label: 'Go Control Structure',
                component: mod4_GoControlStructure
            },
        ]
    },
];


export default routes;