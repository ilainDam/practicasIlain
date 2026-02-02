import { Auction, AuctionAnswer } from "./types.js";
import axios from "axios";
export async function getUsers() {

    let auctionList = await (await axios.get<AuctionAnswer>("https://api.hypixel.net/v2/skyblock/auctions")).data
    let auctions = auctionList.auctions.slice(100)
    for (const auction of auctions) {
        let userName = await (await axios.get(`https://api.ashcon.app/mojang/v2/user/${auction.auctioneer}`)).data.username
        console.log(`${auction.auctioneer} | ${userName}`);
    }
}