import React from "react";

function NewAbout({ about, src = "https://via.placeholder.com/215" }) {
    return (
        <aside>
            <img src={src} alt={"blog logo"} />
            <p>{about}</p>
        </aside>
    )
};

export default NewAbout;