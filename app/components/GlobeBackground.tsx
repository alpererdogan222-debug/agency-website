"use client";

import { useEffect, useRef } from "react";

export default function GlobeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animFrameId: number;
    let renderer: import("three").WebGLRenderer;

    import("three").then((THREE) => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      // Sahne
      const scene = new THREE.Scene();

      // Kamera — küreyi biraz soldan göster, hero metniyle uyumlu
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
      camera.position.set(-0.4, 0.2, 5.5);
      camera.lookAt(0, 0, 0);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x020614);
      mount.appendChild(renderer.domElement);

      // ── Ana küre — koyu lacivert ──
      const R = 2.2;
      const globeGeo = new THREE.SphereGeometry(R, 64, 64);
      const globeMat = new THREE.MeshPhongMaterial({
        color: 0x050f2e,
        emissive: 0x030b20,
        shininess: 12,
      });
      const globe = new THREE.Mesh(globeGeo, globeMat);
      scene.add(globe);

      // ── Grid çizgileri (enlem/boylam) ──
      const gridGeo = new THREE.SphereGeometry(R + 0.015, 28, 28);
      const gridMat = new THREE.LineBasicMaterial({
        color: 0x1d4ed8,
        transparent: true,
        opacity: 0.30,
      });
      const grid = new THREE.LineSegments(
        new THREE.WireframeGeometry(gridGeo),
        gridMat
      );
      scene.add(grid);

      // ── Atmosfer parıltısı — dış küre ──
      const atmosGeo = new THREE.SphereGeometry(R * 1.18, 64, 64);
      const atmosMat = new THREE.MeshPhongMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.07,
        side: THREE.BackSide,
      });
      scene.add(new THREE.Mesh(atmosGeo, atmosMat));

      // ── İç parıltı halkası ──
      const innerGlowGeo = new THREE.SphereGeometry(R * 1.04, 64, 64);
      const innerGlowMat = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.05,
        side: THREE.FrontSide,
      });
      scene.add(new THREE.Mesh(innerGlowGeo, innerGlowMat));

      // ── Işıklar ──
      scene.add(new THREE.AmbientLight(0x1e3a8a, 0.6));
      const sun = new THREE.DirectionalLight(0x60a5fa, 2.0);
      sun.position.set(6, 4, 6);
      scene.add(sun);
      const rimLight = new THREE.DirectionalLight(0x1d4ed8, 0.8);
      rimLight.position.set(-5, -2, -3);
      scene.add(rimLight);

      // ── Yıldızlar ──
      const starVerts: number[] = [];
      for (let i = 0; i < 2500; i++) {
        const x = (Math.random() - 0.5) * 300;
        const y = (Math.random() - 0.5) * 300;
        const z = (Math.random() - 0.5) * 300;
        if (x * x + y * y + z * z > 400) starVerts.push(x, y, z);
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starVerts, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0x8ab4f8,
        size: 0.18,
        transparent: true,
        opacity: 0.55,
      });
      scene.add(new THREE.Points(starGeo, starMat));

      // ── Animasyon ──
      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        const speed = 0.0018; // ~58 saniyede tam tur
        globe.rotation.y += speed;
        grid.rotation.y += speed;
        renderer.render(scene, camera);
      };
      animate();

      // ── Resize ──
      const onResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      // cleanup referansını dışarıya aktar
      (mount as HTMLDivElement & { _cleanup?: () => void })._cleanup = () => {
        cancelAnimationFrame(animFrameId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    });

    return () => {
      const m = mount as HTMLDivElement & { _cleanup?: () => void };
      if (m._cleanup) m._cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#020614" }}
    />
  );
}
