import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
   "type": "sqlite",
   "database": "src/database/database.sqlite",
   "synchronize": false,
   "migrations": [
      "src/database/migrations/*.ts"
   ],
   "entities": [
      "src/entities/*.ts"
   ]
});

export { AppDataSource };