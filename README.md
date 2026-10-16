# @fungi.computer/ts-webp

WebP decoding and encoding in TypeScript: `decode`, `decodeAnimation`,
`encode`, `encodeWithAlpha`, RIFF container helpers (`parseRiff`,
`createRiffContainer`, `getWebpInfo`) and an optional path through the `cwebp`
command-line encoder (`encodeViaCwebp`).

## Fungi fork

This package is a Fungi fork of
[stacksjs/ts-webp](https://github.com/stacksjs/ts-webp) at the `v0.1.6` release
(commit `dfd79c9`). The source is unchanged except that every relative import
names its `.js` file and the package builds with `tsc` for NodeNext. Upstream's
published declarations omit those extensions, so under NodeNext resolution its
exports do not resolve and their types degrade to `any`. Drop this fork when
upstream publishes NodeNext-resolvable declarations. [NOTICE](./NOTICE) records
the provenance and license.

## Install

```sh
npm install @fungi.computer/ts-webp
```

## Build

```sh
pnpm build
pnpm typecheck
```

## License

MIT; see [LICENSE](./LICENSE).
