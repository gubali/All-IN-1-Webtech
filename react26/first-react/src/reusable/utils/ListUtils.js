export default function generateUsers(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        name: `User ${i + 1}`
    }))
}