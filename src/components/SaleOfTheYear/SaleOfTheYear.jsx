import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@c/Button/Button";
const SaleOfTheYear = () => {
    const { container__soty, soty_maincontent, soty__title, soty__desc, soty_button, soty__images } = styles;
    const [scrollDirection, setScrollDirection] = useState();
    const [translateXPos, setTranslateXPos] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInView, setIsInView] = useState(false);

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

    const handleTranslateX = () => {
        if (scrollDirection === "down") {
            setTranslateXPos(translateXPos <= 0 ? 0 : translateXPos - 1);
        } else if (scrollDirection === "up") {
            setTranslateXPos(translateXPos >= 80 ? 80 : translateXPos + 1);
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    console.log("check direc", scrollDirection);
    console.log("check srcll", scrollPosition);
    return (
        <div className={container__soty}>
            <div className={soty__images} style={{ transform: `translateX(${translateXPos}px)`, transition: "transform 600ms" }}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
            </div>
            <div className={soty_maincontent}>
                <h2 className={soty__title}>Sale of the year</h2>
                <p className={soty__desc}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <div className={soty_button}>
                    <Button content={"Read more"} isPrimary={false} />
                </div>
            </div>
            <div className={soty__images} style={{ transform: `translateX(-${translateXPos}px)`, transition: "transform 600ms" }}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
            </div>
        </div>
    );
};

export default SaleOfTheYear;
