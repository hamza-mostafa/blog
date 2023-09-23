import Image from 'next/image'
import React from "react";
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import pic04 from '../images/pic04.jpg';
import pic05 from '../images/pic05.jpg';
import pic06 from '../images/pic06.jpg';
import pic10 from '../images/pic10.jpg';
import Link from "next/link";

export default function Page() {
    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h2>Hello! I&apos;m Hamza Mostafa</h2>
                        <p>A passionate SWE</p>
                    </header>
                    <p>This is a short introduction about me for about 100 words</p>
                    <ul className="actions">
                        <li><Link href={"/cover-letter"} className="button big">Cover Letter</Link></li>
                    </ul>
                </div>
                <span className="image object">
                    <Image
                        src={pic10}
                        alt={"pic10"}
                    />
                </span>
            </section>
            <section>
                <header className="major">
                    <h2>Keywords to search with</h2>
                </header>
                <div className="features">
                   <article>
                       <Link className={"button primary large"} href={"/category/node-js"}>
                           NodeJS
                       </Link>
                   </article>
                </div>
            </section>
            <section>
                <header className="major">
                    <h2>My Latest articles</h2>
                </header>
                <div className="posts">
                    <article>
                        <Link href={"#"} className="image"> <Image
                            src={pic01}
                            alt={"pic01"}
                        /></Link>
                        <h3>Interdum aenean</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><Link href={"#"} className="button">More</Link></li>
                        </ul>
                    </article>
                    <article>
                        <Link href={"#"} className="image"><Image
                            src={pic02}
                            alt={"pic02"}
                        /></Link>
                        <h3>Nulla amet dolore</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><Link href={"#"} className="button">More</Link></li>
                        </ul>
                    </article>
                    <article>
                        <Link href={"#"} className="image"><Image
                            src={pic03}
                            alt={"pic03"}
                        /></Link>
                        <h3>Tempus ullamcorper</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><Link href={"#"} className="button">More</Link></li>
                        </ul>
                    </article>
                    <article>
                        <Link href={"#"} className="image"><Image
                            src={pic04}
                            alt={"pic04"}
                        /></Link>
                        <h3>Sed etiam facilis</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><Link href={"#"} className="button">More</Link></li>
                        </ul>
                    </article>
                    <article>
                        <Link href={"#"} className="image"><Image
                            src={pic05}
                            alt={"pic05"}
                        /></Link>
                        <h3>Feugiat lorem aenean</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><Link href={"#"} className="button">More</Link></li>
                        </ul>
                    </article>
                    <article>
                        <Link href={"#"} className="image"><Image
                            src={pic06}
                            alt={"pic06"}
                        /></Link>
                        <h3>Amet varius aliquam</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                            facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><Link href={"#"} className="button">More</Link></li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}
