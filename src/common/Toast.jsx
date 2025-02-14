import * as Toast from "@radix-ui/react-toast";
import { X } from "lucide-react";

const CustomToast = ({ open, onOpenChange, message }) => {
    return (
        <Toast.Provider swipeDirection="right">
            <Toast.Root
                open={open}
                onOpenChange={onOpenChange}
                className={`group pointer-events-auto fixed top-5 right-5 z-[100] flex max-w-[420px] w-full items-center justify-between space-x-2 
                    overflow-hidden rounded-lg border-none p-4 pr-6 shadow-lg bg-destructive text-destructive-foreground
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
                <div className="grid gap-1">
                    <div className="text-sm opacity-90">{message}</div>
                </div>
                <Toast.Close
                    className="absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity 
                    hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100"
                >
                    <X className="size-4" />
                </Toast.Close>
            </Toast.Root>

            <Toast.Viewport className="fixed top-5 right-5 p-4 max-w-[420px] w-full flex flex-col-reverse" />
        </Toast.Provider>
    );
};

export default CustomToast;
