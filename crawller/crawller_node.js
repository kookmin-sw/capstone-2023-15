const OpenseaScraper = require("opensea-scraper");

// which nft project to scrape?
const slug = "boredapeyachtclub";

const test = async () => {

    // options
    const options = {
        debug: false,
        logs: false,
        sort: true,
        additionalWait: 0,
        browserInstance: undefined,
    }

    // get basic info (from the opensea API)
    const basicInfo = await OpenseaScraper.basicInfo(slug);

    // get offers from opensea. Each offer includes the 
    // floor price, tokenName, tokenId, tokenContractAddress
    // and offerUrl
    // scrapes only the first 20 offers from opensea.
    let result = await OpenseaScraper.offers(slug, options);
    console.dir(result, { depth: null }); // result object contains keys `stats` and `offers`

    // get offers from opensea using a custom link
    // Opensea supports encoding filtering in the URL so 
    // this method is helpful for getting a specific asset 
    // (for example floor price for a deadfellaz with  
    // a purple fur trait)
    // let url = "https://opensea.io/collection/deadfellaz?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Body&search[stringTraits][0][values][0]=Purple%20Fur&search[toggles][0]=BUY_NOW";
    // result = await OpenseaScraper.offersByUrl(url, options);
    // // result object contains keys `stats` and `offers`
    // console.dir(result, { depth: null });

    // // DISCLAIMER: FUNCTION `offersByScrolling`
    // // IS CURRENTLY NOT WORKING (!!!) see [issue#36](https://github.com/dcts/opensea-scraper/issues/36)
    // // get offersByScrolling from opensea. This is an 
    // // alternative method to get the same data as with
    // // the function `offers`, with the only difference 
    // // that the data is here scraped actively by scrolling 
    // // through the page. This method is not as efficient
    // // as the `offers` method, but it can scrape more 
    // // than 20 offers. You could even scrape a whole 
    // // collection with ~10k spots (this is not recommended 
    // // though).
    // // IMPORTANT: if you need less than 20 offers, 
    // // please use the function `offers()` instead
    // let resultSize = 40;
    // result = await OpenseaScraper.offersByScrolling(slug, resultSize, options);
    // // result object contains keys `stats` and `offers`
    // console.dir(result, { depth: null });

    // // DISCLAIMER: FUNCTION `offersByScrollingByUrl`
    // // IS CURRENTLY NOT WORKING (!!!) see [issue#36](https://github.com/dcts/opensea-scraper/issues/36)
    // // get offersByScrollingByUrl from opensea using a 
    // // custom link instead of the slug. the same logic 
    // // applies as in `offersByScrolling()`
    // // Opensea supports encoding filtering in the URL so 
    // // this method is helpful for getting a specific asset 
    // // (for example floor price for a deadfellaz with  
    // // a purple fur trait)
    // // IMPORTANT: if you need less than 20 offers, 
    // // please use the function `offersByUrl()` instead
    // url = "https://opensea.io/collection/deadfellaz?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Body&search[stringTraits][0][values][0]=Purple%20Fur&search[toggles][0]=BUY_NOW";
    // resultSize = 40;
    // result = await OpenseaScraper.offersByScrollingByUrl(url, resultSize, options);
    // // result object contains keys `stats` and `offers`
    // console.dir(result, { depth: null });

    // // scrape all slugs, names and ranks from the top collections from the rankings page
    // // "type" is one of the following:
    // //   "24h": ranking of last 24 hours: https://opensea.io/rankings?sortBy=one_day_volume
    // //   "7d": ranking of last 7 days: https://opensea.io/rankings?sortBy=seven_day_volume
    // //   "30d": ranking of last 30 days: https://opensea.io/rankings?sortBy=thirty_day_volume
    // //   "total": scrapes all time ranking: https://opensea.io/rankings?sortBy=total_volume
    // // "chain" is one of the following: "ethereum", "matic", "klaytn", "solana"
    // //    if chain is unset, all chains will be selected by default
    // const type = "24h"; // possible values: "24h", "7d", "30d", "total"
    // const chain = "solana";
    // const ranking = await OpenseaScraper.rankings(type, chain, options);
}

test();