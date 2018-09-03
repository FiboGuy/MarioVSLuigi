function Player(game, x, y, color,vx,vy) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.color = color;
    this.bullets=[];
    this.vx=vx;
    this.vy=vy;
    
};

Player.prototype.draw = function () {
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, false);
    this.game.ctx.fill(); 
    this.bullets = this.bullets.filter(function(bullet) {
        return bullet.x < this.game.canvas.width && bullet.x>0 && bullet.y>0 && bullet.y<this.game.canvas.height;
      }.bind(this));
    this.bullets.forEach(bullet => {
        bullet.draw();
        bullet.move();
    });
};

Player.prototype.shoot=function(){
    var bullet=new Bullet(this.game,this.x,this.y,this.vx,this.vy);
    this.bullets.push(bullet);
}





































