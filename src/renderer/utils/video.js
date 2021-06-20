// const cheerio = require('cheerio');
// const glob = require('glob');
/*eslint-disable*/
const fs = require('fs');
const path = require('path');
const getDimensions = require('get-video-dimensions');

const cache = {};

const videofile = [
  'mp4',
  'avi',
  'mkv',
  'mov',
  'wmv',
  'ts',
  'm2ts',
  'mpg',
  'rmvb',
  'rm',
];
async function checkVideo(dir) {
  try {
    const dimensions = await getDimensions(dir);
    // console.log(dir);
    console.log(dimensions);
    // console.log(dimensions.height);
    return dimensions;
  } catch (err) {
    console.log(err);
  }
  return false;
}

async function fileDisplay(filePath, res) {
  // 根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);
  // files.forEach(async function(filename) {

  // });
  for await (const filename of files) {
    //获取当前文件的绝对路径
    const filedir = path.join(filePath, filename);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const stats = fs.statSync(filedir);
    const isFile = stats.isFile(); //是文件
    const isDir = stats.isDirectory(); //是文件夹
    if (isFile) {
      // console.log(filename); // 读取文件内容
      const [ext, ...rest] = filename.split('.').reverse();
      // console.log(ext);
      if (videofile.includes(ext)) {
        // console.log('shipin');
        const dimensions = await checkVideo(filedir);
        console.log(dimensions);
        res.push({ ...dimensions, filename, filedir });
      }
      //   var content = fs.readFileSync(filedir, "utf-8");
      //   console.log(content);
    }
    if (isDir) {
      await fileDisplay(filedir, res); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  }
  console.log(res);
  return res;
}

export default {
  handleCheckVideo: async (params) => {
    let res = [];
    const { path } = params;
    const list = await fileDisplay(path, res);
    return { path, list };
  },
  deleteVideo: (filePath) => {
    console.log('deleteVideo', filePath);
    fs.unlinkSync(filePath);
    return { status: 'success' };
  },
};
