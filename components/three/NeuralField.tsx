"use client";

import { useEffect, useRef } from "react";

export default function NeuralField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(max-width: 980px), (prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let frame = 0;
    let visible = true;
    let last = 0;
    let cleanup = () => {};

    void (async () => {
      const THREE = await import("three");
      if (disposed || !host) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0, 6.2);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const orange = new THREE.Color(0xff6a00);
      const warm = new THREE.Color(0xffb25b);

      const coreGeometry = new THREE.IcosahedronGeometry(1.38, 2);
      const coreMaterial = new THREE.MeshBasicMaterial({ color: orange, wireframe: true, transparent: true, opacity: 0.18 });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      group.add(core);

      const shellGeometry = new THREE.IcosahedronGeometry(1.72, 1);
      const shellMaterial = new THREE.MeshBasicMaterial({ color: warm, wireframe: true, transparent: true, opacity: 0.055 });
      const shell = new THREE.Mesh(shellGeometry, shellMaterial);
      group.add(shell);

      const count = 760;
      const positions = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      for (let i = 0; i < count; i += 1) {
        const radius = 1.45 + Math.random() * 1.25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        sizes[i] = Math.random();
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
      const particleMaterial = new THREE.PointsMaterial({ color: 0xff8b2b, size: 0.018, transparent: true, opacity: 0.72, sizeAttenuation: true, depthWrite: false });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      group.add(particles);

      const linePositions: number[] = [];
      for (let i = 0; i < 82; i += 1) {
        const a = Math.floor(Math.random() * count);
        const b = Math.floor(Math.random() * count);
        linePositions.push(
          positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2],
          positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2]
        );
      }
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff6a00, transparent: true, opacity: 0.08, depthWrite: false });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      group.add(lines);

      const rings = [
        [2.12, 0.012, 0.25, 0.74],
        [2.46, 0.009, 1.05, 0.1],
        [2.8, 0.007, 0.75, 1.18]
      ].map(([radius, tube, x, y]) => {
        const geometry = new THREE.TorusGeometry(radius, tube, 4, 96);
        const material = new THREE.MeshBasicMaterial({ color: orange, transparent: true, opacity: 0.14 });
        const ring = new THREE.Mesh(geometry, material);
        ring.rotation.set(x, y, 0);
        group.add(ring);
        return ring;
      });

      const pointer = { x: 0, y: 0 };
      const onPointer = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.45;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.3;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      const resize = () => {
        const rect = host.getBoundingClientRect();
        const width = Math.max(1, rect.width);
        const height = Math.max(1, rect.height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: "200px" });
      intersection.observe(host);
      const onVisibility = () => { visible = !document.hidden; };
      document.addEventListener("visibilitychange", onVisibility);

      const animate = (time: number) => {
        frame = requestAnimationFrame(animate);
        if (!visible || time - last < 22) return;
        last = time;
        const t = time * 0.00018;
        group.rotation.y += (pointer.x + t - group.rotation.y) * 0.025;
        group.rotation.x += (-pointer.y + Math.sin(t * 1.7) * 0.08 - group.rotation.x) * 0.025;
        core.rotation.z = t * 1.7;
        shell.rotation.z = -t * 0.8;
        particles.rotation.y = -t * 0.42;
        lines.rotation.y = t * 0.28;
        rings[0].rotation.z = t * 0.85;
        rings[1].rotation.z = -t * 0.54;
        rings[2].rotation.z = t * 0.32;
        renderer.render(scene, camera);
      };
      frame = requestAnimationFrame(animate);

      cleanup = () => {
        cancelAnimationFrame(frame);
        intersection.disconnect();
        resizeObserver.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("pointermove", onPointer);
        coreGeometry.dispose();
        coreMaterial.dispose();
        shellGeometry.dispose();
        shellMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        for (const ring of rings) { ring.geometry.dispose(); ring.material.dispose(); }
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => { disposed = true; cancelAnimationFrame(frame); cleanup(); };
  }, []);

  return <div className="neural-field" ref={hostRef} aria-hidden="true" />;
}
