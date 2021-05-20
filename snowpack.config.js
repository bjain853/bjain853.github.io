
module.exports = {
    "plugins": [
      "@snowpack/plugin-sass"  
    ],
    buildOptions: {
      // put the build files in /docs
      out: 'deploy',
      // put the meta snowpack build files under snowpack instead of _snowpack since Github special-cases underscore prefixed folders
      metaUrlPath: 'snowpack'
    }
}
