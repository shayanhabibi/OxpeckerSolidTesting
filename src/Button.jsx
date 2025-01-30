import { join } from "../fable_modules/fable-library-js.4.24.0/String.js";

export function Button(props, baloney) {
    return <button class={join(" ", ["inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", "bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2", props.className])}>
        test
    </button>;
}

