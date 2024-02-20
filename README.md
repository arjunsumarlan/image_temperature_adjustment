# Image Temperature Adjustment Script

## Overview

This script is designed to adjust the color temperature of JPEG images, simulating warmer or cooler tones. The primary purpose is to provide a tool for modifying the color tones of images while preserving overall image quality.

## Features

- **Temperature Adjustment:** The script accepts a temperature adjustment value (positive for warmer, negative for cooler) and applies it to the input image.

- **JPEG Format:** The script specifically handles JPEG image files for both input and output.

- **Input Validation:** Input parameters, including file paths and temperature adjustment values, are validated to ensure the script operates correctly.

## Requirements

- **Node.js:** Ensure that Node.js is installed on your system. You can download it from [Node.js Downloads](https://nodejs.org/).

- **Dependencies:** Install the necessary dependencies using the following command:

  ```bash
  npm install sharp
  ```

## Usage
Run the script from the command line using the following syntax:

  ```bash
  npm start -- input_image.jpg output_image.jpg temperature_adjustment_value
  ```

- `input_image.jpg`: Path to the input JPEG image.
- `output_image.jpg`: Path to save the adjusted JPEG image.
- `temperature_adjustment_value`: Numeric value for temperature adjustment (positive for warmer, negative for cooler).

## Example
Adjust the temperature of an image to make it warmer:

  ```bash
  npm start -- input_image.jpg output_image.jpg 10
  ```

Adjust the temperature of an image to make it cooler:

  ```bash
  npm start -- input_image.jpg output_image.jpg -10
  ```

### Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch, and submit a pull request. Feel free to open issues for bug reports or feature requests.

### License
This project is licensed under the MIT License.


<a href="https://www.freepik.com/free-photo/fried-chicken-breast-cheese-tomato-french-fries-ketchup-green-salad-side-view-jpg_7570878.htm#query=jpeg&position=10&from_view=search&track=sph&uuid=4f499e17-f168-4f47-857b-ad4bcf0ac1a0">Image by stockking</a> on Freepik