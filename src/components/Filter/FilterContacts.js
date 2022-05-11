import React from "react";
import { Input, Label } from "./FilterContacts.styled";
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "Redux/FilterReduser/FilterSlice";


const FilterContacts = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter.filter);

  return (
    <Label >Find contacts by name
      <Input
        type="text"
        value={inputValue}
        onChange={e => dispatch(onChangeFilter(e.target.value))}
      />
    </Label>
  )
}

export default FilterContacts;