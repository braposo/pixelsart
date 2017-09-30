import React from "react";
import { colours, Div, scale, Icon } from "./UI";
import ChatIcon from "./assets/chat";
import TrophyIcon from "./assets/trophy";
import HeartIcon from "./assets/heart";
import Logo from "./assets/logo.svg";

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

const Fav = <HeartIcon size={16} color={colours.red} />;
const Badges = <TrophyIcon size={16} color={colours.yellow} />;
const Bio = <ChatIcon size={16} color={colours.blue} />;

const getIconComponent = (icon, i) => {
  const components = {
    favs: React.cloneElement(Fav, { key: `fav-${i}` }),
    badges: React.cloneElement(Badges, { key: `badges-${i}` }),
    bio: React.cloneElement(Bio, { key: `bio-${i}` })
  };

  return components[icon];
};

const Results = ({ data, onResetClick }) => {
  const printFavs = Array(data.favs[1]).fill("favs");
  const printBadges = Array(data.badges[1]).fill("badges");
  const printBio = Array(data.bio[1]).fill("bio");
  const printChars = [...printFavs, ...printBadges, ...printBio];
  printChars.splice(1480);

  return (
    <Div css={{ position: "relative", margin: scale[4] }}>
      <Div css={{ position: "absolute", top: 0, left: 0 }}>
        <Icon src={Logo} alt="Pixels Camp logo" />
      </Div>
      <Div css={{ position: "absolute", top: 0, right: 0 }}>
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
      </Div>
      <Div css={{ maxWidth: 600, margin: "0 auto", paddingTop: 150 }}>
        {printChars.map((char, i) => getIconComponent(char, i))}
      </Div>
      <Div css={{ marginTop: 90 }}>pixelsart</Div>
      <Div css={{ fontSize: 10 }}>2017</Div>
    </Div>
  );
};

export default Results;
