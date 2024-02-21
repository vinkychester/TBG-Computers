import {useQuery} from "@tanstack/react-query";
// app services
import {getUploads} from "../../services/apiUpload";

function useUploads() {
    const {
        isLoading,
        data: uploads,
        error,
    } = useQuery({
        queryKey: ["uploads"], // unique
        //responsible for fetching data
        queryFn: getUploads,
    });

    return {isLoading, uploads, error};
}

export {useUploads};