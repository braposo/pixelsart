import React from "react";
import { colours, Div, scale, Icon, A } from "components/UI";
import ChatIcon from "assets/icons/chat";
import TrophyIcon from "assets/icons/trophy";
import HeartIcon from "assets/icons/heart";
import WifiIcon from "assets/icons/wifi";
import SpeakerIcon from "assets/icons/speaker";
import Logo from "assets/logo.svg";
import { ICON_COUNT, COLUMNS, ICON_SIZE } from "utils";

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

const Fav = <HeartIcon size={ICON_SIZE} color={colours.red} />;
const Badges = <TrophyIcon size={ICON_SIZE} color={colours.yellow} />;
const Bio = <ChatIcon size={ICON_SIZE} color={colours.blue} />;
const TransIn = <WifiIcon size={ICON_SIZE} color={colours.green} />;
const TransOut = <WifiIcon size={ICON_SIZE} color={colours.red} />;
const Referrals = <SpeakerIcon size={ICON_SIZE} color={colours.orange} />;

const getIconComponent = (icon, i) => {
  const components = {
    favs: React.cloneElement(Fav, { key: `fav-${i}` }),
    badges: React.cloneElement(Badges, { key: `badges-${i}` }),
    bio: React.cloneElement(Bio, { key: `bio-${i}` }),
    transIn: React.cloneElement(TransIn, {
      key: `trans-in-${i}`
    }),
    transOut: React.cloneElement(TransOut, {
      key: `trans-out-${i}`
    }),
    referrals: React.cloneElement(Referrals, { key: `referrals-${i}` }),
  };

  return components[icon];
};

const Results = ({ data, onResetClick }) => {
  const printFavs = Array(data.favs[1]).fill("favs");
  const printBadges = Array(data.badges[1]).fill("badges");
  const printBio = Array(data.bio[1]).fill("bio");
  const printTransIn = Array(data.transIn[1]).fill("transIn");
  const printTransOut = Array(data.transOut[1]).fill("transOut");
  const printReferrals = Array(data.referrals[1]).fill("referrals");
  const printChars = [
    ...printFavs,
    ...printBio,
    ...printReferrals,
    ...printBadges,
    ...printTransIn,
    ...printTransOut
  ];
  printChars.splice(ICON_COUNT);

  return (
    <Div css={{ position: "relative", margin: scale[4] }}>
      <Div css={{ position: "absolute", top: 0, left: 0 }}>
        <A href="/">
          <Icon src={Logo} alt="Pixels Camp logo" />
        </A>
      </Div>
      <Div
        css={{
          position: "absolute",
          top: 0,
          right: 0,
          textTransform: "uppercase"
        }}
      >
        <A href={`https://pixels.camp/${data.username}`}>
          {data.name}{" "}
          <Icon
            src={data.avatar}
            alt="avatar"
            css={{
              width: 14,
              height: 14,
              display: "inline-block",
              verticalAlign: "top"
            }}
          />
        </A>
      </Div>
      <Div
        css={{
          maxWidth: ICON_SIZE * COLUMNS,
          margin: "0 auto",
          paddingTop: 150,
          textAlign: "left"
        }}
      >
        {printChars.map((char, i) => getIconComponent(char, i))}
      </Div>
      <A href="https://pixels.camp/projects/50">
        <Div css={{ marginTop: 90 }}>pixelsart</Div>
        <Div css={{ fontSize: 10 }}>2017</Div>
      </A>
    </Div>
  );
};

export default Results;
