import {get} from "https";
import {User} from "./user";

export class UserSession {
    private static instance: UserSession = new UserSession();

    public static getInstance(): UserSession {
        return this.instance;
    }

    public async getLoggedUser(): Promise<User | null> {
        return new Promise((resolve, reject) => {
            get('https://trip-service.nanana/client-2038/logged-user/', (response) => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    if (response.statusCode && response.statusCode === 200) {
                        if (data) {
                            resolve(new User(data));
                        } else {
                            resolve(null);
                        }
                    } else {
                        reject(new Error(`HTTP error! Status: ${response.statusCode}`));
                    }
                });
            }).on('error', (error) => {
                reject(new Error('Unable to recover session: ' + error.message));
            });
        });
    }
}
