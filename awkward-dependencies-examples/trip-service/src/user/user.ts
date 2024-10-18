import {Trip} from "../trip/trip";

export class User {
    private readonly name: string;
    private trips: Trip[] = [];
    private friends: User[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getFriends(): User[] {
        return this.friends;
    }

    public addFriend(user: User): void {
        this.friends.push(user);
    }

    public addTrip(trip: Trip): void {
        this.trips.push(trip);
    }

    public getTrips(): Trip[] {
        return this.trips;
    }
}