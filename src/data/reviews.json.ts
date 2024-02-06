export interface Template {
  name: string;
  review: string;
  profileimage: string;
  position: string;
}

const one: Template = {
  name: "Seth Smith",
  review:
    "The Amazing price for an amazing stay is for sure a 10/10! reservations were easy and quick to set up wiithout hastle!",
  profileimage: "https://i.imgur.com/li8mExT.png",
  position: "SOftware Engineer",
};

const two: Template = {
  name: "Karl Lee",
  review:
    "If you dont like stress this will be the right place for you! dont stress about reservations and any small details.",
  profileimage: "https://i.imgur.com/uHuQgjC.png",
  position: "High School Teacher",
};

const three: Template = {
  name: "Tayler Kirk",
  review:
    "Going with the family to disneyland we needed a place to stay and and TravHome took care of everything all at once.",
  profileimage: "https://i.imgur.com/IfXsYNY.png",
  position: "VP of NovaForge",
};

export const bytitle = {
  one,
  two,
  three,
};
export const reviews = Object.values(bytitle);
