import { updateUser } from "../services/user-service"

export const buyBook = (data, userId, accessToken) => {
    updateUser(data, userId, accessToken);
}