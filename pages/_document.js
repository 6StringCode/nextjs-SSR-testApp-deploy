import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id='notifications'></div> {/* This is where the notifications will be rendered */}
        </body>
      </Html>
    )
  }
}

//This is the default document that Next.js uses to render the HTML for each page.
//It's important to note that this document is only rendered on the server side.
//It's important for additional meta data to be rendered to improve SEO.