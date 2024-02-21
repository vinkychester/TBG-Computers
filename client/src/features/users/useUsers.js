import {useQuery} from "@tanstack/react-query";
// app services
import {getUsers} from "../../services/apiUsers";

function useUsers() {
    const {
        isLoading,
        data: users,
        error,
    } = useQuery({
        queryKey: ["users"], // unique
        //responsible for fetching data
        queryFn: getUsers,
    });

    return {isLoading, users, error};
}

export {useUsers};