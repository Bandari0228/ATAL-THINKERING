import app from "./dbmanager.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const db = getFirestore(app);

async function createexpform(name, id, intro, Goals, materials, instruction, tips, assement, extension, resource) {
    const ref = collection(db, "experimentdata")

    await addDoc(ref,{
        name: name,
        id: id,
        introduction: intro,
        Goals: Goals,
        materials: materials,
        instructions: instruction,
        tip: tips,
        assement: assement,
        extensions: extension,
        Resources: resource,
       
    })
}
export default createexpform;










// async function createexpform(name, id, intro, Goals, materials, instruction, tips, assement, extension, resource) {
    
//     const ref = collection(db, "experimentdata")
//     await addDoc(ref, {
//         name: name,
//         id: id,
        
//     })
//     await addDoc(ref, {
//         introduction: intro,
//         Goals: Goals,
//     })

//     await addDoc(ref, {
//         materials: materials,
//         instructions: instruction,
//     })
//     await addDoc(ref, {
//         tip: tips,
//         assement: assement,
//     })
//     await addDoc(ref, {
//         extensions: extension,
//         Resources: resource
//     }
//     )
// }

// export default createexpform;