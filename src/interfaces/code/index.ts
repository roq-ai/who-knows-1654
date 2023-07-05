import { TeamMemberInterface } from 'interfaces/team-member';
import { GetQueryInterface } from 'interfaces';

export interface CodeInterface {
  id?: string;
  content: string;
  team_member_id?: string;
  created_at?: any;
  updated_at?: any;

  team_member?: TeamMemberInterface;
  _count?: {};
}

export interface CodeGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  team_member_id?: string;
}
