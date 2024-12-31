import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1;

// Setup renderer
const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

// Add ambient and directional light
const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Load HDRI environment map - Fixed path loading
new RGBELoader()
  .load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    
    // Set color space (for newer Three.js versions)
    texture.colorSpace = THREE.SRGBColorSpace;
    
    // Make sure the environment map is visible
    scene.background = texture;
    scene.environment = texture;
    
    // Update renderer settings
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;
  },
  undefined, // Progress callback
  function(error) {
    console.error('An error occurred loading the HDRI:', error);
  }
);

// Load 3D Model
const loader = new GLTFLoader();
loader.load(
    'grey_backpack.glb', // Replace with your GLB file path
    function (gltf) {
        const model = gltf.scene;
        // Optional: Scale the model if it's too big or small
        model.scale.set(1, 1, 1);
        // Optional: Position the model
        model.position.set(0, -0.2, 0);
        scene.add(model);
    },
    // Optional: Loading progress callback
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // Optional: Error callback
    function (error) {
        console.error('An error occurred loading the model:', error);
    }
);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
