var TextCell = require('./textcell.js');

class RTextCell extends TextCell {
  constructor(text){
    super(text);
  }

  draw(width, height){
    return super.draw();
  }
}

module.exports = RTextCell;
