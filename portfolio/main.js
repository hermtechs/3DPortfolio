import "./style.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' ;

const scene = new THREE.Scene();
// console.log(scene)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);
camera.position.setZ(30)
camera.position.setX(-3);
renderer.render(scene, camera);

//torus
const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({color : 0xFF6347})

const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);

const gridhelper = new THREE.GridHelper(200,50) ;

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(pointLight, ambientLight, gridhelper)

renderer.render(scene, camera);
function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x +=0.01;
    torus.rotation.y +=0.005;
    torus.rotation.z +=0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();