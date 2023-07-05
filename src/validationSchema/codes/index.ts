import * as yup from 'yup';

export const codeValidationSchema = yup.object().shape({
  content: yup.string().required(),
  team_member_id: yup.string().nullable(),
});
