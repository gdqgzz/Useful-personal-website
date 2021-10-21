<template>
    <canvas id="document" style="widht:500px;height:500px">
        <!-- <a href="/static/obj/uploads_files_2792345_Koenigsegg.obj">p</a> -->
    </canvas>
    
</template>
<script>
import * as THREE from "three";
// import as from '/static/uploads_files_2792345_Koenigsegg'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import {
//   CSS3DRenderer,
//   CSS3DObject,
// } from "three/examples/jsm/renderers/CSS3DRenderer.js";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';
// import{MTLLoader}from 'three/examples/jsm/loaders/MTLLoader.js'
export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
    };
  },
  methods: {
  main() {
  const canvas = document.querySelector('#document');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-40, 10, 0);//摄像机位置，（x，y，z）

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 1000);//模型位置（x,y,z）
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');

  {
    const planeSize = 200;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    // const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    // const planeMat = new THREE.MeshPhongMaterial({
    //   map: texture,
    //   side: THREE.DoubleSide,
    // });
    // const mesh = new THREE.Mesh(planeGeo, planeMat);
    // mesh.rotation.x = Math.PI * -.5;
    // scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 0.7;//亮度1
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 9, 0);//光照（x,y,z）
    light.target.position.set(-20, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }
  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // from the center of the box
    const direction = (new THREE.Vector3()).subVectors(camera.position, boxCenter).normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    const objLoader = new OBJLoader();
    objLoader.load('/static/obj/cycle.obj', (root) => {
      scene.add(root);
      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 1.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 20;
      controls.target.copy(boxCenter);
      controls.update();
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

   
  },
  mounted() {
      this.main();
    // this.init();
//     this.scene = new THREE.Scene()
//     const objLoader = new OBJLoader()

// loader.load(
//     '/static/obj/uploads_files_2792345_Koenigsegg.gltf',
//     objLoader => {
//       this.scene.add(gltf.scene)
//     },
//     undefined,
//     undefined
// )

  },
};
</script>
