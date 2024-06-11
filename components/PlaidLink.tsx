import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/navigation';

const PlaidLink = ({ user, variant }) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            // Uncomment and adjust this part according to your actual implementation
            // const data = await createLinkToken(user);
            // setToken(data?.linkToken);
        };

        getLinkToken();
    }, [user]);

    const onSuccess = useCallback(async (public_token) => {
        // Uncomment and adjust this part according to your actual implementation
        // await exchangePublicToken({
        //     publicToken: public_token,
        //     user,
        // });
        router.push('/');
    }, [user, router]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    };

    const { open, ready } = usePlaidLink(config);

    return (
        <>
            {variant === 'primary' ? (
                <Button
                    onClick={open}
                    disabled={!ready}
                    className='plaidlink-primary'
                >
                    Connect Bank
                </Button>
            ) : (
                <Button>
                    Connect Bank
                </Button>
            )}
        </>
    );
};

export default PlaidLink;
