import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import Fontmin from 'fontmin';

const __dirname = dirname(fileURLToPath(import.meta.url));

const resolvePath = path => {
  return resolve(__dirname, path);
};

new Fontmin()
  .src(resolvePath('./SourceHanSerifCN-Bold.ttf'))
  .dest(resolvePath('../public'))
  .use(
    Fontmin.glyph({
      text: '今天是星期五吗的不1234567890?~',
    }),
  )
  .run((err, files) => {
    if (err) throw err;
  });
