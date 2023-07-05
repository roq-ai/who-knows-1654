import { CodeInterface } from 'interfaces/code';
import { FeatureInterface } from 'interfaces/feature';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  code?: CodeInterface[];
  feature?: FeatureInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    code?: number;
    feature?: number;
  };
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
