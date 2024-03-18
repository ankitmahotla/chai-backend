import { User } from "../models/user.model.js"
import { deleteFromCloudinary } from "./cloudinary.js";

const DeletePrevAvatar = async (id) => {
    try {
        const user = await User.findById(id)

        const avatarUrl = user.avatar
        const parts = avatarUrl.split("/");
        const fileName = parts[parts.length - 1]; // Get the last part after splitting by "/"
        const avatarName = fileName.split(".")[0]; // Get the name before ".jpeg"

        await deleteFromCloudinary(avatarName)

    } catch (error) {
        console.log("Error deleting previous image", error)
    }
}

// const DeletePrevCoverImage = () => {

// }

export { DeletePrevAvatar }