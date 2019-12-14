
class Media {
  constructor(obj) {
    
  }
  show() {
    if (this.el) {
      push();
      this.draw();
      pop();
    }
  }
  setup(el) {
    this.el = el;
    this.x = width / 2;
    this.y = height / 2;
    this.ratio = min(this.el.width, width / 2) / this.el.width;
  }
  draw() {
    imageMode(CENTER);
    let w = this.el.width * this.ratio;
    let h = this.el.height * this.ratio;
    image(this.el, this.x, this.y, w, h);
  }
}