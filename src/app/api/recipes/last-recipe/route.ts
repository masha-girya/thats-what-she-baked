import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase.config';

export async function GET() {
  try {
    const dataCollection = collection(db, 'recipes');
    const q = query(dataCollection, orderBy('timestamp', 'desc'), limit(1));
    const dataSnapshot = await getDocs(q);

    if (dataSnapshot.empty) {
      return getData(null, DATA_KEYS.recipes);
    }

    const lastRecipeData = dataSnapshot.docs[0].data();

    return getData(lastRecipeData, DATA_KEYS.recipe);
  } catch (err) {
    console.error(err);
    return getData(null, DATA_KEYS.recipe);
  }
}
