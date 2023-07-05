import * as yup from 'yup';

export const featureValidationSchema = yup.object().shape({
  name: yup.string().required(),
  team_member_id: yup.string().nullable(),
});
