const https = require("https");
const fs = require("fs");
const path = require("path");

const baseUrl =
  "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/large/";
const data = [];

// Function to create the assets directory if it doesn't exist
const createImagesDirectory = () => {
  const dir = path.join(__dirname, "assets");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const fetch_pictures = () => {
  for (let i = 0; i <= 199; i++) {
    const fileNumber = i.toString().padStart(4, "0");
    const fullUrl = `${baseUrl}${fileNumber}.jpg`;
    data.push(fullUrl);
  }
};

// Function to download a single image
const downloadImage = (url, savePath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(savePath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
          console.log(`Downloaded: ${path.basename(savePath)}`);
        });
      })
      .on("error", (err) => {
        fs.unlink(savePath, () => reject(err));
        console.error(
          `Failed to download ${path.basename(savePath)}: ${err.message}`
        );
      });
  });
};

const downloadAllImages = async () => {
  createImagesDirectory();
  fetch_pictures();

  data.forEach(async (url) => {
    const fileName = path.basename(url);
    const savePath = path.join(__dirname, "assets", fileName);

    try {
      await downloadImage(url, savePath);
    } catch (error) {
      console.error(`Error downloading ${fileName}: ${error.message}`);
    }
  });
};

downloadAllImages();
