import * as Types from "./types.js";
import fs from "fs/promises"
import axios from "axios";
export async function getUsers(ApiKey: string) {
    let playerJsonList: {
        uuid: string;
        username: string;
        experience: Types.Experience;
    }[] = []
    let auctionList = await (await axios.get<Types.AuctionAnswer>("https://api.hypixel.net/v2/skyblock/auctions")).data
    let auctions = auctionList.auctions.slice(0, 100)
    for (const auction of auctions) {
        //Conseguir datos del usario y pedir datos a la API
        let userUUID = auction.auctioneer;
        let userName = await (await axios.get(`https://api.ashcon.app/mojang/v2/user/${userUUID}`)).data.username
        let profile = (await axios.get<Types.Profiles>(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${userUUID}`, { headers: { "API-Key": ApiKey } })).data
        let member = profile.profiles[0].members[userUUID]
        //Comprobaciones para añadir al json
        if (playerJsonList.length < 100) {
            if (playerJsonList.find((p) => p.uuid == userUUID) == undefined && member.player_data.experience) {
                console.log(userName)
                playerJsonList.push({
                    uuid: userUUID,
                    username: userName,
                    experience: member.player_data.experience
                })
            }
        } else {
            break;
        }
    }
    fs.writeFile("playerInfo.json", JSON.stringify(playerJsonList,null,2))
}
