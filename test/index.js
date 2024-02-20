const assert = require('assert');
const { execSync } = require('child_process');
const fs = require('fs');

// Function to execute the image temperature adjustment script
function runImageAdjustmentScript(inputPath, outputPath, temperature) {
    const command = `npm start -- ${inputPath} ${outputPath} ${temperature}`;
    execSync(command);
}

// Test 1: Warm temperature adjustment
const inputImageWarm = 'test/test.jpeg';
const outputImageWarm = 'test/test_output.jpeg';
const temperatureWarm = 20;

runImageAdjustmentScript(inputImageWarm, outputImageWarm, temperatureWarm);

// Verify the output image exists
assert.ok(fs.existsSync(outputImageWarm), 'Output image for warm adjustment does not exist.');

// Test 2: Cool temperature adjustment
const inputImageCool = 'test/test.jpeg';
const outputImageCool = 'test/test_output.jpeg';
const temperatureCool = -20;

runImageAdjustmentScript(inputImageCool, outputImageCool, temperatureCool);

// Verify the output image exists
assert.ok(fs.existsSync(outputImageCool), 'Output image for cool adjustment does not exist.');

console.log('All tests passed successfully.');
