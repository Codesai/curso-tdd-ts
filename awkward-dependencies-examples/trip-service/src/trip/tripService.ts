import {User} from "../user/user";
import {Trip} from "./trip";
import {UserSession} from "../user/userSession";
import {TripDAO} from "./tripDao";
import {UserNotLoggedInException} from "../exceptions/userNotLoggedInException";

export class TripService {

    public async getTripsByUser(user: User): Promise<Trip[]> {
        const loggedUser = await UserSession.getInstance().getLoggedUser();
        let tripList: Trip[] = [];

        if (loggedUser) {
            let isFriend = false;
            for (const friend of user.getFriends()) {
                if (friend === loggedUser) {
                    isFriend = true;
                    break;
                }
            }

            if (isFriend) {
                tripList = await TripDAO.findTripsByUser(user);
            }
            return tripList;
        } else {
            throw new UserNotLoggedInException();
        }
    }
}
