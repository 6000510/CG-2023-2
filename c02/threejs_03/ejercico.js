// Variables globales
let scene, camera, renderer, cone, controls;

function init() {
    // Crear una escena
    scene = new THREE.Scene();

    // Crear una cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Crear un renderizador
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Crear una geometría personalizada (cono)
    createCustomCone();

    // Agregar iluminación
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Iniciar controles para el usuario
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function createCustomCone() {
    // Crear una geometría personalizada (cono)
    const geometry = new THREE.BufferGeometry();
    const radius = 2;
    const height = 5;
    const radialSegments = 20;

    const positions = [];
    const colors = [];

    for (let i = 0; i <= radialSegments; i++) {
        const theta = (i / radialSegments) * Math.PI * 2;
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);
        const y = (i / radialSegments) * height;

        positions.push(x, y, z);
        colors.push(1, 0, 0); // Color del vértice (rojo)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Crear un material
    const material = new THREE.PointsMaterial({ vertexColors: true });

    // Crear un objeto 3D (Puntos) utilizando la geometría y el material
    cone = new THREE.Points(geometry, material);
    scene.add(cone);
}

function startInteractiveScene() {
    init();
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotación interactiva del cono
    if (controls) {
        controls.update();
    }

    renderer.render(scene, camera);
}

window.onload = startInteractiveScene;