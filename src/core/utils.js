var isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const LevelDb = require('datastore-level'); 
const DatastoreFs = require('datastore-fs');
const Path = require('path');
const os = require('os');


module.exports = {
    repoPath: function() {
        if(isBrowser()) {
            return "MyProjectName"
        } else {
            return Path.join(os.homedir(), '.MyProjectName')
        }
    },
    datastore: function(path) {
        if(isBrowser()) {
           return new LevelDb(path)
        } else {
            return new DatastoreFs(path, {
                extension: ""
            })
        }
    }
}