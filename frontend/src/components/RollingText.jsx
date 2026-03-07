export default function RollingText({ text, className = '', style }) {
    return (
        <span
            aria-hidden="true"
            className={className ? `roll-text ${className}` : 'roll-text'}
            style={style}
        >
            {[...String(text)].map((char, index) => {
                const value = char === ' ' ? '\u00A0' : char;

                return (
                    <span
                        key={`${char}-${index}`}
                        className="roll-char"
                        style={{ '--roll-index': index }}
                    >
                        <span className="roll-char-top">{value}</span>
                        <span className="roll-char-bottom">{value}</span>
                    </span>
                );
            })}
        </span>
    );
}
