import { Injectable } from '@nestjs/common';
import { renderToString } from 'react-dom/server';
import Layout from '../views/index';

@Injectable()
export class AppService {
  getPage(url: string): string {
    const html = renderToString(Layout({ location: url }));

    return `
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
          <title>Manga Observer | Web</title>
        </head>
        <body>
          ${html}
        </body>
      </html>`;
  }
}
