type SectionTitleProps = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
};

export default function SectionTitle({
    eyebrow,
    title,
    subtitle,
}: SectionTitleProps) {
    return (
        <div className="space-y-3 text-center">
            {eyebrow && (
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    {subtitle}
                </p>
            )}
        </div>
    );
}