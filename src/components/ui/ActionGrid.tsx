import { HeartIcon } from "@heroicons/react/16/solid";

interface Action {
  title: string;
  href: string;
  icon: typeof HeartIcon;
  iconForeground: string;
  iconBackground: string;
  description?: string;
}

interface ActionGridProps {
  actions: Action[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ActionGrid({ actions }: ActionGridProps) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-lg p-3 ring-4 ring-white"
              )}
            >
              <action.icon aria-hidden="true" className="size-6" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold text-gray-900">
              <a href={action.href} className="focus:outline-none">
                <span aria-hidden="true" className="absolute inset-0" />
                {action.title}
              </a>
            </h3>
            {action.description && (
              <p className="mt-2 text-sm text-gray-500">{action.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
