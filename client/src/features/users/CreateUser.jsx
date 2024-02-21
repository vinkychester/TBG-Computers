import {useForm} from "react-hook-form";
import styled from "styled-components";
// app ui
import StyledInput from "../../ui/Input";
import Heading from "../../ui/Heading";
import StyledButton from "../../ui/Button";
// app hooks
import {useCreateUser} from "./useCreateUser";
// app context
import {useUserContext} from "../../context/UserContext";
import {useUpdateUser} from "./useUpdateUser";

const StyledForm = styled.form`
    width: 20vw;
    display: flex;
    flex-direction: column;

    & p:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

function CreateUser() {
    const {createUserMutation, isCreating} = useCreateUser();
    const {updateUserMutation, isUpdating} = useUpdateUser();

    const {isEditSession, userToEdit} = useUserContext();

    const {register, handleSubmit, formState, reset} = useForm({
        defaultValues: isEditSession ? userToEdit : {}
    })
    const {errors} = formState;

    function onSubmit(data) {
        if (isEditSession) {
            updateUserMutation({data, id: userToEdit.id},  {
                onSuccess: () => reset()
            })
        } else {
            createUserMutation(data, {
                onSuccess: () => reset()
            });
        }
    }

    return (
        <>
            <Heading as="h3">{isEditSession ? `Edit user: #${userToEdit.id}` : "Create user"}</Heading>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput type="text"
                             id="fullName"
                             placeholder="User's full name"
                             {...register("fullName", {
                                 required: "This field is required",
                                 minLength: {
                                     value: 10,
                                     message: "Full name should be at least 10 characters long",
                                 },
                                 pattern: {
                                     value: /^(?=.{1,40}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
                                     message: "Please provide a valid name",
                                 },
                             })}
                />
                <p style={{color: "red"}}>{errors?.fullName?.message}</p>

                <StyledInput type="text"
                             id="contact"
                             placeholder="User's contact (email or tg id)"
                             {...register("contact", {
                                 required: "This field is required",
                                 minLength: {
                                     value: 3,
                                     message: "Contact should be at least 3 characters long",
                                 },
                             })}
                />
                <p style={{color: "red"}}>{errors?.contact?.message}</p>

                <StyledButton type="submit" disabled={isCreating || isUpdating}>
                    {isEditSession ? "Edit" : "Create"}
                </StyledButton>
            </StyledForm>
        </>
    )
}

export default CreateUser;