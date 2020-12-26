import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navigation-bar.module.css';
import btnStyles from '../../atoms/Button/button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faHome,
    faLocationArrow,
    faPhoneSquare,
    faEnvelope,
    faChevronDown,
} from '@fortawesome/fontawesome-free-solid';
import content from './navbarContent.json';
import $ from 'jquery';

function NavigationBar(props) {
    const [_, setMenuStatus] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        var isMobile = window.innerWidth < 1024;

        setIsMobile(isMobile);

        document.addEventListener('resize', function () {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024) {
                var navbar = document.querySelector(`.${styles['secondRow']}`);

                navbar.classList.remove(styles['stickyNav']);
                $(`.${styles['hideWhenSticky']}`).show();
                $(`.${styles['organism-navigation-bar_logo']}`).removeClass(styles['stickyLogoInNav']);
            }
        });

        document.addEventListener('scroll', function (e) {
            if (window.innerWidth > 1023) {
                var navbar = document.querySelector(`.${styles['secondRow']}`);

                if (navbar) {
                    // Get the offset position of the navbar
                    var sticky = navbar.offsetTop;

                    if (window.pageYOffset > sticky) {
                        navbar.classList.add(styles['stickyNav']);
                        $(`.${styles['hideWhenSticky']}`).hide();
                        $(`.${styles['organism-navigation-bar_logo']}`).addClass(styles['stickyLogoInNav']);

                        var li = document.querySelector(`.${styles['secondRow']} .${styles['otherservices']} + li`);

                        if (li) {
                            li.style.display = 'none';
                        }
                    } else {
                        navbar.classList.remove(styles['stickyNav']);
                        $(`.${styles['hideWhenSticky']}`).show();
                        $(`.${styles['organism-navigation-bar_logo']}`).removeClass(styles['stickyLogoInNav']);

                        var li = document.querySelector(`.${styles['secondRow']} .${styles['otherservices']} + li`);

                        if (li) {
                            li.style.display = 'initial';
                        }
                    }
                }
            }
        });
    });

    const linksToRender = content.secondRow.links.filter((a) => {
        if ((isMobile && a.mobile) || (!isMobile && a.desktop)) {
            return a;
        }
    });

    return (
        <section className={styles['organism-navigation-bar']}>
            <div className={`container-fluid xs-mb-6`}>
                <div className="row middle-xs xs-pt-6 xs-pb-6">
                    <div className="col-xs-5 col-md-3 start-xs">
                        <Link href={content.firstRow.logo.link}>
                            <a>
                                <img
                                    alt={content.firstRow.logo.alt}
                                    className={styles['organism-navigation-bar_logo']}
                                    src={content.firstRow.logo.src}
                                />
                            </a>
                        </Link>
                    </div>

                    <div className={`col-md-${props.showTrackStatusBtn ? '4 col-md-offset-1' : '6'} hidden-sm-down`}>
                        <div className="row center-xs">
                            <div className="col-xs-12">
                                {content.firstRow.contact.numbers.map((c, i) => (
                                    <a
                                        className={`${styles['contactNumber']} md-ml-12 md-mr-12 color-teal f-w:700`}
                                        href={`tel:${c.number}`}
                                        key={c.number}
                                        data-testid={`contact-number-${i}-1`}
                                    >
                                        {c.icon && (
                                            <FontAwesomeIcon
                                                className="xs-mr-6"
                                                icon={c.icon === '2' ? faPhoneSquare : ''}
                                            />
                                        )}
                                        {c.number}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="row md-mt-6 hidden-sm-down center-xs">
                            <div className="col-xs-12">
                                <a
                                    className={`${styles['email']} color-teal f-w:600`}
                                    href={`mailTo:${content.firstRow.contact.email.email}`}
                                    data-testid="nav-email"
                                >
                                    {content.firstRow.contact.email.icon && (
                                        <FontAwesomeIcon
                                            className="xs-mr-6 p:r"
                                            icon={content.firstRow.contact.email.icon === '3' ? faEnvelope : ''}
                                        />
                                    )}
                                    {content.firstRow.contact.email.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`col-xs-7 col-md-${props.showTrackStatusBtn ? '4' : '3'} end-xs`}>
                        <a
                            className={`${props.showTrackStatusBtn ? 'xs-mr-12 md-mr-18' : ''} color-teal f-w:600 ${
                                styles['directions']
                            }`}
                            href={content.firstRow.directions.link}
                            target="_blank"
                        >
                            {content.firstRow.directions.icon && (
                                <FontAwesomeIcon
                                    className="d:i-block md-mr-12 p:r"
                                    icon={content.firstRow.directions.icon === '4' ? faLocationArrow : ''}
                                />
                            )}

                            <span className="hidden-sm-down">{content.firstRow.directions.text}</span>
                        </a>
                        {props.showTrackStatusBtn && (
                            <Link href={content.firstRow.trackStatusBtn.link}>
                                <a
                                    className={`d:i-flex ${
                                        btnStyles[`atom-button-${isMobile ? 'small' : 'large'}-dodgerblue`]
                                    }`}
                                >
                                    {content.firstRow.trackStatusBtn.text}
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={`${styles['secondRow']} row middle-xs xs-pt-6 xs-pb-6 center-xs`}>
                    <div className="col-xs-10 start-xs hidden-md-up">
                        <div className="row start-xs">
                            {content.firstRow.contact.numbers.map((c, i) => (
                                <div className={`col-xs-12 col-sm-4 ${i === 0 ? 'xs-mb-6' : ''}`} key={c.number}>
                                    <a
                                        className={`${styles['contactNumber']} xs-ml-12 color-white f-w:700`}
                                        href={`tel:${c.number}`}
                                        data-testid={`contact-number-${i}-2`}
                                    >
                                        {c.icon && (
                                            <FontAwesomeIcon
                                                className="xs-mr-6"
                                                icon={c.icon === '2' ? faPhoneSquare : ''}
                                            />
                                        )}
                                        {c.number}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-xs-2 end-xs hidden-md-up">
                        <a
                            className="xs-pt-6 xs-pb-6 xs-pl-6 xs-pr-6 color-white"
                            onClick={() => {
                                $(`.${styles['listContainer']}`).slideToggle('slow');
                                setMenuStatus((s) => !s);
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </a>
                    </div>
                    <div className="col-xs-12 f-w:600 center-xs">
                        <div className={styles['listContainer']}>
                            <ul className="d:i-block">
                                {linksToRender.map((l) => (
                                    <li
                                        className={`d:i-block md-mr-12 xs-mb-12 lg-mr-36 p:r ${
                                            l.mobile ? '' : 'hidden-sm-down'
                                        } ${l.hideWhenSticky ? styles['hideWhenSticky'] : ''} ${
                                            l.classes == 1
                                                ? `${styles['attestation']} c:p`
                                                : l.classes == 2
                                                ? `${styles['apostille']} c:p`
                                                : l.classes == 3
                                                ? `${styles['visastamping']} c:p`
                                                : l.classes == 4
                                                ? `${styles['otherservices']}`
                                                : ''
                                        }`}
                                        key={l.text}
                                    >
                                        <a
                                            className="color-white md-pt-24 md-pb-24 xs-pt-6 xs-pb-6 d:i-block"
                                            href={l.link ? l.link : '#'}
                                        >
                                            {l.text}

                                            {l.icon && !isMobile ? (
                                                <FontAwesomeIcon
                                                    className={`${l.classes == 0 ? '' : styles['arrowDown']} ${
                                                        l.text ? 'p:r xs-ml-6 hidden-sm-down' : ''
                                                    }`}
                                                    icon={l.icon === '0' ? faHome : l.icon === '1' ? faChevronDown : ''}
                                                />
                                            ) : (
                                                <span />
                                            )}
                                        </a>
                                        {l.dropdown.length > 0 ? (
                                            <div className="bg-color-white d:n md-mt-18">
                                                {l.dropdown.map((d) => (
                                                    <Link key={d.text} href={d.link}>
                                                        <a>
                                                            <p className="t-a:l">{d.text}</p>
                                                        </a>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <span />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavigationBar;
