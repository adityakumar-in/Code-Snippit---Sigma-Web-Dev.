// scene - it's a world in a game
// frame - it's the view you're seeing from the world

// Making a scene
const scene = new THREE.Scene();
// (FOV, widthRatio / heightRatio, near, far) - we can't see >far and <near
let camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
scene.add(camera);



const box = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "red" } );
const mesh = new THREE.Mesh( box, material );

// mesh.rotation.x = 1; // Rotate in x-axis
// mesh.position.y = 2; // Move in y-axis
// mesh.scale.x = 2; // Scale in x-axis - growing in x direction

// Math.PI - 3.14 rotates element by 180 degrees

scene.add( mesh );


const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true }); // antialias - smooth edges
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render( scene, camera );

let clock = new THREE.Clock(); // Give time how much time has passed since app started
function animate() {
    window.requestAnimationFrame(animate); // Run that times till computer can handle (max fps)
    renderer.render( scene, camera ); // print
    // mesh.rotation.y += 0.01; // Rotate in y-axis - rotate on your computer resources
    mesh.rotation.y = clock.getElapsedTime(); // Rotate in y-axis - rotate on time so no matter how fast your computer is, it will rotate at the same speed
}
animate();