import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import FilterSection from "./filter-section";

const FilterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon-lg"} className="bg-[hsl(226,100%,33%)] text-white">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="hidden">
          <SheetTitle>Filter Section</SheetTitle>
          <SheetDescription>Filter Section</SheetDescription>
        </SheetHeader>
        <FilterSection />
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
