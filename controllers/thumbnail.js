var fs = require('fs')
const request = require('request')
var im = require('imagemagick');
const path = require('path');

const ABSPATH = path.dirname(require.main.filename);

module.exports = {
    generateThumbnail: (req, res, next) => {
        let uri = req.body.url;
        let now = Date.now()
        let file_name = now + ".png"
        let file_path = "/public/" + file_name
        let downloadComplete = (file_path) => {
            let thumbPath = ABSPATH + "/public/thumb/" + file_name
            im.resize({
                srcPath: ABSPATH + file_path,
                dstPath: thumbPath,
                width: 50,
                height: 50
            }, (err, stdout, stderr) => {
                if(err) {
                    next(err)
                } else {
                    console.log("done")
                    let img = fs.readFileSync(thumbPath);
                    res.sendFile(thumbPath)
                    
                }
            })
            
        }
        let download = (uri, file_path, downloadComplete) => {
            request.head(uri, (err, res, body) => {
                request(uri).pipe(fs.createWriteStream(file_path)).on('close', () => {
                    console.log("Download complete")
                    console.log(file_path)
                    downloadComplete(file_path.substring(1))
                })
            })
        }
        download(uri, "." + file_path, downloadComplete);
        
    }
}