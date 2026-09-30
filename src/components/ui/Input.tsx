interface InputProps {
    label: string
    type?: string
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export default function Input({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    className,
}: InputProps) {
    return (
        <div className={`mb-4 ${className}`}>
            <label className="mb-1 block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-hvorange-500 focus:ring-hvorange-500 focus:outline-hidden"
            />
        </div>
    )
}
