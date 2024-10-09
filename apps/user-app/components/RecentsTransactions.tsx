import React from 'react'
import { getSession } from '../lib/getSession';
import RecentTransactions from './RecentTransactionCard';
import prisma from '@repo/db/client';
async function RecentsTransactionsClient() {
      const session = await getSession();

      if (!session?.user) {
        return <div>No session found</div>;
      }

      // Fetch the user's balance from the database on the server
      const trans = await prisma.onRampTransaction.findMany({
        where: {
          userId: Number(session.user.id), // Make sure to access the correct user ID
        },
      });

      console.log(trans);
      

      return (
          <RecentTransactions recents={trans} />
      );
}

export default RecentsTransactionsClient