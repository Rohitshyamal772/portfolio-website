import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);
  
  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                const name = child.name.toLowerCase();
                
                // Check for clothing items (hoodie, cap, torso, etc.)
                if (/body|torso|chest|shirt|hoodie|jacket|coat|upper|sweater|cap|hat|headwear/.test(name)) {
                  if (mesh.material) {
                    const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
                    mat.color.setHex(0x2563eb); // A vibrant blue color
                    mat.roughness = 0.8;
                    mat.metalness = 0.0;
                    mesh.material = mat;
                  }
                }
                // Apply light/pale skin tone to skin-related meshes
                else if (/head|face|skin|hand|arm|neck|ear|cube|plane007/.test(name)) {
                  if (mesh.material) {
                    const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
                    mat.color.setHex(0xe0ac69); // Medium / Olive skin tone
                    mesh.material = mat;
                  }
                }
                // Check for pants and lower body meshes
                else if (/pant|leg|hip|thigh|cargo|jean|shin|knee|lower/.test(name)) {
                  if (mesh.material) {
                    const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
                    mat.color.setHex(0x1a1a1a); // Black
                    mat.roughness = 0.85;
                    mat.metalness = 0.0;
                    mesh.material = mat;
                  }
                }
              }
            });
            resolve(gltf);
            URL.revokeObjectURL(blobUrl);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };
  return { loadCharacter };
};
export default setCharacter;
