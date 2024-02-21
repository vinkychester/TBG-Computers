import {useMutation, useQueryClient} from "@tanstack/react-query";
// app services
import {updateUser} from "../../services/apiUsers";

function useUpdateUser() {
    const queryClient = useQueryClient();

    const {mutate: updateUserMutation, isLoading: isUpdating} = useMutation({
        mutationFn: ({data, id}) => {
            updateUser(id, data)
        },
        onSuccess: () => {
            alert("User updated successfully");
            queryClient.invalidateQueries({queryKey: ["users"]});
        },
        onError: (err) => {
            console.log(err.message);
        },
    });

    return {isUpdating, updateUserMutation};
}

export {useUpdateUser}