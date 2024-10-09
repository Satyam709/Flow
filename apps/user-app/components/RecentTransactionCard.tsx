import React from "react";
import PropTypes from "prop-types";
import { Card } from "@repo/ui/card";

// interface Transaction {
//   id: number;
//   status: string;
//   date: string;
//   amt: string | number;
// }

// interface RecentTransactionsProps {
//   recents: Transaction[];
// }

function RecentTransactions({ recents }: any) {
  return (
    <Card title="Recent Transactions" className="">
      {recents.length > 0 ? (
        recents.map((transaction) => (
          <div
            key={transaction.id}
            className="h-[5rem] bg-card-bg border-gray-700 border-2 p-4 rounded-md mb-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-gray-300 text-lg">
                  {transaction.status}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(transaction.startTime).toDateString()}
                </span>
              </div>
              <div>
                <span>{transaction.amount/100}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[5rem] bg-card-bg border-gray-700 border-2 p-4 rounded-md">
          <span>No Transactions to show</span>
        </div>
      )}
    </Card>
  );
}

// RecentTransactions.propTypes = {
//   recents: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       status: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       amt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     })
//   ).isRequired,
// };

export default RecentTransactions;
