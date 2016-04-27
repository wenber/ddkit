import fs from 'fs';
import replace from 'gulp-replace';

export default (gulp) => {
    gulp.task('assets', function () {
        let HASH = getHashFromDir();

        gulp.src('./index.html')
            .pipe(replace('entry.css', 'entry.' + HASH + '.css'))
            .pipe(replace('common.css', 'common.' + HASH + '.css'))
            .pipe(replace('common.bundle.js', 'common.' + HASH + '.bundle.js'))
            .pipe(replace('entry.js', 'entry.' + HASH + '.min.js'))
            .pipe(gulp.dest('./release'));
    });
};

/**
 * @desc get hash from the dir, composed of its name
 * @return {string} hash
 */
function getHashFromDir () {
    const assertDir = fs.realpathSync('./release/asset');
    const assertFiles = fs.readdirSync(assertDir);
    let hash = '';
    assertFiles.some(function (file) {
        let reg = /\.css$/g;
        if (reg.test(file)) {
            let arr = file.split('.');
            hash = getHash(arr);
            return true;
        }
    });
    return hash;
}


/**
 * @desc get hash from the longest string
 * @param arr {array}
 * @return {string}
 */
function getHash (arr) {
    let _hash = '';

    arr.some(function (str) {
        if (str.length > 10) {
            _hash = str;
            return true;
        }
    });

    console.log('************HASH****************');
    console.log(_hash);
    return _hash;
}
