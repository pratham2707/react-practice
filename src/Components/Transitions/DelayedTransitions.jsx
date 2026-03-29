import { useEffect, useState, useTransition } from 'react';

function SearchResults({ query, showLoading }) {
    const items = [];

    if (query && !showLoading) {
        for (let i = 0; i < 1000; i++) {
            items.push(<li key={i}>Result for {query} - {i}</li>);
        }
    }

    return <ol>{items}</ol>;
}

function DelayedTransitions() {
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;

        setInput(value);
        setShowLoading(true);

        startTransition(() => {
            setQuery(value);
        });
    };

    useEffect(() => {
        if (showLoading) {
            const timer = setTimeout(() => {
                setShowLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isPending, showLoading]);

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type to search..."
            />
            {(showLoading || isPending) && < p > Fetching search results...</p>}
            <SearchResults query={query} showLoading={showLoading} />
        </div >
    );
}

export default DelayedTransitions;
