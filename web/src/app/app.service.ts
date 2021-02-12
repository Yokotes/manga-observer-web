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
    const links = [
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />',
    ];

    return `
      <html>
        <head>
          ${links.map((link) => link)}
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
