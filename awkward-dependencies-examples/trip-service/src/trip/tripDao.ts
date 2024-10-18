import {User} from "../user/user";
import {Trip} from "./trip";
import {Connection, createConnection} from "mysql2/promise";

export class TripDAO {
    private static readonly DATABASE_NAME = 'trips';
    private static readonly USER = 'phileas';
    private static readonly PASS = '123456';

    public static async findTripsByUser(user: User): Promise<Trip[]> {
        const trips: Trip[] = [];
        let connection: Connection | null = null;

        try {
            connection = await createConnection({
                host: 'localhost',
                database: this.DATABASE_NAME,
                user: this.USER,
                password: this.PASS
            });

            const sql = 'SELECT id FROM trips WHERE user = ?';
            const [rows] = await connection.query(sql, [user.getName()]);

            for (const row of rows as any[]) {
                trips.push(new Trip(row.id));
            }
        } catch (error) {
            console.error('Database error:', error);
        } finally {
            if (connection) {
                await connection.end();
            }
        }

        return trips;
    }
}