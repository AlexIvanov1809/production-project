/* eslint-disable @typescript-eslint/ban-ts-comment */
import type webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import type { BuildPath } from '../build/types/config';
import { DefinePlugin } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  // @ts-expect-error
  config.module.rules = config.module?.rules?.map(
    // @ts-expect-error
    (rule: webpack.RuleSetRule) => {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    },
  );

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoader(true));

  config?.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
    }),
  );

  return config;
};
