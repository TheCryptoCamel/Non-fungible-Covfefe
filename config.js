"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Non Fungible Covfefe is a collection of the years hottest crypto tends with a cup of steaming hot coffee!";
const baseUri = "ipfs://QmdbKrcqV59gXBMhvm4nQPdUeS9r4BVbPhfQAy4e9tqeDV";

const layerConfigurations = [
  {
    growEditionSizeTo: 475,
    description: "\nTicker/ Name: BTC    \nAward: Top 5 Crypto 2021    \nWebsite: No Website    \nNews: Bitcoin had a phenomenal year, starting from 30k reaching a new time high, above 65k. The #BTC was added to many celebrity Twitter accounts, including that of Twitter founder, Jack Dorsey. In the hopes that bitcoin reaches 100,000 $ valuation, many influencers like Paris Hilton and Tom Brady donned laser eyes. Elon Musk's company Tesla, started accepting payments in $BTC. Bitcoin became legal tender in El Salvador.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/BTC#10",
        options: {
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 950,
    description: "\nTicker/ Name: ETH    \nAward: Top 5 Crypto 2021    \nWebsite: https://ethereum.org/    \nNews: Holding strong in its position as chain number 2, Ethereum has held its ranking, while others slid from their spot. However, 'gas' fees are still plaguing the chain, even after the much-heralded solution 'London' upgrade was released. The multiple 'Ethereum Killers' on the market, have yet to accomplish their goals. The popularity of NFT's and DeFi on Ethereum has also helped the chain stay on top of the 2021 competition.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/ETH#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 1425,
    description: "\nTicker/ Name: BNB    \nAward: Top 5 Crypto 2021    \nWebsite: https://www.binance.com/    \nNews: Although Binance faces increased regulatory oversight from countries around the globe, it has survived and thrived, where most crypto projects would have failed. $BNB has shown its strength, and CZ added ‘smart contracts’ giving Binance Smart Chain NFT capabilities, making the value of BNB skyrocket to a top 5 crypto position.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/BNB#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 1900,
    description: "\nTicker/ Name: ADA    \nAward: Top 5 Crypto 2021    \nWebsite: https://cardano.org/    \nNews: Cardano, the chain with the popular coin traded under the moniker $ADA had an explosive year with a 1000% increase. After implementing Smart Contracts, the blockchain joined the DeFi movement, and can now host dApps. The Ethiopian Ministry of education announced that they would use Cardano, for identification and record-keeping for their five million students. Paul Oakenfold a famous DJ made plans to release an album on the Cardano blockchain. ",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/ADA#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 2375,
    description: "\nTicker/ Name: USDT    \nAward: Top 5 Crypto 2021    \nWebsite: https://tether.to/    \nNews: Tether, became a top 5 cryptocurrency, as well as a battle-tested stable coin; even though earlier in the year, it released evidence that 2.9% of USDT is backed by actual cash and over 65% of it is backed by commercial paper. Tether also settled its dispute with the Attorney General’s Office of New York. ",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/USDT#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 2850,
    description: "\nTicker/ Name: XRP    \nAward: Top 10 Crypto 2021    \nWebsite: https://ripple.com/    \nNews: Ripple Labs, the company behind the popular token $XRP ended the previous year with two of its top executives being sued by the SEC (Securities and Exchange Commission) for selling its token as an unregistered security. This caused MoneyGram and Ripple to split. Despite the ongoing litigation in the USA, Ripple became the most popular crypto used by UK retail investors. Ripple dipped their toes in the NFT filled waters and gained some major traction with the Royal Monetary Authority of Bhutan, and the National Bank of Egypt.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/XRP#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 3325,
    description: "\nTicker/ Name: SOL    \nAward: Top 10 Crypto 2021    \nWebsite: https://solana.com/    \nNews: Solana entered the crypto market guns blazing, after raising over $300 million, it helped lead the way to the 2021 crypto market recovery in the lead of ADA and LTC. Seeing its value spiking from $20 to over $250, its coin definitely shows potential. After the market quieted, Solana is still being traded at over $200, and was added to the Greyscale Portfolio along with UniSwap. The Bahamian exchange FTX created an NFT trading space for users to mint, authenticate and trade them on the Solana chain.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/SOL#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 3800,
    description: "\nTicker/ Name: DOGE    \nAward: Top 10 Crypto 2021    \nWebsite: https://dogecoin.com/    \nNews: Dogecoin unprecedented rise took the world by storm. DOGE became an overnight sensation after being promoted by rockstars, rappers, a pornstar and the world's richest man. Elon Musk. The pump of Doge coincided with market frenzy after the Reddit group Walletstreet Bets suggested investments in it, along with GameStop, AMC. After Elon Musk ego, and lack of humor stopped the meme coin space ambition, the market was flooded with a new wave of dog-based meme tokens (ASS, SHIB, FLOKI, ELON).",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/DOGE#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 4275,
    description: "\nTicker/ Name: USDC    \nAward: Top 10 Crypto 2021    \nWebsite: https://www.centre.io/usdc    \nNews: After splitting from Ripple, and partnering with its competitor Stellar, MoneyGram will settle payments with Circle’s stablecoin, USDC. Circle also made plans to be 100% backed by cash. Visa is currently in trials to have USDC cards released next year. All this while being investigated by the SEC. Circle has stated that they are complying fully with the investigation.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/USDC#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 4750,
    description: "\nTicker/ Name: DOT    \nAward: Top 10 Crypto 2021    \nWebsite: https://polkadot.network/    \nNews: Polkadot has also quietly made its way to a top ten position. However, it appears to not have any major news to make it to the headlines. It has one noteworthy upcoming release with the Polkadot-Kusama bridge that will be released at the end of 2021.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/DOT#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 5225,
    description: "\nTicker/ Name: LUNA    \nAward:  Top 20 Crypto 2021    \nWebsite: https://terra.money/    \nNews: Another project to appear in this 2021 market run, is Terra Luna, which outperformed Bitcoin in growth. Terra was soon oversold and after a market correction, a series of speculative articles about price skyrocketing was released. Working in the DeFi space, and having its own stable coin, helped $LUNA take a spot in the top 20 projects of 2021.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/LUNA#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 5700,
    description: "\nTicker/ Name: UNI    \nAward: Top 20 Crypto 2021    \nWebsite: https://uniswap.org/    \nNews: The Age of DeFi has begun, and UniSwap is the forerunner. However, being the first also means that oversight and regulation come knocking. The U.S Securities and Exchange Commission (SEC), started an investigation on Uniswap Labs which caused the removal of over 100 tokens from its main platform. Some users were upset by this removal, but the move has had little to no effect on the platform's token, $UNI.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/UNI#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 6175,
    description: "\nTicker/ Name: BUSD    \nAward: Top 20 Crypto 2021    \nWebsite: https://www.binance.com/en/busd    \nNews: Binance’s CEO, CZ is always innovating, making Binance an unstoppable titan in the blockchain space. After the creation of Binance Smart Chain, it was a no-brainer to mint US dollar-backed tokens for Binance users, $BUSD. Being used on crypto’s biggest trading platform, ensuring that $BUSD became a top 20 coin.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/BUSD#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 6650,
    description: "\nTicker/ Name: LTC    \nAward: Top 20 Crypto 2021    \nWebsite: https://litecoin.org/    \nNews: Litecoin, the first of the alt-coins, has seen its dominance being challenged, going from a top 3 or 4 position, slide down to a top 20 coin. At one point in this tuff year, $LTC’s value jumped to $380, and consolidated with the rest of the market space, staying around the $200 mark. The price had a massive rollercoaster of change, after rumors of a partnership between the Litecoin Foundation and Walmart, but the price eventually returned back to its lower price when the rumor was determined to be untrue.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/LTC#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 7125,
    description: "\nTicker/ Name: LINK    \nAward: Top 20 Crypto 2021    \nWebsite: https://chain.link/    \nNews: Chainlink, was enjoying a moment of high valuation at the beginning of the year, which ended when Elon Musk tweeted and a market sell-off followed. However, multiple projects in the crypto space need Chainlink. Cardano and Chainlink partnered to create a smart contract for secure DeFi applications. Another project Gemini, is using Chainlink in tandem with a Wrapped Filecoin to implement audits. The Associated Press is looking at Chainlink blockchain to call the 2021 US state elections, as well as sports data.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/LINK#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 7600,
    description: "\nTicker/ Name: ALGO    \nAward: Top 20 Crypto 2021    \nWebsite: https://www.algorand.com/    \nNews: Algorand is another of the quiet climbers of 2021. While Bitcoin is in the limelight of the news cycle, Algorand’s chain was used to produce the world’s first national digital currency in the Marshall Islands, a small Pacific Island nation, of just 60,0000 people, If they succeed, Algorand would then be free to replicate and scale the model for other locations. In addition, Coinbase has continued to offer users a 4% annual return for its customer's holding, even though it's currently being investigated by the SEC.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/ALGO#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 8075,
    description: "\nTicker/ Name: MATIC    \nAward: Top 20 Crypto 2021    \nWebsite: https://polygon.technology/    \nNews: Originally started on the Ethereum blockchain under the name MATIC as an ERC20 coin this is a protocol made to revolutionize ETH gas problems. With its current change from Proof of Work to Proof of Stake, the cryptocurrency also underwent a name change to Polygon. For most of 2021 Polygon stayed out of the limelight however towards the end of the year there was a massive increase in price that placed Polygon into the top twenty coins while the rest of the market was looking bearish.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/MATIC#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 8550,
    description: "\nTicker/ Name: WBTC    \nAward: Top 20 Crypto 2021    \nWebsite: https://wbtc.network/    \nNews: Wrapped Bitcoin, is $BTC locked into an exchange and the value transferred into an $ETH token. This allows users to deploy smart contracts with $WBTC, as well as trading on Ethereum based DEX like Uniswap. So far 1.3% of Bitcoin has been wrapped giving DeFi capabilities to Bitcoin, like APY earnings.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/WBTC#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 9025,
    description: "\nTicker/ Name: SHIB    \nAward: Top 20 Crypto 2021    \nWebsite: https://shibatoken.com/    \nNews: Shiba Inu has been one of the brightest stars of 2021. Known as the Dogekiller $SHIB was created only a year ago, and has ridden on the coattails of Doge into a comfortable position in the top 20. As a result of Elon Musk’s love of DOGE, or his insatiable urge to be the center of attention, a MEME coin hype was born. At the hype of the dog meme coin hype, even the Ethereum founder donated trillions of meme tokens, $SHIB included. The 2021 market boom will be remembered as a meme token frenzy, and Shiba is leading the pack.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/SHIB#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 9500,
    description: "\nTicker/ Name: AVAX    \nAward: Top 20 Crypto 2021    \nWebsite: https://avax.network/    \nNews: 2021 saw the Avalanche price tied to chains like Solana and Algorand, but hasn’t made such waves in the crypto news cycle until an end of the year spike. $AVAX saw its price drop from the Evergrande sell-off but rebounded safely. The best news for this project is the partnership with Andretti Formula E Racing.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/AVAX#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 9975,
    description: "\nTicker/ Name: Binance    \nAward: Top 5 Exchange 2021    \nWebsite: https://www.binance.com/    \nNews: 2021 has seen Binance get hit with so many hurdles, most exchanges would have packed up shop and close. But Binance isn’t most exchanges; the CEO CZ, has not only preserved but continued innovating. Not only has he been open about collaborating with every individual country's regulatory request, he even offered to step down. The hard work of CZ and Binance has seen two major positive developments to overcome the bad press. The development of Smart contracts and NTF’s ensured that Binance remains in the top 5 exchanges.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Binance#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 10450,
    description: "\nTicker/ Name: Coinbase    \nAward: Top 5 Exchange 2021    \nWebsite: https://pro.coinbase.com/    \nNews: Coinbase, one of the oldest fiat to crypto firms, became a publicly-traded stock in 2021. As a result, it’s CEO, Brian Armstrong became one of the world’s richest persons; and has been criticized as ‘going to the dark side’. Coinbase also shocked the crypto community by listing the MEME coin $DOGE. The crypto market responded by saying that the legendary ‘Coinbase effect’ has evaporated; like the respect held by the crypto community for Coinbase listing. To add to the fire, Mr. Armstrong has also gotten into a public fight with the SEC’s Chairman Gary Gensler. Not all was bad for Coinbase, as Facebook turned to them for help with the crypto space, towards the end of the year, Coinbase announced that its platform would support for NFT’s.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Coinbase#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 10925,
    description: "\nTicker/ Name: FTX    \nAward: Top 5 Exchange 2021    \nWebsite: https://ftx.com/    \nNews: One day, we woke up and Blockfolio was gone. It was a new company named FTX, after which it was everywhere. From backdrops during baseball games to crypto news headlines NFT’s based on Solana, and more importantly, less expensive than Ethereum. FTX has also made big headlines, by changing the American Airlines Arena, home to the Miami Heat, to the FTX Arena. There are reports that FTX is also looking to buy the naming rights for the California Memorial Stadium. To name a few of the things that FTX CEO Sam Bankman-Fried had planned for 2021.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/FTX#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 11400,
    description: "\nTicker/ Name: Kraken    \nAward: Top 5 Exchange 2021    \nWebsite: https://www.kraken.com/    \nNews: The CEO of Kraken Jesse Powell was who made it into the news more times than the exchange did in 2021. He was constantly interviewed for his (considered at the time) outlandish Bitcoin predictions. He also tweeted Mark Cuban warning him about promoting cryptocurrencies online. Also, Kraken put out a report saying that Bitcoin ATMs were easily hackable. Finally, Kraken, not to be outdone by Coinbase, announced its IPO for the subsequent year.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Kraken#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 11875,
    description: "\nTicker/ Name: KuCoin    \nAward: Top 5 Exchange 2021    \nWebsite: https://www.kucoin.com/    \nNews: KuCoin made the news, but not for the right reason. The PancakeSwap DEX built on Binance Smart Chain gained more trade volume than both KuCoin and FTX combined. Later KuCoin launched the main net of its Community Chain (KCC) and migrated it’s exchange token $KCS to it. KuCoin also joined the NFT market with its own NFT minting marketplace and its KCL airdrop dApp service.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/KuCoin#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 12350,
    description: "\nTicker/ Name: dYdX    \nAward: Top 5 DEX 2021    \nWebsite: https://trade.dydx.exchange/    \nNews: With its combination of low fees, user rewards, and perpetual futures contract, the DEX known as dYdX joined the fight for the top exchanges. This DeFi exchange trading volume has even managed to surpass Coinbase, for one day in 2021. Its increased use may have resulted in the People’s Bank of China claiming that ‘cryptocurrencies are not legal, nor should they, and cannot be used as a currency in the market’ As China clamps down on cryptocurrency exchanges, the natural progression of trading is to move to decentralized platform and DeFi.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/dYdX#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 12825,
    description: "\nTicker/ Name: PancakeSwap    \nAward: Top 5 DEX 2021    \nWebsite: https://pancakeswap.finance/    \nNews: PancakeSwap is turning into the most secured DeFi protocol on the Binance Smart Chain, this decentralized finance protocol token was built using the BEP-2 format by a former Binance employee in 2020, In order to ensure its security, it was audited by a leading smart contract security firm named CertiK. It has risen to the rank of the top five DEX of 2021. Towards the end of this year, there are rumors that it will have NFT functionality in its marketplace.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/PancakeSwap#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 13300,
    description: "\nTicker/ Name: Uniswap    \nAward: Top 5 DEX 2021    \nWebsite: https://uniswap.org/    \nNews: Uniswap like many DEX platforms has benefited from the China ‘Clampdown’ on cryptocurrency. The 2021 clampdown has shown that people who trade crypto, aren’t willing to stop, even when the government tries to stop it. Uniswap seemingly bowed to regulations and removed many tokens, but that didn’t seem to stop its progression. The token $UNI also serves as a governance token for the ecosystem of this DEX. Its holders are allowed to vote and choose the direction towards the future of the DEX. Through $UNI there is also the potential of receiving shares of the revenue in the future.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Uniswap#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 13775,
    description: "\nTicker/ Name: 1 Inch    \nAward: Top 5 DEX 2021    \nWebsite: https://1inch.io/    \nNews: While many DEX had a great year in 2021, 1 Inch was hit by the regulatory hammer. As a result, they started GEOfencing US clients, even with the use of VPN. The move is reportedly the precursor for an American product launch. 1 Inch, is currently raising funding for its new product and plans to deploy it soon.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/1Inch#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 14250,
    description: "\nTicker/ Name: SushiSwap    \nAward: Top 5 DEX 2021    \nWebsite: https://app.sushi.com/swap    \nNews: SushiSwap has also benefited from the ‘2021 Chinese crypto clampdown’. However, the DEX was hit with some bad news, notably by the SEC investigating them. Also, a white-hat hacker reported that their smart contract had vulnerabilities, which could place more than $1 billion worth of user funds at risk. The hacker proceeded to reach out to SushiSwap but was ignored, and as a result, went public with their findings. The SushiSwap developers are denying the claims.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/SushiSwap#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },
  {
    growEditionSizeTo: 14725,
    description: "\nTicker/ Name: OpenSea    \nAward: Top 5 NFT Marketplace 2021    \nWebsite: https://opensea.io/    \nNews: Opensea’s is both the first and largest NFT marketplace. They offer collectibles and in-game items, artwork, music, gifs and more. Opensea’s was hit with a vulnerability that allowed users’ crypto to be stolen through the deployment of malicious NFT’s. Another hit against this platform happened after one of their employees was also caught and fired for insider trading. However, Opensea remains the top NFT marketplace in 2021.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/OpenSea#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 15200,
    description: "\nTicker/ Name: Rarible    \nAward: Top 5 NFT Marketplace 2021    \nWebsite: https://rarible.com/    \nNews: Rarible is a unique NFT platform, due to its nature as being community-owned. Offering a range of digital art and collectibles and a pretty easy-to-use interface, they are making NFT’s simple enough for crypto beginners to use. Rarible also introduced a zero-cost NFT minting feature in 2021, and released their native token which is now listed on Coinbase.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Rarible#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 15675,
    description: "\nTicker/ Name: SuperRare    \nAward: Top 5 NFT Marketplace 2021    \nWebsite: https://superrare.com/    \nNews: SuperRare, comes off as the higher-end alternative to Rarible; presenting NFT’s through a minimalist interface, it presents itself as a more social-minded platform. Art must be submitted and approved before it can be listed. The Anti-Putin punk group Pussy Riot released an NFT on SuperRare in 2021. Other noteworthy NFT drops came from Studio 54 and the world-renowned photographer Bill Bernstein.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/SuperRare#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 16150,
    description: "\nTicker/ Name: Foundation    \nAward: Top 5 NFT Marketplace 2021    \nWebsite: https://foundation.app/    \nNews: Foundation likes to identify itself as a creative playground for artists. Without being a major headliner in 2021, it flew under the radar and remained a top NFT marketplace. Notable NFT’s minted was Edward Snowden’s first, the MEME Nyan Cat; another notable NFT was minted by the electronic musician Aphex Twin.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Foundation#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 16625,
    description: "\nTicker/ Name: Nifty Gateway    \nAward: Top 5 NFT Marketplace 2021    \nWebsite: https://niftygateway.com/    \nNews: The NFT platform Nifty Gateway is backed by the Gemini Exchange. In 2021, Aku was released on the exchange and sold for over $2 million, Aku is an animated black astronaut that became the first NFT to be optioned in a future film. In the same year, Amir Soleymani (aka ‘Mondoir’) filed a legal suit against Nifty Gateway, for allegedly changing the terms of its sale, of the NFT Beeple’s Abundance.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Nifty Gateway#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 17100,
    description: "\nTicker/ Name: AXS    \nAward: Top 5 Collectibles & NFTs Tokens 2021    \nWebsite: https://axieinfinity.com/    \nNews: Axie Infinity is an NFT PVP battle-style game where users play-to-earn in-game currency $AXS which can be redeemed for fiat. The game has animated characters known as Axie’s, which players can collect, and take care of. The amount of earnings a player can receive daily has caused the game to gain worldwide traction; and for some people became a source of income. In some countries, individuals reported that playing the game gives them more revenue than an average day’s labor. The Philippines has told Axie Infinity players that they must report their earnings and pay taxes on them.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/AXS#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 17575,
    description: "\nTicker/ Name: XTZ    \nAward: Top 5 Collectibles & NFTs Tokens 2021    \nWebsite: https://www.tezos.com/    \nNews: Tezos has been positioned as an alternative to Ethereum ever since it was created. The network allows users to execute p2p transactions as well as act as a smart contract platform. Tezos made it to the headlines in 2021 for its good market performances and as a cryptocurrency of interest to Bank of America. Arab Bank Switzerland announced that they would integrate staking, trading, and custody services built with the Tezos blockchain.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/XTZ#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 18050,
    description: "\nTicker/ Name: THETA    \nAward: Top 5 Collectibles & NFTs Tokens 2021    \nWebsite: https://www.thetatoken.org/    \nNews: A video-streaming Blockchain, THETA is a product between Steve Chen, co-founder of YouTube, and Justin Kan, co-founder of Twitch. The two wish to shake up the video-streaming industries by allowing creators to earn more revenues and remove barriers between them and end-users. It is therefore not shocking that $THETA did well in 2021 with its backing of corporate investors like Samsung NEXT, Sony, and Sierra Ventures.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/THETA#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 18525,
    description: "\nTicker/ Name: CHZ    \nAward: Top 5 Collectibles & NFTs Tokens 2021    \nWebsite: https://www.chiliz.com/    \nNews: Chiliz is a sports and entertainment digital currency, made to facilitate interactions between fans and the governance of their sports brand. Creating a bridge for fans to show their colors, Chiliz has partnered with some of the largest sports brands in the world, FC Barcelona, Manchester City, Juventus Turin, and Paris Saint-Germain. Chiliz also boasts partnerships with the UFC, The Brooklyn Nets, and the Milwaukee Bucks.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/CHZ#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 19000,
    description: "\nTicker/ Name: MANA    \nAward: Top 5 Collectibles & NFTs Tokens 2021    \nWebsite: https://decentraland.org/    \nNews: Decentraland is an Ethereum based virtual reality platform that allows users to play in a virtual world, where they can purchase, develop and monetize ‘plots of land’. Decentraland is building a metaverse with 90,601 parcels of land using ERC-721 standard NFT’s with a specific location within their world. One of their top news stories for 2021 was the Metaverse festival, which has seen participation of over 80 world-renown artists such as Paris Hilton, Deadmau5, Alabaster dePlume and 3Lau.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/MANA#10",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 19200,
    description: "\nTicker/ Name: OneCoin    \nAward: Top 5 All-Time Scandals    \nWebsite: https://en.wikipedia.org/wiki/OneCoin    \nNews: Known as “One” (no pun intended) of the biggest scams in history, led by Ruja Ignatova also known as the “Cryptoqueen” a convicted Bulgarian fraudster. After seeing the value of bitcoin jumping from $120 to more than 1000 overnight, she saw early adopters getting rich, fast, and she would capitalize on this. She created a company, Onecoin, from which she proceeded to raise capital, woo investors and travel from event to event, promising them a once-in-a-lifetime opportunity. One of the biggest flaws of Onecoin was that it didn't exist on a blockchain, and the Cryptoqueen vanished with $7.5 billion in Bitcoin.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/OneCoin#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 19400,
    description: "\nTicker/ Name: Bitconnect    \nAward: Top 5 All-Time Scandals    \nWebsite: https://en.wikipedia.org/wiki/Bitconnect    \nNews: Bitconnect, is also referred to as a textbook case Ponzi Scheme; due to its multi-level marketing structure. At one time, this project saw itself in the top 20 cryptocurrency projects, due to outrageously attractive 1% daily compounded interest payouts. As well as highly popular YouTube influencers, who shared their riches and gains made with this project. In 2021, the U.S Securities and Exchange Commission (SEC) sued Bitconnect, alleging that it defrauded U.S investors to the tune of $2 billion USD.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Bitconnect#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    growEditionSizeTo: 19600,
    description: "\nTicker/ Name: Silk Road    \nAward: Top 5 All-Time Scandals    \nWebsite: https://en.wikipedia.org/wiki/Silk_Road_(marketplace)    \nNews: The Silk Road was a modern darknet marketplace built on the TOR infrastructure. TOR is a protocol built by the US Navy to obfuscate online activity. In addition, the transactions on the Silk Road were made using Bitcoin (at the time, it was believed Bitcoin was untraceable). Ross Ulbricht, the Silk Road creator, built an eBay-style market for black market activities and illicit drugs, resulting in his arrest by the FBI. They seized $1 billion USD worth of Bitcoin, as well as charged Ross with several different charges related to the Silk Road. He was subsequently sentenced to life in prison with no possibility of parole. In 2021, Binance hired two former US agents that had probed into the Silk Road and Mt. Gox. In 2021, a movie called Silk Road was released, highlighting the dubious nature of Mr. Ulbricht's arrest and his life sentencing.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Silk Road#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 19800,
    description: "\nTicker/ Name: Africrypt    \nAward: Top 5 All-Time Scandals    \nWebsite: https://en.wikipedia.org/wiki/Cryptocurrency    \nNews: South Africa had seen a large number of scams related to cryptocurrency in 2021. South Africa’s biggest scam other than FluffyPony and a cookie company fraud was Africrypt. Two brothers Raees Cajee and Ameer Cajee disappeared with $3.8 billion worth of Bitcoin. The brothers however said that much less is missing (closer to $5 Million) and that they are in hiding because they have been receiving death threats. The brothers say that the missing Bitcoin was hacked but suspicion arose due to the fact that the timing of the hack was when Bitcoin hit an all-time high in the middle of the year.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Africrypt#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 20000,
    description: "\nTicker/ Name: Mt. Gox    \nAward: Top 5 All-Time Scandals    \nWebsite: https://en.wikipedia.org/wiki/Mt._Gox    \nNews: Mt. Gox, was the world's largest cryptocurrency exchange, at one time handling 70% of all Bitcoin transactions. Its original design however was to be a Magic the Gathering card trading platform. M.T.G.O.X is an acronym that means “Magic: The Gathering Online eXchange ''. The safety protocols of the exchange were extremely weak and eventually, someone stole 25 000 BTC ($400,000 at the time) from 478 user accounts. In addition, the user database was hacked and the information was sold online. Furthermore, the hackers gained control of the platform and were able to create sell orders in order to liquidate the stolen Bitcoins, causing a crash in the value of $BTC. Withdrawals were halted, trading was suspended and unsurprisingly Mt. Gox closed its doors, and filed for bankruptcy. In 2021, CoinLab Inc. reached an agreement with Mt. Gox trustee, Nobuaki Kobayashi, and Mt. Gox Investment Fund LP (MGIFLP) to the effect that 90% of the remaining Bitcoin stuck in the bankruptcy proceedings be offered to the creditors.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/RegSlang", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Mt.Gox#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 20105,
    description: "\nTicker/ Name: CryptoStache    \nAward: OG NFT Gaming Influencer    \nWebsite: https://www.youtube.com/c/CryptoStache    \nNews: Daily videos on NFTs, Metaverse, NFT Gaming and how to make money playing crypto games even for people that are not professional gamers. The OG NFT gaming channel since 2018. With Facebook becoming Meta and changing the world’s view and focus towards the metaverse it is only a matter of time for his channel to blow up. Non-fungible Covfefe’s founder joined the CryptoStache team in 2021.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/CryptoStache", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/CryptoStache#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },

  {
    
    growEditionSizeTo: 20210,
    description: "\nTicker/ Name: Hashlips    \nAward: OG NFT Coder    \nWebsite: https://www.youtube.com/c/HashLipsNFT    \nNews: Hashlips show awesome things you can do with code. He also does a great job of being as descriptive as possible when making tutorials. He mostly focuses on blockchain technology but that is not always the case. Non-fungible Covfefe was made with his tools and tutorials.",
    layersOrder: [
      { name: "Background" },
      { name: "Slang/Hashlips", blend: MODE.difference, opacity: 1.0,
        options: {
        displayName: "Slang",  
        }
      },
      { name: "Pattern", blend: MODE.overlay, opacity: 0.55 },
      { name: "Coffee" },
      { name: "Cup" },
      { name: "Logo/Hashlips#5",
        options: {
        displayName: "Logo",
        }
      },
      { name: "Shine" },
      { name: "Topper" },
      { name: "Extras" },
      { name: "NFC" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3300,
  height: 3300,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {
  Website: "bit.ly/nofunfefe",
  Twitter: "@NoFunFefe",
  Discord: "discord.gg/NP78sB3pw"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 20210;

const preview = {
  thumbPerRow: 10,
  thumbWidth: 60,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
