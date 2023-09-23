"use client";
import React, {useState} from "react";

export default function Sidebar() {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [toggleList, setToggleList] = useState(false);
        return (
            <div id="sidebar" className={toggleMenu ? "":"inactive"}>
                <div className="inner">
                    <nav id="menu">
                        <ul>
                            <li><a href="index.html">Homepage</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li onClick={() => setToggleList(!toggleList)}>
                                <span className="opener">Submenu</span>
                                {toggleList && <ul>
                                  <li><a href="#">Lorem Dolor</a></li>
                                  <li><a href="#">Ipsum Adipiscing</a></li>
                                  <li><a href="#">Tempus Magna</a></li>
                                  <li><a href="#">Feugiat Veroeros</a></li>
                                </ul>}
                            </li>
                            <li><a href="elements.html">Elements</a></li>
                        </ul>
                    </nav>
                    <a href="#sidebar" className="toggle" onClick={() => setToggleMenu(!toggleMenu)}>Toggle</a>
                    <section>
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                        <ul className="contact">
                            <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                            <li className="icon solid fa-phone">(000) 000-0000</li>
                            <li className="icon solid fa-home">1234 Somewhere Road #8254<br/>
                                Nashville, TN 00000-0000
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        );
}

