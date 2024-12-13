import React, { useEffect, useRef, useState } from "react";

import Button from "@c/Button/Button";
const SaleOfTheYear = () => {
    const [scrollDirection, setScrollDirection] = useState();
    const [translateXPos, setTranslateXPos] = useState(100);
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
            setTranslateXPos(translateXPos >= 100 ? 100 : translateXPos + 1);
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    // console.log("check direc", scrollDirection);
    // console.log("check srcll", scrollPosition);
    return (
        <div className="mt-32 flex items-center justify-between lg:relative">
            <div
                className="hidden lg:absolute lg:right-[300px] lg:block lg:w-[350px] xl:right-[400px]"
                style={{ transform: `translateX(${translateXPos}px)`, transition: "transform 600ms" }}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center md:w-72">
                <h2 className="text-center text-4xl capitalize leading-[46px]">Sale of the year</h2>
                <p className="text-center leading-6 text-chicago-700">Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <div className="mt-5 flex items-center justify-center text-chicago-700">
                    <Button content={"Read more"} isPrimary={false} />
                </div>
            </div>
            <div
                className="hidden lg:absolute lg:left-[300px] lg:block lg:w-[350px] xl:left-[400px]"
                style={{ transform: `translateX(-${translateXPos}px)`, transition: "transform 600ms" }}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
            </div>
        </div>
    );
};

export default SaleOfTheYear;
