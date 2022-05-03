import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Deal } from './deal.model';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  dealsModified = new Subject<Deal[]>();

  deals: Deal[] | [] = [
    {
      id: 1481,
      title: 'Castle Clash Starter Pack Key Giveaway',
      worth: '$200.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/626d824f88768.jpg',
      image: 'https://www.gamerpower.com/offers/1b/626d824f88768.jpg',
      description:
        'Claim your free Castle Clash Starter Pack Key ($200 Value) and unlock lots of in-game items for Castle Clash! Please note this giveaway is for new players only!',
      instructions:
        '1. Login into your free MMOBomb account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/castle-clash-starter-pack-key-giveaway',
      published_date: '2022-04-30 20:39:11',
      type: 'DLC',
      platforms: 'PC, Android, iOS',
      end_date: '2022-05-31 23:59:00',
      users: 880,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/castle-clash-starter-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/castle-clash-starter-pack-key-giveaway',
    },
    {
      id: 1480,
      title: 'The Adventures of Tree',
      worth: '$4.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/626c561a7521e.jpg',
      image: 'https://www.gamerpower.com/offers/1b/626c561a7521e.jpg',
      description:
        'Claim a free copy of The Adventures of Tree via IndieGala! The Adventures of Tree is an open-ended adventure game about saving your fellow species from the evil invaders!',
      instructions:
        '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/the-adventures-of-tree',
      published_date: '2022-04-29 23:18:18',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      end_date: 'N/A',
      users: 2030,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/the-adventures-of-tree',
      open_giveaway: 'https://www.gamerpower.com/open/the-adventures-of-tree',
    },
    {
      id: 1478,
      title: 'Mido and Di (Steam)',
      worth: '$5.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/626c33937daf9.jpg',
      image: 'https://www.gamerpower.com/offers/1b/626c33937daf9.jpg',
      description:
        'Grab Mido and Di for free on Steam! Mido is a third-person shooter about an alien kid having nightmares about zombie aliens.',
      instructions:
        "1. Download directly via Steam before 2 May.\r\n2. That's it! Have fun!",
      open_giveaway_url: 'https://www.gamerpower.com/open/mido-and-di-steam',
      published_date: '2022-04-29 20:50:59',
      type: 'Game',
      platforms: 'PC, Steam',
      end_date: '2022-05-02 23:59:00',
      users: 4610,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/mido-and-di-steam',
      open_giveaway: 'https://www.gamerpower.com/open/mido-and-di-steam',
    },
    {
      id: 1477,
      title: 'Just Die Already',
      worth: '$14.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/626aacb0ce7ab.jpg',
      image: 'https://www.gamerpower.com/offers/1b/626aacb0ce7ab.jpg',
      description:
        'Just Die Already is completely free this week via Epic Games Store! Just Die Already is a fun old people mayhem sandbox game created by the designers of Goat Simulator.',
      instructions:
        '1. Log in to your Epic Games Store account.\r\n2. Click the "GET" button to add the game to your library.',
      open_giveaway_url: 'https://www.gamerpower.com/open/just-die-already',
      published_date: '2022-04-28 17:03:12',
      type: 'Game',
      platforms: 'PC, Epic Games Store',
      end_date: '2022-05-05 23:59:00',
      users: 4850,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/just-die-already',
      open_giveaway: 'https://www.gamerpower.com/open/just-die-already',
    },
    {
      id: 1476,
      title: 'Paradigm',
      worth: '$14.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/626aac8e4eadb.jpg',
      image: 'https://www.gamerpower.com/offers/1b/626aac8e4eadb.jpg',
      description:
        "Grab a surreal adventure game completely free right now! That's right, you can get Paradigm for free on Epic Games Store!",
      instructions:
        '1. Log in to your Epic Games Store account.\r\n2. Click the "GET" button to add the game to your library.',
      open_giveaway_url: 'https://www.gamerpower.com/open/paradigm',
      published_date: '2022-04-28 17:02:38',
      type: 'Game',
      platforms: 'PC, Epic Games Store',
      end_date: '2022-05-05 23:59:00',
      users: 3840,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/paradigm',
      open_giveaway: 'https://www.gamerpower.com/open/paradigm',
    },
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
      open_giveaway_url: 'https://www.gamerpower.com/open/world-s-dawn-pc',
      published_date: '2022-04-26 02:59:57',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      end_date: 'N/A',
      users: 8390,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/world-s-dawn-pc',
      open_giveaway: 'https://www.gamerpower.com/open/world-s-dawn-pc',
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/smite-cosmic-power-anubis-skin-key-giveaway',
      published_date: '2022-04-25 20:19:03',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1320,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/smite-cosmic-power-anubis-skin-key-giveaway',
      open_giveaway:
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
      open_giveaway_url: 'https://www.gamerpower.com/open/lamp-head',
      published_date: '2022-04-22 20:00:17',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      end_date: 'N/A',
      users: 3720,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/lamp-head',
      open_giveaway: 'https://www.gamerpower.com/open/lamp-head',
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
      open_giveaway_url: 'https://www.gamerpower.com/open/karen-sees',
      published_date: '2022-04-22 02:55:14',
      type: 'Game',
      platforms: 'PC, Itch.io, DRM-Free',
      end_date: 'N/A',
      users: 3080,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/karen-sees',
      open_giveaway: 'https://www.gamerpower.com/open/karen-sees',
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/dino-island-the-four-crystals',
      published_date: '2022-04-19 05:10:18',
      type: 'Game',
      platforms: 'PC, Itch.io, DRM-Free',
      end_date: 'N/A',
      users: 3230,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/dino-island-the-four-crystals',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/genshin-impact-v2-6-50-primogems-key-giveaway',
      published_date: '2022-04-18 18:42:06',
      type: 'DLC',
      platforms: 'PC, Playstation 5, Playstation 4, Android, iOS',
      end_date: 'N/A',
      users: 3990,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/genshin-impact-v2-6-50-primogems-key-giveaway',
      open_giveaway:
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
      open_giveaway_url: 'https://www.gamerpower.com/open/beefense-pc',
      published_date: '2022-04-18 18:22:42',
      type: 'Game',
      platforms: 'PC, DRM-Free',
      end_date: 'N/A',
      users: 5000,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/beefense-pc',
      open_giveaway: 'https://www.gamerpower.com/open/beefense-pc',
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/dragon-raja-gift-pack-cdkeys',
      published_date: '2022-04-14 19:41:05',
      type: 'DLC',
      platforms: 'PC, Android, iOS',
      end_date: 'N/A',
      users: 1550,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/dragon-raja-gift-pack-cdkeys',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/black-desert-online-traveler-edition-key-giveaway',
      published_date: '2022-04-14 01:20:17',
      type: 'Game',
      platforms: 'PC',
      end_date: 'N/A',
      users: 12750,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/black-desert-online-traveler-edition-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/scavengers-250-chips-key-giveaway',
      published_date: '2022-04-07 16:56:36',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1240,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/scavengers-250-chips-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/killsquad-skin-pack-steam-key-giveaway',
      published_date: '2022-04-05 23:34:35',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 1390,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/killsquad-skin-pack-steam-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
      published_date: '2022-03-31 18:18:49',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 3720,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/midnight-ghost-hunt-lars-the-troll-steam-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/heroes-evolved-5th-anniversary-pack-keys',
      published_date: '2022-03-25 20:56:42',
      type: 'DLC',
      platforms: 'Android, iOS',
      end_date: '2022-09-23 23:59:00',
      users: 1020,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/heroes-evolved-5th-anniversary-pack-keys',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/dying-light-2-wyvern-paraglider-skin',
      published_date: '2022-03-24 19:50:45',
      type: 'DLC',
      platforms:
        'PC, Epic Games Store, Playstation 5, Xbox Series X|S, Playstation 4, Xbox One',
      end_date: 'N/A',
      users: 2750,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/dying-light-2-wyvern-paraglider-skin',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/sacred-2-fallen-angel-xbox',
      published_date: '2022-03-23 01:21:18',
      type: 'Game',
      platforms: 'Xbox Series X|S, Xbox One',
      end_date: 'N/A',
      users: 4810,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/sacred-2-fallen-angel-xbox',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/minecraft-croco-island-dlc',
      published_date: '2022-03-17 18:21:52',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      end_date: '2022-12-31 23:59:00',
      users: 2140,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/minecraft-croco-island-dlc',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/lords-mobile-special-gift-pack-key-giveaway',
      published_date: '2022-03-15 20:33:42',
      type: 'DLC',
      platforms: 'PC, Android, iOS',
      end_date: '2022-05-31 23:59:00',
      users: 3870,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/lords-mobile-special-gift-pack-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
      published_date: '2022-03-04 18:58:07',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 7090,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/euro-truck-simulator-2-ukrainian-paint-jobs-pack-steam-key',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/slapshot-rebound-in-game-currency-key-5-value',
      published_date: '2022-02-22 22:51:45',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 2240,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/slapshot-rebound-in-game-currency-key-5-value',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/world-of-warships-bonus-key-giveaway',
      published_date: '2022-02-09 18:09:14',
      type: 'DLC',
      platforms: 'PC',
      end_date: '2022-06-11 23:59:00',
      users: 1760,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/world-of-warships-bonus-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/payday-2-troll-mask-steam-key-giveaway',
      published_date: '2022-01-26 20:32:21',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 6190,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/payday-2-troll-mask-steam-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/neverwinter-dragon-roar-pack-key-giveaway',
      published_date: '2022-01-14 23:09:09',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3470,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/neverwinter-dragon-roar-pack-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/black-desert-mobile-outfit-pack-key-giveaway',
      published_date: '2022-01-10 22:38:11',
      type: 'DLC',
      platforms: 'Android, iOS',
      end_date: 'N/A',
      users: 1860,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/black-desert-mobile-outfit-pack-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/minecraft-youtube-creators-skin-pack',
      published_date: '2021-12-16 19:24:02',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      end_date: 'N/A',
      users: 4530,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/minecraft-youtube-creators-skin-pack',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/battlerite-all-champions-pack-steam-keys-dlc',
      published_date: '2021-12-03 16:05:00',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 11030,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/battlerite-all-champions-pack-steam-keys-dlc',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/fatal-core-s-rank-foil-card-pack-key-giveaway',
      published_date: '2021-12-03 00:06:52',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1400,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/fatal-core-s-rank-foil-card-pack-key-giveaway',
      open_giveaway:
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
      open_giveaway_url:
        'https://www.gamerpower.com/open/doomtrooper-ccg-card-pack-key-giveaway',
      published_date: '2021-11-23 22:23:54',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1380,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/doomtrooper-ccg-card-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/doomtrooper-ccg-card-pack-key-giveaway',
    },
    {
      id: 1267,
      title: 'Firestone Loot Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/619d57a5f0a46.jpg',
      image: 'https://www.gamerpower.com/offers/1b/619d57a5f0a46.jpg',
      description:
        'Claim your free Firestone Loot Pack Key and unlock several in-game items for Firestone! Each pack includes 100 Gems (Premium currency), 10 Common chests, and much more! Please note you must reach level 5 to unlock your key.',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/firestone-loot-pack-key-giveaway',
      published_date: '2021-11-23 22:05:42',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1120,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/firestone-loot-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/firestone-loot-pack-key-giveaway',
    },
    {
      id: 1266,
      title: 'Dead Frontier 2 Survivor Starter Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/619d548d39a69.jpg',
      image: 'https://www.gamerpower.com/offers/1b/619d548d39a69.jpg',
      description:
        "Claim your Dead Frontier 2 Survivor Starter Pack Key and unlock lots of in-game items including a Survivor's Boomstick (Shotgun), Survivor's Stab Vest, and much more!",
      instructions:
        '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/dead-frontier-2-survivor-starter-pack-key-giveaway',
      published_date: '2021-11-23 21:52:29',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 6090,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/dead-frontier-2-survivor-starter-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/dead-frontier-2-survivor-starter-pack-key-giveaway',
    },
    {
      id: 1263,
      title: 'SMITE x TRANSFORMERS Battle Points Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6196ca1b0012b.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6196ca1b0012b.jpg',
      description:
        'Claim your SMITE x TRANSFORMERS Battle Points Key and unlock 500 Battle Points!',
      instructions:
        '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/smite-x-transformers-battle-points-key-giveaway',
      published_date: '2021-11-18 22:48:11',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 2440,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/smite-x-transformers-battle-points-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/smite-x-transformers-battle-points-key-giveaway',
    },
    {
      id: 1262,
      title: 'SMITE 3 Day Account Booster Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6196c5f06a1a9.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6196c5f06a1a9.jpg',
      description:
        'Claim your SMITE 3 Day Account Booster Key and unlock more rewards while you play! Increase Favor gain by 100%, Increase account experience and Worshipper gain by 25% plus 30 Battle Pass Points each time a daily login reward is claimed!',
      instructions:
        '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/smite-3-day-account-booster-key-giveaway',
      published_date: '2021-11-18 22:30:24',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1850,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/smite-3-day-account-booster-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/smite-3-day-account-booster-key-giveaway',
    },
    {
      id: 1248,
      title: 'Goose Goose Duck Skin Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61958e41bf693.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61958e41bf693.jpg',
      description:
        'Claim your Goose Goose Duck Skin Key and unlock a cool SteelSeries skin for Goose Goose Duck!',
      instructions:
        '1. Login into your free SteelSeries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/goose-goose-duck-skin-key-giveaway',
      published_date: '2021-11-18 00:20:33',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 5880,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/goose-goose-duck-skin-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/goose-goose-duck-skin-key-giveaway',
    },
    {
      id: 1243,
      title: 'Storybook Brawl 100 Gems Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61940d468a637.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61940d468a637.jpg',
      description:
        'Claim your Storybook Brawl 100 Gems Key (in-game currency) and unlock heroes and skins for free!',
      instructions:
        '1. Login into your free Steelseries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key',
      open_giveaway_url:
        'https://www.gamerpower.com/open/storybook-brawl-100-gems-key-giveaway',
      published_date: '2021-11-16 20:57:58',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1710,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/storybook-brawl-100-gems-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/storybook-brawl-100-gems-key-giveaway',
    },
    {
      id: 1238,
      title: 'Mars Tomorrow Starter Pack Key + More',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/619053158e40f.jpg',
      image: 'https://www.gamerpower.com/offers/1b/619053158e40f.jpg',
      description:
        'Claim your Mars Tomorrow Starter Pack plus 1 Rare Item key for free! Each key unlocks lots of in-game items for Mars Tomorrow including 500 Tritium (premium currency), 1 rare in-game Item called Gyrocompass-Plugin and much more!',
      instructions:
        '1. Login into your free MMOBomb account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/mars-tomorrow-starter-pack-key-more',
      published_date: '2021-11-14 01:06:45',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1530,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/mars-tomorrow-starter-pack-key-more',
      open_giveaway:
        'https://www.gamerpower.com/open/mars-tomorrow-starter-pack-key-more',
    },
    {
      id: 1231,
      title: 'Destiny 2: Be True Emblem Code',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/618d609d2ebbc.jpg',
      image: 'https://www.gamerpower.com/offers/1b/618d609d2ebbc.jpg',
      description:
        'Claim your Destiny 2: Be True Emblem Code for free! Find the code below and follow the instructions to redeem your Emblem code.\r\n\r\nCODE: ML3-FD4-ND9',
      instructions:
        '1. Navigate to the Destiny 2 code redemption page (click on the "Get Loot" button).\r\n2. Choose your platform, sign in to your platform account, then just add your code and redeem it.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/destiny-2-be-true-emblem-code',
      published_date: '2021-11-11 19:27:41',
      type: 'DLC',
      platforms:
        'PC, Steam, Playstation 5, Xbox Series X|S, Playstation 4, Xbox One',
      end_date: 'N/A',
      users: 7680,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/destiny-2-be-true-emblem-code',
      open_giveaway:
        'https://www.gamerpower.com/open/destiny-2-be-true-emblem-code',
    },
    {
      id: 1214,
      title: 'REVN 5,000 Credits Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6189ac7362446.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6189ac7362446.jpg',
      description:
        'Claim your REVN 5,000 Credits Keys and unlock 5,000 Credits for free in the REVN game shop!',
      instructions:
        '1. Complete all steps to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key in game.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/revn-5-000-credits-keys',
      published_date: '2021-11-09 00:02:11',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1520,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/revn-5-000-credits-keys',
      open_giveaway: 'https://www.gamerpower.com/open/revn-5-000-credits-keys',
    },
    {
      id: 1206,
      title: 'Neverwinter Fairy Whisperer Pack Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61803be510544.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61803be510544.jpg',
      description:
        'Score your Neverwinter Fairy Whisperer Pack Key and unlock several in-game items for free including a Stone of Health, potions and more!',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/neverwinter-fairy-whisperer-pack-keys',
      published_date: '2021-11-01 20:11:33',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3430,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/neverwinter-fairy-whisperer-pack-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/neverwinter-fairy-whisperer-pack-keys',
    },
    {
      id: 1201,
      title: 'M.A.R.S. Assault Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/617b2b2a2615e.jpg',
      image: 'https://www.gamerpower.com/offers/1b/617b2b2a2615e.jpg',
      description:
        'Claim your M.A.R.S. Assault Pack Key and unlock 10 Key Cards, 2 Revive Tokens and Full Urban Assault + Valkyrie Set (30 Days).',
      instructions:
        '1. Complete all steps to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/m-a-r-s-assault-pack-key-giveaway',
      published_date: '2021-10-29 00:58:50',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1850,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/m-a-r-s-assault-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/m-a-r-s-assault-pack-key-giveaway',
    },
    {
      id: 1176,
      title: 'Black Desert - FREE Gift Pack DLC (Steam)',
      worth: '$30.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/61685d5c212eb.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61685d5c212eb.jpg',
      description:
        'Claim your Black Desert - FREE Gift Pack DLC via Steam (NA/EU only). Each pack unlocks an outfit for their class and items that provide a variety of buffs. The total value of all the items in this DLC pack is 30USD! Please note base game Black Desert is required to play this DLC content.',
      instructions:
        '1. Download directly via Steam before the offer expires.\r\n2. Don\u00b4t forget to install the Base game first (required).',
      open_giveaway_url:
        'https://www.gamerpower.com/open/black-desert-free-gift-pack-dlc-steam',
      published_date: '2021-10-14 18:39:56',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: '2022-01-12 23:59:00',
      users: 14660,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/black-desert-free-gift-pack-dlc-steam',
      open_giveaway:
        'https://www.gamerpower.com/open/black-desert-free-gift-pack-dlc-steam',
    },
    {
      id: 1166,
      title: 'Aura Kingdom Tanuki Mount Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61647ad624300.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61647ad624300.jpg',
      description:
        'MMOBomb is giving away a FREE super cute Tanuki Mount for Aura Kingdom! Claim your key now!',
      instructions:
        '1. Login into your free MMOBomb account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key',
      open_giveaway_url:
        'https://www.gamerpower.com/open/aura-kingdom-tanuki-mount-keys',
      published_date: '2021-10-11 19:56:38',
      type: 'DLC',
      platforms: 'PC',
      end_date: '2021-11-30 23:59:00',
      users: 1780,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/aura-kingdom-tanuki-mount-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/aura-kingdom-tanuki-mount-keys',
    },
    {
      id: 1130,
      title: 'Minecraft: Seaside Story (DLC)',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/614a17f235f9b.jpg',
      image: 'https://www.gamerpower.com/offers/1b/614a17f235f9b.jpg',
      description:
        'Claim your free Minecraft: Seaside Story (DLC) and go fishing, customize your boat, upgrade the island and discover amazing creatures in brand new ocean biomes!',
      instructions:
        "1. Open up the Minecraft Marketplace on your device and download the skin pack before the offer expires.\r\n2. That's it! Have fun!",
      open_giveaway_url:
        'https://www.gamerpower.com/open/minecraft-seaside-story-dlc',
      published_date: '2021-09-21 19:35:46',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      end_date: 'N/A',
      users: 4610,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/minecraft-seaside-story-dlc',
      open_giveaway:
        'https://www.gamerpower.com/open/minecraft-seaside-story-dlc',
    },
    {
      id: 1128,
      title: 'RuneScape Currency Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6148ca62d5663.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6148ca62d5663.jpg',
      description:
        'Grab your free RuneScape Currency Pack Key and unlock in-game goodies including 400 RuneCoins and 20 Treasure Hunter keys for RuneScape!',
      instructions:
        '1. Login into your free Steelseries account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/runescape-currency-pack-key-giveaway',
      published_date: '2021-09-20 19:52:34',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3660,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/runescape-currency-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/runescape-currency-pack-key-giveaway',
    },
    {
      id: 1121,
      title: 'Star Trek Online: Temporal Agent Starter Pack Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6143ce9b84089.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6143ce9b84089.jpg',
      description:
        'Claim your Star Trek Online: Temporal Agent Starter Pack Key and unlock several in-game items for Star Trek Online including Constitution Light Cruiser (Tier 1), Paladin Temporal Battlecruiser (Tier 6), TOS, Ripped Uniform, Starfleet 0718 Model Android Officer and Temporal Agent Title.',
      instructions:
        '1. Login into your free Crucial account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/star-trek-online-temporal-agent-starter-pack-key',
      published_date: '2021-09-17 01:09:15',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3370,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/star-trek-online-temporal-agent-starter-pack-key',
      open_giveaway:
        'https://www.gamerpower.com/open/star-trek-online-temporal-agent-starter-pack-key',
    },
    {
      id: 1118,
      title: 'HITMAN 3 Access Pass: HITMAN 1 GOTY Edition (DLC)',
      worth: '$29.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/61439b2de7df6.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61439b2de7df6.jpg',
      description:
        'Claim your HITMAN 3 Access Pass: HITMAN 1 GOTY Edition (DLC) for free via Epic Games Store. The HITMAN 3 Access Pass (DLC) allows you to access HITMAN 1 and HITMAN 2 locations in HITMAN 3. Please note you must own HITMAN 3 to access this DLC content.',
      instructions:
        '1. Download via Epic Games Store before the offer expires.\r\n2. Please note the game HITMAN 3  is required to access this DLC content.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/hitman-3-access-pass-hitman-1-goty-edition-dlc',
      published_date: '2021-09-16 21:29:49',
      type: 'DLC',
      platforms: 'PC, Epic Games Store',
      end_date: '2021-09-20 23:59:00',
      users: 28020,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/hitman-3-access-pass-hitman-1-goty-edition-dlc',
      open_giveaway:
        'https://www.gamerpower.com/open/hitman-3-access-pass-hitman-1-goty-edition-dlc',
    },
    {
      id: 1106,
      title: 'Minecraft: Vibrant Adventurers Volume 1, 2 and 3',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/613f603d68c91.jpg',
      image: 'https://www.gamerpower.com/offers/1b/613f603d68c91.jpg',
      description:
        'Grab the The Vibrant Adventurers Volume 1, 2 and 3 for Minecraft. All links below.',
      instructions:
        'Volume 1: https://www.minecraft.net/en-us/marketplace/pdp?id=0f794a67-ee3c-4c1b-8cb5-e354ca470684\r\nVolume 2: https://www.minecraft.net/en-us/marketplace/pdp?id=969b3bb4-d91f-41ac-a326-39de169bcedd\r\nVolume 3: https://www.minecraft.net/en-us/marketplace/pdp?id=005544b3-06de-4e52-aee2-9608a62a5107',
      open_giveaway_url:
        'https://www.gamerpower.com/open/minecraft-vibrant-adventurers-volume-1-2-and-3',
      published_date: '2021-09-13 16:29:17',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Nintendo Switch, Xbox 360, Android, iOS',
      end_date: 'N/A',
      users: 2790,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/minecraft-vibrant-adventurers-volume-1-2-and-3',
      open_giveaway:
        'https://www.gamerpower.com/open/minecraft-vibrant-adventurers-volume-1-2-and-3',
    },
    {
      id: 1079,
      title: 'Minecraft: Emerald Tycoon',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/612d383c37874.jpg',
      image: 'https://www.gamerpower.com/offers/1b/612d383c37874.jpg',
      description:
        'Claim Minecraft: Emerald Tycoon for free and unlock zones, mounts, special items, and more!',
      instructions:
        "1. Open up the Minecraft Marketplace on your device and download the skin pack before the offer expires.\r\n2. That's it! Have fun!",
      open_giveaway_url:
        'https://www.gamerpower.com/open/minecraft-emerald-tycoon',
      published_date: '2021-08-30 21:57:48',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      end_date: 'N/A',
      users: 9260,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/minecraft-emerald-tycoon',
      open_giveaway: 'https://www.gamerpower.com/open/minecraft-emerald-tycoon',
    },
    {
      id: 1078,
      title: 'Splitgate Alienware Weapon Wrap Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/612d0fb007acd.jpg',
      image: 'https://www.gamerpower.com/offers/1b/612d0fb007acd.jpg',
      description:
        'Claim your Splitgate Alienware Weapon Wrap Key and unlock an Alienware exclusive weapon skin for Splitgate!',
      instructions:
        '1. Login into your free Alienware account and click the button to redeem your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/splitgate-alienware-weapon-wrap-key-giveaway',
      published_date: '2021-08-30 19:04:48',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 4230,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/splitgate-alienware-weapon-wrap-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/splitgate-alienware-weapon-wrap-key-giveaway',
    },
    {
      id: 1072,
      title: 'Splitgate SteelSeries Weapon Wrap Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6126b12a780bd.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6126b12a780bd.jpg',
      description:
        'Claim your Splitgate SteelSeries Weapon Wrap Key and unlock a SteelSeries exclusive weapon wrap for Splitgate!',
      instructions:
        '1. Login into your free SteelSeries account.\r\n2. Click the button to redeem your key and',
      open_giveaway_url:
        'https://www.gamerpower.com/open/splitgate-steelseries-weapon-wrap-key-giveaway',
      published_date: '2021-08-25 23:07:54',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 5980,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/splitgate-steelseries-weapon-wrap-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/splitgate-steelseries-weapon-wrap-key-giveaway',
    },
    {
      id: 1055,
      title: 'Lightforce Ninja',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61180eab41af5.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61180eab41af5.jpg',
      description:
        'Grab Lightforce Ninja for free on itch.io! Lightforce Ninja is a challenging indie game inspired by "Jump King"! Download it now!',
      instructions:
        '1. Click the button "Download or Claim" before the offer expires.\r\n2. Login into your itch.io account to access the game.',
      open_giveaway_url: 'https://www.gamerpower.com/open/lightforce-ninja',
      published_date: '2021-08-14 20:42:51',
      type: 'Game',
      platforms: 'PC, Itch.io, DRM-Free',
      end_date: 'N/A',
      users: 5250,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/lightforce-ninja',
      open_giveaway: 'https://www.gamerpower.com/open/lightforce-ninja',
    },
    {
      id: 1033,
      title: 'Black Desert Online Item Bundle Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/610abfc5d1081.jpg',
      image: 'https://www.gamerpower.com/offers/1b/610abfc5d1081.jpg',
      description:
        'Claim your Black Desert Online Item Bundle Key and unlock Blessing of Kamasylve and the Secret Book of Old Moon that grants increased item drop rate, additional EXP buff, and much more!',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/black-desert-online-item-bundle-key-giveaway',
      published_date: '2021-08-04 18:26:45',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 6500,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/black-desert-online-item-bundle-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/black-desert-online-item-bundle-key-giveaway',
    },
    {
      id: 1030,
      title: 'Crowfall 10 day trial Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6108554ff382d.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6108554ff382d.jpg',
      description:
        'Claim your Crowfall 10 day trial Key and play for 10-days starting when you activate your key.',
      instructions:
        '1. Login into your free account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/crowfall-10-day-trial-key-giveaway',
      published_date: '2021-08-02 22:28:00',
      type: 'Other',
      platforms: 'PC',
      end_date: '2021-08-31 23:59:00',
      users: 1900,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/crowfall-10-day-trial-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/crowfall-10-day-trial-key-giveaway',
    },
    {
      id: 1027,
      title: 'Super Squad Alien Florp Trooper Skin Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/61081d1483f33.jpg',
      image: 'https://www.gamerpower.com/offers/1b/61081d1483f33.jpg',
      description:
        'Claim your free Super Squad Alien Florp Trooper Skin Key and enjoy your new skin!',
      instructions:
        '1. Login into your free account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/super-squad-alien-florp-trooper-skin-key-giveaway',
      published_date: '2021-08-02 18:28:04',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1800,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/super-squad-alien-florp-trooper-skin-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/super-squad-alien-florp-trooper-skin-key-giveaway',
    },
    {
      id: 1018,
      title: 'Neverwinter: Jewel of the North | Scribe Pack Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6102d77f10eba.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6102d77f10eba.jpg',
      description:
        'Claim your Neverwinter: Jewel of the North Scribe Pack key and unlock several in-game items including The Scribe Title, Stone of Health, Portions and more!',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Redeem your key on Arc Client (instructions on the giveaway page)',
      open_giveaway_url:
        'https://www.gamerpower.com/open/neverwinter-jewel-of-the-north-scribe-pack-key',
      published_date: '2021-07-29 18:29:51',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 4550,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/neverwinter-jewel-of-the-north-scribe-pack-key',
      open_giveaway:
        'https://www.gamerpower.com/open/neverwinter-jewel-of-the-north-scribe-pack-key',
    },
    {
      id: 988,
      title: 'Crown: Neon Rox Skin Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/60e88365929b5.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60e88365929b5.jpg',
      description:
        'Claim your Crown Exclusive Neon Rox Skin Key! Please note you must redeem your key in-game, and not via Steam.',
      instructions:
        '1. Login and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key. (Not a Steam key)',
      open_giveaway_url:
        'https://www.gamerpower.com/open/crown-neon-rox-skin-key-giveaway',
      published_date: '2021-07-09 19:12:05',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 5650,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/crown-neon-rox-skin-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/crown-neon-rox-skin-key-giveaway',
    },
    {
      id: 982,
      title: 'Heroes And Generals Starter Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/60e5dd10015fd.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60e5dd10015fd.jpg',
      description:
        'Claim your Heroes And Generals Starter Pack Key and unlock weapons, ammo, boosters, and more when you enter the battlefield.',
      instructions:
        '1. Login and click the button to unlock your key.\r\n2. Follow giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/heroes-and-generals-starter-pack-key-giveaway',
      published_date: '2021-07-07 18:57:52',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 4040,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/heroes-and-generals-starter-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/heroes-and-generals-starter-pack-key-giveaway',
    },
    {
      id: 976,
      title: 'Minecraft: Free Crab Cove Carnival',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/60db6a067d130.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60db6a067d130.jpg',
      description:
        'Claim your Minecraft: Crab Cove Carnival for FREE and unlock a new map, four headliner games, seven mini-games, six custom skins, and lots of gifts!',
      instructions:
        "1. Open up the Minecraft Marketplace on your device and download the skin pack before the offer expires.\r\n2. That's it! Have fun!",
      open_giveaway_url:
        'https://www.gamerpower.com/open/minecraft-free-crab-cove-carnival',
      published_date: '2021-06-29 20:44:22',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch, Android, iOS',
      end_date: 'N/A',
      users: 5890,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/minecraft-free-crab-cove-carnival',
      open_giveaway:
        'https://www.gamerpower.com/open/minecraft-free-crab-cove-carnival',
    },
    {
      id: 973,
      title: 'Causa, Voices of the Dusk Starter Kit Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/60d71f9a2e8c6.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60d71f9a2e8c6.jpg',
      description:
        'Claim your Causa, Voices of the Dusk Starter Kit Key for free and unlock 5 Packs, 750 Organite (Crystals) and a Steam Card Back.',
      instructions:
        '1. Login and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/causa-voices-of-the-dusk-starter-kit-key-giveaway',
      published_date: '2021-06-26 14:37:46',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 2430,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/causa-voices-of-the-dusk-starter-kit-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/causa-voices-of-the-dusk-starter-kit-key-giveaway',
    },
    {
      id: 868,
      title: 'World Of Warships Godzilla vs. Kong Supply Drop Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/60995c9cecca6.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60995c9cecca6.jpg',
      description:
        'Claim your free World Of Warships Godzilla vs. Kong Supply Drop key! Each Supply Drop key unlocks 10 of each themed Monster camouflages.',
      instructions:
        '1. Login into your free Alienware account and click the butto to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/world-of-warships-godzilla-vs-kong-supply-drop-key',
      published_date: '2021-05-10 18:17:33',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 5180,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/world-of-warships-godzilla-vs-kong-supply-drop-key',
      open_giveaway:
        'https://www.gamerpower.com/open/world-of-warships-godzilla-vs-kong-supply-drop-key',
    },
    {
      id: 842,
      title: 'Metal Slug 3',
      worth: '$7.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/60840890f04f4.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60840890f04f4.jpg',
      description:
        'Grab Metal Slug 3 for free via Microsoft Store (Gold not required)!',
      instructions:
        "1. Download via Microsoft Store before the offer expires!\r\n2. That's it, have fun!",
      open_giveaway_url: 'https://www.gamerpower.com/open/metal-slug-3',
      published_date: '2021-04-24 14:01:21',
      type: 'Game',
      platforms: 'Xbox Series X|S, Xbox One',
      end_date: 'N/A',
      users: 27900,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/metal-slug-3',
      open_giveaway: 'https://www.gamerpower.com/open/metal-slug-3',
    },
    {
      id: 815,
      title: 'Magic: Legends - Crusader Armor Pack Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/60787bff063fd.jpg',
      image: 'https://www.gamerpower.com/offers/1b/60787bff063fd.jpg',
      description:
        'Claim your Crusader Armor Pack Key for Magic: Legends! Each pack key unlocks an exclusive Crusader Armor, End of Mission Boosts and Drop Reward Boosts!',
      instructions:
        '1. Login into your free MMORPG account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key',
      open_giveaway_url:
        'https://www.gamerpower.com/open/magic-legends-crusader-armor-pack-keys',
      published_date: '2021-04-15 19:46:39',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 2380,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/magic-legends-crusader-armor-pack-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/magic-legends-crusader-armor-pack-keys',
    },
    {
      id: 814,
      title:
        'Drifters Loot the Galaxy: Sumo Friction Skin Asset Steam Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/607855a06ad26.jpg',
      image: 'https://www.gamerpower.com/offers/1b/607855a06ad26.jpg',
      description:
        'Claim your Sumo Friction Skin Asset Steam Key for free for Drifters Loot the Galaxy! Please note the base game Drifters Loot the Galaxy is required to enjoy this DLC content.',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your Steam key.\r\n2. Redeem your key on Steam (base game required)',
      open_giveaway_url:
        'https://www.gamerpower.com/open/drifters-loot-the-galaxy-sumo-friction-skin-asset-steam-key-giveaway',
      published_date: '2021-04-15 17:02:56',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 6130,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/drifters-loot-the-galaxy-sumo-friction-skin-asset-steam-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/drifters-loot-the-galaxy-sumo-friction-skin-asset-steam-key-giveaway',
    },
    {
      id: 520,
      title: 'World of Warships: HUGE BONUSES Code',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5fad5c3bc27c8.jpg',
      image: 'https://www.gamerpower.com/offers/1/5fad5c3bc27c8.jpg',
      description:
        "This is the best time to jump into World of Warships! Claim the code below and unlock HUGE BONUSES including 2,5 million credits, 200 doubloons, 7 days of premium, 2 cruisers (St. Louis and Emden) plus 20X camouflage restless fire! It's crazy! Please note this code is for new players only.\r\n\r\nCode: BOOM",
      instructions:
        '1. Click the "Get Loot" button to visit the World of Warships page.\r\n2. Click the button and enter your new account details.\r\n3. On the sign up page, click the "Have an invite code?" link and insert the code if not there already. (The code should be added automatically if you followed our link) That\'s it!',
      open_giveaway_url:
        'https://www.gamerpower.com/open/world-of-warships-huge-bonuses-code',
      published_date: '2021-04-12 00:00:59',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 37450,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/world-of-warships-huge-bonuses-code',
      open_giveaway:
        'https://www.gamerpower.com/open/world-of-warships-huge-bonuses-code',
    },
    {
      id: 785,
      title: 'Magic: The Gathering Arena - 5 Card Sleeves',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6060897e655b5.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6060897e655b5.jpg',
      description:
        'Use the codes below and unlock 5 Card Sleeves for Magic: The Gathering Arena!\r\n\r\nCodes:\r\nDebateDuelists - (Silverquill Sleeve)\r\nMathWhizzes - (Quandrix Sleeve)\r\nSwampPunks - (Witherbloom Sleeve)\r\nArtClub - (Prismari Sleeve)\r\nRockJocks - (Lorehold Sleeve)',
      instructions:
        '1. Click the "Get Loot" to visit the game page and create your account if you don\'t have one.\r\n2. Start the game and on the home screen click Store\r\n3. In the top right corner, click "Redeem Code" window.\r\n4. Enter the code there. Be careful to correctly use uppercase and lowercase',
      open_giveaway_url:
        'https://www.gamerpower.com/open/magic-the-gathering-arena-5-card-sleeves',
      published_date: '2021-03-28 15:49:50',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 2040,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/magic-the-gathering-arena-5-card-sleeves',
      open_giveaway:
        'https://www.gamerpower.com/open/magic-the-gathering-arena-5-card-sleeves',
    },
    {
      id: 769,
      title: 'Magic: Legends Open Beta Pack Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/605a047e4dd18.jpg',
      image: 'https://www.gamerpower.com/offers/1b/605a047e4dd18.jpg',
      description:
        'Claim your Magic: Legends Open Beta Pack key and unlock a Enemy Drop Boost x2 and a Lurker Creature Skin.',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/magic-legends-open-beta-pack-key',
      published_date: '2021-03-23 16:08:46',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 4170,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/magic-legends-open-beta-pack-key',
      open_giveaway:
        'https://www.gamerpower.com/open/magic-legends-open-beta-pack-key',
    },
    {
      id: 417,
      title: 'Genshin Impact Free Primogems Code (Updated!)',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f7ca37c98ba9.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f7ca37c98ba9.jpg',
      description:
        'Claim your free code for Genshin Impact and receive Primogems at no cost! Each code unlocks 50 Primogems plus more! Please note that you need to be at least Rank 10 to use these codes. Redeem your code now before expires!\r\n\r\nNew Codes:\r\nGS6ACJ775KNV - (60 Primogems & 10,000 Mora)\r\nGENSHINGIFT - (50 Primogems)',
      instructions:
        '1. Click the "Get loot button" and create your Genshin Impact account.\r\n2. Start the game and reach adventure Rank 10 before using these codes.\r\n3. Then go to the Genshin Impact website and click the "Redeem Code" at the top menu and insert your code.\r\n\r\n*Please note this codes will expire soon, and will only work on the PC and mobile versions.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/genshin-impact-free-primogems-codes',
      published_date: '2021-03-23 00:00:00',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Android, iOS',
      end_date: 'N/A',
      users: 38320,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/genshin-impact-free-primogems-codes',
      open_giveaway:
        'https://www.gamerpower.com/open/genshin-impact-free-primogems-codes',
    },
    {
      id: 735,
      title: 'Neverwinter Fey Child Pack Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/6040962c64c7e.jpg',
      image: 'https://www.gamerpower.com/offers/1b/6040962c64c7e.jpg',
      description:
        'Claim your free Fey Child Pack key for Neverwinter via Intel Gaming Access and unlock the following items: "Fey Child" Title, Stone of Health, Adventurer\u2019s XP Booster, Injury Kit, Potion of Power (Rank 3), Potion of Crit Strike (Rank 5) and Potion of Greater Healing.',
      instructions:
        '1. Complete all steps to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/neverwinter-fey-child-pack-key',
      published_date: '2021-03-04 09:11:24',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 5210,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/neverwinter-fey-child-pack-key',
      open_giveaway:
        'https://www.gamerpower.com/open/neverwinter-fey-child-pack-key',
    },
    {
      id: 713,
      title: 'Neverwinter: Sharandar Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/602e9969828b7.jpg',
      image: 'https://www.gamerpower.com/offers/1b/602e9969828b7.jpg',
      description:
        'Claim your free Neverwinter: Sharandar Pack Key (PC Only) and unlock several in-game items including a Cape of the Wayward Traveler, Stone of Health, Adventurer\u2019s XP Boost and a Injury Kit.',
      instructions:
        '1. Login into your free Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/neverwinter-sharandar-pack-key-giveaway',
      published_date: '2021-02-18 17:44:25',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 5830,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/neverwinter-sharandar-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/neverwinter-sharandar-pack-key-giveaway',
    },
    {
      id: 14,
      title: 'Free MTG: Arena Codes',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec55592ed50b.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec55592ed50b.jpg',
      description:
        'Below you will find all the free Magic: The Gathering Arena Codes we found. Redeem all this Magic Arena codes and unlock Set Packs, XP, card styles and other rewards for free.\r\n\r\nCodes:\r\n\r\nPlayKaldheim (3 packs)\r\nPlayZendikar (3 packs)\r\nPlayM21 (3 packs)\r\nFNMATHOME (1 pack)\r\nPlayIkoria (3 packs)\r\nPlayTheros (3 packs)\r\nPlayRavnica (3 packs)\r\nPlayAllegiance (3 packs)\r\nPlayWarSpark (3 packs)\r\nPlayM20 (3 packs)\r\nPlayEldraine (3 packs)\r\nTryKaladesh (1 pack)\r\nSuperScry (1 card + card style)\r\nParallaxPotion (1 card + card style)\r\nFoilFungus (1 card + card style)\r\nShinyGoblinPirate (1 card + card style)\r\nSparkleDruid (1 card + card style)\r\nOverTheMoon (1 card style)\r\nInnerDemon (1 card style)\r\nShieldsUp (1 card style)\r\nWrittenInStone (1 card style)\r\nEnlightenMe (1 card style)\r\nLevelUp (2000 XP)',
      instructions:
        '1. Click the "Get Loot" to visit the game page and create your account if you don\'t have one.\r\n2. Start the game and on the home screen click Store\r\n3. In the top right corner, click "Redeem Code" window.\r\n4. Enter the code there. Be careful to correctly use uppercase and lowercase',
      open_giveaway_url: 'https://www.gamerpower.com/open/free-mtg-arena-codes',
      published_date: '2021-01-30 07:00:00',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3990,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/free-mtg-arena-codes',
      open_giveaway: 'https://www.gamerpower.com/open/free-mtg-arena-codes',
    },
    {
      id: 4,
      title: 'Get The Witcher: Enhanced Edition for FREE!',
      worth: '$9.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec4fdb8dbe80.jpg',
      image: 'https://www.gamerpower.com/offers/1b/5ec4fdb8dbe80.jpg',
      description:
        "Starting today, all GOG GALAXY users can grab a free copy of The Witcher: Enhanced Edition Director's Cut! You just need to follow the instructions below!",
      instructions:
        '1. <a href="https://www.gogalaxy.com">Download</a> or update the GOG Galaxy client\r\n2. Go to the "Recent" view and check the banner at the top.\r\n3. Click the giveaway button.\r\nOR try the following:\r\n1. Add <a href="https://www.gog.com/game/gwent_the_witcher_card_game">Gwent</a> to your library on GOG\r\n2. Visit the <a href="https://www.gog.com/gwent-welcome-bonus">giveaway page</a> and subscribe.\r\n3. Then go to <a href="https://www.gog.com/game/the_witcher">The Witcher page</a> to unlock the game.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/get-the-witcher-enhanced-edition-for-free',
      published_date: '2020-12-04 16:51:52',
      type: 'Game',
      platforms: 'PC, GOG',
      end_date: 'N/A',
      users: 280720,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/get-the-witcher-enhanced-edition-for-free',
      open_giveaway:
        'https://www.gamerpower.com/open/get-the-witcher-enhanced-edition-for-free',
    },
    {
      id: 555,
      title: 'DRAG: Special Event Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5fbd3eba5a5f4.jpg',
      image: 'https://www.gamerpower.com/offers/1b/5fbd3eba5a5f4.jpg',
      description:
        'Claim your DRAG: Special Event Key to unlock the Special Event Racetrack Zone-A 5 event! Plus you can use this code on the demo!',
      instructions:
        '1. Log in into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/drag-special-event-key-giveaway',
      published_date: '2020-11-24 18:11:22',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 8160,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/drag-special-event-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/drag-special-event-key-giveaway',
    },
    {
      id: 527,
      title: 'Talion Premium Pack Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5fb4080eade14.jpg',
      image: 'https://www.gamerpower.com/offers/1/5fb4080eade14.jpg',
      description:
        'Claim your Talion Premium Pack Key for free an unlock 300,000 Gold, Equipment Chest, Ride Shard Select Chest and a Enhance Stone Select Chest.',
      instructions:
        '1.Login and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/talion-premium-pack-key-giveaway',
      published_date: '2020-11-17 18:27:42',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3150,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/talion-premium-pack-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/talion-premium-pack-key-giveaway',
    },
    {
      id: 502,
      title: 'World of Tanks: 600 Gold + Tank Invite Code',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f9ffbb77abe0.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f9ffbb77abe0.jpg',
      description:
        'Claim this free World of Tanks invite code and unlock a Tank T-1271 or a Tank M22 Locust plus 600 Gold without any cost! You just need to follow the instructions below! Please note this invite codes are for new players only!',
      instructions:
        '1. Click the "Get Loot" button to visit the World of Tanks page and activate the code automatically.\r\n2. Click the button and enter your new account details.\r\n3. That\'s it, the bonus will be added to your account automatically.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/world-of-tanks-tank-600-gold-invite-code',
      published_date: '2020-11-02 13:29:43',
      type: 'DLC',
      platforms: 'PC',
      end_date: '2020-12-30 00:00:00',
      users: 10730,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/world-of-tanks-tank-600-gold-invite-code',
      open_giveaway:
        'https://www.gamerpower.com/open/world-of-tanks-tank-600-gold-invite-code',
    },
    {
      id: 457,
      title: 'Two Point Hospital: SEGA 60th Items DLC',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f8d3e01b5dab.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f8d3e01b5dab.jpg',
      description:
        'Claim your Two Point Hospital: SEGA 60th Items DLC on Steam for free! Please note the base game Two Point Hospital is required to enjoy this DLC content.',
      instructions:
        '1. Install the base game Two Point Hospital first.\r\n2. Download the DLC on Steam.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/two-point-hospital-sega-60th-items-dlc',
      published_date: '2020-10-19 09:19:29',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 9040,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/two-point-hospital-sega-60th-items-dlc',
      open_giveaway:
        'https://www.gamerpower.com/open/two-point-hospital-sega-60th-items-dlc',
    },
    {
      id: 441,
      title: 'Free NiGHTS Into Dreams (Steam)',
      worth: '$7.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f873986428d4.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f873986428d4.jpg',
      description:
        "Grab NiGHTS Into Dreams for free! That's right, Sega is celebrating their 60th anniversary and they are giving away NiGHTS Into Dreams entirely for free! To grab your copy you just need to sign up with your email and Steam account. It's that easy!",
      instructions:
        '1. Sign in with your email and click continue.\r\n2. Login with your Steam account.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/free-nights-into-dreams-steam',
      published_date: '2020-10-14 19:46:46',
      type: 'Game',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 132970,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/free-nights-into-dreams-steam',
      open_giveaway:
        'https://www.gamerpower.com/open/free-nights-into-dreams-steam',
    },
    {
      id: 412,
      title: 'MTG Arena: 3 Free Packs Code',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f78733a98371.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f78733a98371.jpg',
      description:
        'Get 3 packs cards for free on Magic the Gathering Arena! To grab your free packs you just need to use the code below!\r\n\r\nCode:\r\nPlayZendikar \t(3 packs)',
      instructions:
        '1. Click the "Get Loot" to visit the game page and create your account if you don\'t have one.\r\n2. Start the game and on the home screen click Store\r\n3. In the top right corner, click "Redeem Code" window.\r\n4. Enter the code there. Be careful to correctly use uppercase and lowercase',
      open_giveaway_url:
        'https://www.gamerpower.com/open/mtg-arena-3-free-packs-code',
      published_date: '2020-10-03 14:48:58',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 4020,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/mtg-arena-3-free-packs-code',
      open_giveaway:
        'https://www.gamerpower.com/open/mtg-arena-3-free-packs-code',
    },
    {
      id: 383,
      title: 'Causa, Voices of the Dusk Game Packs Bundle Keys',
      worth: '$14.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f68ee0a0c433.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f68ee0a0c433.jpg',
      description:
        'Claim your Causa, Voices of the Dusk Game Packs Bundle Key and unlock 7 Card Packs and 1 Premium Card Back!',
      instructions:
        '1. Login into your Alienware account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/causa-voices-of-the-dusk-game-packs-bundle-keys',
      published_date: '2020-09-21 20:16:42',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 6290,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/causa-voices-of-the-dusk-game-packs-bundle-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/causa-voices-of-the-dusk-game-packs-bundle-keys',
    },
    {
      id: 186,
      title: 'Neverwinter Avernus: Gift of the Noble Guard Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5f049d9f12b7f.jpg',
      image: 'https://www.gamerpower.com/offers/1/5f049d9f12b7f.jpg',
      description:
        'Claim your Neverwinter Avernus: Gift of the Noble Guard Pack Key and unlock free in-game items for Neverwinter (PC) including the Cape of the Noble Guard, Stone of Health and more!',
      instructions:
        '1. Login into your Alienwarearena account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/neverwinter-avernus-gift-of-the-noble-guard-key-giveaway',
      published_date: '2020-07-07 18:06:55',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 11640,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/neverwinter-avernus-gift-of-the-noble-guard-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/neverwinter-avernus-gift-of-the-noble-guard-key-giveaway',
    },
    {
      id: 157,
      title: 'Free Bomb Bots Arena Gift Pack Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ef306bae0876.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ef306bae0876.jpg',
      description:
        'Claim your Bomb Bots Arena exclusive gift pack key and unlock in-game items for Bomb Bots Arena (on PC, Android and iOS)! Each pack key includes a head, body and a hat!\r\n\r\n*Please note these are not Steam keys, if you pick the Steam version please follow the instructions and redeem the key inside the game.',
      instructions:
        '1. Login and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/free-bomb-bots-arena-gift-pack-keys',
      published_date: '2020-06-24 09:54:34',
      type: 'DLC',
      platforms: 'PC, Steam, Android, iOS',
      end_date: 'N/A',
      users: 10090,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/free-bomb-bots-arena-gift-pack-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/free-bomb-bots-arena-gift-pack-keys',
    },
    {
      id: 147,
      title: 'Free Too Human on Xbox 360',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5eec9c8280d8d.jpg',
      image: 'https://www.gamerpower.com/offers/1/5eec9c8280d8d.jpg',
      description: 'Get Too Human for free on Microsoft Store!',
      instructions:
        '1. Click "Buy Game Free" button to unlock this game.\r\n2. Please note you need a XBOX/Microsoft account with a credit card in order to claim.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/free-too-human-on-xbox-360',
      published_date: '2020-06-19 13:07:46',
      type: 'Game',
      platforms: 'Xbox 360',
      end_date: 'N/A',
      users: 12850,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/free-too-human-on-xbox-360',
      open_giveaway:
        'https://www.gamerpower.com/open/free-too-human-on-xbox-360',
    },
    {
      id: 146,
      title: 'Free Crackdown and Crackdown 2',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5eec96f986ffe.jpg',
      image: 'https://www.gamerpower.com/offers/1/5eec96f986ffe.jpg',
      description:
        'Get Crackdown and Crackdown 2 (Xbox 360) for free on Microsoft Store. Please check the links below.\r\n\r\nCrackdown: https://marketplace.xbox.com/en-US/Product/Crackdown/66acd000-77fe-1000-9115-d8024d5307dc\r\nCrackdown 2: https://marketplace.xbox.com/en-US/Product/Crackdown-2/66acd000-77fe-1000-9115-d8024d5308bc',
      instructions:
        '1. Click "Buy Game Free" button to unlock this game.\r\n2. Please note you need a XBOX/Microsoft account with a credit card in order to claim.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/free-crackdown-and-crackdown-2',
      published_date: '2020-06-19 12:44:09',
      type: 'Game',
      platforms: 'Xbox 360',
      end_date: 'N/A',
      users: 13600,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/free-crackdown-and-crackdown-2',
      open_giveaway:
        'https://www.gamerpower.com/open/free-crackdown-and-crackdown-2',
    },
    {
      id: 27,
      title: 'SUPER CIRCUIT BREAKERS - PAYNE',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec629da21645.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec629da21645.jpg',
      description:
        'Grab this DLC for FREE until the end of May! Please note the base game is required (free to play) to play this DLC content.',
      instructions:
        '1. Download the base game on Steam first (free to play)\r\n2. Install the DLC before the offer expires.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/super-circuit-breakers-payne',
      published_date: '2020-05-18 14:12:26',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: '2020-05-31 23:59:00',
      users: 5490,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/super-circuit-breakers-payne',
      open_giveaway:
        'https://www.gamerpower.com/open/super-circuit-breakers-payne',
    },
    {
      id: 28,
      title: 'Higurashi When They Cry Hou - Ch.1 Onikakushi',
      worth: '$1.19',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec62aa074c9b.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec62aa074c9b.jpg',
      description:
        'Higurashi When They Cry Hou - Ch.1 Onikakushi is currently free on Steam until a vaccine or treatment is discovered!',
      instructions: 'Download on Steam before the offer expires!',
      open_giveaway_url:
        'https://www.gamerpower.com/open/higurashi-when-they-cry-hou-ch-1-onikakushi',
      published_date: '2020-05-15 14:15:44',
      type: 'Game',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 99520,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/higurashi-when-they-cry-hou-ch-1-onikakushi',
      open_giveaway:
        'https://www.gamerpower.com/open/higurashi-when-they-cry-hou-ch-1-onikakushi',
    },
    {
      id: 153,
      title: 'Riders of Icarus Silver Laiku Mount Steam Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/4eea55fd841fb.jpg',
      image: 'https://www.gamerpower.com/offers/1/4eea55fd841fb.jpg',
      description:
        "Claim your Steam key and receive the Silver Laiku mount for Riders of Icarus! With the Silver Laiku, you'll be able to mount up and take the battle to the sky unlike anything you\u2019ve seen before!",
      instructions:
        '1. Login into your Alienware account.\r\n2. Click the button to unlock your Steam Key.\r\n3. Redeem your key on Steam.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/riders-of-icarus-silver-laiku-mount-steam-keys',
      published_date: '2020-03-01 00:00:00',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 7410,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/riders-of-icarus-silver-laiku-mount-steam-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/riders-of-icarus-silver-laiku-mount-steam-keys',
    },
    {
      id: 154,
      title: 'Battle for the Galaxy Ice Bastion Pack Steam Key',
      worth: '$7.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/1eea55fd841fb.jpg',
      image: 'https://www.gamerpower.com/offers/1/1eea55fd841fb.jpg',
      description:
        'Get your Ice Bastion DLC Pack Steam key for Battle for the Galaxy and unlock premium currency, permanent boosts and more! Please note the base game Battle for the Galaxy (free to play) is required to enjoy this DLC content.',
      instructions:
        '1. Login into your Alienware account.\r\n2. Click the button to unlock your Steam Key.\r\n3. Redeem your key on Steam.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/battle-for-the-galaxy-ice-bastion-pack-steam-keys',
      published_date: '2020-03-01 00:00:00',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 9810,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/battle-for-the-galaxy-ice-bastion-pack-steam-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/battle-for-the-galaxy-ice-bastion-pack-steam-keys',
    },
    {
      id: 40,
      title: 'Payday 2: Free In-game Items Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec63e61562a0.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec63e61562a0.jpg',
      description:
        'OVERKILL is giving away free in-game items for Payday 2! You just need to complete some easy steps to unlock several in-game items including masks, hats and more!',
      instructions:
        '1. Click the button to visit the giveaway page.\r\n2. Select your favorite in-game items.\r\n3. Complete the steps to unlock your in-game items!',
      open_giveaway_url:
        'https://www.gamerpower.com/open/payday-2-free-in-game-items-giveaway',
      published_date: '2020-02-21 15:40:01',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 103250,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/payday-2-free-in-game-items-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/payday-2-free-in-game-items-giveaway',
    },
    {
      id: 17,
      title: 'Battlecraft \u2013 Tactics Online: Ninja Pack Keys',
      worth: '$10.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec615b3b2652.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec615b3b2652.jpg',
      description:
        'Claim free Battlecraft - Tactics Online: Ninja Pack Keys ($10 Value) and unlock 1 Ninja Hero, 500 Gold and 100 Dust! Grab your pack now!',
      instructions:
        '1. Login into your Alienwarearena account.\r\n2. Click the button to unlock your key\r\n3. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/battlecraft-tactics-online-ninja-pack-keys',
      published_date: '2020-02-21 12:46:27',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 3190,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/battlecraft-tactics-online-ninja-pack-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/battlecraft-tactics-online-ninja-pack-keys',
    },
    {
      id: 37,
      title: 'Free Endless Space Collection',
      worth: '$9.99',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec637bfa0df6.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec637bfa0df6.jpg',
      description:
        'Grab Endless Space Collection for free on Steam via Games2gether! You just need to follow the instructions below!',
      instructions:
        '1. Login or create your free Games2gether account.\r\n2. Go to the reward page and link your Steam account.\r\n3. Go back to the reward page and click the button to redeem your game.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/free-endless-space-collection',
      published_date: '2020-01-21 15:11:43',
      type: 'Game',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 160380,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/free-endless-space-collection',
      open_giveaway:
        'https://www.gamerpower.com/open/free-endless-space-collection',
    },
    {
      id: 16,
      title: 'Collective Free Hero Skin Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec614b0bde18.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec614b0bde18.jpg',
      description:
        "Grab your Collective Hero Skin key now before it's too late!",
      instructions:
        '1. Login into your Alienwarearena account, scroll down and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/collective-free-hero-skin-key',
      published_date: '2020-01-21 12:42:08',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 1590,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/collective-free-hero-skin-key',
      open_giveaway:
        'https://www.gamerpower.com/open/collective-free-hero-skin-key',
    },
    {
      id: 152,
      title: 'Dream of Mirror Online Summer Fun DLC Pack Steam Keys',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5iia55fd841fb.jpg',
      image: 'https://www.gamerpower.com/offers/1/5iia55fd841fb.jpg',
      description:
        'Claim your Dream of Mirror Online Summer Fun DLC Pack Steam Key and unlock lots of in-game items for Dream of Mirror Online. Please note the base game Dream Of Mirror Online (free to play) is required to play this DLC content.',
      instructions:
        '1. Login into your Alienware account.\r\n2. Click the button to unlock your Steam Key.\r\n3. Redeem your key on Steam.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/domo-summer-fun-dlc-steam-keys',
      published_date: '2020-01-01 00:00:00',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 3230,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/domo-summer-fun-dlc-steam-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/domo-summer-fun-dlc-steam-keys',
    },
    {
      id: 42,
      title: 'Overstep Skin Key Giveaway',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec643f9947fe.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec643f9947fe.jpg',
      description:
        'Grab this key and unlock an exclusive skin for Overstep! Please note you must redeem this key in-game.',
      instructions:
        '1. Download and install Overstep on Steam for free.\r\n2. Login into your Alienwarearena account and grab your key.\r\n3. Open the game and click on the main menu and enter the code.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/overstep-skin-key-giveaway',
      published_date: '2019-12-21 16:03:53',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 7220,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/overstep-skin-key-giveaway',
      open_giveaway:
        'https://www.gamerpower.com/open/overstep-skin-key-giveaway',
    },
    {
      id: 34,
      title: 'Heavy Metal Machines Gift Pack Steam Key',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec63329eb67e.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec63329eb67e.jpg',
      description:
        'Grab this Steam key to unlock a total of 9 exclusive in-game items for Heavy Metal Machines! Please note the base game Heavy Metal Machines (free to play) is required to play this DLC content.',
      instructions:
        '1. Install Heavy Metal Machines on Steam first.\r\n2. Grab your key and redeem it on Steam.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/heavy-metal-machines-gift-pack-steam-key',
      published_date: '2019-11-21 14:52:09',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 7600,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/heavy-metal-machines-gift-pack-steam-key',
      open_giveaway:
        'https://www.gamerpower.com/open/heavy-metal-machines-gift-pack-steam-key',
    },
    {
      id: 25,
      title: 'Brawlhalla Katars of the Raven Weapon Skin Codes',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec625bdcf687.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec625bdcf687.jpg',
      description:
        'Follow Brawlhalla on Twitch and score a free Katars of the Raven Weapon Skin code! To redeem your code, go to the Brawlhalla in-game store, then type your code into "Redeem Code" at the bottom.',
      instructions:
        '1. Complete all steps to unlock your key.\r\n2. Go to the Brawlhalla in-game store, then type your code into "Redeem Code" at the bottom.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/brawlhalla-katars-of-the-raven-weapon-skin',
      published_date: '2019-11-21 13:54:53',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch',
      end_date: 'N/A',
      users: 50040,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/brawlhalla-katars-of-the-raven-weapon-skin',
      open_giveaway:
        'https://www.gamerpower.com/open/brawlhalla-katars-of-the-raven-weapon-skin',
    },
    {
      id: 36,
      title: 'Dreadnought: Free $10 Gift Pack Steam Keys',
      worth: '$10.00',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec636182c3ae.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec636182c3ae.jpg',
      description:
        'Claim your free $10 Gift Pack Steam Key for Dreadnought! Please note the base game Dreadnought (free to play) is required to play this DLC content.',
      instructions:
        '1. Install the base game on Steam first.\r\n2. Login into your Alienwarearena and click the button to unlock your key.\r\n3. Redeem your key on Steam.',
      open_giveaway_url:
        'https://www.gamerpower.com/open/dreadnought-free-10-gift-pack-steam-keys',
      published_date: '2019-05-21 15:04:40',
      type: 'DLC',
      platforms: 'PC, Steam',
      end_date: 'N/A',
      users: 20920,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/dreadnought-free-10-gift-pack-steam-keys',
      open_giveaway:
        'https://www.gamerpower.com/open/dreadnought-free-10-gift-pack-steam-keys',
    },
    {
      id: 7,
      title: 'Destiny 2: Free Emblem Codes',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec5099cc1698.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec5099cc1698.jpg',
      description:
        'Score free in-game Emblems for Destiny 2! You just need to redeem the codes bellow. Best of all, it&#39;s free! If anyone knows other Emblem codes, please feel free to share them! Please note that emblem codes probably have an expiration date, and will not work once expired\r\n\r\n    X9FGMAH6D\r\n    XFV-KHP-N97\r\n    A7LFYC44X\r\n    JDT-NLC-JKM\r\n    N3LXN6PXF\r\n    7CP-94V-LFP\r\n    FJ9-LAM-67F\r\n    7F9-767-F74\r\n    X4C-FGX-MX3\r\n    JD7-4CM-HJG\r\n    JNX-DMH-XLA\r\n    3VF-LGC-RLX',
      instructions:
        '1. Redeem your Emblem code at https://www.bungie.net/en/User/coderedemption\r\n2. That&#39;s it! Have fun!',
      open_giveaway_url:
        'https://www.gamerpower.com/open/destiny-2-free-emblem-codes',
      published_date: '2018-05-20 17:42:36',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One',
      end_date: 'N/A',
      users: 17240,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/destiny-2-free-emblem-codes',
      open_giveaway:
        'https://www.gamerpower.com/open/destiny-2-free-emblem-codes',
    },
    {
      id: 6,
      title: 'Warframe Free Promo Codes',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec503da36629.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec503da36629.jpg',
      description:
        "Here's a list with all the free Warframe promo codes we have found so far. If anyone knows other Warframe promo codes, please feel free to share them!\r\n\r\nPromo Codes:\r\n\r\nPARVOS (Golden Hand Decoration)\r\n\r\nGlypth Codes:\r\n\r\n    Triburos\r\n    KingGothaLion\r\n    Golden\r\n    GermanCommunityDiscord\r\n    Xenogelion\r\n    Bwana\r\n    BigJimID\r\n    Deejayknight\r\n    MCGamerCZ\r\n    Sn0wRC\r\n    Gara\r\n    VAMP6X6X6X\r\n    TioRamon\r\n    FeelLikeAPlayer\r\n    Bricky\r\n    MadFury\r\n    Char\r\n    ToxickToe\r\n    SerdarSari\r\n    InfoDiversao\r\n    Macho\r\n    TeaWrex\r\n    Kiwad\r\n    TacticalPotato\r\n    AnnoyingKillah\r\n    UnrealYuki\r\n    VVhiteAngel\r\n    OrpheusDeluxe\r\n    ConclaveDiscord\r\n    Sherpa\r\n    ReyGanso\r\n    TotalN3wb\r\n    Strippin\r\n    Makarimorph\r\n    McMonkeys\r\n    Reddit\r\n    DanielTheDemon\r\n    AnjetCat\r\n    CohhCarnage\r\n    NoSympathyy\r\n    WarframeCommunityDiscord\r\n    FromThe70s\r\n    DKDiamantes\r\n    Tanchan\r\n    Vernoc\r\n    GlamShatterSkull\r\n    MichelPostma\r\n    PokketNinja\r\n    TioMario\r\n    AeonKnight86\r\n    MrSteelWar\r\n    H3DSH0T\r\n    Woxli\r\n    VoidFissureBR\r\n    LilLexi\r\n    BrazilCommunityDiscord\r\n    MikeTheBard\r\n    DjTechLive\r\n    BurnBxx\r\n    Aznitrous\r\n    DimitriV2\r\n    AngryUnicorn\r\n    CGsKnackie\r\n    ExtraCredits\r\n    Emovj\r\n    LynxAria\r\n    Kr1ptonPlayer\r\n    JoeyZero\r\n    Amprov\r\n    LeyzarGamingViews\r\n    MrWarframeGuy\r\n    Wanderbots\r\n    Homiinvocado\r\n    TinBears\r\n    Eduiy16\r\n    Frozenballz\r\n    AshiSogiTenno\r\n    ElDanker\r\n    HotShomStories\r\n    Shul\r\n    JustRLC\r\n    Rahetalius\r\n    AGayGuyPlays\r\n    VoltTheHero\r\n    BlackOni\r\n    Endotti\r\n    GrindHardSquad\r\n    Smoodie\r\n    DillyFrame\r\n    PostiTV\r\n    Rippz0r\r\n    DeuceTheGamer\r\n    Sapmatic\r\n    DeepBlueBeard\r\n    SkillUp\r\n    Mogamu\r\n    RebelDustyPinky\r\n    IWoply\r\n    Brozime\r\n    ProfessorBroman\r\n    AdmiralBahroo\r\n    OriginalWickedFun\r\n    SarahTsang\r\n    Hydroxate",
      instructions:
        'Promo codes are special codes that unlock in-game items such as weapons, glypths and boosters. Please note that codes usually have an expiration date, and will not work once expired. Redeem your promo code at https://www.warframe.com/promocode',
      open_giveaway_url:
        'https://www.gamerpower.com/open/warframe-free-promo-codes',
      published_date: '2018-05-20 17:18:02',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One, Nintendo Switch',
      end_date: 'N/A',
      users: 17720,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/warframe-free-promo-codes',
      open_giveaway:
        'https://www.gamerpower.com/open/warframe-free-promo-codes',
    },
    {
      id: 5,
      title: 'Farming Simulator 2017: Free Horsch Agrovation DLC',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec4ffd09f016.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec4ffd09f016.jpg',
      description:
        'Grab this Horsch Agrovation DLC Code for Farming Simulator 2017. On the Farming Simulator 2017 page, just paste the following key code into the field provided: 143208267411\r\n\r\nYou will receive a link to the Horsch Agrovation DLC released during Agritechnica event. It is a 1.1GB download that gives you a .exe file.',
      instructions:
        '1.  Just paste the following key code into the field provided: 143208267411',
      open_giveaway_url:
        'https://www.gamerpower.com/open/farming-simulator-2017-free-horsch-agrovation-dlc',
      published_date: '2018-05-20 17:00:48',
      type: 'DLC',
      platforms: 'PC',
      end_date: 'N/A',
      users: 22500,
      status: 'Active',
      gamerpower_url:
        'https://www.gamerpower.com/farming-simulator-2017-free-horsch-agrovation-dlc',
      open_giveaway:
        'https://www.gamerpower.com/open/farming-simulator-2017-free-horsch-agrovation-dlc',
    },
    {
      id: 9,
      title: 'Free Rocket League Codes',
      worth: 'N/A',
      thumbnail: 'https://www.gamerpower.com/offers/1/5ec53f97228a6.jpg',
      image: 'https://www.gamerpower.com/offers/1/5ec53f97228a6.jpg',
      description:
        'Rocket League is giving away free in-game items, to unlock those items you just need to use the codes below. Please note the base game is required to play this DLC content.\r\n\r\nActive Codes:\r\npopcorn\r\n\r\nThis codes will expire soon so redeem the code now!',
      instructions:
        '1. Launch Rocket League (Via Steam, XB1 or PS4)\r\n2. Go to "Extras"; in the Main Menu and select "Redeem Code" then enter the code: popcorn. ',
      open_giveaway_url:
        'https://www.gamerpower.com/open/free-rocket-league-codes',
      published_date: '2017-05-20 21:32:55',
      type: 'DLC',
      platforms: 'PC, Playstation 4, Xbox One',
      end_date: 'N/A',
      users: 36900,
      status: 'Active',
      gamerpower_url: 'https://www.gamerpower.com/free-rocket-league-codes',
      open_giveaway: 'https://www.gamerpower.com/open/free-rocket-league-codes',
    },
  ];

  sorts: string[] = ['Relevance', 'Users', 'Published Date'];

  setDeals(deals: Deal[]) {
    this.deals = deals;
    this.dealsModified.next([...this.deals]);
  }

  getDeals() {
    return [...this.deals];
  }

  setFavorite(id: number) {
    const favoriteIndex = this.deals.findIndex((deal) => deal.id === id);
    const newFavorite = { ...this.deals[favoriteIndex], isFavorite: true };
    this.deals[favoriteIndex] = newFavorite;
    this.dealsModified.next([...this.deals]);
  }

  removeFavorite(id: number) {
    const favoriteIndex = this.deals.findIndex((deal) => deal.id === id);
    const newFavorite = { ...this.deals[favoriteIndex], isFavorite: false };
    this.deals[favoriteIndex] = newFavorite;
    this.dealsModified.next([...this.deals]);
  }

  getDeal(id: number): Deal[] {
    return this.deals.filter((deal) => deal.id === id);
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

  sortBy(selection: string) {
    let fitleredDeals = [...this.deals].filter((deal) => {
      deal.platforms.includes(selection);
    });
    this.dealsModified.next(fitleredDeals);
  }
}
