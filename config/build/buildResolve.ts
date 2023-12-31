import type webpack from 'webpack';
import type { BuildOptions } from './types/config';

export function buildResolve({ paths }: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},
    fallback: { events: false },
  };
}
