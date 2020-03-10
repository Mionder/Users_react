import React from "react";
import "./captionBar.css";

export default function CaptionBar() {
    return (
        <div>
            <div className="caption__bar">
                <li className="nav__caption photo__nav"></li>
                <li className="nav__caption">Last</li>
                <li className="nav__caption">First</li>
                <li className="nav__caption">Username</li>
                <li className="nav__caption">Phone</li>
                <li className="nav__caption">Location</li>
                <li className=" plus__nav"></li>
            </div>
        </div>
    );
}
