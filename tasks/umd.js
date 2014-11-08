module.exports = {
  build: {
    src: ['lib/<%= pkg.name.replace(/\.js$/, "") %>.js'],
    dest: 'dist/<%= pkg.name.replace(/\.js$/, "") %>.js',
    indent: '  ',
    objectToExport: 'Dip'
  }
};
