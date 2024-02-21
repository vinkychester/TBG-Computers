import {useMutation, useQueryClient} from "@tanstack/react-query";
// app services
import {createUser} from "../../services/apiUsers";

function useCreateUser() {
    const queryClient = useQueryClient();

    const { mutate: createUserMutation, isLoading: isCreating } = useMutation({
        mutationFn: createUser,
        onSuccess: () =>  {
            alert("success");
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (err) => {
            console.log("error")
        }
    });

    return { isCreating, createUserMutation };
}

export { useCreateUser }