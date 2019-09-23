var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
 
INPUT_path_to_your_images = 'src/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
OUTPUT_path = 'src/imagesOptimized/';

compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                            {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                            {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                            {svg: {engine: 'svgo', command: '--multipass'}},
                                            {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){                                
});