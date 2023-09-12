    <script>
        // Configura la escena
        const scene = new THREE.Scene();
        let currentCamera = null; // Variable para rastrear la cámara actual

        // Configura una cámara de proyección perspectiva
        const perspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        perspectiveCamera.position.set(0, 0, 5);
        perspectiveCamera.lookAt(0, 0, 0);

        // Crea una cámara de proyección ortogonal
        const orthographicCamera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            1,
            10
        );
        orthographicCamera.position.set(0, 0, 5);
        orthographicCamera.lookAt(0, 0, 0);

        // Inicialmente, usa la cámara de perspectiva
        currentCamera = perspectiveCamera;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);


        // Crea una esfera y asigna un material
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(-2, 0, 0);
        scene.add(sphere);

        // Crea un cubo y asigna un material
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(2, 0, 0);
        scene.add(cube);