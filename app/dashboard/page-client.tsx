'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useUser } from '@stackframe/stack';
import { useRouter } from 'next/navigation';

export function PageClient() {
  const router = useRouter();
  const user = useUser({ or: 'redirect' });

  const teams = user.useTeams();
  const [teamDisplayName, setTeamDisplayName] = React.useState('');

  React.useEffect(() => {
    if (teams.length > 0) {
      router.push(`/dashboard/${teams[0].id}`);
    }
  }, [teams, router]);

  if (teams.length === 0) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center text-2xl font-semibold">Welcome!</h1>
          <p className="text-center text-gray-500">
            Create a team to get started
          </p>
          <form
            className="mt-4"
            onSubmit={e => {
              e.preventDefault();
              // Redirect to Stack Auth team creation
              router.push('/handler/account-settings?tab=teams');
            }}
          >
            <div>
              <Label className="text-sm">Team name</Label>
              <Input
                placeholder="Team name"
                value={teamDisplayName}
                onChange={e => setTeamDisplayName(e.target.value)}
              />
            </div>
            <Button className="mt-4 w-full">Create team</Button>
          </form>
        </div>
      </div>
    );
  }

  return null;
}
