const fs = require("fs");
const sharp = require("sharp");

function validateInputParams(inputPath, outputPath, temperature) {
  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file '${inputPath}' not found.`);
    process.exit(1);
  }

  // Ensure the temperature value is within a reasonable range
  if (temperature < -100 || temperature > 100) {
    console.error(
      "Error: Temperature adjustment value should be between -100 and 100."
    );
    process.exit(1);
  }
}

function adjustTemperature(inputPath, outputPath, temperature) {
  try {
    // Adjust temperature using sharp library
    sharp(inputPath)
      .modulate({ saturation: 1 + temperature / 100 })
      .toFile(outputPath, (err) => {
        if (err) {
          console.error(`Error: ${err.message}`);
          process.exit(1);
        }
        console.log(
          `Image temperature adjusted successfully. Result saved to ${outputPath}`
        );
      });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

if (process.argv.length !== 5) {
  console.error("Error: Insufficient number of arguments.");
  console.error(
    "Usage: npm start -- input_image.jpg output_image.jpg temperature_adjustment_value"
  );
  process.exit(1);
}

const inputImagePath = process.argv[2];
const outputImagePath = process.argv[3];
const temperatureAdjustment = parseFloat(process.argv[4]);

console.time("Processing time: ");
validateInputParams(inputImagePath, outputImagePath, temperatureAdjustment);
adjustTemperature(inputImagePath, outputImagePath, temperatureAdjustment);
console.timeEnd("Processing time: ");
