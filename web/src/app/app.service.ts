import { Injectable } from '@nestjs/common';
import { renderToString } from 'react-dom/server';
import Layout from '../views/index';
import { ServerStyleSheet } from 'styled-components';

@Injectable()
export class AppService {
  getPage(url: string): string {
    const styles = new ServerStyleSheet();
    const html = renderToString(
      styles.collectStyles(Layout({ location: url })),
    );

    return `
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

          <title>Manga Observer | Web</title>
          ${styles.getStyleTags()}
          <script src="https://kit.fontawesome.com/7a6f88b9b9.js" crossorigin="anonymous"></script>
        </head>
        <body>
          ${html}
        </body>
      </html>`;
  }
}
