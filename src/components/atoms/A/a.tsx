import styled from 'styled-components';

const a = styled.a`
    font-size: 15px;
    text-decoration: none;
`;

a.defaultProps = {
    href: '',
    target: '_self',
    className: ''
};

export default a;