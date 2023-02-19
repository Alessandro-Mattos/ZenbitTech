import React from 'react';
import {RiLinkedinFill, RiTwitterFill, RiFacebookFill} from 'react-icons/ri';
import {TfiPinterest} from 'react-icons/tfi';
import {LinkWithIconWrapper, FooterLinks} from './styles';


const Footer: React.FC = () => {
    return (
        <FooterLinks>
            <LinkWithIconWrapper href="https://www.linkedin.com/company/zenbit-tech/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=pl" target="_blank">
                <RiLinkedinFill size={16}/>

            </LinkWithIconWrapper>
            <LinkWithIconWrapper href="https://www.pinterest.com" target="_blank">
                <TfiPinterest size={16}/>

            </LinkWithIconWrapper>
            <LinkWithIconWrapper href="https://twitter.com/zen_bit" target="_blank">
                <RiTwitterFill size={16}/>

            </LinkWithIconWrapper>
            <LinkWithIconWrapper href="https://www.facebook.com/zenBitTech/" target="_blank">
                <RiFacebookFill size={16}/>

            </LinkWithIconWrapper>
        </FooterLinks>
    );
};

export default Footer;
