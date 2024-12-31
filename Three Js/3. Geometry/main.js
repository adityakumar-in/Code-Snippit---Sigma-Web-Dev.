import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as lil from 'lil-gui'; 

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Setup renderer
const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);



// Add intense directional light
const brightDirectionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
brightDirectionalLight.position.set(10, 10, 10);
scene.add(brightDirectionalLight);

// Add ambient light for overall illumination - Ambient light which emits light in all directions means evenly
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light for shadows and highlights
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Add point light for additional dimension
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(-5, -5, -5);
scene.add(pointLight);


// Helper for bright directional light
const brightDirectionalLightHelper = new THREE.DirectionalLightHelper(brightDirectionalLight, 2);
scene.add(brightDirectionalLightHelper);

// Helper for ambient light (note: ambient light doesn't have a helper since it's omnidirectional)

// Helper for directional light
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 2);
scene.add(directionalLightHelper);

// Helper for point light
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointLightHelper);






// Create sphere (fixed size and formatting)
// const geometry = new THREE.SphereGeometry(1, 32, 16);
// const geometry = new THREE.CylinderGeometry( 5, 5, 10, 32, 1, true ); 
const geometry = new THREE.BoxGeometry( 2, 2, 2 ); 
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true, side: THREE.DoubleSide });  // side: THREE.DoubleSide - to see the inside of the cylinder, i.e., other side of the cylinder too
const material = new THREE.MeshStandardMaterial({ color: 0xffff00, roughness: 0.8, metalness: .3 });  // side: THREE.DoubleSide - to see the inside of the cylinder, i.e., other side of the cylinder too


const sphere = new THREE.Mesh(geometry, material);
camera.position.z = 16;
scene.add(sphere);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = true;
controls.autoRotateSpeed = 8.0;


// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});



// Import GUI if not already imported at the top of the file
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// Create GUI panel
const gui = new GUI();

// Material folder
const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'roughness', 0, 1, 0.01);
materialFolder.add(material, 'metalness', 0, 1, 0.01);
materialFolder.addColor({ color: material.color.getHex() }, 'color')
    .onChange(value => material.color.setHex(value));
materialFolder.add(material, 'wireframe');

// Mesh folder
const meshFolder = gui.addFolder('Mesh');
meshFolder.add(sphere.position, 'x', -10, 10, 0.1);
meshFolder.add(sphere.position, 'y', -10, 10, 0.1);
meshFolder.add(sphere.position, 'z', -10, 10, 0.1);
meshFolder.add(sphere.rotation, 'x', 0, Math.PI * 2, 0.01);
meshFolder.add(sphere.rotation, 'y', 0, Math.PI * 2, 0.01);
meshFolder.add(sphere.rotation, 'z', 0, Math.PI * 2, 0.01);
meshFolder.add(sphere.scale, 'x', 0.1, 3, 0.1).name('scale X');
meshFolder.add(sphere.scale, 'y', 0.1, 3, 0.1).name('scale Y');
meshFolder.add(sphere.scale, 'z', 0.1, 3, 0.1).name('scale Z');

// Auto-rotation controls
const autoRotateFolder = gui.addFolder('Auto Rotation');
autoRotateFolder.add(controls, 'autoRotate');
autoRotateFolder.add(controls, 'autoRotateSpeed', 0, 20, 0.1);




// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
