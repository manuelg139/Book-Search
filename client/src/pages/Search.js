import React from "react";
import Form from "../components/Form";



class Search extends React.Component {
    state = {
        value: "",
        books: []
    };


    render() {
        return (
            <div>
                <Form/>
                <div className="container">
                    <h2> Search Results</h2>
                </div>
            </div>
        )
    }
}

export default Search;