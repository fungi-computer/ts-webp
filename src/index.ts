export { decodeAnimation } from "./animation.js";
export { decode } from "./decoder.js";
export { encode, encodeAsync, encodeWithAlpha } from "./encoder.js";
export { encodeViaCwebp, hasCwebp } from "./encoder-cli.js";
export { createRiffContainer, getWebpInfo, parseRiff } from "./riff.js";
export type {
  RiffChunk,
  VP8FrameHeader,
  VP8LHeader,
  WebpAnimation,
  WebpAnimationFrame,
  WebpDecodeOptions,
  WebpEncodeOptions,
  WebpImageData,
  WebpInfo,
} from "./types.js";

// Default export
import { decode } from "./decoder.js";
import { encode } from "./encoder.js";

export default {
  decode,
  encode,
};
