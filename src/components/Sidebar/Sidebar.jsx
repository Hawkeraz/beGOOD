import './sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { sideNavItems } from './menus';

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
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

    //window change size
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <div className='sidebar__logo__smile'>
                    <i className='bx bxs-wink-smile' />
                    {windowDimensions.width >= 1000 ?
                        'beGood'
                        : null}
                </div>
            </div>
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
                                {windowDimensions.width >= 1000 ?
                                    <div className="sidebar__menu__item__text">
                                        {item.display}
                                    </div> :
                                    null}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;