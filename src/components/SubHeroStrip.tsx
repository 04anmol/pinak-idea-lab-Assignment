import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SubHeroStrip = () => {
  return (
    <section className="w-full" style={{ backgroundColor: '#FFFAF0' }}>
      <div className="mx-8 md:mx-16 lg:mx-20 xl:mx-24 py-6">
        <div className="border-y-2 border-college-silver py-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-wide text-black font-serif">
            <span className="mr-2">PASSION.</span>
            <span className="mr-2">PURPOSE.</span>
            <span className="italic">ENGINEERING.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 max-w-3xl mx-auto">
          {/* Find your area of study */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#6e1e2a] hover:bg-[#5a1822] text-white justify-between rounded-md w-full px-6 py-2 text-base font-medium">
                <span>Find your area of study</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[260px] rounded-md overflow-hidden bg-white border-2 border-[#6e1e2a] p-0">
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Computer Science & Engineering</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Mechanical Engineering</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Electrical Engineering</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Civil Engineering</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* View ensemble opportunities */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#6e1e2a] hover:bg-[#5a1822] text-white justify-between rounded-md w-full px-6 py-2 text-base font-medium">
                <span>View ensemble opportunities</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[280px] rounded-md overflow-hidden bg-white border-2 border-[#6e1e2a] p-0">
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Research assistantships</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Robotics club tryouts</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Hackathon teams</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e1e2a] hover:text-white cursor-pointer">Industry projects</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default SubHeroStrip;
