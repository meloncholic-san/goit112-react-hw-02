export default function Feedback ({feedback:{good, neutral, bad}, totalFeedback}) {
    return (
        <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
        </div>
    )
}