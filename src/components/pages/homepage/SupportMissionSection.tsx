interface SupportMissionProps {
    heading: string
    description: string
    donate_button: boolean
}

const SupportMissionSection: React.FC<SupportMissionProps> = ({
    heading,
    description,
    donate_button,
}) => (
    <section className="bg-hvblue py-12 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold">{heading}</h2>
            <p className="mt-4">{description}</p>
            {donate_button && (
                <button className="mt-6 rounded bg-hvorange px-6 py-2 text-white hover:bg-orange-600">
                    Donate Now
                </button>
            )}
        </div>
    </section>
)

export default SupportMissionSection
