import Document, { Html, Head, Main, NextScript, Script } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Say hello to Hunks, the new punks."
          />
          <link rel="icon" href="/favicon.png" />

          <link
            href="https://fonts.googleapis.com/css?family=Nunito:700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
