import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePlaidLink, PlaidLinkOptions } from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken } from '@/lib/actions/user.actions';

const PlaidLink = ({ user, variant }: { user: any, variant: string }) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        };

        getLinkToken();
    }, [user]);

    const onSuccess = useCallback(async (public_token: string) => {
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
        <Button onClick={open} disabled={!ready} className={`plaidlink-${variant}`}>
            Connect Bank
        </Button>
    );
};

export default PlaidLink;
