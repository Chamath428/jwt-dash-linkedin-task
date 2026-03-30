import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import { DbSchema } from './db.types';

const defaultData: DbSchema = { users: [] };
const adapter = new JSONFileSync<DbSchema>('db.json');
const db = new LowSync(adapter, defaultData);

export default db;