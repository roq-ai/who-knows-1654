import { TeamMemberInterface } from 'interfaces/team-member';
import { GetQueryInterface } from 'interfaces';

export interface FeatureInterface {
  id?: string;
  name: string;
  team_member_id?: string;
  created_at?: any;
  updated_at?: any;

  team_member?: TeamMemberInterface;
  _count?: {};
}

export interface FeatureGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  team_member_id?: string;
}
