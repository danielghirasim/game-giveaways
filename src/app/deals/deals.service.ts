import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Deal } from './deal.model';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  dealsModified = new Subject<Deal[]>();

  // deals: Deal[] = [
  //   {
  //     id: 795,
  //     title: "World's Dawn (PC)",
  //     worth: '$9.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6067069147de1.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6067069147de1.jpg',
  //     description:
  //       "Download World's Dawn (PC) for free via IndieGala! World's Dawn is a social sim inspired by the Harvest Moon series. Check it out at no cost!",
  //     instructions:
  //       '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/world-s-dawn-pc',
  //     published_date: '2022-04-26 02:59:57',
  //     type: 'Game',
  //     platforms: 'PC, DRM-Free',
  //     end_date: 'N/A',
  //     users: 6980,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/world-s-dawn-pc',
  //     open_giveaway: 'https://www.gamerpower.com/open/world-s-dawn-pc',
  //   },
  //   {
  //     id: 1475,
  //     title: 'SMITE Cosmic Power Anubis Skin Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6266e617da148.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6266e617da148.jpg',
  //     description:
  //       'Claim your free SMITE Cosmic Power Skin key for Anubis and unleash world-dominating power!',
  //     instructions:
  //       '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/smite-cosmic-power-anubis-skin-key-giveaway',
  //     published_date: '2022-04-25 20:19:03',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 860,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/smite-cosmic-power-anubis-skin-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/smite-cosmic-power-anubis-skin-key-giveaway',
  //   },
  //   {
  //     id: 1474,
  //     title: 'Lamp Head',
  //     worth: '$4.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6262ed316973d.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6262ed316973d.jpg',
  //     description:
  //       'Claim a free copy of Lamp Head via IndieGala! Lamp Head is a small indie game where you play as a strange man with a lamp in his head.',
  //     instructions:
  //       '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/lamp-head',
  //     published_date: '2022-04-22 20:00:17',
  //     type: 'Game',
  //     platforms: 'PC, DRM-Free',
  //     end_date: 'N/A',
  //     users: 3370,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/lamp-head',
  //     open_giveaway: 'https://www.gamerpower.com/open/lamp-head',
  //   },
  //   {
  //     id: 1473,
  //     title: 'KAREN SEES',
  //     worth: '$3.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6261fcf27c213.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6261fcf27c213.jpg',
  //     description:
  //       'Grab KAREN SEES for free on itch.io! KAREN SEES is a fast-paced horror game where you play as a night guard. Check it out!',
  //     instructions:
  //       '1. Click the button "Download or Claim" before the offer expires.\r\n2. Login into your itch.io account to access the game.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/karen-sees',
  //     published_date: '2022-04-22 02:55:14',
  //     type: 'Game',
  //     platforms: 'PC, Itch.io, DRM-Free',
  //     end_date: 'N/A',
  //     users: 2680,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/karen-sees',
  //     open_giveaway: 'https://www.gamerpower.com/open/karen-sees',
  //   },
  //   {
  //     id: 1471,
  //     title: 'Amnesia: Rebirth',
  //     worth: '$29.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/62617641868dc.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/62617641868dc.jpg',
  //     description:
  //       'Score Amnesia: Rebirth for free on Epic Games Store! Amnesia: Rebirth is a first-person horror adventure game with lots of monsters and puzzles to solve.',
  //     instructions:
  //       '1. Log in to your Epic Games Store account.\r\n2. Click the "GET" button to add the game to your library.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/amnesia-rebirth',
  //     published_date: '2022-04-21 17:20:33',
  //     type: 'Game',
  //     platforms: 'PC, Epic Games Store',
  //     end_date: '2022-04-28 23:59:00',
  //     users: 9320,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/amnesia-rebirth',
  //     open_giveaway: 'https://www.gamerpower.com/open/amnesia-rebirth',
  //   },
  //   {
  //     id: 1470,
  //     title: 'Riverbond',
  //     worth: '$24.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6261750c3d354.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6261750c3d354.jpg',
  //     description:
  //       'Get Riverbond for free via Epic Games Store! Riverbond is a fun couch co-op adventure game for 1 to 4 players set in a destructible voxel world.',
  //     instructions:
  //       '1. Log in to your Epic Games Store account.\r\n2. Click the "GET" button to add the game to your library.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/riverbond',
  //     published_date: '2022-04-21 17:15:24',
  //     type: 'Game',
  //     platforms: 'PC, Epic Games Store',
  //     end_date: '2022-04-28 23:59:00',
  //     users: 8460,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/riverbond',
  //     open_giveaway: 'https://www.gamerpower.com/open/riverbond',
  //   },
  //   {
  //     id: 1463,
  //     title: 'Dino Island - The Four Crystals',
  //     worth: '$1.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/625e281a694ba.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/625e281a694ba.jpg',
  //     description:
  //       'Download Dino Island - The Four Crystals for free via itch.io! Dino Island - The Four Crystals is an indie platform game with pixel-art graphics and more than 40 levels to explore.',
  //     instructions:
  //       '1. Click the button "Download or Claim" before the offer expires.\r\n2. Login into your itch.io account to access the game.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/dino-island-the-four-crystals',
  //     published_date: '2022-04-19 05:10:18',
  //     type: 'Game',
  //     platforms: 'PC, Itch.io, DRM-Free',
  //     end_date: 'N/A',
  //     users: 2980,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/dino-island-the-four-crystals',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/dino-island-the-four-crystals',
  //   },
  //   {
  //     id: 1441,
  //     title: 'Genshin Impact v2.6 50 Primogems Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6245cf27d3a40.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6245cf27d3a40.jpg',
  //     description:
  //       'Claim your free Genshin Impact v2.6 50 Primogems Key! Please note a 50 Primogems key can only be redeemed once per account on v2.6.',
  //     instructions:
  //       '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Redeem your key at https://genshin.hoyoverse.com/en/gift',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/genshin-impact-v2-6-50-primogems-key-giveaway',
  //     published_date: '2022-04-18 18:42:06',
  //     type: 'DLC',
  //     platforms: 'PC, Playstation 5, Playstation 4, Android, iOS',
  //     end_date: 'N/A',
  //     users: 3800,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/genshin-impact-v2-6-50-primogems-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/genshin-impact-v2-6-50-primogems-key-giveaway',
  //   },
  //   {
  //     id: 771,
  //     title: 'BeeFense (PC)',
  //     worth: '$4.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/605aef0a9c3aa.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/605aef0a9c3aa.jpg',
  //     description:
  //       'Score BeeFense on PC for free via IndieGala! BeeFense is a Tower defense game inspired by fieldrunners. Check it out!',
  //     instructions:
  //       '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/beefense-pc',
  //     published_date: '2022-04-18 18:22:42',
  //     type: 'Game',
  //     platforms: 'PC, DRM-Free',
  //     end_date: 'N/A',
  //     users: 4860,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/beefense-pc',
  //     open_giveaway: 'https://www.gamerpower.com/open/beefense-pc',
  //   },
  //   {
  //     id: 1462,
  //     title: 'King of Dragon Pass',
  //     worth: '$11.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/625a3d01bddbb.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/625a3d01bddbb.jpg',
  //     description:
  //       'Claim King of Dragon Pass for free via IndieGala and create your own epic saga of survival! King of Dragon Pass is a unique mix of RPG, strategy, and story-telling! Check it out!',
  //     instructions:
  //       '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
  //     open_giveaway_url: 'https://www.gamerpower.com/open/king-of-dragon-pass',
  //     published_date: '2022-04-16 05:50:25',
  //     type: 'Game',
  //     platforms: 'PC, DRM-Free',
  //     end_date: 'N/A',
  //     users: 4420,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/king-of-dragon-pass',
  //     open_giveaway: 'https://www.gamerpower.com/open/king-of-dragon-pass',
  //   },
  //   {
  //     id: 1459,
  //     title: 'Dragon Raja Gift Pack CD Keys',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/62585cb1a13bf.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/62585cb1a13bf.jpg',
  //     description:
  //       'Claim your free Dragon Raja Gift Pack CD Key and unlock in-game items for Dragon Raja (PC version and Mobile version). Each pack includes 100000 Coins, Flames of Underworld and much more!',
  //     instructions:
  //       '1. Log in or register to your free MMOBomb account.\r\n2. Click the button to unlock your key and follow the giveaway instructions.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/dragon-raja-gift-pack-cdkeys',
  //     published_date: '2022-04-14 19:41:05',
  //     type: 'DLC',
  //     platforms: 'PC, Android, iOS',
  //     end_date: 'N/A',
  //     users: 1500,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/dragon-raja-gift-pack-cdkeys',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/dragon-raja-gift-pack-cdkeys',
  //   },
  //   {
  //     id: 1456,
  //     title: 'Black Desert Online Traveler Edition Key Giveaway',
  //     worth: '$9.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/62575ab1a7cbd.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/62575ab1a7cbd.jpg',
  //     description:
  //       'Claim your Black Desert Online Traveler Edition Key and unlock the full game for free! Step into the world of Black Desert now!',
  //     instructions:
  //       '1. Log in or register to your free Alienware Arena account.\r\n2. Click the button to unlock your key and follow the giveaway instructions.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/black-desert-online-traveler-edition-key-giveaway',
  //     published_date: '2022-04-14 01:20:17',
  //     type: 'Game',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 10280,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/black-desert-online-traveler-edition-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/black-desert-online-traveler-edition-key-giveaway',
  //   },
  //   {
  //     id: 1449,
  //     title: 'Scavengers 250 Chips Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/624efba4c3e9f.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/624efba4c3e9f.jpg',
  //     description:
  //       'Grab your free Scavengers In-Game Currency Key and unlock 250 Chips to redeem weapons, items,  and more. Please note the base game Scavengers (free-to-play) is required.',
  //     instructions:
  //       '1. Log in or register to your free Alienware Arena account.\r\n2. Click the button to unlock your key and follow the giveaway instructions.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/scavengers-250-chips-key-giveaway',
  //     published_date: '2022-04-07 16:56:36',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1210,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/scavengers-250-chips-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/scavengers-250-chips-key-giveaway',
  //   },
  //   {
  //     id: 1446,
  //     title: 'Killsquad Skin Pack Steam Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/624cb5eb01120.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/624cb5eb01120.jpg',
  //     description:
  //       'Claim your free Killsquad Skin Pack Steam Key and unlock unique SteelSeries Heroes Skins for Killsquad! Please note the base game is required.',
  //     instructions:
  //       '1. Log in to your free Seelseries account and click the button to unlock your key.\r\n2. Launch the Steam client and click the Games menu option.\r\n3. Choose "activate a Product on Steam" to redeem your key (Base game required).',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/killsquad-skin-pack-steam-key-giveaway',
  //     published_date: '2022-04-05 23:34:35',
  //     type: 'DLC',
  //     platforms: 'PC, Steam',
  //     end_date: 'N/A',
  //     users: 1300,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/killsquad-skin-pack-steam-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/killsquad-skin-pack-steam-key-giveaway',
  //   },
  //   {
  //     id: 1442,
  //     title: 'Midnight Ghost Hunt: Lars the Troll Steam Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6245d469da220.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6245d469da220.jpg',
  //     description:
  //       'Claim your free Midnight Ghost Hunt Exclusive Lars the Troll In-Game Item Key (Steam) and add Lars the Troll to your collection! Please note the base game Midnight Ghost Hunt is required to enjoy this DLC content.',
  //     instructions:
  //       '1. Log in to your free Seelseries account and click the button to unlock your key.\r\n2. Launch the Steam client and click the Games menu option.\r\n3. Choose "activate a Product on Steam" to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
  //     published_date: '2022-03-31 18:18:49',
  //     type: 'DLC',
  //     platforms: 'PC, Steam',
  //     end_date: 'N/A',
  //     users: 3610,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
  //   },
  //   {
  //     id: 1434,
  //     title: 'Heroes Evolved 5th Anniversary Pack Keys',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/623e1e7a83daf.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/623e1e7a83daf.jpg',
  //     description:
  //       'Claim your free Heroes Evolved 5th Anniversary Pack Key and unlock several in-game items for Heroes Evolved including 1000 Gold, 5 Skin Shards, and 5 Draw Vouchers!',
  //     instructions:
  //       '1. Log in to your MMOBomb account and click the button to unlock your reward.\r\n2. Follow the giveaways instructions to redeem your reward.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/heroes-evolved-5th-anniversary-pack-keys',
  //     published_date: '2022-03-25 20:56:42',
  //     type: 'DLC',
  //     platforms: 'Android, iOS',
  //     end_date: '2022-09-23 23:59:00',
  //     users: 1000,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/heroes-evolved-5th-anniversary-pack-keys',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/heroes-evolved-5th-anniversary-pack-keys',
  //   },
  //   {
  //     id: 1432,
  //     title: 'Dying Light 2: Wyvern Paraglider Skin',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/623cbd853b1cb.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/623cbd853b1cb.jpg',
  //     description:
  //       'Claim your free Dying Light 2: Wyvern Paraglider Skin! Please note the base game Dying Light 2 is required to enjoy this content.',
  //     instructions:
  //       '1. Scroll down and click the claim button\r\n2. Login or register your free TechlandGG account.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/dying-light-2-wyvern-paraglider-skin',
  //     published_date: '2022-03-24 19:50:45',
  //     type: 'DLC',
  //     platforms:
  //       'PC, Epic Games Store, Playstation 5, Xbox Series X|S, Playstation 4, Xbox One',
  //     end_date: 'N/A',
  //     users: 2620,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/dying-light-2-wyvern-paraglider-skin',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/dying-light-2-wyvern-paraglider-skin',
  //   },
  //   {
  //     id: 1429,
  //     title: 'Sacred 2 Fallen Angel (Xbox)',
  //     worth: '$19.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/623a67fe56f0e.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/623a67fe56f0e.jpg',
  //     description:
  //       'Grab Sacred 2 Fallen Angel (Xbox) for free on Microsoft store! This game is playable on Xbox One and Xbox Series X|S.',
  //     instructions:
  //       "1. Download directly via Microsoft Store before the offer expires!\r\n2. That's it, have fun!",
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/sacred-2-fallen-angel-xbox',
  //     published_date: '2022-03-23 01:21:18',
  //     type: 'Game',
  //     platforms: 'Xbox Series X|S, Xbox One',
  //     end_date: 'N/A',
  //     users: 4680,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/sacred-2-fallen-angel-xbox',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/sacred-2-fallen-angel-xbox',
  //   },
  //   {
  //     id: 1424,
  //     title: 'Minecraft: Croco Island (DLC)',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/62336e3082ff0.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/62336e3082ff0.jpg',
  //     description:
  //       'Score Minecraft: Croco Island (DLC) for free and explore this tropical Lacoste theme park! The DLC features a tennis court, a parkour course, a minigame, a scavenger hunt, and a giant crocodile. This DLC is available until December 31, 2022.',
  //     instructions:
  //       '1. Open up the Marketplace on your favorite device and download the pack.\r\n2. Have fun!',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/minecraft-croco-island-dlc',
  //     published_date: '2022-03-17 18:21:52',
  //     type: 'DLC',
  //     platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
  //     end_date: '2022-12-31 23:59:00',
  //     users: 2080,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/minecraft-croco-island-dlc',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/minecraft-croco-island-dlc',
  //   },
  //   {
  //     id: 1405,
  //     title: 'Lords Mobile Pack Key ($350 value) Giveaway',
  //     worth: '$350.00',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/62106a5400751.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/62106a5400751.jpg',
  //     description:
  //       'Claim your Lords Mobile Special Gift Pack Key ($350 value) and unlock lots of in-game items for Lords Mobile (including Steam version and Mobile)!. Please note this giveaway is for new players only and you must redeem your key within 24 hours of registration.',
  //     instructions:
  //       '1. Log in to your free MMOBomb account.\r\n2. Click the button to unlock your key and follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/lords-mobile-special-gift-pack-key-giveaway',
  //     published_date: '2022-03-15 20:33:42',
  //     type: 'DLC',
  //     platforms: 'PC, Android, iOS',
  //     end_date: '2022-05-31 23:59:00',
  //     users: 3790,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/lords-mobile-special-gift-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/lords-mobile-special-gift-pack-key-giveaway',
  //   },
  //   {
  //     id: 1417,
  //     title: 'Euro Truck Simulator 2 Ukrainian Paint Jobs Pack Steam Key',
  //     worth: '$0.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6222532f9e21f.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6222532f9e21f.jpg',
  //     description:
  //       'Claim your free Euro Truck Simulator 2 - Ukrainian Paint Jobs Pack Steam Key DLC and customize your truck! Please note the base game Euro Truck Simulator 2 is required to play this DLC content.',
  //     instructions:
  //       '1. Complete all steps to unlock your Steam Key.\r\n2. Install the base game (required) and redeem your key on Steam',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
  //     published_date: '2022-03-04 18:58:07',
  //     type: 'DLC',
  //     platforms: 'PC, Steam',
  //     end_date: 'N/A',
  //     users: 6800,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
  //   },
  //   {
  //     id: 1408,
  //     title: 'Slapshot Rebound In-Game Currency Key ($5 Value)',
  //     worth: '$5.00',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/62155af149804.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/62155af149804.jpg',
  //     description:
  //       'Grab your free Slapshot Rebound $5 in-game currency key and take to the ice in style!',
  //     instructions:
  //       '1. Login in to your Alienware Arena account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/slapshot-rebound-in-game-currency-key-5-value',
  //     published_date: '2022-02-22 22:51:45',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 2190,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/slapshot-rebound-in-game-currency-key-5-value',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/slapshot-rebound-in-game-currency-key-5-value',
  //   },
  //   {
  //     id: 1396,
  //     title: 'World of Warships Bonus Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6203f53a9e6fd.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6203f53a9e6fd.jpg',
  //     description:
  //       "Claim your free World of Warships Bonus Key and unlock 3x Valentine's Day camouflages and 3x Blue Digital camouflages. Please note these keys are valid until June 11th, 2022.",
  //     instructions:
  //       '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/world-of-warships-bonus-key-giveaway',
  //     published_date: '2022-02-09 18:09:14',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: '2022-06-11 23:59:00',
  //     users: 1710,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/world-of-warships-bonus-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/world-of-warships-bonus-key-giveaway',
  //   },
  //   {
  //     id: 1382,
  //     title: 'PAYDAY 2 Troll Mask Steam Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61f1a1c51ceb0.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61f1a1c51ceb0.jpg',
  //     description:
  //       "Claim your free PAYDAY 2 SteelSeries Troll Mask Steam Key before it's too late!",
  //     instructions:
  //       '1. Login into your free SteelSeries account and click the button to unlock your Steam key.\r\n2. Redeem your key on Steam (The Steam game PAYDAY 2 is required).',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/payday-2-troll-mask-steam-key-giveaway',
  //     published_date: '2022-01-26 20:32:21',
  //     type: 'DLC',
  //     platforms: 'PC, Steam',
  //     end_date: 'N/A',
  //     users: 6120,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/payday-2-troll-mask-steam-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/payday-2-troll-mask-steam-key-giveaway',
  //   },
  //   {
  //     id: 1375,
  //     title: 'Neverwinter Dragon Roar Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61e1f485cb034.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61e1f485cb034.jpg',
  //     description:
  //       'Claim your free Neverwinter Dragon Roar Pack Key and unlock a Dragon Roar Emote, Reroll tokens and a Stone of Health!',
  //     instructions:
  //       '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/neverwinter-dragon-roar-pack-key-giveaway',
  //     published_date: '2022-01-14 23:09:09',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 3440,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/neverwinter-dragon-roar-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/neverwinter-dragon-roar-pack-key-giveaway',
  //   },
  //   {
  //     id: 1364,
  //     title: 'Black Desert Mobile Outfit Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61dca743045fa.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61dca743045fa.jpg',
  //     description:
  //       'Claim your Black Desert Mobile Outfit Pack Key (App Store and Google Play Store) and unlock an Armor Outfit Chest and Weapon Outfit Chest.',
  //     instructions:
  //       '1. Login into your free Steelseries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/black-desert-mobile-outfit-pack-key-giveaway',
  //     published_date: '2022-01-10 22:38:11',
  //     type: 'DLC',
  //     platforms: 'Android, iOS',
  //     end_date: 'N/A',
  //     users: 1830,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/black-desert-mobile-outfit-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/black-desert-mobile-outfit-pack-key-giveaway',
  //   },
  //   {
  //     id: 1315,
  //     title: 'Minecraft: YouTube Creators Skin Pack',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61bb844247608.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61bb844247608.jpg',
  //     description:
  //       'Grab this Minecraft: YouTube Creators Skin Pack and unlock 10+ skins from some of your favorite Youtube creators including LDShadowlady, Jazzghost, Logdotzip, and more.',
  //     instructions:
  //       '1. Open up the Marketplace on your Minecrafting device and download the pack.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/minecraft-youtube-creators-skin-pack',
  //     published_date: '2021-12-16 19:24:02',
  //     type: 'DLC',
  //     platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
  //     end_date: 'N/A',
  //     users: 4440,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/minecraft-youtube-creators-skin-pack',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/minecraft-youtube-creators-skin-pack',
  //   },
  //   {
  //     id: 1212,
  //     title: 'Battlerite - All Champions Pack Steam Keys (DLC)',
  //     worth: '$9.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6187f5393bcb3.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6187f5393bcb3.jpg',
  //     description:
  //       'Clam your free Battlerite - All Champions Pack DLC Steam Key and unlock all champions for free! Please note the base game Battlerite (Free-to-play) is required to play this DLC content.',
  //     instructions:
  //       '1. Login and click the button to unlock your key.\r\n2. Redeem your key on Steam after installing the base game Battlerite (free-to-play).',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/battlerite-all-champions-pack-steam-keys-dlc',
  //     published_date: '2021-12-03 16:05:00',
  //     type: 'DLC',
  //     platforms: 'PC, Steam',
  //     end_date: 'N/A',
  //     users: 10940,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/battlerite-all-champions-pack-steam-keys-dlc',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/battlerite-all-champions-pack-steam-keys-dlc',
  //   },
  //   {
  //     id: 1293,
  //     title: 'Fatal Core S-Rank Foil Card Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61a9518c9e0ee.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61a9518c9e0ee.jpg',
  //     description:
  //       'Claim your free Fatal Core S-Rank Foil Card Pack Key and unlock 3 S-Rank Foil cards to add to your collection!',
  //     instructions:
  //       '1. Login into your free Crucial account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/fatal-core-s-rank-foil-card-pack-key-giveaway',
  //     published_date: '2021-12-03 00:06:52',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1400,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/fatal-core-s-rank-foil-card-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/fatal-core-s-rank-foil-card-pack-key-giveaway',
  //   },
  //   {
  //     id: 1268,
  //     title: 'Doomtrooper CCG Card Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/619d5bea3be7a.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/619d5bea3be7a.jpg',
  //     description:
  //       'Claim your free Doomtrooper CCG Card Pack Key and unlock 5 free packs and a card back for Doomtrooper CCG!',
  //     instructions:
  //       '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/doomtrooper-ccg-card-pack-key-giveaway',
  //     published_date: '2021-11-23 22:23:54',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1380,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/doomtrooper-ccg-card-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/doomtrooper-ccg-card-pack-key-giveaway',
  //   },
  //   {
  //     id: 1267,
  //     title: 'Firestone Loot Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/619d57a5f0a46.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/619d57a5f0a46.jpg',
  //     description:
  //       'Claim your free Firestone Loot Pack Key and unlock several in-game items for Firestone! Each pack includes 100 Gems (Premium currency), 10 Common chests, and much more! Please note you must reach level 5 to unlock your key.',
  //     instructions:
  //       '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/firestone-loot-pack-key-giveaway',
  //     published_date: '2021-11-23 22:05:42',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1110,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/firestone-loot-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/firestone-loot-pack-key-giveaway',
  //   },
  //   {
  //     id: 1266,
  //     title: 'Dead Frontier 2 Survivor Starter Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/619d548d39a69.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/619d548d39a69.jpg',
  //     description:
  //       "Claim your Dead Frontier 2 Survivor Starter Pack Key and unlock lots of in-game items including a Survivor's Boomstick (Shotgun), Survivor's Stab Vest, and much more!",
  //     instructions:
  //       '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/dead-frontier-2-survivor-starter-pack-key-giveaway',
  //     published_date: '2021-11-23 21:52:29',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 5990,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/dead-frontier-2-survivor-starter-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/dead-frontier-2-survivor-starter-pack-key-giveaway',
  //   },
  //   {
  //     id: 1263,
  //     title: 'SMITE x TRANSFORMERS Battle Points Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6196ca1b0012b.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6196ca1b0012b.jpg',
  //     description:
  //       'Claim your SMITE x TRANSFORMERS Battle Points Key and unlock 500 Battle Points!',
  //     instructions:
  //       '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/smite-x-transformers-battle-points-key-giveaway',
  //     published_date: '2021-11-18 22:48:11',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 2430,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/smite-x-transformers-battle-points-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/smite-x-transformers-battle-points-key-giveaway',
  //   },
  //   {
  //     id: 1262,
  //     title: 'SMITE 3 Day Account Booster Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6196c5f06a1a9.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6196c5f06a1a9.jpg',
  //     description:
  //       'Claim your SMITE 3 Day Account Booster Key and unlock more rewards while you play! Increase Favor gain by 100%, Increase account experience and Worshipper gain by 25% plus 30 Battle Pass Points each time a daily login reward is claimed!',
  //     instructions:
  //       '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/smite-3-day-account-booster-key-giveaway',
  //     published_date: '2021-11-18 22:30:24',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1850,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/smite-3-day-account-booster-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/smite-3-day-account-booster-key-giveaway',
  //   },
  //   {
  //     id: 1248,
  //     title: 'Goose Goose Duck Skin Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61958e41bf693.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61958e41bf693.jpg',
  //     description:
  //       'Claim your Goose Goose Duck Skin Key and unlock a cool SteelSeries skin for Goose Goose Duck!',
  //     instructions:
  //       '1. Login into your free SteelSeries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/goose-goose-duck-skin-key-giveaway',
  //     published_date: '2021-11-18 00:20:33',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 5760,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/goose-goose-duck-skin-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/goose-goose-duck-skin-key-giveaway',
  //   },
  //   {
  //     id: 1243,
  //     title: 'Storybook Brawl 100 Gems Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61940d468a637.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61940d468a637.jpg',
  //     description:
  //       'Claim your Storybook Brawl 100 Gems Key (in-game currency) and unlock heroes and skins for free!',
  //     instructions:
  //       '1. Login into your free Steelseries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/storybook-brawl-100-gems-key-giveaway',
  //     published_date: '2021-11-16 20:57:58',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1700,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/storybook-brawl-100-gems-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/storybook-brawl-100-gems-key-giveaway',
  //   },
  //   {
  //     id: 1238,
  //     title: 'Mars Tomorrow Starter Pack Key + More',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/619053158e40f.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/619053158e40f.jpg',
  //     description:
  //       'Claim your Mars Tomorrow Starter Pack plus 1 Rare Item key for free! Each key unlocks lots of in-game items for Mars Tomorrow including 500 Tritium (premium currency), 1 rare in-game Item called Gyrocompass-Plugin and much more!',
  //     instructions:
  //       '1. Login into your free MMOBomb account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/mars-tomorrow-starter-pack-key-more',
  //     published_date: '2021-11-14 01:06:45',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1520,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/mars-tomorrow-starter-pack-key-more',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/mars-tomorrow-starter-pack-key-more',
  //   },
  //   {
  //     id: 1231,
  //     title: 'Destiny 2: Be True Emblem Code',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/618d609d2ebbc.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/618d609d2ebbc.jpg',
  //     description:
  //       'Claim your Destiny 2: Be True Emblem Code for free! Find the code below and follow the instructions to redeem your Emblem code.\r\n\r\nCODE: ML3-FD4-ND9',
  //     instructions:
  //       '1. Navigate to the Destiny 2 code redemption page (click on the "Get Loot" button).\r\n2. Choose your platform, sign in to your platform account, then just add your code and redeem it.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/destiny-2-be-true-emblem-code',
  //     published_date: '2021-11-11 19:27:41',
  //     type: 'DLC',
  //     platforms:
  //       'PC, Steam, Playstation 5, Xbox Series X|S, Playstation 4, Xbox One',
  //     end_date: 'N/A',
  //     users: 7660,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/destiny-2-be-true-emblem-code',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/destiny-2-be-true-emblem-code',
  //   },
  //   {
  //     id: 1214,
  //     title: 'REVN 5,000 Credits Keys',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6189ac7362446.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6189ac7362446.jpg',
  //     description:
  //       'Claim your REVN 5,000 Credits Keys and unlock 5,000 Credits for free in the REVN game shop!',
  //     instructions:
  //       '1. Complete all steps to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key in game.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/revn-5-000-credits-keys',
  //     published_date: '2021-11-09 00:02:11',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1520,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/revn-5-000-credits-keys',
  //     open_giveaway: 'https://www.gamerpower.com/open/revn-5-000-credits-keys',
  //   },
  //   {
  //     id: 1206,
  //     title: 'Neverwinter Fairy Whisperer Pack Keys',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61803be510544.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61803be510544.jpg',
  //     description:
  //       'Score your Neverwinter Fairy Whisperer Pack Key and unlock several in-game items for free including a Stone of Health, potions and more!',
  //     instructions:
  //       '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/neverwinter-fairy-whisperer-pack-keys',
  //     published_date: '2021-11-01 20:11:33',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 3380,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/neverwinter-fairy-whisperer-pack-keys',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/neverwinter-fairy-whisperer-pack-keys',
  //   },
  //   {
  //     id: 1201,
  //     title: 'M.A.R.S. Assault Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/617b2b2a2615e.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/617b2b2a2615e.jpg',
  //     description:
  //       'Claim your M.A.R.S. Assault Pack Key and unlock 10 Key Cards, 2 Revive Tokens and Full Urban Assault + Valkyrie Set (30 Days).',
  //     instructions:
  //       '1. Complete all steps to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/m-a-r-s-assault-pack-key-giveaway',
  //     published_date: '2021-10-29 00:58:50',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 1850,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/m-a-r-s-assault-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/m-a-r-s-assault-pack-key-giveaway',
  //   },
  //   {
  //     id: 1176,
  //     title: 'Black Desert - FREE Gift Pack DLC (Steam)',
  //     worth: '$30.00',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61685d5c212eb.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61685d5c212eb.jpg',
  //     description:
  //       'Claim your Black Desert - FREE Gift Pack DLC via Steam (NA/EU only). Each pack unlocks an outfit for their class and items that provide a variety of buffs. The total value of all the items in this DLC pack is 30USD! Please note base game Black Desert is required to play this DLC content.',
  //     instructions:
  //       '1. Download directly via Steam before the offer expires.\r\n2. Don\u00b4t forget to install the Base game first (required).',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/black-desert-free-gift-pack-dlc-steam',
  //     published_date: '2021-10-14 18:39:56',
  //     type: 'DLC',
  //     platforms: 'PC, Steam',
  //     end_date: '2022-01-12 23:59:00',
  //     users: 14510,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/black-desert-free-gift-pack-dlc-steam',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/black-desert-free-gift-pack-dlc-steam',
  //   },
  //   {
  //     id: 1166,
  //     title: 'Aura Kingdom Tanuki Mount Keys',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61647ad624300.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61647ad624300.jpg',
  //     description:
  //       'MMOBomb is giving away a FREE super cute Tanuki Mount for Aura Kingdom! Claim your key now!',
  //     instructions:
  //       '1. Login into your free MMOBomb account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/aura-kingdom-tanuki-mount-keys',
  //     published_date: '2021-10-11 19:56:38',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: '2021-11-30 23:59:00',
  //     users: 1760,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/aura-kingdom-tanuki-mount-keys',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/aura-kingdom-tanuki-mount-keys',
  //   },
  //   {
  //     id: 1130,
  //     title: 'Minecraft: Seaside Story (DLC)',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/614a17f235f9b.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/614a17f235f9b.jpg',
  //     description:
  //       'Claim your free Minecraft: Seaside Story (DLC) and go fishing, customize your boat, upgrade the island and discover amazing creatures in brand new ocean biomes!',
  //     instructions:
  //       "1. Open up the Minecraft Marketplace on your device and download the skin pack before the offer expires.\r\n2. That's it! Have fun!",
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/minecraft-seaside-story-dlc',
  //     published_date: '2021-09-21 19:35:46',
  //     type: 'DLC',
  //     platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
  //     end_date: 'N/A',
  //     users: 4600,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/minecraft-seaside-story-dlc',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/minecraft-seaside-story-dlc',
  //   },
  //   {
  //     id: 1128,
  //     title: 'RuneScape Currency Pack Key Giveaway',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6148ca62d5663.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6148ca62d5663.jpg',
  //     description:
  //       'Grab your free RuneScape Currency Pack Key and unlock in-game goodies including 400 RuneCoins and 20 Treasure Hunter keys for RuneScape!',
  //     instructions:
  //       '1. Login into your free Steelseries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/runescape-currency-pack-key-giveaway',
  //     published_date: '2021-09-20 19:52:34',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 3640,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/runescape-currency-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/runescape-currency-pack-key-giveaway',
  //   },
  //   {
  //     id: 1121,
  //     title: 'Star Trek Online: Temporal Agent Starter Pack Key',
  //     worth: 'N/A',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/6143ce9b84089.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/6143ce9b84089.jpg',
  //     description:
  //       'Claim your Star Trek Online: Temporal Agent Starter Pack Key and unlock several in-game items for Star Trek Online including Constitution Light Cruiser (Tier 1), Paladin Temporal Battlecruiser (Tier 6), TOS, Ripped Uniform, Starfleet 0718 Model Android Officer and Temporal Agent Title.',
  //     instructions:
  //       '1. Login into your free Crucial account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/star-trek-online-temporal-agent-starter-pack-key',
  //     published_date: '2021-09-17 01:09:15',
  //     type: 'DLC',
  //     platforms: 'PC',
  //     end_date: 'N/A',
  //     users: 3370,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/star-trek-online-temporal-agent-starter-pack-key',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/star-trek-online-temporal-agent-starter-pack-key',
  //   },
  //   {
  //     id: 1118,
  //     title: 'HITMAN 3 Access Pass: HITMAN 1 GOTY Edition (DLC)',
  //     worth: '$29.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/61439b2de7df6.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/61439b2de7df6.jpg',
  //     description:
  //       'Claim your HITMAN 3 Access Pass: HITMAN 1 GOTY Edition (DLC) for free via Epic Games Store. The HITMAN 3 Access Pass (DLC) allows you to access HITMAN 1 and HITMAN 2 locations in HITMAN 3. Please note you must own HITMAN 3 to access this DLC content.',
  //     instructions:
  //       '1. Download via Epic Games Store before the offer expires.\r\n2. Please note the game HITMAN 3  is required to access this DLC content.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/hitman-3-access-pass-hitman-1-goty-edition-dlc',
  //     published_date: '2021-09-16 21:29:49',
  //     type: 'DLC',
  //     platforms: 'PC, Epic Games Store',
  //     end_date: '2021-09-20 23:59:00',
  //     users: 27840,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/hitman-3-access-pass-hitman-1-goty-edition-dlc',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/hitman-3-access-pass-hitman-1-goty-edition-dlc',
  //   },
  // ];

  deals: Deal[] = [];

  sorts: string[] = ['Relevance', 'Users', 'Published Date'];

  setDeals(deals: Deal[]) {
    this.deals = deals;
    this.dealsModified.next([...this.deals]);
  }

  getDeals() {
    return [...this.deals];
  }

  getPlatfroms() {
    let allPlatforms: string[] = [];
    this.getDeals().map((deal) => {
      const platforms = deal.platforms.split(',');
      if (platforms.length > 1)
        return platforms.forEach((platform) =>
          allPlatforms.push(platform.trim())
        );
      return allPlatforms.push(deal.platforms);
    });
    return [...new Set(allPlatforms)];
  }

  getTypes() {
    let allTypes: string[] = [];
    this.getDeals().map((deal) => {
      const type = deal.type.split(',');
      if (type.length > 1)
        return type.forEach((platform) => allTypes.push(platform.trim()));
      return allTypes.push(deal.type);
    });
    return [...new Set(allTypes)];
  }

  getSorts() {
    return [...this.sorts];
  }
}
