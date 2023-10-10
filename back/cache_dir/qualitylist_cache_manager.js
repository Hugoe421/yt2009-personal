const fs = require("fs")
const config = require("../config.json")
let cache = {}
if(!config.fallbackMode) {
    cache = JSON.parse(fs.readFileSync(`${__dirname}/qualitylist_cache.json`).toString())
} 

module.exports = {
    "write": function(id, data) {
        cache[id] = data;
    },

    "read": function() {
        return cache;
    }
}