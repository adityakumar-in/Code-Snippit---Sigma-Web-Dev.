// npm i three

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';  // Controls with mouse
import './style.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true, antialias: true } );  // wireframe: true - to see the edges of the cube
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize( window.innerWidth, window.innerHeight );


// Handling window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight; // when changing camera aspect ratio, we need to update the projection matrix [important]
    camera.updateProjectionMatrix(); // Handle the squizzing of element when window is resized, so it prevent that and preserve the aspect ratio
});

// OrbitControls/Mouse controls - Needs camera and renderer 
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;  // Smooth rotation when moving with mouse
controls.autoRotate = true;  // Auto rotation
controls.autoRotateSpeed = 12.0;  // Auto rotation speed
// controls.enableZoom = true;  // Enable zoom
controls.dampingFactor = 0.01;  // Damping factor - how much the rotation is slowed down

function animate() {
    window.requestAnimationFrame(animate);
	// renderer.render( scene, camera );

    // Rotating the cube - can be done with controls.autoRotate = true; - line no. 33
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    controls.update();

	renderer.render( scene, camera );
}
animate();
