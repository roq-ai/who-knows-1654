const mapping: Record<string, string> = {
  codes: 'code',
  features: 'feature',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
