import React, { useContext } from "react";
import { TopBarContext } from "@contexts/Topbar.context";
import Button from "@c/Button/Button";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";
const TopBar = () => {
    const {
        container__topBar,
        topBar__overlay,
        TopBar__content,
        slider,
        TopBar__close,
        TopBar__mainContent,
        heading,
        searchBar,
        searchBarFilter,
        searchBarInput,
        searchBarButton,
    } = styles;

    const { isTopBarOpen, setIsTopBarOpen } = useContext(TopBarContext);

    const handleToggle = () => {
        setIsTopBarOpen(false);
    };

    return (
        <div className={container__topBar}>
            <div className={classNames({ [topBar__overlay]: isTopBarOpen })} onClick={handleToggle}></div>

            <div className={classNames(TopBar__content, { [slider]: isTopBarOpen })}>
                {isTopBarOpen && (
                    <div className={TopBar__close} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                <div className={TopBar__mainContent}>
                    <div className={heading}>What Are You Looking For?</div>
                    {/* <div className={searchBar}>
                        <div className={searchBarFilter}>Filter Here</div>
                        <div className={searchBarInput}>
                            <input type="text" name="" id="" placeholder="Search for product" />
                        </div>
                        <div className={searchBarButton}>
                            <Button content={"Search"} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
