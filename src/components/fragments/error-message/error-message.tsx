import React from "react";
import {Root, Text} from "./error-message.styles";

interface ErrorMessageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
};

export function ErrorMessage({text}: ErrorMessageProps) {
    return (
        <Root>
            <Text>{text}</Text>
        </Root>
    );
};