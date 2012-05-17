/**
 *  This file is part of NewsPro Application
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

var reader = require("./Reader"),
    t = require("./Tokenizer");

(function (path){
  if (path == " ")
    return;
  var data = reader.Read(path);
  t.tokenize(data);
})((function (){
      var numargs = process.argv.length;
      if (numargs < 3) {
        console.log("Arguments required 3 provided : " + numargs);
        process.exit(1);
      }
      
      return process.argv[2];
    })()
  );
