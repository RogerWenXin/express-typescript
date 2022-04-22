
import { MongoClient, Db } from 'mongodb'

export default class MongoDB {
  private static db:Db
  public static async getConnection () {
    if (!this.db) {
      // const url = process.env.NODE_ENV === 'dev'? 'a':'b'
      const con = await MongoClient.connect('mongodb://localhost:27017/costomization')
      this.db = con.db('costomization')
    }
    return this.db
  }

  public static async updateOne ({ collection, doc }: {collection: string, doc: any}) {
    const db = await this.getConnection()
    return await db.collection(collection).updateOne(doc, { $unset: true })
  }
}
