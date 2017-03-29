// Utils: Monkey Patching
String.prototype.repeat = function(times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += this;
  return result;
}

Array.prototype.range = function(block) {
  var r = [];
  for(var i = this[0]; i<this[1]; i++) {
    r.push(block(i));
  }
  return r;
}
// End Utils

class TextCell {
  constructor(text) {
    this.text = text.split("\n");
  }

  minWidth () {
    return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
    }, 0);
  }

  minHeight () {
    return this.text.length;
  }

  draw (width, height) {
    var result = [0,height].range((i)=>i).map(
      (i) => {
        var line = this.text[i] || "";
        return line + " ".repeat(width - line.length)
      }
    )
    return result;
  }

}
module.exports = TextCell
