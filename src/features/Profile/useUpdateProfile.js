import { queryClient } from "./../../routes/routes";

function createMutationConfig(setOpen) {
    return {
        onSuccess: () => {
            console.log("Data updated successfully!");
            queryClient.invalidateQueries(["profile"]);
            setOpen(false)
        },
        onError: (error) => {
            console.error("Error updating data:", error);
        },
    };
}

export default createMutationConfig;
