export default function Crash() {
    const isCrashed = true;
    if (isCrashed) {
        throw new Error("App Crashed...")
    }
    return <h1>Crash Component</h1>
}