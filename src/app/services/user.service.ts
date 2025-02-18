import { User } from "../models/user.model";

export function getUser(): User {

    return {

        id: 1,
        name: "David Karlsson",
        email: "davidfkarlsson@proton.me"
    }

}