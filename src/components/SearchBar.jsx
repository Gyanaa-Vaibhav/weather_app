import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar(props) {

    console.log(props)
    const [inputValue, setInputValue] = useState("");


    function search() {;
        props.setData(prev => [])
        if (inputValue) {
          props.setPlace(inputValue);
        }
    }

    function onChange(e) {
        setInputValue(e.target.value);
    }


    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="searchBar" >
            <input
                id="inputarea"
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={onChange}
                required
            />
            <button
                id="searchbtn"
                type="submit"
                onClick={search} >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#a4a4a4"
                >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </button>
        </form>
    );
}