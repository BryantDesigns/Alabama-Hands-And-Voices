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

    );
}
