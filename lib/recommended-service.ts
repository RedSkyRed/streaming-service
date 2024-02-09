import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
    // test skeleton
    // await new Promise(resolve => setTimeout(resolve, 5000))

    let userId;

    try {
        const self= await getSelf();
        userId = self.id;
    }
    catch {
        userId=null
    }

    let users = []

    if (userId) {
        users = await db.user.findMany({
            where: {
                AND: [
                    { NOT: {
                        followedBy: {
                        some: {
                            followerId: userId
                        }}},
                    },
                    // For whatever reason the Not triggers twice, hence removing the need for a second Not.
                    {
                        //NOT: {
                            id: userId
                        // },
                    },
                    
                    
        ]
                
            },
            orderBy: {
                createdAt: "desc"
            }
    })
    } else {
        users = await db.user.findMany ({
            orderBy: {
                createdAt: "desc"
            }
        })
    }
return users }