"use client";
import { AcademicCapIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import AlertWithActions from "@/components/ui/AlertWithActions";

import ActionGrid from "@/components/ui/ActionGrid";
const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description: "Request your vacation days easily.",
  },
  {
    title: "Training",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    description: "Access our training modules.",
  },
];

export default function Hero() {
    return (
      <>
        <ActionGrid actions={actions} />
        <AlertWithActions
          icon={CheckCircleIcon}
          title="Order completed"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          actions={[
            {
              label: "View status",
              onClick: () => console.log("Viewing status"),
            },
            { label: "Dismiss", onClick: () => console.log("Dismissed") },
          ]}
        />
      </>

      // <div className="relative isolate overflow-hidden bg-gray-900 bg-[url('/images/homePageBanner.jpg')] bg-cover bg-center py-24 sm:py-32">
      //   <div className="mx-auto max-w-7xl">
      //     <div className="px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center gap-8 bg-hvorange-400">
      //       <div className="text-center lg:text-left lg:w-2/3">
      //         <h1 className="text-5xl font-semibold tracking-tight text-white">
      //           &quot;What works for your child is what makes the choice
      //           right.&quot; ™
      //         </h1>
      //       </div>
      //       <div className="lg:w-1/3 flex justify-center lg:justify-end">
      //         <Image
      //           src="/images/hvlogo.svg"
      //           alt="Alabama Hands & Voices Logo"
      //           width={200}
      //           height={200}
      //           className="h-auto"
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
}
