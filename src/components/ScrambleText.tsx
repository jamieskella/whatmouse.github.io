"use client";

import React, { useEffect } from "react";
import { useScramble } from "use-scramble";
import { useInView } from "motion/react";

/**
 * Props for the ScrambleText component.
 * @interface ScrambleTextProps
 */
interface ScrambleTextProps {
  /**
   * The text content to be scrambled and displayed.
   */
  text: string;

  /**
   * Optional CSS class name to apply to the text container.
   */
  className?: string;

  /**
   * Controls the overall speed of the animation.
   * Higher values make the animation faster.
   * @default 1
   */
  speed?: number;

  /**
   * Controls how frequently the scramble effect updates.
   * Higher values increase the frequency of updates.
   * @default 1
   */
  tick?: number;

  /**
   * Controls how many characters change per tick.
   * Higher values make more characters change at once.
   * @default 1
   */
  step?: number;

  /**
   * Controls the intensity of the scramble effect.
   * Higher values create more chaotic scrambling.
   * @default 1
   */
  scramble?: number;

  /**
   * Random seed for the scramble algorithm.
   * Different seeds create different scramble patterns.
   * @default 2
   */
  seed?: number;

  /**
   * Probability of a character being scrambled.
   * Value between 0 and 1, where 1 means all characters will be scrambled.
   * @default 1
   */
  chance?: number;

  /**
   * Controls the maximum number of iterations for the scramble effect.
   * Higher values allow for more complex scrambling patterns.
   * @default 9608
   */
  overdrive?: number;

  /**
   * Determines whether text can overflow its container during animation.
   * @default true
   */
  overflow?: boolean;

  /**
   * Array of characters that should not be scrambled.
   * @default [" ", "<", "p", ">", "/", "{", "}", "\n", ":"]
   */
  ignore?: string[];

  /**
   * Whether the scramble animation should play automatically when the component mounts.
   * @default false
   */
  playOnMount?: boolean;
}

/**
 * ScrambleText Component
 *
 * A React component that creates a text scrambling animation effect.
 * The component uses the useScramble hook to create a randomized text animation
 * and automatically plays the animation when the element comes into view.
 *
 * @example
 * // Basic usage with default settings
 * <ScrambleText text="Hello World" />
 *
 * @example
 * // Customized scramble effect
 * <ScrambleText
 *   text="Hello World"
 *   speed={0.5}
 *   scramble={2}
 *   playOnMount={true}
 * />
 *
 * @param {ScrambleTextProps} props - The component props
 * @returns {JSX.Element} A span element with the scrambled text
 */
export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className,
  speed = 1,
  tick = 1,
  step = 1,
  scramble = 1,
  seed = 2,
  chance = 1,
  overdrive = 9608,
  overflow = true,
  ignore = [" ", "<", "p", ">", "/", "{", "}", "\n", ":"],
  playOnMount = false,
}) => {
  // Initialize the scramble effect with the provided configuration
  const { ref, replay } = useScramble({
    text,
    speed,
    tick,
    step,
    scramble,
    seed,
    chance,
    overdrive,
    overflow,
    ignore,
    playOnMount,
  });

  // Track when the element comes into view
  const isInView = useInView(ref, { once: true });

  // Trigger the scramble animation when the element comes into view
  useEffect(() => {
    if (isInView) {
      replay();
    }
  }, [isInView, replay]);

  return <span ref={ref} className={className}></span>;
};
