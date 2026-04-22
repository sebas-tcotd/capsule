if (typeof registerPaint !== 'undefined') {
  class SquirclePainter {
    static get inputProperties() {
      return ['--squircle-smooth'];
    }

    paint(ctx, geom, properties) {
      const smooth = parseFloat(properties.get('--squircle-smooth').toString()) || 4;
      const w = geom.width;
      const h = geom.height;
      
      // Superellipse formula: |x/a|^n + |y/b|^n = 1
      // Optimized drawing path
      ctx.beginPath();
      
      // Start from top center
      for (let i = 0; i <= 360; i++) {
        const t = (i * Math.PI) / 180;
        const cosT = Math.cos(t);
        const sinT = Math.sin(t);
        
        // Apply superness
        const x = (Math.abs(cosT) ** (2 / smooth)) * (w / 2) * Math.sign(cosT) + (w / 2);
        const y = (Math.abs(sinT) ** (2 / smooth)) * (h / 2) * Math.sign(sinT) + (h / 2);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.closePath();
      ctx.fill();
    }
  }

  registerPaint('squircle', SquirclePainter);
}
