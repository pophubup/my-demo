import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
console.log(process.env.API_AUTH, process.env)
//const firebaseConfig = process.env.NODE_ENV === "production" ? process.env.API_AUTH : require('../../connection.json');
const firebaseConfig = {
    "apiKey": "AIzaSyCjjT5MiOsBNAarIO--4dWSvYPRrQr2sFo",
    "authDomain": "getproducts-92bee.firebaseapp.com",
    "projectId": "getproducts-92bee",
    "storageBucket": "getproducts-92bee.appspot.com"
};
const base = initializeApp(firebaseConfig);
const firestore = getFirestore(base);
const storage = getStorage(base);

//#region Create
export const InsertPircture = async (obj) => {

    const storageRef = ref(storage, obj.id);
    await uploadBytes(storageRef, obj.file)
    const url = await getDownloadURL(storageRef)
    obj.image = url

}
export const InsertProducts = async (obj) => {
    try {
        const batch = writeBatch(firestore);
        console.log(obj)
        let msg = '';
        let nycRef = doc(firestore, "NewProducts", obj.id);

        batch.set(nycRef, {
            category: obj.category,
            description: obj.description,
            id: obj.id,
            name: obj.name,
            image: obj.image

        });
        msg += obj.name;
        await batch.commit();
        return { isSuccess: true, success: `${msg}\n新增成功` }
    } catch (err) {
        return { isSuccess: false, error: err }
    }


}
//#endregion
//#region Read
export const getProducts = async () => {
    let porduct = [];
    const products = await getDocs(collection(firestore, "NewProducts"));
    products.forEach((doc) => {
        porduct.push({
            "id": doc.data().id,
            "name": doc.data().name,
            "image": doc.data().image,
            "description": doc.data().description
        })

    })
    return porduct
}
    //#endregion