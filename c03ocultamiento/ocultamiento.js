// Crear una escena
var scene = new THREE.Scene();

// Crear una cámara
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Cambiar la posición de la cámara

// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un cubo
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // Cambiar las dimensiones del cubo
var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-2, 0, 0); // Cambiar la posición del cubo

// Crear una esfera
var sphereGeometry = new THREE.SphereGeometry(1, 32, 32); // Cambiar el radio y la calidad
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(2, 0, 0); // Cambiar la posición de la esfera

// Crear un toro (donut)
var torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100); // Cambiar el radio mayor y menor, y la calidad
var torusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(0, 2, 0); // Cambiar la posición del toro

// Agregar los objetos a la escena
scene.add(cube);
scene.add(sphere);
scene.add(torus);

// Renderizar la escena
var animate = function () {
  requestAnimationFrame(animate);
  // Aplicar el Z-Buffer para detectar las superficies ocultas
  renderer.render(scene, camera);
};

animate();