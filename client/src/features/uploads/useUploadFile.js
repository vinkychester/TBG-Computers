import {useMutation} from "@tanstack/react-query";
// app services
import {upload} from "../../services/apiUpload";

function useUploadFile() {
    const {mutate: uploadMutation, isLoading} = useMutation({
        mutationFn: (file) => upload(file),
        onSuccess: () => {
            alert("File was uploaded to server");
        },
        onError: (err) => {
            console.log("error")
        }
    });

    return {uploadMutation, isLoading};
}

export {useUploadFile};