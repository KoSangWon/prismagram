import { prisma } from "~/../generated/prisma-client";

export default {
    Query: {
        me: async (_,__, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {user} = request;
            const data =  await prisma.user({id:user.id})
            console.log('data다', data)
            return data;
        }
    }
}