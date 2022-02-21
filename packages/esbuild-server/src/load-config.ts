import { existsSync } from 'fs';
import { resolve } from 'path';

import { Config } from './config';

export function loadConfig(path: string): Config | undefined {
  const resolved = resolve(path);

  if (!existsSync(resolved)) {
    return undefined;
  }

  // TODO: Config validation.
  const config: Config = require(resolved);
  return config;
}