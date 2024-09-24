import {Root, Text} from "./loading-spinner.styles";

interface LoadingSpinnerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string;
};

export function LoadingSpinner({text = "Loading..."}: LoadingSpinnerProps) {
    return (
        <Root>
            <Text>{text}</Text>
        </Root>
    );
};