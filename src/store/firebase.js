import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = process.env.NODE_ENV === "production" ? process.env.API_AUTH : require('../../connection.json');
const base = initializeApp(firebaseConfig);
const firestore = getFirestore(base);
const storage = getStorage(base);

//#region Create
export const InsertPircture = async(arr) => {

    await arr.forEach(async(data) => {
        const storageRef = ref(storage, data.name);
        const result = await uploadBytes(storageRef, data.file)
        console.log(result)
    })

}
export const InsertProducts = async(arr) => {
        try {
            const batch = writeBatch(firestore);
            let msg = '';
            arr.forEach(g => {
                let nycRef = doc(firestore, "NewProducts", g.name);
                batch.set(nycRef, g);
                msg += g.name;
            });
            await batch.commit();
            return { isSuccess: true, success: `${msg}\n新增成功` }
        } catch (err) {
            return { isSuccess: false, error: err }
        }


    }
    //#endregion
    //#region Read
export const getProducts = async() => {
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