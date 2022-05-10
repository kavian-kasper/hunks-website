import Head from "next/head";
import Script from "next/script";

export const HeadInfo = (props) => {
  const title = props.title;
  return (
    <>
      <Head>
        <title>{title} ｜ Hunks</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Say hello to Hunks, the new punks."
        />
        <meta property="og:url" content="https://www.hunks.art" />
        <meta property="og:image" content="https://hunks.art/social.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="It began as a joke, but escalated into our most serious art project."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HunksArt" />
        <meta name="twitter:url" content="https://hunks.art" />
        <meta
          name="twitter:title"
          content="Say hello to Hunks, the new punks."
        />
        <meta
          name="twitter:description"
          content="It began as a joke, but escalated into our most serious art project."
        />
        <meta name="twitter:image" content="https://www.hunks.art/social.png" />
      </Head>
    </>
  );
};
export default HeadInfo;
