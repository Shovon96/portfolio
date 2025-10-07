const SectionTitle = ({ title1: title1, title2: title2 }: { title1: string, title2?: string }) => {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">{title1} <span className="text-[#e643a7] underline">{title2}</span></h1>
        </div>
    );
};

export default SectionTitle;