import fs from 'fs';
import gulp from 'gulp';
// import {exec} from 'child_process';

// blacklist for itself
const blacklist = ['index.js', 'util'];

const files = fs.readdirSync('./gulp').filter(f => !blacklist.includes(f));

// load custom tasks
files.forEach(file => {
    require('./' + file)(gulp);
});

gulp.task('default', ['debug']);
gulp.task('deploy', ['build']);
