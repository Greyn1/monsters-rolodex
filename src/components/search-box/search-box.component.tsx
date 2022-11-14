import { ChangeEvent } from 'react';
import './search-box.styles.css';

/* // defining types of object using interface
interface ISearchBoxProps {
  className : string;
  placeholder ?: string
}

//interface overloading
interface ISearchBoxProps {
  onChangeHandler : (a : string) => void
} */

// using types to define type of an object
type SearchBoxProps = {
  className : string;
  placeholder : string;
  //onChangeHandler : ChangeEventHandler<HTMLInputElement>;
  onChangeHandler : (event : ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler } : SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
