const projectName = require('./project')

const config = {
    //项目A
    projectA: {
      pages: {
        index: {
          entry: 'src/projects/project-A/main.js',
          outputDir: "dist/project-A/",
          template: 'public/index.html',
          filename: 'index.html',
        }
      }
    },
    //项目B
    projectB: {
      pages: {
        index: {
          entry: 'src/projects/project-B/main.js',
          outputDir: "dist/project-B/",
          template: 'public/index.html',
          filename: 'index.html',
        }
      }
    },
    // 更多...
}

const configObj = config[projectName.name]
module.exports = configObj
