
import type {DefaultTheme} from 'vitepress/types/default-theme'

import v15x from './sidebar/v1.5.x';
import v16x from './sidebar/v1.6.x';

const config:DefaultTheme.Config['sidebar'] = {
  '/v1.5.x/': v15x,
  '/v1.6.x/': v16x,
}

export default config