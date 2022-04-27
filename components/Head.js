import Head from "next/head";
import Script from "next/script";

export const HeadInfo = (props) => {
  const title = props.title;
  return (
    <>
      <Head>
        <title>{title} ｜ KavanMeta</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Metatoons - NFTs by KavanMeta" />
        <meta property="og:url" content="https://kavanmeta.io" />
        <meta
          property="og:image"
          content="https://kavanmeta.vercel.app/social.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Bespoke 3D Avatars primed for a future metaverse."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kavanmeta" />
        <meta name="twitter:url" content="https://kavanmeta.vercel.app/" />
        <meta name="twitter:title" content="Metatoons - NFTs by KavanMeta" />
        <meta
          name="twitter:description"
          content="Bespoke 3D Avatars primed for a future metaverse."
        />
        <meta
          name="twitter:image"
          content="https://kavanmeta.vercel.app/social.jpg/"
        />
      </Head>
    </>
  );
};
export default HeadInfo;
