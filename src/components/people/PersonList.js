import { useDispatch, useSelector } from "react-redux";
import { REMOVE_PERSON } from "../../actions";

const PersonList = () => {
    // select people
    const people = useSelector((state) => state.people);

    const dispatch = useDispatch();

    
    // Delete a person
    const deleteHandler = (index) => {
        dispatch({
            type: REMOVE_PERSON,
            index: index
        });
    };


    return (
        <>
            <ul className="list-group">
                {people &&
                    people.map((person, index) => (
                        <li key={index} className="list-group-item">
                            {person.firstName} {person.lastName} ({person.age})
                            <button onClick={() => deleteHandler(index)}>X</button>
                        </li>
                    ))

                }
            </ul>

        </>


    )
}

export default PersonList;