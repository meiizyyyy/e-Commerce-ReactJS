import classNames from "classnames";
import React, { useContext, useEffect } from "react";
import { dataMenu } from "./data";
import { LeftBarContext } from "../../contexts/LeftBarContext";
import { TfiClose, TfiReload } from "react-icons/tfi";
import Logo from "@images/Logo-retina.png";
import { Link } from "react-router-dom";
import MenuTitle from "../Header/Menu/MenuTitle";
import { VscAccount } from "react-icons/vsc";
import { GrCart, GrFavorite } from "react-icons/gr";
import { StoreContext } from "@contexts/Store.context";
import { RxExit } from "react-icons/rx";
const LeftBar = () => {
    const { isLeftBarOpen, setIsLeftBarOpen } = useContext(LeftBarContext);
    const { UserInfo, handleLogout, handleGetCartList } = useContext(StoreContext);
    const userId = UserInfo.id;

    const handleToggle = () => {
        setIsLeftBarOpen(false);
    };

    useEffect(() => {
        handleGetCartList(userId);
    }, []);



    return (
        <div className="relative z-[2123]">
            <div className={classNames({ ["fixed inset-0 z-[1000] bg-[#0000004d] transition-all duration-500"]: isLeftBarOpen })} onClick={handleToggle}></div>

            <div
                className={classNames("fixed left-0 top-0 z-[1001] h-screen w-[260px] -translate-x-[100%] bg-white transition-all duration-500 lg:w-[350px]", {
                    ["!-translate-x-[0%] transition-all duration-500"]: isLeftBarOpen,
                })}>
                {isLeftBarOpen && (
                    <div
                        className="absolute -right-10 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-[#e1e1e1] hover:transition-all hover:duration-300 md:-left-11"
                        onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                <div className="mt-4 flex h-screen flex-col justify-start gap-4 px-8">
                    <div className="flex w-full items-center justify-center">
                        <Link to={"/"}>
                            <img style={{ width: "153px", height: "53px" }} src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-center">Search's here but it cant use for now</div>
                    <div className="flex w-full flex-col items-start justify-center">
                        {dataMenu.map((item, index) => {
                            return <MenuTitle content={item.content} href={item.href} key={index} />;
                        })}
                    </div>
                    <hr />
                    <div className="flex flex-col gap-5 text-sm font-normal">
                        <div className="flex flex-wrap items-center gap-3" onClick={() => setIsLeftBarOpen(false)}>
                            <VscAccount />
                            {userId ? `${UserInfo.username}` : <Link to={"/OurShop"}>Account</Link>}
                        </div>
                        <div
                            className="flex items-center gap-3"
                            onClick={() => {
                                setIsLeftBarOpen(false);
                                console.log("Check user", UserInfo);
                            }}>
                            <GrCart />
                            <Link to={"/Cart"}> Cart</Link>
                        </div>
                        <div className="flex items-center gap-3" onClick={() => setIsLeftBarOpen(false)}>
                            <GrFavorite /> Wishlist
                        </div>
                        <div className="flex items-center gap-3" onClick={() => setIsLeftBarOpen(false)}>
                            <TfiReload /> Compare
                        </div>
                        {userId && (
                            <div className="flex items-center gap-3" onClick={handleLogout}>
                                <RxExit />
                                Log out
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;
