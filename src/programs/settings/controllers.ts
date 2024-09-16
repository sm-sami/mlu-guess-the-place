import { Settings } from "./schema";
import { getDatabase } from "../../utils/database";

export const getSettings = async (): Promise<Settings | undefined> => {
  try {
    const db = await getDatabase();
    return JSON.parse(
      JSON.stringify(
        await db.collection("settings").findOne({}, { projection: { _id: 0 } })
      )
    );
  } catch (e) {
    console.log(e);
  }
};
