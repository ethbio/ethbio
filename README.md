<p align="center">
  <img src="https://media.discordapp.net/attachments/929049777285505034/929328086313484298/Untitled_design.png?width=300&height=300" />
  <br>
  <h1 align="center"> Ethbio </h1>
  <p align="center">
  <a href="https://github.com/ethbio/ethbio/">Github</a> |
  <a href="https://github.com/ethbio/ethbio#screenshots">Screenshots</a> |
  <a href="https://github.com/ethbio/ethbio">Discord Server(Soon)</a>
  </p>
</p>



  # What's Ethbio?

  We've all seen one page bios of users that showoff their **links**. Ethbio however takes it to a new level, with the help of web3 technologies it makes showing 
  off your __**NFTS**__ much more easier.

  [This project finished 3rd overall in the CYF Hackathon](https://devpost.com/software/ethbio)

  **This is the rewrite branch! We're currently re-building this project from scratch for actual launch!**
  
  ## Features

- show of your nft assets 
- show all of your links and social profiles
- discover other profiles simply by search
- One link for all your NFT and Social Media needs
- Share your ethereum address along side all your NFTs and socials

## Tehnologies used

- [**Next.js**](https://nextjs.org) - (Frontend) React framework
- [**Moralis**](https://moralis.io) - (Web3 API) Web3 Development Platform
- [**MongoDB**](https://mongodb.com) - (Backend) Database
- [**Express.js**](https://expressjs.com) - (Backend) Web Framework

## Building Locally

Building Ethbio locally is pretty easy.

- **Fill in the enviornment variables**

The `.env` file for ethbio looks something like this:
```
NEXT_PUBLIC_MORALIS_SERVER_URL=
NEXT_PUBLIC_MORALIS_APP_ID=
MONGODB_URL=
````
For the MongoDB URL you can head over [**here**](https://medium.com/stackfame/run-mongodb-as-a-service-in-windows-b0acd3a4b712) or create
a MongoDB cluster on the [**cloud**](https://www.mongodb.com/cloud)


For The Moralis variables - `NEXT_PUBLIC_MORALIS_SERVER_URL` & `NEXT_PUBLIC_MORALIS_APP_ID` you can head over to the Moralis 
[**documentation**](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server)

- Installing Dependencies

Assuming that you already have [**Node.JS**](https://nodejs.org) installed to the `latest` version.
Use :
```
npm install
```

- Running!
To run the project, after successfully completing all the steps, you can just use:
```
npm run dev
```
this however runs the project in `DEVELOPMENT` mode.

To run it in `PRODUCTION` use:
```
npm run build
npm run start
```
