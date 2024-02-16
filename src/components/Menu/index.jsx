import { useState } from "react";
import { BsShareFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton, LinkedinIcon, TwitterIcon, FacebookIcon } from "react-share";
import { Container, InternalLinks, ExternalLinks, ShareModal, ShareCard, HamburgerButton, HamburgerNav } from "./styles";

export function Menu() {
    const [onShare, setOnShare] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const ToggleIsActive = () => setIsActive(!isActive);

    const pageUrl = window.location.href;

    function handleCopyLink() {
        writeClipboardText(pageUrl);
    }

    async function writeClipboardText(text) {
        try {
            await navigator.clipboard.writeText(text);
            alert('Page link copied to clipboard');
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <>
            <Container>
                <nav>
                    <InternalLinks>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </InternalLinks>

                    <ExternalLinks>
                        <li><a onClick={() => setOnShare(true)}><BsShareFill /></a></li>

                        <li>
                            <a href="https://www.instagram.com/marilivraes/" target="_blank">
                                <BsInstagram />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/mariana-livraes-12790ba0/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.artstation.com/marilivraes" target="_blank">
                                <FaArtstation />
                            </a>
                        </li>
                    </ExternalLinks>
                </nav>

                <ShareModal className={onShare ? 'onShare' : ''}>
                    <ShareCard>
                        <button className="close" onClick={() => setOnShare(false)}><IoClose /></button>

                        <h3>Share</h3>

                        <div className="icons">
                            <LinkedinShareButton url={pageUrl}>
                                <LinkedinIcon size={46} round />
                            </LinkedinShareButton>

                            <TwitterShareButton url={pageUrl}>
                                <TwitterIcon size={46} round />
                            </TwitterShareButton>

                            <FacebookShareButton url={pageUrl}>
                                <FacebookIcon size={46} round />
                            </FacebookShareButton>
                        </div>

                        <div className="link">
                            <input
                                type="text"
                                name="pageLink"
                                id="pageLink"
                                value={pageUrl}
                                readOnly
                            />
                            <label htmlFor="pageLink">
                                <button onClick={handleCopyLink}>Copy</button>
                            </label>
                        </div>
                    </ShareCard>
                </ShareModal>
            </Container>

            <HamburgerButton className={isActive ? 'iconOpen' : 'iconClosed'} onClick={ToggleIsActive}>
                <div className="hamburger hamburgerIcon"></div>
            </HamburgerButton>

            <HamburgerNav className={isActive ? 'menuOpen' : 'menuClosed'}>
                <InternalLinks>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </InternalLinks>

                <ExternalLinks>
                    <li><a onClick={() => setOnShare(true)}><BsShareFill /></a></li>

                    <li>
                        <a href="https://www.instagram.com/marilivraes/" target="_blank">
                            <BsInstagram />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/mariana-livraes-12790ba0/" target="_blank">
                            <BsLinkedin />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.artstation.com/marilivraes" target="_blank">
                            <FaArtstation />
                        </a>
                    </li>
                </ExternalLinks>

                <ShareModal className={onShare ? 'onShare' : ''}>
                    <ShareCard>
                        <button className="close" onClick={() => setOnShare(false)}><IoClose /></button>

                        <h3>Share</h3>

                        <div className="icons">
                            <LinkedinShareButton url={pageUrl}>
                                <LinkedinIcon size={46} round />
                            </LinkedinShareButton>

                            <TwitterShareButton url={pageUrl}>
                                <TwitterIcon size={46} round />
                            </TwitterShareButton>

                            <FacebookShareButton url={pageUrl}>
                                <FacebookIcon size={46} round />
                            </FacebookShareButton>
                        </div>

                        <div className="link">
                            <input
                                type="text"
                                name="pageLink"
                                id="pageLink"
                                value={pageUrl}
                                readOnly
                            />
                            <label htmlFor="pageLink">
                                <button onClick={handleCopyLink}>Copy</button>
                            </label>
                        </div>
                    </ShareCard>
                </ShareModal>
            </HamburgerNav>
        </>
    );
};