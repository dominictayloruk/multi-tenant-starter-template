'use client';

import SidebarLayout, { SidebarItem } from '@/components/sidebar-layout';
import { TeamSwitcher } from '@/components/team-switcher';
import { useUser } from '@stackframe/stack';
import {
  BadgePercent,
  BarChart4,
  Columns3,
  Globe,
  Locate,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const navigationItems: SidebarItem[] = [
  {
    name: 'Overview',
    href: '/',
    icon: Globe,
    type: 'item',
  },
  {
    type: 'label',
    name: 'Management',
  },
  {
    name: 'Products',
    href: '/products',
    icon: ShoppingBag,
    type: 'item',
  },
  {
    name: 'People',
    href: '/people',
    icon: Users,
    type: 'item',
  },
  {
    name: 'Segments',
    href: '/segments',
    icon: Columns3,
    type: 'item',
  },
  {
    name: 'Regions',
    href: '/regions',
    icon: Locate,
    type: 'item',
  },
  {
    type: 'label',
    name: 'Monetization',
  },
  {
    name: 'Revenue',
    href: '/revenue',
    icon: BarChart4,
    type: 'item',
  },
  {
    name: 'Orders',
    href: '/orders',
    icon: ShoppingCart,
    type: 'item',
  },
  {
    name: 'Discounts',
    href: '/discounts',
    icon: BadgePercent,
    type: 'item',
  },
  {
    type: 'label',
    name: 'Settings',
  },
  {
    name: 'Configuration',
    href: '/configuration',
    icon: Settings2,
    type: 'item',
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const user = useUser({ or: 'redirect' });
  const params = useParams<{ teamId: string }>();
  const router = useRouter();

  const team = user.useTeam(params.teamId);
  const teams = user.useTeams();

  if (!team) {
    router.push('/handler/account-settings');
    return null;
  }

  // Create URL mapping for all teams
  const urlMap: Record<string, string> = {};
  teams.forEach(t => {
    urlMap[t.id] = `/dashboard/${t.id}`;
  });

  return (
    <SidebarLayout
      items={navigationItems}
      basePath={`/dashboard/${team.id}`}
      sidebarTop={<TeamSwitcher selectedTeam={team} urlMap={urlMap} />}
      baseBreadcrumb={[
        {
          title: team.displayName,
          href: `/dashboard/${team.id}`,
        },
      ]}
    >
      {props.children}
    </SidebarLayout>
  );
}
