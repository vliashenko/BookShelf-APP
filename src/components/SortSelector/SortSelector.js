import React from 'react';

const SortSelector = ({ value, options, onChange }) => {
    return (
        <div style={{margin: "20px 40px"}}>
            <select value={value} onChange={evt => onChange(evt.target.value)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortSelector;