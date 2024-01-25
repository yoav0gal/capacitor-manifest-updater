// updateManifest.test.js
import { describe, it, expect } from "vitest";
import { execa } from "execa";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

describe("capacitor-manifest-updater", () => {
  it("should add permissions to the AndroidManifest.xml", async () => {
    const testManifestPath = join(__dirname, "testAndroidManifest.xml");
    const updateManifestScript = join(__dirname, "./updateManifest.js");
    const initialContent = "<manifest>\n</manifest>";
    writeFileSync(testManifestPath, initialContent);

    const permissions = ["android.permission.ACCESS_BACKGROUND_LOCATION"];

    await execa("node", [
      updateManifestScript,
      testManifestPath,
      ...permissions,
    ]);

    const updatedContent = readFileSync(testManifestPath, "utf-8");

    permissions.forEach((permission) => {
      expect(updatedContent).toContain(permission);
    });
  });
});
