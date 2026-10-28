"use client"

import { useImperativeHandle } from "react"
import { motion, useAnimation, useReducedMotion } from "motion/react"

export type ChevronsUpDownIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

export type ChevronsUpDownIconProps = React.ComponentPropsWithoutRef<"svg"> & {
  ref?: React.Ref<ChevronsUpDownIconHandle>
  duration?: number
  expanded?: boolean
  instant?: boolean
}

export function ChevronsUpDownIcon({
  ref,
  duration = 0.3,
  expanded,
  instant = false,
  ...props
}: ChevronsUpDownIconProps) {
  const controls = useAnimation()
  const reduce = useReducedMotion()

  useImperativeHandle(ref, () => {
    return {
      startAnimation: () => reduce || instant ? controls.set("animate") : controls.start("animate"),
      stopAnimation: () => reduce || instant ? controls.set("normal") : controls.start("normal"),
    }
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <motion.path
        d="M7 15L12 20L17 15"
        variants={{
          normal: {
            d: "M7 15L12 20L17 15",
          },
          animate: {
            d: "M7 20L12 15L17 20",
          },
        }}
        initial={expanded ? "animate" : "normal"}
        animate={expanded === undefined ? controls : expanded ? "animate" : "normal"}
        transition={{
          duration: reduce || instant ? 0 : duration,
          ease: [0.23, 1, 0.32, 1],
        }}
      />
      <motion.path
        d="M7 9L12 4L17 9"
        variants={{
          normal: {
            d: "M7 9L12 4L17 9",
          },
          animate: {
            d: "M7 4L12 9L17 4",
          },
        }}
        initial={expanded ? "animate" : "normal"}
        animate={expanded === undefined ? controls : expanded ? "animate" : "normal"}
        transition={{
          duration: reduce || instant ? 0 : duration,
          ease: [0.23, 1, 0.32, 1],
        }}
      />
    </svg>
  )
}
