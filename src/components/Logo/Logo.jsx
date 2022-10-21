import React from 'react'
import {
    Link,
} from "react-router-dom";
import Image from "../Image/Image"
import logo from "../../Img/Logo.png"

export default function Logo(logos) {
    return (
        <Link to="/#home" className={logos.className}>
            <Image src={logo} className={logos.class} />
        </Link>
    )
}

