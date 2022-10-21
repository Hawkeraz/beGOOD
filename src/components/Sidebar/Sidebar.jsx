import './sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { sideNavItems } from './menus';

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, [])

    //change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sideNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    return (
        <div className='sidebar'>
            <Link to={'/home'}>
                <div className='sidebar__logo'>
                    <div className='sidebar__logo__smile'>
                        <i className='bx bxs-wink-smile'></i>
                        beGood
                    </div>
                    {/* <hr class='solid'/> */}
                </div>
            </Link>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    sideNavItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;