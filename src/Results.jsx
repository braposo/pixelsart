import React from "react";
import { Pre, Button, Icon, Span, colours } from "./UI";
import ChatIcon from "./assets/chat";
import TrophyIcon from "./assets/trophy";
import HeartIcon from "./assets/heart";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Fav = <HeartIcon size={48} color={colours.red} />;
const Badges = <TrophyIcon size={48} color={colours.yellow} />;
const Bio = <ChatIcon size={48} color={colours.blue} />;

const getIconComponent = icon => {
  const components = {
    favs: Fav,
    badges: Badges,
    bio: Bio
  };

  return components[icon];
};

const Results = ({ data, onResetClick }) => {
  const printFavs = Array(data.favs[1]).fill("favs");
  const printBadges = Array(data.badges[1]).fill("badges");
  const printBio = Array(data.bio[1]).fill("bio");
  const printChars = shuffleArray([...printFavs, ...printBadges, ...printBio]);

  return (
    <div>
      {printChars.map(char => getIconComponent(char))}
      <div>
        <Button onClick={onResetClick}>Back</Button>
      </div>
    </div>
  );
};

export default Results;
