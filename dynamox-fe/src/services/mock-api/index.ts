// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import 'cross-fetch/polyfill'
import { setupServer } from 'msw/node'

import { handlers } from './handlers'

export const server = setupServer(...handlers)
