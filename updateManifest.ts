import { readFileSync, writeFileSync } from "fs";
import * as process from "process";

const args = process.argv.slice(2);
const manifestPath = args[0];
const permissions = args.slice(1);

try {
  let manifestContent = readFileSync(manifestPath, "utf-8");

  permissions.forEach((permission) => {
    if (!manifestContent.includes(permission)) {
      manifestContent = manifestContent.replace(
        "<manifest",
        `<uses-permission android:name="${permission}" />\n<manifest`
      );
    }
  });

  writeFileSync(manifestPath, manifestContent);
  console.log("AndroidManifest.xml updated successfully");
} catch (error) {
  console.error("Failed to update AndroidManifest.xml:", error);
}
