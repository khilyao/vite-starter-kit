# Vite Starter Kit

Welcome to the **Vite Starter Kit**! This is a modern and fast development setup using Vite, designed for a smooth development experience with vanilla JavaScript. It includes a range of useful plugins for enhanced performance, code quality, and optimizations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Plugins](#plugins)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Fast Development**: Leveraging Vite for lightning-fast build and development processes.
- **Legacy Browser Support**: Includes polyfills for compatibility with older browsers.
- **Code Compression**: Automatic Gzip compression for optimized asset delivery.
- **Image Optimization**: Minimize image sizes with `unplugin-imagemin`.
- **Code Quality Tools**: Integrated ESLint and Stylelint for maintaining high code quality.
- **Visualize Bundle**: Rollup plugin for visualizing your build size and contents.

## Installation

To get started with this Vite starter kit, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/vite-starter-kit.git
   cd vite-starter-kit
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage

### Development Mode

To start a local development server, run:

```bash
npm run dev
```

This will start Vite's development server and watch for changes in your source files.

### Building for Production

To build your project for production, use:

```bash
npm run build
```

This will generate optimized static assets in the dist directory.

### Preview the Build

To preview the production build locally, run:

```bash
npm run preview
```

This command will start a local server where you can view the fully optimized build.

## Plugins

This starter kit uses a variety of plugins to enhance your development workflow:

- **[@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy)**: Adds support for older browsers by including polyfills.
- **[vite-plugin-compression](https://www.npmjs.com/package/vite-plugin-compression)**: Compresses assets using Gzip to reduce file sizes.
- **[unplugin-imagemin](https://www.npmjs.com/package/unplugin-imagemin)**: Optimizes images for faster loading.
- **[@rollup/plugin-babel](https://www.npmjs.com/package/@rollup/plugin-babel)**: Transpiles JavaScript with Babel to ensure compatibility with older browsers.
- **[@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)**: Converts CommonJS modules to ES6 for use with Rollup.
- **[@rollup/plugin-image](https://www.npmjs.com/package/@rollup/plugin-image)**: Handles image imports in your project.
- **[vite-plugin-purgecss](https://www.npmjs.com/package/vite-plugin-purgecss)**: Removes unused CSS to reduce bundle size.
- **[rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)**: Visualizes your bundle size to help you optimize it.

## Contributing

We welcome contributions to improve this starter kit! If you have suggestions or find issues, please open an issue or submit a pull request.
