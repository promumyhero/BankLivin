import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/action/user.actions';
import React from 'react'

const Home = async () => {
    const loggedIn =await getLoggedInUser();
  return (
    <section className="home">
    <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Akses dan manage akun Mandiri Anda dengan mudah."
            />

            <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
            />
        </header>
          Recent Transactions
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 5000}]}
      />

    </section>
  )
}

export default Home