import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components/macro';

const DisabledMessage = styled.div`
    ${tw`text-center text-red-500 mt-4`}
`;

const SSHKeyDisabled = () => {
    return (
        <DisabledMessage>
            This feature is currently disabled. Please check back later.
        </DisabledMessage>
    );
};

export default SSHKeyDisabled;

