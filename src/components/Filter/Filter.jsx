import { useDispatch, useSelector  } from "react-redux";
import { changeFilter } from "redux/filter/filterSlice";
import { selectFilter } from "redux/selectors";
import { FilterStyle, SectionFilter } from "./Filter.styled";

export default function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;
        dispatch(changeFilter(value));
    }

    return (
        <SectionFilter>
            <FilterStyle
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder="Finde contact"
            />
        </SectionFilter>
    );
};
