import assert from "node:assert/strict";
import { createRiffContainer, parseRiff } from "@fungi.computer/ts-webp";

// Darkroom's provenance exporter uses these RIFF helpers. Preserve metadata
// bytes, including odd-length chunk padding; no cwebp executable is needed.
const metadata = new TextEncoder().encode("XMP");
const container = createRiffContainer([{ fourCC: "XMP ", data: metadata }]);
const chunks = parseRiff(container);
assert.equal(chunks.length, 1);
assert.equal(chunks[0].fourCC, "XMP ");
assert.equal(chunks[0].size, metadata.length);
assert.deepEqual(chunks[0].data, metadata);
assert.equal(container.byteLength % 2, 0);
assert.throws(() => parseRiff(new Uint8Array(11)));
