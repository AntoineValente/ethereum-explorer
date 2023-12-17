import Moralis from 'moralis';

export const startMoralisClient = async () => {
  try {
    Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    }).catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};
