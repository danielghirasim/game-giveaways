import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Deal } from './deal.model';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  dealsModified = new Subject<Deal[]>();

  deals: Deal[] = [
    {
      id: 795,
      title: "World's Dawn (PC)",
      worth: '$9.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/6067069147de1.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6067069147de1.jpg',
      description:
        "Download World's Dawn (PC) for free via IndieGala! World's Dawn is a social sim inspired by the Harvest Moon series. Check it out at no cost!",
      instructions:
        '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/world-s-dawn-pc',
      publishedDate: '2022-04-26 02:59:57',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      endDate: 'N/A',
      users: 6980,
      status: 'Active',
      url: 'https://www.gamerpower.com/world-s-dawn-pc',
      openGiveaway: 'https://www.gamerpower.com/open/world-s-dawn-pc',
    },
    {
      id: 1475,
      title: 'SMITE Cosmic Power Anubis Skin Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6266e617da148.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6266e617da148.jpg',
      description:
        'Claim your free SMITE Cosmic Power Skin key for Anubis and unleash world-dominating power!',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/smite-cosmic-power-anubis-skin-key-giveaway',
      publishedDate: '2022-04-25 20:19:03',
      type: 'DLC',
      platforms: 'PC',
      endDate: 'N/A',
      users: 860,
      status: 'Active',
      url: 'https://www.gamerpower.com/smite-cosmic-power-anubis-skin-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/smite-cosmic-power-anubis-skin-key-giveaway',
    },
    {
      id: 1474,
      title: 'Lamp Head',
      worth: '$4.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/6262ed316973d.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6262ed316973d.jpg',
      description:
        'Claim a free copy of Lamp Head via IndieGala! Lamp Head is a small indie game where you play as a strange man with a lamp in his head.',
      instructions:
        '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/lamp-head',
      publishedDate: '2022-04-22 20:00:17',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      endDate: 'N/A',
      users: 3370,
      status: 'Active',
      url: 'https://www.gamerpower.com/lamp-head',
      openGiveaway: 'https://www.gamerpower.com/open/lamp-head',
    },
    {
      id: 1473,
      title: 'KAREN SEES',
      worth: '$3.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/6261fcf27c213.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6261fcf27c213.jpg',
      description:
        'Grab KAREN SEES for free on itch.io! KAREN SEES is a fast-paced horror game where you play as a night guard. Check it out!',
      instructions:
        '1. Click the button "Download or Claim" before the offer expires.\r\n2. Login into your itch.io account to access the game.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/karen-sees',
      publishedDate: '2022-04-22 02:55:14',
      type: 'Game',
      platforms: 'PC, Itch.io, DRM-Free',
      endDate: 'N/A',
      users: 2680,
      status: 'Active',
      url: 'https://www.gamerpower.com/karen-sees',
      openGiveaway: 'https://www.gamerpower.com/open/karen-sees',
    },
    {
      id: 1471,
      title: 'Amnesia: Rebirth',
      worth: '$29.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/62617641868dc.jpg',
      image: 'https://www.gamerpower.com/offers/1b/62617641868dc.jpg',
      description:
        'Score Amnesia: Rebirth for free on Epic Games Store! Amnesia: Rebirth is a first-person horror adventure game with lots of monsters and puzzles to solve.',
      instructions:
        '1. Log in to your Epic Games Store account.\r\n2. Click the "GET" button to add the game to your library.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/amnesia-rebirth',
      publishedDate: '2022-04-21 17:20:33',
      type: 'Game',
      platforms: 'PC, Epic Games Store',
      endDate: '2022-04-28 23:59:00',
      users: 9320,
      status: 'Active',
      url: 'https://www.gamerpower.com/amnesia-rebirth',
      openGiveaway: 'https://www.gamerpower.com/open/amnesia-rebirth',
    },
    {
      id: 1470,
      title: 'Riverbond',
      worth: '$24.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/6261750c3d354.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6261750c3d354.jpg',
      description:
        'Get Riverbond for free via Epic Games Store! Riverbond is a fun couch co-op adventure game for 1 to 4 players set in a destructible voxel world.',
      instructions:
        '1. Log in to your Epic Games Store account.\r\n2. Click the "GET" button to add the game to your library.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/riverbond',
      publishedDate: '2022-04-21 17:15:24',
      type: 'Game',
      platforms: 'PC, Epic Games Store',
      endDate: '2022-04-28 23:59:00',
      users: 8460,
      status: 'Active',
      url: 'https://www.gamerpower.com/riverbond',
      openGiveaway: 'https://www.gamerpower.com/open/riverbond',
    },
    {
      id: 1463,
      title: 'Dino Island - The Four Crystals',
      worth: '$1.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/625e281a694ba.jpg',
      image: 'https://www.gamerpower.com/offers/1b/625e281a694ba.jpg',
      description:
        'Download Dino Island - The Four Crystals for free via itch.io! Dino Island - The Four Crystals is an indie platform game with pixel-art graphics and more than 40 levels to explore.',
      instructions:
        '1. Click the button "Download or Claim" before the offer expires.\r\n2. Login into your itch.io account to access the game.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/dino-island-the-four-crystals',
      publishedDate: '2022-04-19 05:10:18',
      type: 'Game',
      platforms: 'PC, Itch.io, DRM-Free',
      endDate: 'N/A',
      users: 2980,
      status: 'Active',
      url: 'https://www.gamerpower.com/dino-island-the-four-crystals',
      openGiveaway:
        'https://www.gamerpower.com/open/dino-island-the-four-crystals',
    },
    {
      id: 1441,
      title: 'Genshin Impact v2.6 50 Primogems Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6245cf27d3a40.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6245cf27d3a40.jpg',
      description:
        'Claim your free Genshin Impact v2.6 50 Primogems Key! Please note a 50 Primogems key can only be redeemed once per account on v2.6.',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Redeem your key at https://genshin.hoyoverse.com/en/gift',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/genshin-impact-v2-6-50-primogems-key-giveaway',
      publishedDate: '2022-04-18 18:42:06',
      type: 'DLC',
      platforms: 'PC, Playstation 5, Playstation 4, Android, iOS',
      endDate: 'N/A',
      users: 3800,
      status: 'Active',
      url: 'https://www.gamerpower.com/genshin-impact-v2-6-50-primogems-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/genshin-impact-v2-6-50-primogems-key-giveaway',
    },
    {
      id: 771,
      title: 'BeeFense (PC)',
      worth: '$4.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/605aef0a9c3aa.jpg',
      image: 'https://www.gamerpower.com/offers/1b/605aef0a9c3aa.jpg',
      description:
        'Score BeeFense on PC for free via IndieGala! BeeFense is a Tower defense game inspired by fieldrunners. Check it out!',
      instructions:
        '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/beefense-pc',
      publishedDate: '2022-04-18 18:22:42',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      endDate: 'N/A',
      users: 4860,
      status: 'Active',
      url: 'https://www.gamerpower.com/beefense-pc',
      openGiveaway: 'https://www.gamerpower.com/open/beefense-pc',
    },
    {
      id: 1462,
      title: 'King of Dragon Pass',
      worth: '$11.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/625a3d01bddbb.jpg',
      image: 'https://www.gamerpower.com/offers/1b/625a3d01bddbb.jpg',
      description:
        'Claim King of Dragon Pass for free via IndieGala and create your own epic saga of survival! King of Dragon Pass is a unique mix of RPG, strategy, and story-telling! Check it out!',
      instructions:
        '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
      openGiveawayUrl: 'https://www.gamerpower.com/open/king-of-dragon-pass',
      publishedDate: '2022-04-16 05:50:25',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      endDate: 'N/A',
      users: 4420,
      status: 'Active',
      url: 'https://www.gamerpower.com/king-of-dragon-pass',
      openGiveaway: 'https://www.gamerpower.com/open/king-of-dragon-pass',
    },
    {
      id: 1459,
      title: 'Dragon Raja Gift Pack CD Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/62585cb1a13bf.jpg',
      image: 'https://www.gamerpower.com/offers/1b/62585cb1a13bf.jpg',
      description:
        'Claim your free Dragon Raja Gift Pack CD Key and unlock in-game items for Dragon Raja (PC version and Mobile version). Each pack includes 100000 Coins, Flames of Underworld and much more!',
      instructions:
        '1. Log in or register to your free MMOBomb account.\r\n2. Click the button to unlock your key and follow the giveaway instructions.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/dragon-raja-gift-pack-cdkeys',
      publishedDate: '2022-04-14 19:41:05',
      type: 'DLC',
      platforms: 'PC, Android, iOS',
      endDate: 'N/A',
      users: 1500,
      status: 'Active',
      url: 'https://www.gamerpower.com/dragon-raja-gift-pack-cdkeys',
      openGiveaway:
        'https://www.gamerpower.com/open/dragon-raja-gift-pack-cdkeys',
    },
    {
      id: 1456,
      title: 'Black Desert Online Traveler Edition Key Giveaway',
      worth: '$9.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/62575ab1a7cbd.jpg',
      image: 'https://www.gamerpower.com/offers/1b/62575ab1a7cbd.jpg',
      description:
        'Claim your Black Desert Online Traveler Edition Key and unlock the full game for free! Step into the world of Black Desert now!',
      instructions:
        '1. Log in or register to your free Alienware Arena account.\r\n2. Click the button to unlock your key and follow the giveaway instructions.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/black-desert-online-traveler-edition-key-giveaway',
      publishedDate: '2022-04-14 01:20:17',
      type: 'Game',
      platforms: 'PC',
      endDate: 'N/A',
      users: 10280,
      status: 'Active',
      url: 'https://www.gamerpower.com/black-desert-online-traveler-edition-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/black-desert-online-traveler-edition-key-giveaway',
    },
    {
      id: 1449,
      title: 'Scavengers 250 Chips Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/624efba4c3e9f.jpg',
      image: 'https://www.gamerpower.com/offers/1b/624efba4c3e9f.jpg',
      description:
        'Grab your free Scavengers In-Game Currency Key and unlock 250 Chips to redeem weapons, items,  and more. Please note the base game Scavengers (free-to-play) is required.',
      instructions:
        '1. Log in or register to your free Alienware Arena account.\r\n2. Click the button to unlock your key and follow the giveaway instructions.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/scavengers-250-chips-key-giveaway',
      publishedDate: '2022-04-07 16:56:36',
      type: 'DLC',
      platforms: 'PC',
      endDate: 'N/A',
      users: 1210,
      status: 'Active',
      url: 'https://www.gamerpower.com/scavengers-250-chips-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/scavengers-250-chips-key-giveaway',
    },
    {
      id: 1446,
      title: 'Killsquad Skin Pack Steam Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/624cb5eb01120.jpg',
      image: 'https://www.gamerpower.com/offers/1b/624cb5eb01120.jpg',
      description:
        'Claim your free Killsquad Skin Pack Steam Key and unlock unique SteelSeries Heroes Skins for Killsquad! Please note the base game is required.',
      instructions:
        '1. Log in to your free Seelseries account and click the button to unlock your key.\r\n2. Launch the Steam client and click the Games menu option.\r\n3. Choose "activate a Product on Steam" to redeem your key (Base game required).',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/killsquad-skin-pack-steam-key-giveaway',
      publishedDate: '2022-04-05 23:34:35',
      type: 'DLC',
      platforms: 'PC, Steam',
      endDate: 'N/A',
      users: 1300,
      status: 'Active',
      url: 'https://www.gamerpower.com/killsquad-skin-pack-steam-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/killsquad-skin-pack-steam-key-giveaway',
    },
    {
      id: 1442,
      title: 'Midnight Ghost Hunt: Lars the Troll Steam Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6245d469da220.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6245d469da220.jpg',
      description:
        'Claim your free Midnight Ghost Hunt Exclusive Lars the Troll In-Game Item Key (Steam) and add Lars the Troll to your collection! Please note the base game Midnight Ghost Hunt is required to enjoy this DLC content.',
      instructions:
        '1. Log in to your free Seelseries account and click the button to unlock your key.\r\n2. Launch the Steam client and click the Games menu option.\r\n3. Choose "activate a Product on Steam" to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
      publishedDate: '2022-03-31 18:18:49',
      type: 'DLC',
      platforms: 'PC, Steam',
      endDate: 'N/A',
      users: 3610,
      status: 'Active',
      url: 'https://www.gamerpower.com/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
    },
    {
      id: 1434,
      title: 'Heroes Evolved 5th Anniversary Pack Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/623e1e7a83daf.jpg',
      image: 'https://www.gamerpower.com/offers/1b/623e1e7a83daf.jpg',
      description:
        'Claim your free Heroes Evolved 5th Anniversary Pack Key and unlock several in-game items for Heroes Evolved including 1000 Gold, 5 Skin Shards, and 5 Draw Vouchers!',
      instructions:
        '1. Log in to your MMOBomb account and click the button to unlock your reward.\r\n2. Follow the giveaways instructions to redeem your reward.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/heroes-evolved-5th-anniversary-pack-keys',
      publishedDate: '2022-03-25 20:56:42',
      type: 'DLC',
      platforms: 'Android, iOS',
      endDate: '2022-09-23 23:59:00',
      users: 1000,
      status: 'Active',
      url: 'https://www.gamerpower.com/heroes-evolved-5th-anniversary-pack-keys',
      openGiveaway:
        'https://www.gamerpower.com/open/heroes-evolved-5th-anniversary-pack-keys',
    },
    {
      id: 1432,
      title: 'Dying Light 2: Wyvern Paraglider Skin',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/623cbd853b1cb.jpg',
      image: 'https://www.gamerpower.com/offers/1b/623cbd853b1cb.jpg',
      description:
        'Claim your free Dying Light 2: Wyvern Paraglider Skin! Please note the base game Dying Light 2 is required to enjoy this content.',
      instructions:
        '1. Scroll down and click the claim button\r\n2. Login or register your free TechlandGG account.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/dying-light-2-wyvern-paraglider-skin',
      publishedDate: '2022-03-24 19:50:45',
      type: 'DLC',
      platforms:
        'PC, Epic Games Store, Playstation 5, Xbox Series X|S, Playstation 4, Xbox One',
      endDate: 'N/A',
      users: 2620,
      status: 'Active',
      url: 'https://www.gamerpower.com/dying-light-2-wyvern-paraglider-skin',
      openGiveaway:
        'https://www.gamerpower.com/open/dying-light-2-wyvern-paraglider-skin',
    },
    {
      id: 1429,
      title: 'Sacred 2 Fallen Angel (Xbox)',
      worth: '$19.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/623a67fe56f0e.jpg',
      image: 'https://www.gamerpower.com/offers/1b/623a67fe56f0e.jpg',
      description:
        'Grab Sacred 2 Fallen Angel (Xbox) for free on Microsoft store! This game is playable on Xbox One and Xbox Series X|S.',
      instructions:
        "1. Download directly via Microsoft Store before the offer expires!\r\n2. That's it, have fun!",
      openGiveawayUrl:
        'https://www.gamerpower.com/open/sacred-2-fallen-angel-xbox',
      publishedDate: '2022-03-23 01:21:18',
      type: 'Game',
      platforms: 'Xbox Series X|S, Xbox One',
      endDate: 'N/A',
      users: 4680,
      status: 'Active',
      url: 'https://www.gamerpower.com/sacred-2-fallen-angel-xbox',
      openGiveaway:
        'https://www.gamerpower.com/open/sacred-2-fallen-angel-xbox',
    },
    {
      id: 1424,
      title: 'Minecraft: Croco Island (DLC)',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/62336e3082ff0.jpg',
      image: 'https://www.gamerpower.com/offers/1b/62336e3082ff0.jpg',
      description:
        'Score Minecraft: Croco Island (DLC) for free and explore this tropical Lacoste theme park! The DLC features a tennis court, a parkour course, a minigame, a scavenger hunt, and a giant crocodile. This DLC is available until December 31, 2022.',
      instructions:
        '1. Open up the Marketplace on your favorite device and download the pack.\r\n2. Have fun!',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/minecraft-croco-island-dlc',
      publishedDate: '2022-03-17 18:21:52',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      endDate: '2022-12-31 23:59:00',
      users: 2080,
      status: 'Active',
      url: 'https://www.gamerpower.com/minecraft-croco-island-dlc',
      openGiveaway:
        'https://www.gamerpower.com/open/minecraft-croco-island-dlc',
    },
    {
      id: 1405,
      title: 'Lords Mobile Pack Key ($350 value) Giveaway',
      worth: '$350.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/62106a5400751.jpg',
      image: 'https://www.gamerpower.com/offers/1b/62106a5400751.jpg',
      description:
        'Claim your Lords Mobile Special Gift Pack Key ($350 value) and unlock lots of in-game items for Lords Mobile (including Steam version and Mobile)!. Please note this giveaway is for new players only and you must redeem your key within 24 hours of registration.',
      instructions:
        '1. Log in to your free MMOBomb account.\r\n2. Click the button to unlock your key and follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/lords-mobile-special-gift-pack-key-giveaway',
      publishedDate: '2022-03-15 20:33:42',
      type: 'DLC',
      platforms: 'PC, Android, iOS',
      endDate: '2022-05-31 23:59:00',
      users: 3790,
      status: 'Active',
      url: 'https://www.gamerpower.com/lords-mobile-special-gift-pack-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/lords-mobile-special-gift-pack-key-giveaway',
    },
    {
      id: 1417,
      title: 'Euro Truck Simulator 2 Ukrainian Paint Jobs Pack Steam Key',
      worth: '$0.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/6222532f9e21f.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6222532f9e21f.jpg',
      description:
        'Claim your free Euro Truck Simulator 2 - Ukrainian Paint Jobs Pack Steam Key DLC and customize your truck! Please note the base game Euro Truck Simulator 2 is required to play this DLC content.',
      instructions:
        '1. Complete all steps to unlock your Steam Key.\r\n2. Install the base game (required) and redeem your key on Steam',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
      publishedDate: '2022-03-04 18:58:07',
      type: 'DLC',
      platforms: 'PC, Steam',
      endDate: 'N/A',
      users: 6800,
      status: 'Active',
      url: 'https://www.gamerpower.com/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
      openGiveaway:
        'https://www.gamerpower.com/open/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
    },
    {
      id: 1408,
      title: 'Slapshot Rebound In-Game Currency Key ($5 Value)',
      worth: '$5.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/62155af149804.jpg',
      image: 'https://www.gamerpower.com/offers/1b/62155af149804.jpg',
      description:
        'Grab your free Slapshot Rebound $5 in-game currency key and take to the ice in style!',
      instructions:
        '1. Login in to your Alienware Arena account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/slapshot-rebound-in-game-currency-key-5-value',
      publishedDate: '2022-02-22 22:51:45',
      type: 'DLC',
      platforms: 'PC',
      endDate: 'N/A',
      users: 2190,
      status: 'Active',
      url: 'https://www.gamerpower.com/slapshot-rebound-in-game-currency-key-5-value',
      openGiveaway:
        'https://www.gamerpower.com/open/slapshot-rebound-in-game-currency-key-5-value',
    },
    {
      id: 1396,
      title: 'World of Warships Bonus Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6203f53a9e6fd.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6203f53a9e6fd.jpg',
      description:
        "Claim your free World of Warships Bonus Key and unlock 3x Valentine's Day camouflages and 3x Blue Digital camouflages. Please note these keys are valid until June 11th, 2022.",
      instructions:
        '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/world-of-warships-bonus-key-giveaway',
      publishedDate: '2022-02-09 18:09:14',
      type: 'DLC',
      platforms: 'PC',
      endDate: '2022-06-11 23:59:00',
      users: 1710,
      status: 'Active',
      url: 'https://www.gamerpower.com/world-of-warships-bonus-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/world-of-warships-bonus-key-giveaway',
    },
    {
      id: 1382,
      title: 'PAYDAY 2 Troll Mask Steam Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61f1a1c51ceb0.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61f1a1c51ceb0.jpg',
      description:
        "Claim your free PAYDAY 2 SteelSeries Troll Mask Steam Key before it's too late!",
      instructions:
        '1. Login into your free SteelSeries account and click the button to unlock your Steam key.\r\n2. Redeem your key on Steam (The Steam game PAYDAY 2 is required).',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/payday-2-troll-mask-steam-key-giveaway',
      publishedDate: '2022-01-26 20:32:21',
      type: 'DLC',
      platforms: 'PC, Steam',
      endDate: 'N/A',
      users: 6120,
      status: 'Active',
      url: 'https://www.gamerpower.com/payday-2-troll-mask-steam-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/payday-2-troll-mask-steam-key-giveaway',
    },
    {
      id: 1375,
      title: 'Neverwinter Dragon Roar Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61e1f485cb034.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61e1f485cb034.jpg',
      description:
        'Claim your free Neverwinter Dragon Roar Pack Key and unlock a Dragon Roar Emote, Reroll tokens and a Stone of Health!',
      instructions:
        '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/neverwinter-dragon-roar-pack-key-giveaway',
      publishedDate: '2022-01-14 23:09:09',
      type: 'DLC',
      platforms: 'PC',
      endDate: 'N/A',
      users: 3440,
      status: 'Active',
      url: 'https://www.gamerpower.com/neverwinter-dragon-roar-pack-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/neverwinter-dragon-roar-pack-key-giveaway',
    },
    {
      id: 1364,
      title: 'Black Desert Mobile Outfit Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61dca743045fa.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61dca743045fa.jpg',
      description:
        'Claim your Black Desert Mobile Outfit Pack Key (App Store and Google Play Store) and unlock an Armor Outfit Chest and Weapon Outfit Chest.',
      instructions:
        '1. Login into your free Steelseries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/black-desert-mobile-outfit-pack-key-giveaway',
      publishedDate: '2022-01-10 22:38:11',
      type: 'DLC',
      platforms: 'Android, iOS',
      endDate: 'N/A',
      users: 1830,
      status: 'Active',
      url: 'https://www.gamerpower.com/black-desert-mobile-outfit-pack-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/black-desert-mobile-outfit-pack-key-giveaway',
    },
    {
      id: 1315,
      title: 'Minecraft: YouTube Creators Skin Pack',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61bb844247608.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61bb844247608.jpg',
      description:
        'Grab this Minecraft: YouTube Creators Skin Pack and unlock 10+ skins from some of your favorite Youtube creators including LDShadowlady, Jazzghost, Logdotzip, and more.',
      instructions:
        '1. Open up the Marketplace on your Minecrafting device and download the pack.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/minecraft-youtube-creators-skin-pack',
      publishedDate: '2021-12-16 19:24:02',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      endDate: 'N/A',
      users: 4440,
      status: 'Active',
      url: 'https://www.gamerpower.com/minecraft-youtube-creators-skin-pack',
      openGiveaway:
        'https://www.gamerpower.com/open/minecraft-youtube-creators-skin-pack',
    },
    {
      id: 1212,
      title: 'Battlerite - All Champions Pack Steam Keys (DLC)',
      worth: '$9.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/6187f5393bcb3.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6187f5393bcb3.jpg',
      description:
        'Clam your free Battlerite - All Champions Pack DLC Steam Key and unlock all champions for free! Please note the base game Battlerite (Free-to-play) is required to play this DLC content.',
      instructions:
        '1. Login and click the button to unlock your key.\r\n2. Redeem your key on Steam after installing the base game Battlerite (free-to-play).',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/battlerite-all-champions-pack-steam-keys-dlc',
      publishedDate: '2021-12-03 16:05:00',
      type: 'DLC',
      platforms: 'PC, Steam',
      endDate: 'N/A',
      users: 10940,
      status: 'Active',
      url: 'https://www.gamerpower.com/battlerite-all-champions-pack-steam-keys-dlc',
      openGiveaway:
        'https://www.gamerpower.com/open/battlerite-all-champions-pack-steam-keys-dlc',
    },
    {
      id: 1293,
      title: 'Fatal Core S-Rank Foil Card Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61a9518c9e0ee.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61a9518c9e0ee.jpg',
      description:
        'Claim your free Fatal Core S-Rank Foil Card Pack Key and unlock 3 S-Rank Foil cards to add to your collection!',
      instructions:
        '1. Login into your free Crucial account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/fatal-core-s-rank-foil-card-pack-key-giveaway',
      publishedDate: '2021-12-03 00:06:52',
      type: 'DLC',
      platforms: 'PC',
      endDate: 'N/A',
      users: 1400,
      status: 'Active',
      url: 'https://www.gamerpower.com/fatal-core-s-rank-foil-card-pack-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/fatal-core-s-rank-foil-card-pack-key-giveaway',
    },
    {
      id: 1268,
      title: 'Doomtrooper CCG Card Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/619d5bea3be7a.jpg',
      image: 'https://www.gamerpower.com/offers/1b/619d5bea3be7a.jpg',
      description:
        'Claim your free Doomtrooper CCG Card Pack Key and unlock 5 free packs and a card back for Doomtrooper CCG!',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      openGiveawayUrl:
        'https://www.gamerpower.com/open/doomtrooper-ccg-card-pack-key-giveaway',
      publishedDate: '2021-11-23 22:23:54',
      type: 'DLC',
      platforms: 'PC',
      endDate: 'N/A',
      users: 1380,
      status: 'Active',
      url: 'https://www.gamerpower.com/doomtrooper-ccg-card-pack-key-giveaway',
      openGiveaway:
        'https://www.gamerpower.com/open/doomtrooper-ccg-card-pack-key-giveaway',
    },
  ];
  sorts: string[] = ['Relevance', 'Users', 'Published Date'];

  setDeals(deals: Deal[]) {
    this.deals = deals;
    this.dealsModified.next([...this.deals])
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
