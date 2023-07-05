import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { codeValidationSchema } from 'validationSchema/codes';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.code
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCodeById();
    case 'PUT':
      return updateCodeById();
    case 'DELETE':
      return deleteCodeById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCodeById() {
    const data = await prisma.code.findFirst(convertQueryToPrismaUtil(req.query, 'code'));
    return res.status(200).json(data);
  }

  async function updateCodeById() {
    await codeValidationSchema.validate(req.body);
    const data = await prisma.code.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCodeById() {
    const data = await prisma.code.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
