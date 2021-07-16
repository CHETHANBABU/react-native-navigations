import SQLite from 'react-native-sqlite-storage';
import { DbConfig } from '../constants';

class Database {

    initDB() {
        return new Promise((resolve, reject) => {
            SQLite.openDatabase(
                {
                    name: DbConfig.Name,
                    location: 'default',
                    createFromLocation: `~www/${DbConfig.Name}`,
                },
                (db) => {
                    console.log('DB is opened', db);
                    resolve(db);
                },
                error => {
                    reject(error)
                    console.log(error);
                }
            );
        });
    };

    closeDatabase(db) {
        if (db) {
            console.log("Closing DB");
            db.close();
        } else {
            console.log("Database was not OPENED");
        }
    };

    executeQuery(query, flag, data = '') {
        return new Promise((resolve, reject) => {
            const sqlitePromise = this.initDB();
            sqlitePromise.then(db => {
                db.transaction(tx => {
                    switch (flag) {
                        case 0:
                            tx.executeSql(query, [], (tx, results) => {
                                let list = [];
                                let rows = results.rows;
                                for (let i = 0; i < rows.length; i++) {
                                    list.push({
                                        ...rows.item(i),
                                    });
                                }
                                resolve(list);
                            })
                            break;
                        case 1:
                            tx.executeSql(query, Object.values(data), (tx, results) => {
                                if (results.rowsAffected > 0) {
                                    resolve('rows affected');
                                } else {
                                    resolve('rows not affected');
                                }
                            })
                            break;
                            case 2:
                                tx.executeSql(query, [], (tx, results) => {
                                    if (results.rowsAffected > 0) {
                                        resolve('rows deleted affected');
                                    } else {
                                        resolve('rows not deleted affected');
                                    }
                                })
                                break;
                        default:
                            break;
                    }

                });
            }, err => {
                console.log('err 56', err);
                reject(err);
            })
        })
    }
}

const Sqlite = new Database();
export default Sqlite;