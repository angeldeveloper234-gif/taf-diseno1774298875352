import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap font-sans font-bold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[#F59E0B] text-white hover:brightness-110",
                outline:
                    "border border-[#F59E0B] text-[#F59E0B] bg-transparent hover:bg-[#F59E0B] hover:text-white",
                ghost:
                    "text-white hover:bg-white/10",
                secondary:
                    "bg-zinc-800 text-white hover:bg-zinc-700",
            },
            size: {
                default: "h-10 px-6 py-2 text-sm",
                sm: "h-8 px-4 text-xs",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
