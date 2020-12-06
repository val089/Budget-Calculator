import React from "react";

function Option({ id, category, value}) {
    return <option key={id} value={value}>{category}</option>;
}

export default Option;