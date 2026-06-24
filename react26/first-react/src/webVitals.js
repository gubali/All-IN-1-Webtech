import { onCLS, onINP, onLCP } from 'web-vitals';

export function reportWebVitals() {
    const logMetric = (metric) => {
        console.log(metric);
    };

    onCLS(logMetric);
    onINP(logMetric);
    onLCP(logMetric);
}