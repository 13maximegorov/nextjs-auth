'use client';

import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import { FaYandex } from 'react-icons/fa';

export const Social = () => {
  const onClick = (provider: 'yandex') => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex w-full items-center">
      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() => onClick('yandex')}
      >
        <FaYandex className="h-5 w-5" />
      </Button>
    </div>
  );
};
