import fs from "node:fs";
import path from "node:path";

const src1 = "C:\\Users\\COMPUTER CENTER\\.gemini\\antigravity-ide\\brain\\cb8d38ae-de24-4d05-8344-1d5d4101505c\\phone_hero_studio_1790674533835.jpg";
const src2 = "C:\\Users\\COMPUTER CENTER\\.gemini\\antigravity-ide\\brain\\cb8d38ae-de24-4d05-8344-1d5d4101505c\\phone_camera_detail_1790674551846.jpg";

const destDir = path.resolve("public", "images");
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src1, path.join(destDir, "phone-hero.jpg"));
fs.copyFileSync(src2, path.join(destDir, "phone-camera.jpg"));

console.log("Images copied successfully to public/images/");
