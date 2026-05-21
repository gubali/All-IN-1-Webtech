import React from 'react';
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
    <div style={style}>🔹 {items[index]}</div>
);

export const VirtualizedList = () => {
    return (
        <List
            height={500} // Visible height of the list
            itemCount={items.length} // Total number of items
            itemSize={35} // Height of each item
            width="100%" // Width of the list
        >
            {Row}
        </List>
    );
};