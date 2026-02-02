import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div>
            <h1 className="text-primary">Hello Laravel!</h1>
            
            <Button
                variant="outline"
                className={cn(
                    "bg-primary-foreground text-secondary-foreground border-0 font-mono",
                )}
            >
                Explore More <ArrowRight />
            </Button>
        </div>
    );
}
