# capacitor-manifest-updater

![Alt text](image.png)

## Description

CapacitorManifestUpdater is a Node.js utility for updating the `AndroidManifest.xml` file in Capacitor projects. It automates the process of adding specific permissions, making it easier and more reliable compared to manual editing.

## Installation

```bash
npm install capacitor-manifest-updater
```

## Usage

Run the script using `npx` and provide the path to your `AndroidManifest.xml` and the permissions you want to add:

```bash
npx capacitor-manifest-updater path/to/AndroidManifest.xml [PERMISSIONS...]
```

Example:

```bash
npx capacitor-manifest-updater ./android/app/src/main/AndroidManifest.xml android.permission.ACCESS_FINE_LOCATION android.permission.ACCESS_COARSE_LOCATION
```

## Features

- Easily add permissions to `AndroidManifest.xml`.
- Supports multiple permissions.
- Command-line interface for simplicity.

## Contributing

Contributions to improve CapacitorManifestUpdater are welcome. Please submit pull requests or issues to our GitHub repository.

## License

CapacitorManifestUpdater is released under the MIT License. See the LICENSE file for more details.
