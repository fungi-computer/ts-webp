import {
  createRiffContainer,
  parseRiff,
  type RiffChunk,
} from "@fungi.computer/ts-webp";

const container: Uint8Array = createRiffContainer([
  { fourCC: "XMP ", data: new TextEncoder().encode("XMP") },
]);
const chunks: RiffChunk[] = parseRiff(container);
const metadata: Uint8Array | undefined = chunks[0]?.data;
void metadata;
