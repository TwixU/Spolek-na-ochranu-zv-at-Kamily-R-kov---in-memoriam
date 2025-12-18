import React, { useEffect } from 'react';

interface PageWrapperProps {
    title: string;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps & { description?: string }> = ({ title, description, children }) => {
    useEffect(() => {
        document.title = `${title} | Spolek na ochranu zvířat`;

        if (description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }

        window.scrollTo(0, 0);
    }, [title, description]);

    return <>{children}</>;
};

export default PageWrapper;
