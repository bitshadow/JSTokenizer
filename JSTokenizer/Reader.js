/**
 *  Copyright (C) 2012 Jignesh Kakadiya <jigneshhk1992@gmail.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var fs = require("fs");

/** Module Reader contains file utilities */
var Reader = module.exports = {
  version: [0],

  isFile : function(path) {
    try {
      return fs.statSync(path).isFile();
    }
    catch (error) {
      return false;
    }
  },

  /** See if its with valid extension */
  isPatchFile : function (path) {
    var isPatch = isFile(path) && path.endsWith(".patch")
    return isPatch;
  },

  /** Read content from file syncronusly */
  Read: function(path) {
     if(!this.isFile(path))
         return null;
     //console.log(path);
     try {
       var data = fs.readFileSync(path,'utf8');
     }
     catch (error) {
       console.error("Could not open "+ path);
       process.exit(1);
    }

    return data.toString();
  },

};