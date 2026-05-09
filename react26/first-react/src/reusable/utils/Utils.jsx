export const initialItems = new Array(1000000).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 10000000
    }
});