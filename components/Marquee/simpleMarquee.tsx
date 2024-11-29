"use client";
import React, {
  isValidElement,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { IMarqueeProps } from "./Marquee.pops";
import cn from "classnames";

export interface ISimpleMarqueeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gap: number;
  stopOnHover: boolean;
  toLeft: boolean;
}

const SimpleMarquee = memo(
  ({
    className,
    children,
    stopOnHover,
    toLeft,
    gap,
    ...props
  }: ISimpleMarqueeProps) => {
    const marquue = useRef<HTMLDivElement>(null);
    const marquueClone = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const clone = cloneChildren(children);

    const direction = useMemo(
      () =>
        toLeft
          ? `translateX(calc(0px - 50% - ${gap / 2}px))`
          : `translateX(calc(50% + ${gap / 2}px))`,
      []
    );

    const keyframes = useMemo(
      () => [{ transform: "translateX(0px)" }, { transform: direction }],
      []
    );

    const animateOptions = useMemo(
      () => ({
        duration: 10000,
        iterations: Infinity,
        easing: "linear",
      }),
      []
    );

    useEffect(() => {
      if (!marquue.current || !marquueClone.current || !wrapperRef.current)
        return;

      const animation = marquue.current.animate(keyframes, animateOptions);
      const animationClone = marquueClone.current.animate(
        keyframes,
        animateOptions
      );

      if (!stopOnHover) return;

      const handleEnter = () => {
        if (!marquue.current) return;

        animation.pause();
        animationClone.pause();
      };

      const handleLeave = () => {
        if (!marquue.current) return;

        animation.play();
        animationClone.play();
      };

      wrapperRef.current.addEventListener("mouseenter", handleEnter);
      wrapperRef.current.addEventListener("mouseleave", handleLeave);

      return () => {
        wrapperRef.current?.removeEventListener("mouseenter", handleEnter);
        wrapperRef.current?.removeEventListener("mouseleave", handleLeave);
      };
    }, []);

    return (
      <div
        className={cn(
          `group/a flex overflow-hidden flex-nowrap relative `,
          className
        )}
        ref={wrapperRef}
        {...props}
      >
        <div
          className={`flex flex-nowrap w-max`}
          style={{ gap: `${gap}px` }}
          ref={marquue}
        >
          {children}
        </div>
        <div
          className="flex flex-nowrap w-max"
          style={{ gap: `${gap}px`, marginLeft: `${gap}px` }}
          ref={marquueClone}
        >
          {clone}
        </div>
      </div>
    );
  }
);

export { SimpleMarquee };

const cloneChildren = (children: ReactNode): ReactNode => {
  if (isValidElement(children)) {
    return React.cloneElement(children);
  }

  if (Array.isArray(children)) {
    return children.map((child) => cloneChildren(child));
  }

  if (typeof children === "object") {
    return structuredClone(children);
  }

  return children;
};
