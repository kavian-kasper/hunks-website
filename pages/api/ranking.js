import Hunks from "../../hunks_rarity_scores.json";

export default async (req, res) => {
  const hunk = "hunk" + req.query.hunk;

  const hunks = Object.keys(Hunks);

  const hunkRanking = hunks.findIndex((sortedHunk) => hunk == sortedHunk) + 1;

  if (hunkRanking == 0) {
    res
      .status(404)
      .json({ errorMessage: req.query.hunk + "is not a valid number." });
  } else if (hunkRanking <= 2000 && hunkRanking > 1000) {
    res.status(200).json({
      successMessage:
        hunkRanking +
        "/ 10000 " +
        "is " +
        hunk +
        "'s rarity ranking." +
        " Ey, kinda rare!",
    });
  } else if (hunkRanking <= 1000 && hunkRanking > 500) {
    res.status(200).json({
      successMessage:
        hunkRanking +
        "/ 10000 " +
        "is " +
        hunk +
        "'s rarity ranking." +
        " Rare as hell bruh!",
    });
  } else if (hunkRanking <= 500 && hunkRanking > 100) {
    res.status(200).json({
      successMessage:
        hunkRanking +
        "/ 10000 " +
        "is " +
        hunk +
        "'s rarity ranking." +
        " That's one sexy and rare ass Hunk.",
    });
  } else if (hunkRanking <= 100 && hunkRanking > 9) {
    res.status(200).json({
      successMessage:
        hunkRanking +
        "/ 10000 " +
        "is " +
        hunk +
        "'s rarity ranking." +
        " INSANE! Ultra rare Hunk.",
    });
  } else if (hunkRanking <= 90 && hunkRanking > 0) {
    res.status(200).json({
      successMessage:
        hunkRanking +
        "/ 10000 " +
        "is " +
        hunk +
        "'s rarity ranking." +
        " NO FUCKING WAY!",
    });
  } else
    res.status(200).json({
      successMessage:
        hunkRanking + "/ 10000 " + "is " + hunk + "'s rarity ranking.",
    });
};
