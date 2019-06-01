import * as scss from 'node-sass';

const styles = scss.renderSync({
  file: __dirname + '/main.scss',
  includePaths: ['./node_modules', './src/templates']
});

console.log(styles.css.toString());