import DataFile from "data/api_data.json";

export const ICON_COUNT = 1120;
export const processStats = (stats, data) => {
  const favs = data.favs.length;
  const badges = data.badges["2017"].length;
  const bio = data.bio.split(" ").length;
  const referrals = data.referrals.length;
  const transIn = stats.numReceived || 0;
  const transOut = stats.numSent || 0;
  const total = favs + badges + bio + transIn + transOut + referrals;
  const calcArea = val => Math.round(val * ICON_COUNT / total);

  return {
    favs: [favs, calcArea(favs)],
    badges: [badges, calcArea(badges)],
    bio: [bio, calcArea(bio)],
    referrals: [referrals, calcArea(referrals)],
    transIn: [transIn, calcArea(transIn)],
    transOut: [transOut, calcArea(transOut)]
  };
};
export const processData = data => {
  const stats = DataFile[data.wallet.toLowerCase()] || {};

  return {
    username: data.github_user,
    wallet: data.wallet,
    name: data.name,
    avatar: data.avatar_url,
    ...processStats(stats, data)
  };
};
