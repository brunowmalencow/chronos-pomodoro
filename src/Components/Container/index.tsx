type ContainerProps = {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="container">
            <div className="content">
                <section>
                    {children}
                </section>
            </div>
        </div>
    )
}