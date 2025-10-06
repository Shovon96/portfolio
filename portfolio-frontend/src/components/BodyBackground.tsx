'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BodyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1500;
        const positions = [];

        for (let i = 0; i < starCount; i++) {
            const x = THREE.MathUtils.randFloatSpread(300);
            const y = THREE.MathUtils.randFloatSpread(300);
            const z = THREE.MathUtils.randFloatSpread(300);
            positions.push(x, y, z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const starColor = 0xe643a7;
        const starMaterial = new THREE.PointsMaterial({
            color: starColor,
            size: 1,
            transparent: true,
            opacity: 0.8,
        });

        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

        const animate = () => {
            requestAnimationFrame(animate);
            starField.rotation.y += 0.0005;
            starField.rotation.x += 0.0002;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);


    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
    );
};

export default BodyBackground;
