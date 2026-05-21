import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ""
        }
    };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message
        };
    }
    componentDidCatch(error, errorInfo) {
        console.log("Error Caught by boundry");
        console.log(error);
        console.log(errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: "20px",
                    border: "2px solid red",
                    margin: "20px",
                }}>
                    <h2>Something went wrong...</h2>
                    <p>Error: {this.state.errorMessage}</p>
                    <button onClick={() => this.setState({
                        hasError: false,
                        errorMessage: ""
                    })}>Try again...</button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary