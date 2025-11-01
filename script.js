import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// map 
/*
1 - geometry
2 - material
3 - mesh
4 - camera 
5 - scene
6 - renderer
7 - controls
7 - animation
8 - animation loop
*/

// canvas
const canvas = document.querySelector('canvas#webgl')

// scene
const scene = new THREE.Scene();


// Mesh 
const mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0x00ff00}));

const group = new THREE.Group();

for(let i=0;i<80;i++){
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0x00f00}));
    mesh.position.x = Math.random()*10-5;
    mesh.position.y = Math.random()*10-5;
    mesh.position.z = Math.random()*10-5;
    group.add(mesh);
}

group.add(mesh);


scene.add(group);

// camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);
scene.add(camera);

//go back to see the full scene 
camera.position.z = 5;


const controls =new OrbitControls(camera,canvas)
// enable damping
controls.enableDamping = true;



const renderer = new THREE.WebGLRenderer({
    canvas
});

// set size of the renderer
renderer.setSize(window.innerWidth,window.innerHeight);

//render the scene
renderer.render(scene,camera);


const ta= ()=>{
    // update controls
    controls.update();

    // rotate the cubes
    group.rotation.x +=0.002
    group.rotation.y +=0.002
    group.rotation.z +=0.002

    // render the scene
    renderer.render(scene,camera);
    // requestAnimationFrame(tick);
    window.requestAnimationFrame(ta)
}

ta();