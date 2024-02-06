export interface Template {
  title: string;
  description: string;
  image: string;
  price: string;
}

const one: Template = {
  title: "Tempe AZ",
  description: "Enjoy the sun and warmth of the Arizona Heat.",
  image: "https://i.imgur.com/C3jlRyo.png",
  price: "$250",
};

const two: Template = {
  title: "Seattle WS",
  description: "Explore the Rainy weather with top coffee.",
  image: "https://i.imgur.com/673Penr.png",
  price: "$200",
};

const three: Template = {
  title: "Grand Canyon AZ",
  description: "Enjoy the great red rocks and watch the amazing view.",
  image: "https://i.imgur.com/385g6R1.png",
  price: "$575",
};

const four: Template = {
  title: "Tampa FL",
  description: "Enjoy the great beach weather and great outdoor fun.",
  image: "https://i.imgur.com/UELaY0D.png",
  price: "$375",
};

export const bytitle = {
  one,
  two,
  three,
  four,
};
export const products = Object.values(bytitle);
