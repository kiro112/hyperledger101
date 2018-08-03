import Introduction from './module1/introduction';
import Basics from './module1/basics';
import PublicBlockchain from './module1/public-blockchain';
import Concensus from './module1/concensus';
import ChainOfBlocks from './module1/chain-of-blocks';
import Fundamentals from './module1/fundamentals';
import Metamask from './module1/metamask';
import GoInstall from './module1/go-install';


const routes = [
    {
        module: 'Blockchain',
        menus: [
            {
                exact: 'exact',
                to: '/courses',
                label: 'Introduction',
                component: Introduction
            },
            {
                to: '/courses/blockchain/basics',
                label: 'Basics',
                component: Basics
            },
            {
                to: '/courses/blockchain/public-blockchains',
                label: 'Public Blockchains',
                component: PublicBlockchain
            },
            {
                to: '/courses/blockchain/concensus',
                label: 'Concensus',
                component: Concensus
            },
            {
                to: '/courses/blockchain/chain-of-blocks',
                label: 'Chain of Blocks',
                component: ChainOfBlocks
            },
            {
                to: '/courses/blockchain/fundamentals',
                label: 'Fundamentals',
                component: Fundamentals
            },
            {
                to: '/courses/blockchain/metamask',
                label: 'Metamask',
                component: Metamask
            },
            {
                to: '/courses/blockchain/go-install',
                label: 'Go Install',
                component: GoInstall
            },
        ]
    },
];


export default routes;