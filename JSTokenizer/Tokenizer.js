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
var Tokenizer = module.exports =  {
  
  tokenize : function (input)
  {
    /**line comment */
    const LCMT = /\/\/.*\r/
    /** full comment */
    const FCMT = /\/\*(?:.|[\n\r])*?\*\//
    /** identifire */
    const IDENT = /[a-zA-Z_][a-zA-Z0-9_]*\b/
    /** Integer */
    const INT = /[+-]?\d+/
    /** float */
    const FLOAT = /[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?/
    /** double Quote */
    const DQUOTE = /["][^"]*["]/
    /** single Quote */
    const SQUOTE = /['][^']*[']/
    /** tab */
    const TAB = /\t/
    /** new line */
    const NL = /\r/
    /** Space */
    const SPACE = /\s/
    /** symbol */
    const SYMBOL = /\S/
    /** all tokens */
    const TOKENS = /\/\/.*\r|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|["][^"]*["]|['][^']*[']|./g

    var tokens = input.match(TOKENS);
    var s = "< JSTOKENS >\n"
    for (i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (token.match(LCMT)) {
        s += "<LINECOMMENT>" + token + "<LINECOMMENT>\n";
      } else if (token.match(FCMT)) {
        s += "<FULLCOMMENT>" + token + "</FULLCOMMENT>\n";
      } else if (token.match(SQUOTE)) {
        s += "<SQUOTE>" + token + "</SQUOTE>\n";
      } else if (token.match(DQUOTE)) {
        s += "<DQUOTE>" + token + "</DQUOTE>\n";
      } else if (token.match(IDENT)) {
        s += "<IDENT>" + token + "</IDENT>\n";
      } else if (token.match(FLOAT)) {
        s += "<REAL>" + token + "</REAL>\n";
      } else if (token.match(INT)) {
        s += "<INT>" + token + "</INT>\n";
      } else if (token.match(SPACE)) {
        s += "<WS/>\n";
      } else if (token.match(NL)) {
        s += "<NL/>\n";
      } else if (token.match(TAB)) {
        s += "<TAB/>\n";
      } else if (token == ">") {
        s += "<SYMBOL>&gt;</SYMBOL>\n"
      } else if (token == "<") {
        s += "<SYMBOL>&lt;</SYMBOL>\n"
      } else  if (token == "&") {
        s += "<SYMBOL>&amp;</SYMBOL>\n"
      } else {
        s += "<SYMBOL>" + token + "</SYMBOL>\n"
      }
    }
    s += "</JSTOKENS>";
    console.log(s);
    return s;
  },

};

