import { doc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./src/lib/firebase";

async function test() {
  try {
    const d = collection(db, 'inquiries');
    await addDoc(d, { 
      name: "test", 
      email: "test@test.com", 
      service: "Other", 
      message: "Test message",
      createdAt: serverTimestamp()
    });
    console.log("Success addDoc");
    process.exit(0);
  } catch (e: any) {
    console.error("Error", e);
    console.dir(e);
    process.exit(1);
  }
}
test();
