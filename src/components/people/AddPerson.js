import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ADD_PERSON } from "../../actions";

const AddPerson = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const dispatch = useDispatch();


    // Add new person
    const onSubmit = (data) => {
        dispatch({
            type: ADD_PERSON,
            newPerson: {
                firstName: data.firstName,
                lastName: data.lastName,
                age: parseInt(data.age)
            }
        });

        reset()
    };


    return (
        <div className="add-people">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Enter first name"
                    {...register("firstName", {
                        required: true
                    })}
                />

                {errors.firstName && <small className="error">First Name is required</small>}
                <input
                    type="text"
                    placeholder="Enter last name"
                    {...register("lastName", {
                        required: true
                    })}
                />
                {errors.lastName && <small className="error">Last Name is required</small>}
                <input
                    type="number"
                    placeholder="How old you are?"
                    {...register("age", {
                        required: true
                    })}
                />
                {errors.age && <small className="error">Age is required</small>}

                <br />
                <br />

                <button type="submit">OK</button>
            </form>
        </div>
    )
}

export default AddPerson;