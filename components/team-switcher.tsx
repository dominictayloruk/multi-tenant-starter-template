'use client';

import React from 'react';
import { useUser } from '@stackframe/stack';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Users } from 'lucide-react';

interface Team {
  id: string;
  displayName: string;
  profileImageUrl?: string;
}

interface TeamSwitcherProps {
  selectedTeam: Team | null;
  urlMap: Record<string, string>;
  className?: string;
}

export function TeamSwitcher({
  selectedTeam,
  urlMap,
  className,
}: TeamSwitcherProps) {
  const user = useUser();
  const teams = user?.useTeams() || [];
  const currentTeam = selectedTeam;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn('w-full', className)}>
          <div className="flex items-center gap-2">
            {currentTeam?.profileImageUrl ? (
              <img
                src={currentTeam.profileImageUrl}
                alt={currentTeam.displayName}
                className="h-6 w-6 rounded"
              />
            ) : (
              <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded">
                <Users className="h-4 w-4" />
              </div>
            )}
            <span className="truncate">
              {currentTeam?.displayName || 'Select team'}
            </span>
          </div>
          <ChevronDown className="ml-auto h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Teams</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {teams.map((team: Team) => {
          const teamUrl = urlMap?.[team.id] || `/dashboard/${team.id}`;

          return (
            <DropdownMenuItem key={team.id} asChild>
              <a href={teamUrl} className="flex items-center gap-2">
                {team.profileImageUrl ? (
                  <img
                    src={team.profileImageUrl}
                    alt={team.displayName}
                    className="h-4 w-4 rounded"
                  />
                ) : (
                  <div className="bg-background flex h-4 w-4 items-center justify-center rounded border">
                    <Users className="h-3 w-3" />
                  </div>
                )}
                <span className="truncate">{team.displayName}</span>
                {team.id === currentTeam?.id && (
                  <div className="bg-primary ml-auto h-2 w-2 rounded-full" />
                )}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
