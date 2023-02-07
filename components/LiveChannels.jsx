import React from "react";
import LiveChannelItem from "./LiveChannelItem";

//photo imports
import Live1 from "../public/assets/live/live1.jpeg";
import Live2 from "../public/assets/live/live2.jpeg";
import Live3 from "../public/assets/live/live3.jpeg";
import Live4 from "../public/assets/live/live4.jpeg";
import Live5 from "../public/assets/live/live5.jpeg";
import Live6 from "../public/assets/live/live6.jpeg";
import Live7 from "../public/assets/live/live7.jpeg";
import Live8 from "../public/assets/live/live8.jpeg";
import Live9 from "../public/assets/live/live9.jpeg";
import Live10 from "../public/assets/live/live10.jpeg";
import icon1 from "../public/assets/live-icons/icon1.png";
import icon2 from "../public/assets/live-icons/icon2.png";
import icon3 from "../public/assets/live-icons/icon3.png";
import icon4 from "../public/assets/live-icons/icon4.png";
import icon5 from "../public/assets/live-icons/icon5.png";
import icon6 from "../public/assets/live-icons/icon6.png";
import icon7 from "../public/assets/live-icons/icon7.png";
import icon8 from "../public/assets/live-icons/icon8.png";
import icon9 from "../public/assets/live-icons/icon9.png";
import icon10 from "../public/assets/live-icons/icon10.png";

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels</span> we think you'll
        like
      </h2>
      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem
          img={Live1}
          profile_img={icon1} //download images off of twitch to use and import them from public assets
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />

        <LiveChannelItem
          img={Live2}
          profile_img={icon2} //download images off of twitch to use and import them from public assets
          title="Deployable shield commin in clutch"
          user="50ZINT"
          game="Call of Duty: Warzone"
        />

        <LiveChannelItem
          img={Live3}
          profile_img={icon3} //download images off of twitch to use and import them from public assets
          title="vALORAN WITH NIJI AND FRIENDS!..."
          user="baoo"
          game="Valorant"
        />

        <LiveChannelItem
          img={Live4}
          profile_img={icon4} //download images off of twitch to use and import them from public assets
          title="Local Streamer STUCK in a cave: sings..."
          user="Jerma985"
          game="One Hand Clapping"
        />

        <LiveChannelItem
          img={Live5}
          profile_img={icon5} //download images off of twitch to use and import them from public assets
          title="Big Mario Kart session"
          user="Bigpuffer"
          game="Mario Kart 8 Deluxe"
        />

        <LiveChannelItem
          img={Live6}
          profile_img={icon6} //download images off of twitch to use and import them from public assets
          title="Tripod Man Gains RP | Code: MFAM | @..."
          user="NICKMERCS"
          game="Apex Legends"
        />

        <LiveChannelItem
          img={Live7}
          profile_img={icon7} //download images off of twitch to use and import them from public assets
          title="JESUS LOVES YOU!!"
          user="coletteleclair"
          game="Just Chatting"
        />

        <LiveChannelItem
          img={Live8}
          profile_img={icon8} //download images off of twitch to use and import them from public assets
          title="Covert_Muffin teaching Star Wars..."
          user="JamesDoneQuick"
          game="Star Wars: Jedi Knight II - Jedi Outcast"
        />

        <LiveChannelItem
          img={Live9}
          profile_img={icon9} //download images off of twitch to use and import them from public assets
          title="Grinding"
          user="shroud"
          game="The Cycle: Frontier"
        />

        <LiveChannelItem
          img={Live10}
          profile_img={icon10} //download images off of twitch to use and import them from public assets
          title="GRILLIN / CHILLIN! steak / burgers"
          user="KennyGoodloe"
          game="Just Chatting"
        />
      </div>
    </div>
  );
};

export default LiveChannels;
