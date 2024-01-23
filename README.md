# Sollertia

Transparency-driven Blockchain Solution for protecting Licensing rights in Music Industry

## Introduction

This project aims to develop a Blockchain-powered web-Dapp facilitating contracts between labels, artists, and licensing companies within the music industry. The key focus areas include addressing transparency issues, providing accounting solutions, offering fairer contracts, and helping artists to own their art piece.

## Problems Identified

- Lack of transparency in the music industry regarding contracts between labels, artists, and licensing companies.

- Artists often face challenges in understanding and tracking the distribution of revenues generated from their work.

- Inefficient accounting practices and a lack of proper tallying mechanisms in licensing and sub-licensing businesses.

- Artists encounter difficulties in monitoring and managing their contracts and royalties due to inadequate accounting systems.


- Artists signing exploitative contracts that offer them limited benefits while labels and licensing companies gain a significant portion of the proceeds.

## Our Solution

- Empowering Artists: Seeking to revolutionize the industry by giving artists more control over their content and revenue sharing, aiming to change the narrative where artists typically earn less compared to labels.
- Market Shift: Introducing a solution that challenges the current power dynamics within the music industry, promoting fairer contracts and revenue sharing.

## Technology 

- Frontend: NextJS 14, TailwindCSS
- Backend & logic: Web5js
- Other dependencies: Stripe Payment Gateway, Metamask SDK, Hardhat, IPFS, Neovis (Neo4J), Aura DB

## Video

## Installation

Install this project locally

```bash
git clone https://github.com/Shashwat3012/Web5.git
cd Web5
```

Frontend Setup: \
change into frontend directory using

```bash
cd webapp/
```

install the dependencies using

```bash
npm install
```


After the installation is complete, run the following command to start the frontend on `localhost:3000` using NextJS 14(App Router).

```bash
npm run dev
```

\
Replace the API keys to match with the ones you have. This is required for Neovis Component [(here)](https://neo4j.com/developer/get-started/) & Stripe payment gateway [(here)](https://stripe.com/docs/js).

## Found a bug? Resolve it.

If you encounter a bug or have an improvement in mind, please follow these steps:

- Check the [GitHub Issues](https://github.com/Shashwat3012/Web5/issues) to see if the issue has already been reported.
- If not, open a new issue, describing the problem or your suggested enhancement.
- If you'd like to contribute, fork the repository, make the necessary changes, and submit a pull request.


## Known Issues | Work in Progress

- We are currently working on implementing collaboration of different artists through our platform, so that Sollertia helps and reaches out to more underrated and under-appreciated artists.
- We are also trying to implement a Chat feature like Dinger Chat App, where the listeners can pay and have a conversation with their favourite artists.

## Contributions

- [Harsh Jain](https://github.com/NeoZ666)
- [Nilanchala Panda](https://github.com/nilanchalaPanda)
- [Shashwat Tripathi](https://github.com/Shashwat3012/)

## MIT Licensing

MIT License

Copyright (c) 2024 Shashwat Tripathi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
