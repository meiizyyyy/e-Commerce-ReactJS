import React, { useContext, useEffect, useRef, useState } from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./data";
import MenuTitle from "./Menu/MenuTitle";
import Logo from "@images/Logo-retina.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SidebarContext } from "@contexts/Sidebar.context";
import { TfiReload } from "react-icons/tfi";
import { GrCart, GrFavorite } from "react-icons/gr";

import { StoreContext } from "@contexts/Store.context";

const Header = (props) => {
    const [scrollDirection, setScrollDirection] = useState();
    const [translateYPos, setTranslateYPos] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [stickyOn, setStickyOn] = useState(false);

    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);
    const { CartList } = useContext(StoreContext);

    //Có thể làm React Custom Hook
    const prevScrPos = useRef();
    const elementRef = useRef(null);
    const PosTracking = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrPos.current) {
            setScrollDirection("down");
        } else if (currentScrollPos < prevScrPos.current) {
            setScrollDirection("up");
        }

        prevScrPos.current = currentScrollPos <= 0 ? 0 : currentScrollPos;
        setScrollPosition(currentScrollPos);
    };

    const handleTranslateY = () => {
        if (scrollPosition > 160) {
            setStickyOn(true);
            // console.log("Bat");
        } else {
            setStickyOn(false);
            // console.log("Tat");
        }
    };

    const handleOpenSidebar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        window.addEventListener("scroll", PosTracking);

        return () => window.removeEventListener("scroll", PosTracking);
    }, []);

    useEffect(() => {
        // Sử dụng Intersection Observer để kiểm tra phần tử có vào viewport hay không
        //khong hieu cho nay T_T
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 },
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        handleTranslateY();
    }, [scrollPosition]);

    // console.log("check direc", scrollDirection);
    // console.log("check srcll", scrollPosition);
    // console.log("Check sticky", stickyOn);
    // console.log("check context ", isOpen);
    return (
        // sticky here
        <div className="absolute left-0 right-0 top-0 flex items-center justify-center py-2">
            <div className="my-2 flex w-full items-center justify-between lg:max-w-7xl">
                <div className="pl-2 lg:hidden">
                    <div>Click</div>
                </div>

                <div className="hidden items-center justify-center pl-2 lg:flex lg:gap-6">
                    <div className="flex gap-2">
                        {dataBoxIcon.map((item, index) => {
                            return <BoxIcon type={item.type} href={item.href} key={index} />;
                        })}
                    </div>
                    <div className="flex justify-center gap-8">
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return <MenuTitle content={item.content} href={item.href} key={index} />;
                        })}
                    </div>
                </div>

                <div className="">
                    <Link to={"/"}>
                        <img style={{ width: "153px", height: "53px" }} src={Logo} alt="" />
                    </Link>
                </div>

                <div className="pr-2 lg:hidden">
                    <div>Click</div>
                </div>
                <div className="hidden items-center justify-center lg:flex lg:gap-6 lg:pl-2">
                    <div className="flex justify-center gap-8">
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return <MenuTitle content={item.content} href={item.href} key={index} />;
                        })}
                    </div>
                    <div className="flex gap-5">
                        <TfiReload
                            onClick={() => {
                                handleOpenSidebar("compare");
                            }}
                        />

                        <GrFavorite
                            onClick={() => {
                                handleOpenSidebar("wishlist");
                            }}
                        />

                        <div>
                            <GrCart
                                onClick={() => {
                                    handleOpenSidebar("cart");
                                }}
                            />
                            {/* {CartList.length > 0 && <div>{CartList.length}</div>} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
