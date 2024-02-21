import {useMutation, useQueryClient} from "@tanstack/react-query";
// app services
import {send} from "../../services/apiUpload";

function useSendUpload() {
    const queryClient = useQueryClient();

    const { mutate: sendFileMutation, isLoading: isSending } = useMutation({
        mutationFn: (id) => send(id),
        onSuccess: () =>  {
            alert("File was sent and deleted from server");
            queryClient.invalidateQueries({ queryKey: ["uploads"] });
        },
        onError: (err) => {
            console.log("error")
        }
    });

    return { sendFileMutation, isSending };
}

export {useSendUpload};